export type SortedBy = "opened_all" | "pending" | "closed" | "none";
export type CardsContextType = {
    cards: CardType[],
    message: string,
    sortedBy: SortedBy;
    isAnimated: boolean;
    setIsAnimated: (isAnimated: boolean) => void
    setCards: (cards: CardType[]) => void;
    setMessage: (message: string) => void;
    setSortedBy: (sortedBy: SortedBy) => void
};

export type CardType = {
    id: number;
    description: string;
    isPending: boolean;
    isOpened: boolean;
};
