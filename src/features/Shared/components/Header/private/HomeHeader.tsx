import { useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "../HeaderFacade.module.css";
import cx from "classnames";
import { SortedBy } from "context/types";

type PropsType = {
  sortedBy: SortedBy;
  setSortedBy: (sortedBy: SortedBy) => void;
};

const {
  container,
  headerTop,
  headerBottom,
  home,
  closed,
  create,
  pendingSort,
  selectedPendingSort,
  selectedOnlyOpenedSort,
  onlyOpenedSort,
} = styles;

const HomeHeader = ({ sortedBy, setSortedBy }: PropsType) => {
  const onSortedOpenedClick = useCallback(() => {
    if (sortedBy === "opened_all") {
      setSortedBy("none");
    } else {
      setSortedBy("opened_all");
    }
  }, [sortedBy, setSortedBy]);

  const onSortedPendingClick = useCallback(() => {
    if (sortedBy === "pending") {
      setSortedBy("none");
    } else {
      setSortedBy("pending");
    }
  }, [sortedBy, setSortedBy]);

  return (
    <div className={container}>
      <div className={headerTop}>
        <Link to="/">
          <h1>
            Welcome <span className={home}>#Home</span>
          </h1>
        </Link>
        <Link to="/create">
          <h1>
            <span className={create}>Create </span>new issue
          </h1>
        </Link>
      </div>
      <div className={headerBottom}>
        <Link to="/closed">
          Go to <span className={closed}>#closed</span>
        </Link>
        <div>
          Sort By:{" "}
          <span
            onClick={onSortedOpenedClick}
            className={cx({
              [onlyOpenedSort]: sortedBy !== "opened_all",
              [selectedOnlyOpenedSort]: sortedBy === "opened_all",
            })}
          >
            #only_opened
          </span>{" "}
          <span
            onClick={onSortedPendingClick}
            className={cx({
              [pendingSort]: sortedBy !== "pending",
              [selectedPendingSort]: sortedBy === "pending",
            })}
          >
            #pending
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
