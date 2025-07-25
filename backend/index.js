import express from 'express';
import connectDB from './utils/connectDB.js';
import pinRouter from './routes/pin.route.js';
import userRoutes from './routes/user.route.js';
import commentRouter from './routes/comment.route.js';
import boardRouter from './routes/board.route.js';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));

app.use(express.json());

app.use('/pins', pinRouter);
app.use('/users', userRoutes);
app.use("/boards", boardRouter);
app.use("/comments", commentRouter);
app.listen(3000, () => {
    connectDB()
    console.log('Server is running on port 3000');
});