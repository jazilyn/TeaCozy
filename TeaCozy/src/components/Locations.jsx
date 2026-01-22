import styles from "../styles/locations.module.css";
import locbg from "../assets/img-locations-background.jpg";

export default function Locations() {
  return (
    <section
      className={styles.locationsSection}
      style={{ backgroundImage: `url(${locbg})` }}
    >
      <div className={styles.locationsContent}>
        <h2>Locations</h2>

        <div className={styles.locationsGrid}>
          <div className={styles.locationCard}>
            <h3>Downtown</h3>
            <p>384 West 4th St</p>
            <p>Suite 108</p>
            <p>Portland, Maine</p>
          </div>

          <div className={styles.locationCard}>
            <h3>East Bayside</h3>
            <p>3433 Fisherman's Avenue</p>
            <p>(Northwest Corner)</p>
            <p>Portland, Maine</p>
          </div>

          <div className={styles.locationCard}>
            <h3>Oakdale</h3>
            <p>515 Crescent Avenue</p>
            <p>Second Floor</p>
            <p>Portland, Maine</p>
          </div>
        </div>
      </div>
    </section>
  );
}