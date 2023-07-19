import { Outlet } from "react-router-dom";
import styles from "./CommonPage.module.scss";
import themeStyles from "styles/Theme.module.scss";

export default function CommmonPage({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          Sempre servindo bons códigos... Digo, pratos!
        </div>
      </header>
      <div className={themeStyles.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
}
