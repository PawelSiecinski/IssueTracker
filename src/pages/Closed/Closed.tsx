import { IssueTable } from "features/Home";
import styles from "./Closed.module.css";

const { container, cards } = styles;

export function Closed() {
  return (
    <div className={container}>
      <div className={cards}>
        <IssueTable onlyClosed />
      </div>
    </div>
  );
}
