import { ApiException } from "../common/exception/api.exception.js";
import { ListException } from "../common/exception/exception.js"
import { userService } from './../services/user.service.js';
export const userController = {
    async getAll(req, res, next) {
        try {
            const data = await userService.findAll(req.query.page, req.query.limit, req.query.query);
            if(data instanceof ApiException){
                throw data;
            }
            res.status(200).json(data);
        } catch (err) {
            next(err);
        }
    },
    async getOne(req, res, next) {
        try {
            const data = await userService.findOne(req.params.id);
            if(data instanceof ApiException){
                throw data;
            }
            res.status(200).json(data);
        } catch (err) {
            next(err);
        }
    },
    async create(req, res, next) {
        try {
            const data = await userService.create(req.body);
            if(data instanceof ApiException){
                throw data;
            }
            return res.status(200).json(data);
        } catch (err) {
            next(err);
        }
    },
    async update(req, res, next) {
        try {
            const data = await userService.update(req.params.id, req.body);
            if(data instanceof ApiException){
                throw data;
            }
            res.status(200).json(data);
        } catch (err) {
            next(err);
        }
    },
    async delete(req, res, next) {
        try {
            const data = await userService.delete(req.params.id);
            if(data instanceof ApiException){
                throw data;
            }
            res.status(200).json(data);
        } catch (err) {
            next(err);
        }
    },
    async login(req, res, next) {
        try {
            const data = await userService.login(req.body);
            if(data instanceof ApiException){
                throw data;
            }
            res.status(200).json(data);
        } catch (err) {
            next(err);
        }
    },
    async info(req, res, next) {
        try {
            res.status(200).json(req.user);
        } catch (err) {
            next(err);
        }
    }
}