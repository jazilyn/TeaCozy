import berryBlitz from "../assets/berryblitz.jpg";
import spicedRum from "../assets/spiced-rum.jpg";
import seasonalDonuts from "../assets/img-donut.jpg";
import myrtleAve from "../assets/myrtle-ave.jpg";
import bedfordBizarre from "../assets/bedford-bizarre.jpg";

import styles from "../styles/tea.module.css";

export default function TeaOfTheMonth() {
  return (
    <div className={styles.teas}>
      <h2>Tea of the Month</h2>
      <h4>What's Steeping at The Tea Cozy</h4>

      <div className={styles.flex_pics}>
        <div className={styles.pic}>
          <img src={berryBlitz} alt="Berry Blitz Tea" />
          <h4>Fall Berry Blitz</h4>
        </div>

        <div className={styles.pic}>
          <img src={spicedRum} alt="Spiced Rum Tea" />
          <h4>Spiced Rum Tea</h4>
        </div>

        <div className={styles.pic}>
          <img src={seasonalDonuts} alt="Seasonal Donuts" />
          <h4>Seasonal Donuts</h4>
        </div>

        <div className={styles.pic}>
          <img src={myrtleAve} alt="Myrtle Ave Tea" />
          <h4>Myrtle Ave Tea</h4>
        </div>

        <div className={styles.pic}>
          <img src={bedfordBizarre} alt="Bedford Bizarre Tea" />
          <h4>Bedford Bizarre Tea</h4>
        </div>
      </div>
    </div>
  );
}