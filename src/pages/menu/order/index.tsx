import { memo, useState } from "react";
import styles from "./Order.module.scss";
import options from "./options.json";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface Props {
  order: string;
  setOrder: React.Dispatch<React.SetStateAction<string>>;
}
function Order({ order, setOrder }: Props) {
  const [open, setOpen] = useState(false);
  const orderName = order && options.find((opt) => opt.value === order)?.nome;

  return (
    <button
      className={classNames({
        [styles.order]: true,
        [styles["order--active"]]: order !== "",
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{orderName || "Ordenar Por"}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.order__options]: true,
          [styles["order__options--active"]]: open,
        })}
      >
        {options.map((option) => (
          <div
            className={styles.order__option}
            key={option.value}
            onClick={() => setOrder(option.value)}
          >
            {option.nome}
          </div>
        ))}
      </div>
    </button>
  );
}

export default memo(Order);
