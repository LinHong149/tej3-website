const dbConnection = require('../../../lib/mongodb');
// import bcrypt from "bcryptjs"

export default async function handler(req, res) {
  try {
    const client = await dbConnection();
    console.log(client)
    const db = client.db('Users'); // Specify the database name directly here

    if (req.method === "POST") {
      const { email, password } = req.body;
      const usersCollection = db.collection('Users'); // Directly accessing the 'users' collection

      const user = await usersCollection.findOne({ email });
      console.log(user)
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

    //   const isMatch = await bcrypt.compare(password, user.password);
        if (password != user.password) {
            res.status(401).json({message: "Incorrect password", error: error.message})
        }

      res.status(200).json({ message: "Login successful" });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}
