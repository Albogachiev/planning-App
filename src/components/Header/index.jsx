import React from "react";
import styles from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";

import HeaderLetfBlock from "./HeaderLetfBlock";
import HeaderRightBlock from "./HeaderRightBlock";

import { toggleCheckedSaveBoardAction } from "../../redux/actions/HeaderAction";
import {
  createCardAction,
  getLocalSoregCardAction,
} from "../../redux/actions/CardsAction";

const Header = ({ handlerCheckedNavMenu }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.card);
  const toggleSaveBoard = useSelector((state) => state.header.toggleSaveBoard);

  const createCardInput = () => {
    let text = prompt("Введите название Карточки");
    if (text) {
      dispatch(createCardAction(text));
    } else {
      alert("Введите значение ");
    }
  };

  
  React.useEffect(() => {
    if (window.localStorage.getItem("SaveBoard")) {
      dispatch(toggleCheckedSaveBoardAction(true));
      let response = JSON.parse(window.localStorage.getItem("SaveBoard"));
      dispatch(getLocalSoregCardAction(response));
    }
  }, [dispatch]);

  const saveBoard = () => {
    window.localStorage.setItem("SaveBoard", JSON.stringify(state));
    dispatch(toggleCheckedSaveBoardAction(true));

    if (toggleSaveBoard) {
      dispatch(toggleCheckedSaveBoardAction(false));
      window.localStorage.clear();
    }
  };
  
  if (toggleSaveBoard) {
    window.localStorage.setItem("SaveBoard", JSON.stringify(state));
  }

  return (
    <div className={styles.container}>
      <HeaderLetfBlock
        saveBoard={saveBoard}
        toggleSaveBoard={toggleSaveBoard}
        createCardInput={createCardInput}
      />
      <HeaderRightBlock handlerCheckedNavMenu={handlerCheckedNavMenu} />
    </div>
  );
};

export default Header;
