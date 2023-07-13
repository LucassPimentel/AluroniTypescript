import filters from "./filters.json";
import styles from "./Filters.module.scss";
import classNames from "classnames";

type IFilter = (typeof filters)[0];

interface Props {
  filterId: number | null;
  setFilterId: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filters({ filterId, setFilterId }: Props) {
  function selectFilter(filter: IFilter) {
    if (filterId === filter.id) {
      return setFilterId(null);
    }
    return setFilterId(filter.id);
  }

  return (
    <div className={styles.filters}>
      {filters.map((filter) => (
        <button
          className={classNames({
            [styles.filters__filter]: true,
            [styles["filters__filter--active"]]: filterId === filter.id,
          })}
          key={filter.id}
          onClick={() => selectFilter(filter)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
