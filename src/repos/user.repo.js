import _userSchema from "../schemas/user.schema.js"

import { StringUtil } from './../utils/string.util.js';
export const userRepo = {
    async findAll(page,limit,query) 
    {
        if(query)
        {
            return await _userSchema.find(query).skip(page*limit).limit(limit);
        }
        else
        {
            return await _userSchema.find().skip(page*limit).limit(limit);
        }
    },
    async findOne(id) 
    {
        return await _userSchema.findById(id);
    },
    async findByEmail(email)
    {
        return await _userSchema.findOne({email:email});
    },
    async create(user) {
        user.password = await StringUtil.hash(user.password);
        const data = {_id:StringUtil.generateObjectId(),...user};
        return await _userSchema.create(data);
    },
    async update(id, user) 
    {
        return await _userSchema.findByIdAndUpdate(id, user);
    },
    async delete(id) 
    {
        return await _userSchema.findByIdAndDelete(id);
    }
}