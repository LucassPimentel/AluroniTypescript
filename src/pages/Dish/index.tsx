import { useNavigate, useParams } from "react-router-dom";
import styles from "./Dish.module.scss";
import menu from "data/menu.json";
import DishTags from "components/DishTags";
import NotFound from "pages/NotFound";
import CommmonPage from "components/CommonPage";

export default function Dish() {
  const { id } = useParams();
  const navigate = useNavigate();

  const dish = menu.find((item) => item.id === Number(id));

  if (!dish) {
    return <NotFound />;
  }

  return (
    <CommmonPage>
      <button onClick={() => navigate(-1)} className={styles.back}>
        {"< Voltar"}
      </button>
      <section className={styles.container}>
        <h1 className={styles.title}>{dish.title}</h1>
        <div>
          <img src={dish.photo} alt={dish.title} />
        </div>
        <div className={styles.content}>
          <p className={styles.content__description}>{dish.description}</p>
          <DishTags {...dish} />
        </div>
      </section>
    </CommmonPage>
  );
}
