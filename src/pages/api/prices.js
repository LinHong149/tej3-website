import dbConnection from "../../lib/mongodb";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
import { constants } from "../../app/constants";


export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    // Check for authorization header
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Authorization header missing or invalid" });
    }

    const token = authorization.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.userId;

        const client = await dbConnection();
        const db = client.db("Users");
        const usersCollection = db.collection("Users");

        // Fetch the user by ID and get pricing information from the cart
        const user = await usersCollection.findOne({ _id: new ObjectId(userId) });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Calculate totals based on the cart items
        const cartItems = user.cart;
        const productTotal = user.cart.reduce((acc, item) => {
            const product = constants.productsFlavours.find(p => p.name === item.product);
            if (product) {
                return acc + (item.quantity * product.price);
            }
            return acc;
        }, 0);
        
        const discount = 0; // Assuming no discounts for simplicity
        const tax = productTotal * 0.13; // Example tax rate of 10%
        const shipping = productTotal > 50 ? 0 : 5; // Free shipping for orders over $50
        const total = productTotal + tax + shipping - discount;

        console.log('Product Total:', productTotal);  // Now should display a number or 0, not NaN

        res.status(200).json({
            nProducts: cartItems.length,
            productTotal,
            discount,
            tax,
            shipping,
            total
        });
    } catch (error) {
        console.error("Authentication failed:", error);
        return res.status(403).json({ message: "Invalid token or authentication failed" });
    }
}
