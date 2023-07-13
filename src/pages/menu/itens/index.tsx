import { useEffect, useState } from "react";
import Item from "./item";
import itens from "./itens.json";
import styles from "./Itens.module.scss";

interface Props {
  search: string;
  filterId: number | null;
  order: string;
}

export default function Itens(props: Props) {
  const [list, setList] = useState(itens);
  const { search, filterId, order } = props;

  function trySearch(title: string) {
    const regex = new RegExp(search, "i"); // 'i' significa que o regex será case insensitive
    return regex.test(title);
  }

  function tryFilter(id: number) {
    if (filterId !== null) return filterId === id;
    return true;
  }

  function sortList(newList: typeof itens) {
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
    const newList = itens.filter(
      (item) => trySearch(item.title) && tryFilter(item.category.id)
    );
    setList(sortList(newList));
  }, [search, filterId, order]);

  return (
    <div className={styles.itens}>
      {list.map((item) => (
        <div>
          <Item key={item.id} {...item} />
        </div>
      ))}
    </div>
  );
}
