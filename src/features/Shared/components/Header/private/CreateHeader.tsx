import { Link } from "react-router-dom";
import { useCallback } from "react";
import styles from "../HeaderFacade.module.css";
import cx from "classnames";

const {
  container,
  headerTop,
  headerBottom,
  home,
  create,
  closed,
  enabledAnimation,
  disabledAnimation,
  selectedEnabledAnimation,
  selectedDisabledAnimation,
} = styles;

type PropsType = {
  isAnimated: boolean;
  setIsAnimated: (isAnimated: boolean) => void;
};
const CreateHeader = ({ isAnimated, setIsAnimated }: PropsType) => {
  const onAnimationsEnabledClick = useCallback(() => {
    setIsAnimated(true);
  }, [setIsAnimated]);

  const onAnimationsDisabledClick = useCallback(() => {
    setIsAnimated(false);
    console.log('asdasd')
  }, [setIsAnimated]);

  console.log(isAnimated);

  return (
    <div className={container}>
      <div className={headerTop}>
        <Link to="/create">
          <h1 className={create}>#Issue_Creator</h1>
        </Link>
        <Link to="/closed">
          <h1>
            Go to<span className={closed}> #closed</span>
          </h1>
        </Link>
      </div>
      <div className={headerBottom}>
        <Link to="/">
          Return to<span className={home}> #home</span>
        </Link>
        <div>
          shaky_animations:{" "}
          <span
            onClick={onAnimationsEnabledClick}
            className={cx({
              [enabledAnimation]: !isAnimated,
              [selectedEnabledAnimation]: isAnimated,
            })}
          >
            #enabled
          </span>{" "}
          <span
            onClick={onAnimationsDisabledClick}
            className={cx({
              [disabledAnimation]: isAnimated,
              [selectedDisabledAnimation]: !isAnimated,
            })}
          >
            #disabled
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreateHeader;
