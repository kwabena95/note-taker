const router = require('express').Router();
const fs = require('fs');


router.get('/db', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;

        return res.json(data);
    });
});



module.exports = router;