const router = require('express').Router();
const fs = require('fs');
const { createNewTask } = require('../../lib/tasks');

router.post('/notes', (req, res) => {

    fs.writeFile('./db/bd.json', (err, data) => {

        if (err) throw err;

        // create a new task
        const task = createNewTask(req.body, data)

        // return task
        return res.json(task);

    });

});

module.exports = router;