import jwt from "jsonwebtoken"
import {User} from "../models/user.model.js"
export const verifyJWT = async(req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
    return res.status(422).send({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ where: { id : decoded.id } });

    if (!user) {
        res.status(422).send({ error: 'Invalid token.' });
    }

    req.user = user;
    next()
  } catch (ex) {
    res.status(422).send({ error: 'Invalid token.' });
  }
};
