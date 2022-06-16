import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    _id:{
        type: mongoose.Types.ObjectId,
        required: true
    },
    fullName: {
        type: String,
        required: true,
        validate:{
            validator: (name) => name.length > 2,
            message: 'Name must be longer than 2 characters'
        }
    },
    email:{
        type: String,
        required: true,
        validate: {
            validator: (obj)=>{
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(obj);
            },
            message: 'Email is required'
        }
    },
    password:{
        type: String,
        required: true,
        validate: {
            validator: (obj)=>{
                return obj.length >= 6;
            },
            message: 'Password is required'
        }
    },

},{
    timestamps: true
});
export default mongoose.model('User', userSchema);