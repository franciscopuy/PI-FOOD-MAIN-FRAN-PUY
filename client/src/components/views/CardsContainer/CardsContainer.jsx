import { Card } from "../..";


const CardsContainer = ({ allRecipes }) => {
  console.log(allRecipes);
  return (
    <div>
      {allRecipes && allRecipes.map((rec) => {
        return (
          <Card
            key={rec.id}
            id={rec.id}
            image={rec.image}
            name={rec.name}
            diets={rec.diets.join(", ")}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;