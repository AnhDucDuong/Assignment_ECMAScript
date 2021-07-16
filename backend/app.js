import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import cors from 'cors';

const app = express();

//middle
dotenv.config();

const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');
const authRoutes = require('./routes/auth');

//DB connection
mongoose.connect(
    process.env.MONGO_URI, {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, {
        useNewUrlParser: true,
        useCreateIndex: true
    }).then(() => console.log('DB Connected'), )

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});

//Middleware
app.use(express.json());
app.use(cors({
    credentials: 'same-origin'
}));

//Routes Middleware
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);
app.use('/api', authRoutes);


const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})