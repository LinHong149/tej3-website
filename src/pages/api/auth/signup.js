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
            password: password,
            cart: [
              {"Chocolate Raspberry": 0},
              {"Raspberry Lemon": 0},
              {"Cookie Dough": 0},
              {"Cookies & Cream": 0},
              {"Butter Pecan": 0},
              {"Salted Caramel": 0},
              {"Cookie Butter": 0},
              {"Champagne": 0},
              {"Blood Orange": 0},
              {"Cranberry": 0},
              {"Tiramisu": 0},
              {"Chocolate Rose": 0},
              {"Pumpkin Pie": 0},
              {"Neapolitan": 0},
              {"Strawberry": 0},
              {"Chocolate Cherry": 0}
          ]
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
