import { useContext } from "react";
import { CreateIssue } from "../../components/CreateIssue";
import { CardsContext } from "context";
import { useNavigate } from "react-router-dom";
import styles from "./CreateIssueFacade.module.css";

const { container } = styles;

export default function CreateIssueFacade() {
  const { cards, setCards, isAnimated } = useContext(CardsContext);
  const navigate = useNavigate();

  return (
    <div className={container}>
      <CreateIssue 
        cards={cards} 
        isAnimated={isAnimated} 
        navigate={navigate}
        setCards={setCards} 
      />
    </div>
  )
}