import styles from "./styles.module.scss"

export function ContentHome() {
  return (
    <div className={styles.Container}>
      <div className={styles.ContentHomeMsg}>
        <p>All our room types are including complementary breakfast</p>
      </div>
      <section className={styles.ContentSection}>
        <div className={styles.ContentSectionLine}>
          <div>w</div>
          <div className={styles.ContentSectionInfo}>
            <h3>Luxury redefined</h3>
            <p>Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.</p>
            <button>Explore</button>
          </div>
        </div>
          {/* <img src="./assets/steven-ungermann-aRT5UCf2MYY-unsplash.svg" alt="Quarto"/> */}
          <div className={styles.ContentSectionImg}></div>
      </section>
    </div>
  );
}