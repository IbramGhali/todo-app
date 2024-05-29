import express from 'express';
import todoRoutes from './routes/todoRoutes.mjs';

const app = express();
const port = 8080;

app.use(express.json());
app.use('/todos', todoRoutes);

app.listen(port, () => {
    console.log(`To-Do app listening at http://localhost:${port}`);
});

export default app;
