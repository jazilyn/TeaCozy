import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h5>The Tea Cozy</h5>
      <p>contact@theteacozy.com</p>
      <p>917-555-8904</p>
      <p className={styles.copyright}>copyright The Tea Cozy 2017</p>
    </footer>
  );
}