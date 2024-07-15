import { asyncHandler } from "../utils/asyncHandler.js"
import {User} from "../models/user.model.js"
import jwt from "jsonwebtoken"


const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ where: { email } });
      if (!user || user.password !== password) {
        return res.status(422).send({ error: 'Invalid email or password.' });
      }
  
      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.send({ token });
    } catch (error) {
      res.status(500).send({ error: 'Something went wrong.' });
    }
})

export {
    loginUser,
}