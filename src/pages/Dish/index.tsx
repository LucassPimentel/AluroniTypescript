import { useNavigate, useParams } from "react-router-dom";
import styles from "./Dish.module.scss";
import menu from "data/menu.json";
import { lazy } from "react";

const DishTags = lazy(() => import("components/DishTags"));
const CommonPage = lazy(() => import("components/CommonPage"));
const NotFound = lazy(() => import("pages/NotFound"));

export default function Dish() {
  const { id } = useParams();
  const navigate = useNavigate();

  const dish = menu.find((item) => item.id === Number(id));

  if (!dish) {
    return <NotFound />;
  }

  return (
    <CommonPage>
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
    </CommonPage>
  );
}
