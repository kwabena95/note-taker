const router = require('express').Router();
const uuid = require('uuid');
const path = require('path');
const fs = require('fs');
let db = require('../../db/db.json');


// write to db file
const createTask = (body, tasks) => {

    const task = {
        id: uuid.v4(),
        ...body
    };

    tasks.push(task);

    // write to file
    fs.writeFileSync(path.join(__dirname, '../../db/db.json'),
        JSON.stringify(tasks)
    );

    return task;

};

// filter by id
const filterID = (id) => {

    return db.filter(task => task.id !== id);
};


router.post('/notes', (req, res) => {

    const task = createTask(req.body, db);

    res.json(task);

});

router.delete('/notes/:id', (req, res) => {

    let newTasks = filterID(req.params.id, db);

    fs.writeFileSync("./db/db.json",
        JSON.stringify(newTasks),
        (err) => {
            if (err) throw err;
            res.josn(db);
        })

    db = newTasks
});



module.exports = router;