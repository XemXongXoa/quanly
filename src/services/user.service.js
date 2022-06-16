import { userRepo } from '../repos/user.repo.js';
import { UserModel } from '../models/user.model.js';
import { ListException } from './../common/exception/exception.js';
import { StringUtil } from '../utils/string.util.js';
export const userService = {
    async findAll(page,limit,query)
    {
        const arr = await userRepo.findAll(page,limit,query);
        return UserModel.formArray(arr);
    },
    async findOne(id)
    {
        const obj = await userRepo.findOne(id);
        if(!obj){
            return ListException.USER.NOT_FOUND;
        }
        return UserModel.form(obj);
    },
    async create(user){
        const find = await userRepo.findByEmail(user.email);
        if(find){
            return ListException.USER.ALREADY_EXISTS;
        }
        const obj = await userRepo.create(user);
        return UserModel.form(obj);
    },
    async update(id, user){
        const find = await userRepo.findOne(id);
        if(!find){
            return ListException.USER.NOT_FOUND;
        }
        const obj = await userRepo.update(id, user);
        return UserModel.form(obj);
    },
    async delete(id){
        const find = await userRepo.findOne(id);
        if(!find){
            return ListException.USER.NOT_FOUND;
        }
        const obj = await userRepo.delete(id);
        return UserModel.form(obj);
    },
    async login(user){
        const find = await userRepo.findByEmail(user.email);
        if(!find){
            return ListException.USER.NOT_FOUND;
        }
        const check = await StringUtil.compareHash(user.password, find.password);
        if(!check){
            return ListException.USER.WRONG_PASSWORD;
        }
        const token =await StringUtil.generateToken(find);
        return {token:token};
    }
}