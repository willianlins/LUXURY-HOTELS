import styles from "./styles.module.scss";


export function TopSmall() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.headerTop}>
          <div>
            <img src="./assets/logo.svg" alt="Luxuria Hotels" />
          </div>
          <nav>
            <ul>
              <li><a href="http://localhost:3000/">Home</a></li>
              <li><a href="http://localhost:3000/Facilities">Facilities</a></li>
              <li><a href="http://localhost:3000/Rooms">Rooms</a></li>
              <li><a href="http://localhost:3000/ContactUs">Contact-us</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <h2>Contact-us</h2>
        </div>
      </div>
    </header>
  );
}