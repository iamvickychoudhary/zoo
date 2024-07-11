import { asyncHandler } from "../utils/asyncHandler.js"
import {User} from "../models/user.model.js"

const loginUser = asyncHandler(async (req, res) => {
    const vicky = User.build({
         name: 'vicky' ,
         email:"vicky@gmail.com",
         password:"123456",

        });
    console.log(vicky instanceof User); // true
    console.log(vicky.name); // "Jane"
    await vicky.save();
    console.log('Jane was saved to the database!');
    console.log(vicky.toJSON()); // This is good!

    res.status(200).json({
        message: "ok",
        data: vicky.toJSON()
    })
})

export {
    loginUser,
}