const router = require('express').Router();

router.route('/signup')
    .post(name: (req, res) => {
        console.log("i'm hit");
    });

module.exports = router;