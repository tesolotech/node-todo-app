
const todo = [{ name: 'This is my 1st task' }];
//Get all Users
exports.getTaskList = (req, res) => {

    res.status(200).json({ message: 'SUCCESS', data: todo, statusCode: 200 })

};

//Create/Save todo task
exports.create = (req, res) => {
    if (req.body.length > 0) {
        const task = req.body;
        task.forEach(element => {
            todo.push(element);
        });
        res.status(201).json({ message: 'Successfully created', data: todo, statusCode: 201 })
    }
};


