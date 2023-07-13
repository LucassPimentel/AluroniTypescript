import logo from "assets/logo.svg";
import styles from "./Item.module.scss";
import itens from "../itens.json";
import classNames from "classnames";

type Props = (typeof itens)[0];

export default function Item(props: Props) {
  const { title, description, category, size, serving, price, photo } = props;
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div
            className={classNames({
              [styles.item__category]: true,
              [styles[`item__category__${category.label.toLowerCase()}`]]: true,
            })}
          >
            {category.label}
          </div>
          <div className={styles.item__size}>{size}g</div>
          <div className={styles.item__serving}>
            {serving} pessoa{serving === 1 ? "" : "s"}
          </div>
          <div className={styles.item__price}>R${price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
