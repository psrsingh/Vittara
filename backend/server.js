import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToMongoDB from './config/mongodb.js';
import ConnectCloudinary from './config/cloudinary.js';
import userRoutes from './routes/userRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB connection
connectToMongoDB();
ConnectCloudinary();


//api endpoints
app.use('/api/users', userRoutes);


// Routes
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
