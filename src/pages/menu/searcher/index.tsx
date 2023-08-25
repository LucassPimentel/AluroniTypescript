import { memo, useMemo } from "react";
import styles from "./Searcher.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function Searcher({ search, setSearch }: Props) {
  const iconeLupa = useMemo(() => <CgSearch size={20} color="#4C4D5E" />, []);

  return (
    <div className={styles.searcher}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar"
      />
      {iconeLupa}
    </div>
  );
}

export default memo(Searcher);
