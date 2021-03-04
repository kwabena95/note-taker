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

    const results = tasks.filter(task => task.id === id)[0];
    return results;
};


router.post('/notes', (req, res) => {

    const task = createTask(req.body, db.tasks);
    console.log('Incoming tasks---->', task)

    res.json(task);

});

router.delete('/notes/:id', (req, res) => {
    const results = filterID(req.params.id, db.tasks);
    fs.readFile('../../db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        if (results === data.id) {
            tasks.remove();
        }
    });
    const task = createTask(req.body, db.tasks);
    res.json(task)
});



module.exports = router;