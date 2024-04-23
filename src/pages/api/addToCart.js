import dbConnection from "../../lib/mongodb";
import jwt from "jsonwebtoken"
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const { product, num } = req.body

    // Check if the token is provided
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
        const user = await usersCollection.findOne({_id: new ObjectId(userId)})
        if (!user) {
            return res.status(404).json({message:"No user found"})
        }

        console.log("adding by", num);
        const numericNum = parseInt(num); // Ensure num is a number
        const result = await usersCollection.updateOne(
            { _id: new ObjectId(userId), "cart.product": product },
            { $inc: { "cart.$.quantity": numericNum } }  // Increment the quantity by num
        );

        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: "Product not found in cart" });
        }

        console.log(result);
        res.status(200).json({ message: "Cart updated successfully" });
    }
    catch (error) {
        res.status(500).json({message: "Error"})
    }
}