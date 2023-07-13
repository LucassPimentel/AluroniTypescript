import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg"; // absolute import
import Searcher from "./searcher";
import { useState } from "react";
import Filters from "./filters";
import Order from "./order";
import Itens from "./itens";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [filterId, setFilterId] = useState<number | null>(null);
  const [order, setOrder] = useState("");

  return (
    <main>
      <nav className={styles.nav}>
        <Logo />
      </nav>

      <header className={styles.header}>
        <div className={styles.header__text}>
          Sempre servindo bons códigos... Digo, pratos!
        </div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <Searcher search={search} setSearch={setSearch} />
        <div className={styles.menu__filters}>
          <Filters filterId={filterId} setFilterId={setFilterId} />
          <Order order={order} setOrder={setOrder} />
          <Itens search={search} filterId={filterId} order={order} />
        </div>
      </section>
    </main>
  );
}
