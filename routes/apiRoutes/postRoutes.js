const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const db = require('../../db/db.json');


// write to db file
const createTask = (body, tasks) => {

    const task = body;
    tasks.push(task);

    // write to file
    fs.writeFileSync(path.join(__dirname, '../../db/db.json'),
        JSON.stringify({ tasks }, null, 2)
    );

    return task;

};

router.post('/notes', (req, res) => {
    console.log("database in post request", db)
    // creat task
    const task = createTask(req.body, db.tasks);

    res.json(task);

});

module.exports = router;