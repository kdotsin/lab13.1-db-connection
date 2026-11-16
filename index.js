import { MongoClient } from "mongodb";
import 'dotenv/config'
import e from "express";

const app = e();
const port = 3000;

const uri = process.env.MONGODB_URI

const client = new MongoClient(uri);

app.get('/', (req, res) => {
  res.send('hello world')
})

async function run() {
  try {
    await client.connect();

    await client.db("admin").command({ ping: 1 });
    console.log("connected successfully");
  } finally {
    await client.close();
  }
}

app.listen(port, () => console.log('server running'))

run().catch(console.dir)
