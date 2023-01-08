import styles from "./Home.module.css";
import { IssueTable } from "features/Home";

const { container } = styles;

export function Home() {
  return (
    <div className={container}>
        <IssueTable />
    </div>
  );
}
