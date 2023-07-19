import classNames from "classnames";
import styles from "./NotFound.module.scss";
import { ReactComponent as NotFoundImage } from "assets/not_found.svg";
import themeStyles from "styles/Theme.module.scss";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      className={classNames({
        [styles.container]: true,
        [themeStyles.container]: true,
      })}
    >
      <div className={styles.backbutton}>
        <button onClick={() => navigate(-1)}>{"< Voltar"}</button>
      </div>
      <NotFoundImage />
    </div>
  );
}
