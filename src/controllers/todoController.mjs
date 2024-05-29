export const getAllTodos = (req, res) => {
    // Your logic to get all todos
    res.status(200).json([]);
};

export const createTodo = (req, res) => {
    // Your logic to create a new todo
    const newTodo = req.body;
    res.status(201).json(newTodo);
};
