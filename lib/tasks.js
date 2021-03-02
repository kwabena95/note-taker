const path = require('path');
const fs = require('fs');

const createNewTask = (body, taskArray) => {
    const task = body;
    taskArray.push(task);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
        JSON.stringify({ taskArray }, null, 2)
    );

    return task;
}

module.exports = createNewTask;