import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './db/connection.js';
import llcRoutes from './routes/llcRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
connectDB();

// Routes
app.use('/api/llcs', llcRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
