import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { HomeHeader, ClosedHeader, CreateHeader } from "./private";
import type { CardsContextType } from "context/types";
import { CardsContext } from "context";


const HeaderFacade = () => {
  const { pathname: page } = useLocation();
  const { sortedBy, isAnimated, setSortedBy, setIsAnimated } =
    useContext<CardsContextType>(CardsContext);

  if (page === "/")
    return <HomeHeader sortedBy={sortedBy} setSortedBy={setSortedBy} />;
  if (page === "/closed") return <ClosedHeader />;
  if (page === "/create")
    return (
      <CreateHeader isAnimated={isAnimated} setIsAnimated={setIsAnimated} />
    );
  else return <></>;
};

export default HeaderFacade;
