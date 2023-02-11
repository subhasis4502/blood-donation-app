const { Donar } = require('../models/Donor');

const auth = (req, res, next) => {
    const token = req.cookies.w_auth;

    Donar.findByToken(token, (err, donar) => {
        if (err) throw err;
        if (!donar) {
            return res.json({
                isAuth: false,
                error: true,
            });
        }

        req.token = token;
        req.donar = donar;
        next();
    });
};

module.exports = { auth };