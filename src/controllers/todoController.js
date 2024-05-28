const todos = [];

exports.getAllTodos = (req, res) => {
    res.json(todos);
};

exports.createTodo = (req, res) => {
    const todo = req.body;
    todos.push(todo);
    res.status(201).json(todo);
};
