import MealList from "../components/MealList";
import { MongoClient } from "mongodb";
import Link from "next/link";
import "tailwindcss/tailwind.css";

const HomePage = (props) => {
  return (
    <>
      <MealList meals={props.mealList} />
      <button className="bg-blue-500 px-4 mx-10 py-2 rounded-lg text-gray-50 font-medium mt-2">
        <Link href="/new-meal">add new meal</Link>
      </button>
    </>
  );
};

export async function getStaticProps() {
  const DATABASE_NAME = "FoodApp";

  const client = await MongoClient.connect(
    `mongodb+srv://Dina:27031986Dina@foodapp.foh1l.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`
  );
  const db = client.db();
  const mealsCollection = db.collection("meals");
  const meals = await mealsCollection.find().toArray();

  client.close();

  return {
    props: {
      mealList: meals.map((meal) => ({
        id: meal._id.toString(),
        name: meal.name,
        image: meal.image_path,
        dish: meal.dishes,
        chef: meal.chef,
      })),
    },
  };
}
export default HomePage;
