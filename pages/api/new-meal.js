import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const client = await MongoClient.connect(
      `mongodb+srv://Dina:27031986Dina@foodapp.foh1l.mongodb.net/FoodApp?retryWrites=true&w=majority`
    );
    const db = client.db();
    const mealsCollection = db.collection("meals");
    await mealsCollection.insertOne(req.body);

    client.close();

    res.status(201).send({ Message: "Meal inserted" });
  }
};

export default handler;
