import { BsFillCalendarCheckFill, BsFillArrowDownCircleFill } from "react-icons/bs";

import styles from "./styles.module.scss";


export function Top() {
  return (
    <header className={styles.headerContainer}>
      <div>
        <div>
          <h1>LUXURY <pre>HOTELS</pre></h1>
        </div>
        <nav>
          <ul>
            <li><a href="https://">Home</a></li>
            <li><a href="https://">Facilities</a></li>
            <li><a href="https://">Rooms</a></li>
            <li><a href="https://">Contact-us</a></li>
          </ul>
        </nav>
      </div>
      <h2>Welcome to <pre>Luxury</pre> <b>Hotels</b></h2>
      <p>Book your stay and enjoy Luxury redefined at the most affordable rates.</p>
      <button> 
        <BsFillCalendarCheckFill />
        Book now
      </button>
      <div>
        <span>Scroll</span>
        <BsFillArrowDownCircleFill />
      </div>
    </header>
  );
}