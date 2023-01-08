import { createContext, ReactNode, useState } from "react";
import { mockedCards } from "../mocks";
import { SortedBy, CardType, CardsContextType } from "./types";

type PropsType = {
  children?: ReactNode
}

const defaultState = {
  cards: [],
  message: "",
  sortedBy: "opened_all" as SortedBy,
  isAnimated: true,
  setIsAnimated: () => {},
  setCards: () => {},
  setMessage: () => {},
  setSortedBy: () => {}
}

export const CardsContext = createContext<CardsContextType>(defaultState);

export const CardsProvider = ({ children }: PropsType) => {
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