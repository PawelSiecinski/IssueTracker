import { useContext } from "react";
import { IssueCard } from "./components";
import { CardsContext } from "context";
import type { CardsContextType, CardType } from "context/types";
import { useEffect } from "react";
import { useMemo } from "react";
import styles from "./IssueFacade.module.css";

type PropsType = {
  onlyClosed?: boolean;
};

const { container, title } = styles;

export default function IssueFacade({ onlyClosed = false }: PropsType) {
  const { cards, sortedBy, setCards, setSortedBy } =
    useContext<CardsContextType>(CardsContext);

  useEffect(() => {
    if (onlyClosed) {
      setSortedBy("closed");
    }
    return () => {
      setSortedBy("none");
    };
  }, [onlyClosed, setSortedBy]);

  const cardsSortedBy = cards.filter((card: CardType) => {
    return (
      (sortedBy === "opened_all" &&
        card.isOpened === true &&
        card.isPending === false) ||
      (sortedBy === "pending" &&
        card.isOpened === true &&
        card.isPending === true) ||
      (sortedBy === "none" && card.isOpened === true) ||
      (sortedBy === "closed" && card.isOpened === false)
    );
  });

  const areThereAnyCards = useMemo(() => {
    return cardsSortedBy && cardsSortedBy.length > 0;
  }, [cardsSortedBy]);

  if (areThereAnyCards) {
    return (
      <div className={container}>
        {cardsSortedBy.map((card: CardType) => (
          <IssueCard key={card.id} {...card} setCards={setCards} />
        ))}
      </div>
    );
  } else {
    return (
      <div className={container}>
        <h1 className={title}>No issues to show!</h1>
      </div>
    );
  }
}
