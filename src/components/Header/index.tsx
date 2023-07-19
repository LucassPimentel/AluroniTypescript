import { ReactComponent as Logo } from "assets/logo.svg"; // absolute import
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
  const routes = [
    {
      label: "Início",
      to: "/",
    },
    {
      label: "Cardápio",
      to: "/menu",
    },
    {
      label: "Sobre",
      to: "/about",
    },
  ];
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul className={styles.nav__list}>
        {routes.map((route, idx) => (
          <li key={idx} className={styles.nav__link}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
