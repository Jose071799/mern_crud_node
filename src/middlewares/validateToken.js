import { verifyAccessToken } from "../libs/jwt.js";

export const authRequired = async (req, res, next) => {

    const { token } = req.cookies;
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    const user = await verifyAccessToken(token);

    req.user = user;
    
    next();
}