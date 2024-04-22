const dbConnection = require('../../../lib/mongodb');
// import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export default async function handler(req, res) {
  try {
    const client = await dbConnection();
    const db = client.db('Users'); // Specify the database name directly here
    const usersCollection = db.collection('Users'); // Directly accessing the 'users' collection

    if (req.method === "POST") {
      const { email, password } = req.body;

      const user = await usersCollection.findOne({ email });
      console.log(user)
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

    //   const isMatch = await bcrypt.compare(password, user.password);
      if (password != user.password) {
          res.status(401).json({message: "Incorrect password", error: error.message})
      }

      // User is valid. Generate token
      const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '5h' }
      );

      res.status(200).json({ message: "Login successful", token: token });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}
