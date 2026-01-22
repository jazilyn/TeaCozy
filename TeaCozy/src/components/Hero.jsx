import styles from "../styles/hero.module.css";
import bg from "../assets/background.jpg";

export default function Hero() {
  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={styles.heroContent}>
        <h2>Our Mission</h2>
        <h4>
          Handpicked, Artisanally Curated, Free Range, Sustainable, Small Batch,
          Fair Trade, Organic Tea
        </h4>
      </div>
    </section>
  );
}