import { useCallback, useState } from "react";
import { CardType } from "context";
import styles from "./IssueCard.module.css";
import cx from "classnames";

type PropsType = {
  id: number;
  description: string;
  isPending: boolean;
  isOpened: boolean;
  setCards: (cards: any) => void;
};

const {
  card,
  cardHeader,
  cardDescription,
  status,
  closed,
  opened,
  pending,
  exitButton,
  pendingButton,
  transformPending,
  fadeOut,
} = styles;

export default function IssueCard({
  id,
  description,
  isPending,
  isOpened,
  setCards,
}: PropsType) {
  const [shouldFadeOut, setShouldFadeOut] = useState<boolean>(false);
  const [statusBeingChanged, setStatusBeingChanged] = useState<boolean>(false);

  const onCardCloseClick = useCallback(() => {
    setShouldFadeOut(true);
    setTimeout(() => {
      setCards((cards: CardType[]) => {
        return cards.map((card) => {
          if (card.id === id) {
            return {
              ...card,
              isOpened: false,
              isPending: false,
            };
          }
          return card;
        });
      });
    }, 800);
  }, [id, setCards]);

  const onCardPendingClick = useCallback(() => {
    setStatusBeingChanged(true);
    setCards((cards: CardType[]) => {
      return cards.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            isOpened: true,
            isPending: true,
          };
        }
        return card;
      });
    });
    setTimeout(() => {
      setStatusBeingChanged(false);
    }, 700);
  }, [id, setCards]);

  return (
    <div data-testid="card_container" className={cx(card, { [fadeOut]: shouldFadeOut })} key={id}>
      <div className={cardHeader}>
        {!isPending && isOpened && (
          <div data-testid="card_pending_button" className={pendingButton} onClick={onCardPendingClick}>
            to pending
          </div>
        )}
        {isOpened && (
          <div data-testid="card_close_button" className={exitButton} onClick={onCardCloseClick}>
            close
          </div>
        )}
      </div>
      <div data-testid="card_description" className={cardDescription}>{description}</div>
      <div
        data-testid="card_status"
        className={cx(status, {
          [transformPending]: statusBeingChanged,
          [pending]: isPending && !statusBeingChanged,
          [closed]: !isOpened,
          [opened]: isOpened && !isPending,
        })}
      />
    </div>
  );
}