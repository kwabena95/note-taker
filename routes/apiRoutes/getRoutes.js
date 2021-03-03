const router = require('express').Router();
const { tasks } = require('../../db/db.json')


router.get('/notes', (req, res) => {
    res.json(tasks);
});



module.exports = router;