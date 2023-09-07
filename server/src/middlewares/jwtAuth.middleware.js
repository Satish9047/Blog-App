const jwtVerify = (req, res, next)=>{
    console.log(req.headers);
    next();
}

module.exports = jwtVerify;