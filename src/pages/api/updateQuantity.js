import dbConnection from "../../lib/mongodb";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method !== "PUT") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    if (!req.headers.authorization) {
        return res.status(401).json({ message: "Authorization header missing" });
    }

    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { product, quantity } = req.body;

        if (!product || quantity === undefined) {
            return res.status(400).json({ message: "Product name and quantity are required" });
        }

        const client = await dbConnection();
        const db = client.db("Users");
        const usersCollection = db.collection("Users");
        const userId = new ObjectId(decoded.userId);

        // First, find the index of the product in the cart
        const user = await usersCollection.findOne({ _id: new ObjectId(userId) });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const productIndex = user.cart.findIndex(item => item.product === product);
        if (productIndex === -1) {
            return res.status(404).json({ message: "Product not found in cart" });
        }

        // Update the quantity of the product in the cart
        const updateField = `cart.${productIndex}.quantity`;
        const updateResult = await usersCollection.updateOne(
            { _id: userId },
            { $set: { [updateField]: quantity } }
        );

        if (updateResult.modifiedCount === 0) {
            throw new Error("No changes made to the cart");
        }

        res.status(200).json({ message: "Cart updated successfully" });
    } catch (error) {
        console.error("Error updating cart:", error);
        res.status(500).json({ message: "Error updating cart", error: error.toString() });
    }
}
