import menu from "data/menu.json";
import styles from "./Home.module.scss";
import themeStyles from "styles/Theme.module.scss";
import thePlace from "assets/nossa_casa.png";
import { useNavigate } from "react-router-dom";
import { Dish } from "Types/Dish";

export default function Home() {
  let recommendedFood = [...menu];
  recommendedFood = recommendedFood
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  const navigate = useNavigate();

  function redirectToDetail(dish: Dish) {
    navigate(`/dish/${dish.id}`, { state: { dish } });
  }

  return (
    <section>
      <h3 className={themeStyles.title}>Recomendados:</h3>
      <div className={styles.allrecommended}>
        {recommendedFood.map((item) => (
          <div key={item.id} className={styles.recommended}>
            <div className={styles.recommended__image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              onClick={() => redirectToDetail(item)}
              className={styles.recommended__button}
            >
              Ver Mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={themeStyles.title}>Nossa Casa</h3>
      <div className={styles.us}>
        <img src={thePlace} alt="Aluroni" />
        <div className={styles.us__address}>Rua Dos Códigos, 1337</div>
      </div>
    </section>
  );
}
