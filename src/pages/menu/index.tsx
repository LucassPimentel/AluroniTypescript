import styles from "./Menu.module.scss";
import Searcher from "./searcher";
import { useState } from "react";
import Filters from "./filters";
import Order from "./order";
import Itens from "./itens";
import themeStyles from "styles/Theme.module.scss";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [filterId, setFilterId] = useState<number | null>(null);
  const [order, setOrder] = useState("");

  return (
    <section className={styles.menu}>
      <h3 className={themeStyles.title}>Cardápio</h3>
      <Searcher search={search} setSearch={setSearch} />
      <div className={styles.menu__filters}>
        <Filters filterId={filterId} setFilterId={setFilterId} />
        <Order order={order} setOrder={setOrder} />
        <Itens search={search} filterId={filterId} order={order} />
      </div>
    </section>
  );
}
