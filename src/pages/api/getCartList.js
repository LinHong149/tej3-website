import dbConnection from "../../lib/mongodb"
import jwt from "jsonwebtoken"
import { ObjectId } from "mongodb";
import { use } from "react";

export default async function handler(req, res) {
    if (!req.headers.authorization) {
        return res.status(401).json({ message: "Authorization header missing" });
    }

    const token = req.headers.authorization.split(" ")[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const client = await dbConnection()
    const db = client.db("Users")
    const usersCollection = db.collection("Users")

    try {
        const userId = decoded.userId
        const user = await usersCollection.findOne({_id: new ObjectId(userId) })
        if (!user) {
            return res.status(404).json({message: "Could not find user"})
        }

        console.log(user.cart)
        return res.status(200).json(user.cart)


    } catch (error) {
        res.status(500).json({message: "Error"})
    }
}