import { useState } from "react";

import Card from "../Card/Card";

import styles from "./ID.module.css";

const ID = ({ name, position, imageUrl, backgroundUrl, subtitle }) => {
  const [isPortrait, changeOrientation] = useState(true);

  function handleClick() {
    changeOrientation((prev) => !prev);
  }

  return (
    <Card
      title="Cat ID Card"
      subtitle={subtitle}
      padding="1.5rem"
      backgroundUrl={backgroundUrl}
      onClick={handleClick}
    >
      <div className={isPortrait ? styles.idPortrait : styles.idLandscape}>
        <img className={styles.idPicture} src={imageUrl} draggable={false} />
        <div
          className={
            isPortrait ? styles.detailsPortrait : styles.detailsLandscape
          }
        >
          <div>
            <div className={styles.detailTitle}>
              Name{isPortrait ? "" : ":"}
            </div>
            <div className={styles.detailContent}>{name}</div>
          </div>
          <div>
            <div className={styles.detailTitle}>
              Pusation{isPortrait ? "" : ":"}
            </div>
            <div className={styles.detailContent}>{position}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ID;
