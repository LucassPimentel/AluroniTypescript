import { useEffect, useState } from "react";
import Item from "./item";
import menu from "data/menu.json";
import styles from "./Menu.module.scss";
import { Menu } from "Types/Dish";

interface Props {
  search: string;
  filterId: number | null;
  order: string;
}

export default function Itens(props: Props) {
  const [list, setList] = useState(menu);
  const { search, filterId, order } = props;

  function trySearch(title: string) {
    const regex = new RegExp(search, "i"); // 'i' significa que o regex será case insensitive
    return regex.test(title);
  }

  function tryFilter(id: number) {
    if (filterId !== null) return filterId === id;
    return true;
  }

  function sortList(newList: Menu) {
    switch (order) {
      case "porcao":
        return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
      case "qtd_pessoas":
        return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case "preco":
        return newList.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return newList;
    }
  }

  useEffect(() => {
    const newList = menu.filter(
      (item) => trySearch(item.title) && tryFilter(item.category.id)
    );
    setList(sortList(newList));
  }, [search, filterId, order]);

  return (
    <div className={styles.menu}>
      {list.map((item) => (
        <div key={item.id}>
          <Item {...item} />
        </div>
      ))}
    </div>
  );
}
