import PreviousSearches from "../components/PreviousSearches";
import RecipesCard from "../components/RecipesCard";

const RecipesPage = () => {
  const recipes = [
    {
      title: "Chicken Pan Pizza",
      image: "/img/gallery/img_1.jpg",
      authorImg: "/img/top-chiefs/img_1.jpg",
    },
    {
      title: "Spaghetti and Meatballs",
      image: "/img/gallery/img_2.jpg",
      authorImg: "/img/top-chiefs/img_2.jpg",
    },
    {
      title: "American Cheese Burgur",
      image: "/img/gallery/img_3.jpg",
      authorImg: "/img/top-chiefs/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "/img/gallery/img_4.jpg",
      authorImg: "/img/top-chiefs/img_4.jpg",
    },
    {
      title: "Japanese Sushi",
      image: "/img/gallery/img_5.jpg",
      authorImg: "/img/top-chiefs/img_5.jpg",
    },
    {
      title: "Chicken Pan Pizza",
      image: "/img/gallery/img_6.jpg",
      authorImg: "/img/top-chiefs/img_6.jpg",
    },
    //
  ].sort(() => Math.random() - 0.5);
  return (
    <div className="section previous-searches">
      <PreviousSearches />
      <div className="recipes-container">
        {recipes.map((recip, index) => (
          <RecipesCard key={index} recip={recip} />
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;
