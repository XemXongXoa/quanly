import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import   {config} from './config.js';
import userRouter from './routers/user.router.js';
import authRouter from './routers/auth.router.js';
import { ApiException } from './common/exception/api.exception.js';
const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors(config.cors));
app.use("/user", userRouter)
app.use("/auth", authRouter)
mongoose.connect(config.mongo.uri,(err)=>{
    if(!err){
        console.log('MongoDB connected successfully');
    }
});
app.use((err,req, res, next) => {
    if(err instanceof ApiException){
        res.status(err.status).json({
            message: err.message,
            error: err.code,
            status : err.status
        });
    }
})
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Not found',
        code: 'NOT_FOUND',
    });
})
app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
})