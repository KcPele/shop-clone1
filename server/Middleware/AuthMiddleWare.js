import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"
import User from "../Models/UserModel.js"


const protect = asyncHandler(
    async(req, res, next) => {
        let token
        if(
            req.headers.authorization && 
            req.headers.authorization.startsWith("Bearer")
        ) {
                try {
                    // //getting the tokens from the header ans splitting it beacause 
                    // the first path is Bearer and the second is the token
                    token = req.headers.authorization.split(" ")[1]
                    //decode returns the decoded token with the  user id and other stuff
                    const decoded = jwt.verify(token, process.env.JWT_SECRET)
                    req.user = await User.findById(decoded.id).select("-password")
                    next()
                } catch (error) {
                    console.error(error)
                    res.status(401)
                    throw new Error("Not authorised, token failed")
                }
        } 
        if(!token){
            res.status(401)
            throw new Error("Not authorised, no token")
        }
})

export default protect