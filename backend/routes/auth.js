import { Router } from "express";
import passport from "passport";
import { hash, verify } from "argon2";
import LocalStrategy from "passport-local"
import { userCollection, tokenCollection } from "../utils/connectToDB.js";
import crypto from "crypto"
import { mailPasswordResetToken } from "./mail.js";

// const hashedPassword = await hash("password");
// console.log(hashedPassword)
// const verifyPassword = await verify("password-hash", "password");
// console.log(verifyPassword)

// function to generate secure random token
let generateResetToken = () => {
    return crypto.randomBytes(32).toString('hex'); // Creates a secure random token  
}

// local strategy
passport.use(new LocalStrategy(async (username, password, cb) => {
    try {
        let user = await userCollection.findOne({email: username});
        if (!user) { return cb(null, false, { message: 'Incorrect username or password.' }); }
        const verifyPassword = await verify(user.password, password);
        if (!verifyPassword) { return cb(null, false, { message: 'Incorrect username or password.' }); }
        return cb(null, user);
    } catch (error) {
        return cb(err)
    }
}));

passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        cb(null, { id: user._id, role: user.role });
    });
});

passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    });
});


export let authRouter = Router();

authRouter.post('/login/password', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) { return next(err); }
        if (!user) { return res.status(400).send(info.message); };
        req.logIn(user, (err) => {
            if (err) { return next(err); }
            // Check for "keep me signed in" option
            if (req.body.keepMeSignedIn) {
                // Set a longer expiration date for the session cookie
                req.session.cookie.maxAge = 60000 * 60 * 24 * 3; // 3 days
            }
            res.send({ id: user._id, role: user.role })
        });
    })(req, res, next);
});

authRouter.post('/logout', (req, res, next) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        req.session.destroy((err) => {
            if (err) { return next(err); }
            res.clearCookie('connect.sid'); // Adjust the cookie name if different
            res.status(200).end();
        });
    });
});

authRouter.get("/isloggedin", (req, res)=>{
    if(req.isAuthenticated()){
        res.send(req.user)
        return;
    }
    res.status(401).end()
})

authRouter.post("/password-reset", async(req, res, next)=>{
    try {
        const {email} = req.body
        const token = generateResetToken()
        let user = await userCollection.findOne({email: email})
        console.log(email)
        if (!user) return res.status(404).send("User not found");
        await tokenCollection.insertOne({email: email, token, createdAt: new Date()});
        await mailPasswordResetToken(token, email);
        res.status(200).end();
    } catch (error) {
        next(error)
    }
})

authRouter.patch("/password-reset", async(req, res, next)=>{
    try {
        const { token, password } = req.body;
        const deleteReport = await tokenCollection.findOneAndDelete({ token });
        console.log(deleteReport);
        if (!deleteReport) {
            return res.status(400).send("Invalid or expired token");
        }
        // Find the user associated with the token email and update
        const hashedPassword = await hash(password);
        await userCollection.updateOne({ email: deleteReport.email }, { $set: { password: hashedPassword } });

        res.status(200).end()
    } catch (error) {
        next(error)
    }
})

// SignUp Route
// authRouter.post('/signup', function (req, res, next) {
//     var salt = crypto.randomBytes(16);
//     crypto.pbkdf2(req.body.password, salt, 310000, 32, 'sha256', function (err, hashedPassword) {
//         if (err) { return next(err); }
//         db.run('INSERT INTO users (username, hashed_password, salt) VALUES (?, ?, ?)', [
//             req.body.username,
//             hashedPassword,
//             salt
//         ], function (err) {
//             if (err) { return next(err); }
//             var user = {
//                 id: this.lastID,
//                 username: req.body.username
//             };
//             req.login(user, function (err) {
//                 if (err) { return next(err); }
//                 res.redirect('/');
//             });
//         });
//     });
// });