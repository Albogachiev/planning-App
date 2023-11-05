import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card.jsx";
import Modal from "../../components/Modal/Modal.jsx";
import styles from "./HomePages.module.scss";

const HomePages = () => {
  const cards = useSelector((state) => state.card.cards);

  return (
    <div className={styles.container}>
      {cards.map((card, i) => (
        <div key={i} className={styles.container__Card}>
          <Card card={card} title={card.title} />
        </div>
      ))}
      <Modal />
    </div>
  );
};

export default HomePages;
