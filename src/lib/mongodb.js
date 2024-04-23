const { MongoClient, ServerApiVersion } = require('mongodb');

// Ensure your MongoDB URI is stored in an environment variable for security
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let isConnected = false;

async function dbConnection() {
  if (!isConnected) {
    try {
      await client.connect();
      isConnected = true;
      console.log("Successfully connected to MongoDB.");
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
      throw new Error('Database connection failed');
    }
  }
  return client;
}

module.exports = dbConnection;
