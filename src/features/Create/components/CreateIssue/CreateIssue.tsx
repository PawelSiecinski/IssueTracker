import React, { useState, useCallback, useMemo } from "react";
import { CardType } from "context";
import styles from "./CreateIssue.module.css";
import cx from "classnames";
import type { NavigateFunction } from 'react-router-dom';

type PropsType = {
  cards: CardType[];
  isAnimated: boolean;
  setCards: (cards: any) => void;
  navigate: NavigateFunction;
};

const {
  card,
  title,
  headlightGreen,
  headlightRed,
  shake,
  created,
  cardHeader,
  buttonError,
  error,
} = styles;

export default function CreateIssue({
  cards,
  isAnimated,
  setCards,
  navigate,
}: PropsType) {
  const [isTyping, setIsTyping] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [text, setText] = useState("");

  const handleKeyDown = useCallback(() => {
    setIsError(false);
    setIsTyping(true);
  }, []);

  const handleKeyUp = useCallback(() => {
    setIsTyping(false);
  }, []);

  const onCreateClick = React.useCallback(() => {
    const maxId = Math.max(...cards.map(({ id }) => id));
    if (text.length > 5 && text.length <= 500) {
      setCards((cards: CardType[]) => {
        return [
          ...cards,
          {
            id: maxId ? maxId + 1 : 0,
            description: text,
            isOpened: true,
            isPending: false,
          },
        ];
      });
      setIsAdded(true);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 2000);
    }
  }, [cards, navigate, setCards, text]);

  const errorMessage = useMemo(() => {
    if (text.length < 5) {
      return "Your text is too short (<5)";
    } else if (text.length > 500) {
      return "Your text is too long (>500)";
    } else {
      return "";
    }
  }, [text]);

  return (
    <div
      className={cx(card, {
        [shake]: isAnimated && isTyping,
        [error]: isError,
        [created]: isAdded,
      })}
    >
      <div className={cardHeader}>
        <h2 className={title}>
          Type <span className={headlightGreen}>below </span>your{" "}
          <span className={headlightRed}>issue </span>
        </h2>
      </div>

      <textarea
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onChange={(e) => setText(e.target.value)}
        placeholder="click here to start writing"
      />
      <button
        onClick={onCreateClick}
        className={cx({ [buttonError]: isError })}
        disabled={isAdded}
      >
        {isError ? errorMessage : "Create issue"}
      </button>
    </div>
  );
}
