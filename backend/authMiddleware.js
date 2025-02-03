export let isLoggedIn = (req, res, next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    res.status(401).send("You need to be logged in to perform this action")
}