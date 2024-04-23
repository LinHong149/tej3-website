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
              {
                product: "Chocolate Raspberry",
                quantity: 0
              },
              {
                product: "Raspberry Lemon",
                quantity: 0
              },
              {
                product: "Cookie Dough",
                quantity: 0
              },
              {
                product: "Cookies & Cream",
                quantity: 0
              },
              {
                product: "Butter Pecan",
                quantity: 0
              },
              {
                product: "Salted Caramel",
                quantity: 0
              },
              {
                product: "Cookie Butter",
                quantity: 0
              },
              {
                product: "Champagne",
                quantity: 0
              },
              {
                product: "Blood Orange",
                quantity: 0
              },
              {
                product: "Cranberry",
                quantity: 0
              },
              {
                product: "Tiramisu",
                quantity: 0
              },
              {
                product: "Chocolate Rose",
                quantity: 0
              },
              {
                product: "Pumpkin Pie",
                quantity: 0
              },
              {
                product: "Neapolitan",
                quantity: 0
              },
              {
                product: "Strawberry",
                quantity: 0
              },
              {
                product: "Chocolate Cherry",
                quantity: 0
              }
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
