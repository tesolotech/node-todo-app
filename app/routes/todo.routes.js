module.exports = (app) => {

    const todo = require('../controllers/todo.controller.js');

    // Create todo task
    app.post('/api/task', todo.create);

    // Get todo task list
    app.get('/api/tasks', todo.getTaskList);

}