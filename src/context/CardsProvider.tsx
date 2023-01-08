import { createContext, useState } from "react";
import { mockedCards } from "../mocks";
import { SortedBy, CardType } from "./types";

export const CardsContext = createContext(null);

export const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState<CardType[]>(mockedCards);
  const [sortedBy, setSortedBy] = useState<SortedBy>("none");
  const [message, setMessage] = useState<string>("");
  const [isAnimated, setIsAnimated] = useState<boolean>(true);

  return (
    <CardsContext.Provider
      value={{
        cards,
        sortedBy,
        message,
        isAnimated,
        setCards,
        setSortedBy,
        setMessage,
        setIsAnimated,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};
