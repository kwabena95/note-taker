const router = require('express').Router();
const uuid = require('uuid');
const path = require('path');
const fs = require('fs');
const db = require('../../db/db.json');


// write to db file
const createTask = (body, tasks) => {

    const task = {
        id: uuid.v4(),
        ...body
    };

    tasks.push(task);

    // write to file
    fs.writeFileSync(path.join(__dirname, '../../db/db.json'),
        JSON.stringify({ tasks }, null, 2)
    );

    return task;

};

// filter by id
const filterID = (id, tasks) => {

    return tasks.filter(task => task.id !== id);
};


router.post('/notes', (req, res) => {

    const task = createTask(req.body, db.tasks);
    console.log('Incoming tasks---->', task)

    res.json(task);

});

router.delete('/notes/:id', (req, res) => {
    // let found = db.tasks.find(item => {
    //     return item.id === parseInt(req.params.id);
    // });

    // if (found) {
    //     let targetIndex = db.tasks.indexOf(found);
    //     db.tasks.splice(targetIndex, 1);
    // }

    // res.sendStatus(204);

    const newTasks = filterID(req.params.id, db.tasks);

    fs.writeFileSync(path.join(__dirname, '../../db/db.json'),
        JSON.stringify({ "tasks": newTasks }, null, 2),
        (err) => {
            if (err) throw err;
            res.sendStatus(204);
        })



});



module.exports = router;