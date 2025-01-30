import { hash, verify } from "argon2";
import passport from "passport";
import LocalStrategy from "passport-local"
import { userCollection } from "../utils/connectToDB";

// const hashedPassword = await hash("password");
// console.log(hashedPassword)
// const verifyPassword = await verify("password-hash", "password");
// console.log(verifyPassword)

passport.use(new LocalStrategy(function verify(username, password, cb) {
    db.get('SELECT * FROM users WHERE username = ?', [username], function (err, row) {
        if (err) { return cb(err); }
        if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }

        crypto.pbkdf2(password, row.salt, 310000, 32, 'sha256', function (err, hashedPassword) {
            if (err) { return cb(err); }
            if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
                return cb(null, false, { message: 'Incorrect username or password.' });
            }
            return cb(null, row);
        });
    });
}));