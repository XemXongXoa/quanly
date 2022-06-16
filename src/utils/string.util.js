
import * as  bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from '../config.js';
import  mongoose from 'mongoose';
export class StringUtil {
    salt = 10;
    static async hash(str) {
        return await bcrypt.hash(str,  10);
    }
    static async compareHash(str1, hashString) {
        return await bcrypt.compare(str1, hashString);
    }
    static async generateToken(obj) {
        console.log(obj);
        return await jwt.sign({
            _id: obj._id,
            email: obj.email,
            fullName: obj.fullName
        }, config.jwt.secret, { expiresIn: config.jwt.expiresIn });
    }
    static verifyToken(token) {
        return jwt.verify(token, config.jwt.secret);
    }
    static generateObjectId() {
        return new mongoose.Types.ObjectId().toString();
    }
}