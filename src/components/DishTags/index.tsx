import classNames from "classnames";
import styles from "./DishTags.module.scss";
import { Dish } from "Types/Dish";

export default function DishTags({ category, size, serving, price }: Dish) {
  return (
    <div className={styles.tags}>
      <div
        className={classNames({
          [styles.category]: true,
          [styles[`item__category__${category.label.toLowerCase()}`]]: true,
        })}
      >
        {category.label}
      </div>
      <div className={styles.size}>{size}g</div>
      <div className={styles.serving}>
        {serving} pessoa{serving === 1 ? "" : "s"}
      </div>
      <div className={styles.price}>R${price.toFixed(2)}</div>
    </div>
  );
}
