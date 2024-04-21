const dbConnection = require('../../../lib/mongodb');

export default async function handler(req, res) {
  try {
    const client = await dbConnection();
    const db = client.db('Users'); // Specify the database name directly here

    if (req.method === "POST") {
      const { email, password } = req.body;
      const usersCollection = db.collection('Users'); // Directly accessing the 'users' collection

      const user = await usersCollection.findOne({ email });
      if (!user) {
        await usersCollection.insertOne({
            email: email,
            password: password
        })
        return res.status(200).json({ message: "Created new user" });
      }

      res.status(404).json({ message: "User already exists" });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}
