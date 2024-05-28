const express = require('express');
const app = express();
const port = 8080;
const todoRoutes = require('./routes/todoRoutes');

app.use(express.json());
app.use('/todos', todoRoutes);

app.listen(port, () => {
    console.log(`To-Do app listening at http://localhost:${port}`);
});
