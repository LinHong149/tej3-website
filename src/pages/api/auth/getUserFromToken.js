import jwt from "jsonwebtoken"
import dbConnection from "../../../lib/mongodb"

const getUserFromToken = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const client = await dbConnection()
        const db = client.db("Users")
        const usersCollection = db.collection("Users")

        const user = await usersCollection.findOne({_id: decoded.userId})
        if (!user) {
            return res.status(404).json({message: "User not found"})
        }

        const {password, ...userData} = user
        res.json(userData)
    }
    catch (error) {
        res.status(500).json({message: "Failed to authenticate token", error: error.message})
    }
};

export default getUserFromToken