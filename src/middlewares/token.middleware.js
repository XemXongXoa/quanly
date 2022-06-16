import {
    StringUtil
} from "../utils/string.util.js";

export const tokenMiddleware = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'] || req.headers['x-token'];
    if (token) {
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }
        if (!token) {
            return res.status(401).json({
                message: 'Not authorized',
            });
        }
        try {
            const decoded = StringUtil.verifyToken(token);
            req.user = decoded;
            next();
        } catch (err) {
            return res.status(401).json({
                message: 'Not authorized',
            });
        }
    }
}