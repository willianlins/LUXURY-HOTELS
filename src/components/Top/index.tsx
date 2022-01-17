import { BsFillCalendarCheckFill, BsFillArrowDownCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";

import styles from "./styles.module.scss";

interface TopProps{
  destiny: string
  imgTopHeader?: string
} 


export function Top({destiny, imgTopHeader}: TopProps) {
  return (
    <header className={styles.headerContainer}>
      <img className={styles.headerImgTop} src={imgTopHeader} alt="img Luxuria" />
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
          <h2>Welcome to <pre>Luxury</pre> <b>Hotels</b></h2>
          <p>Book your stay and enjoy Luxury<br /> redefined at the most affordable rates.</p>
        </div>
        <button>
          <BsFillCalendarCheckFill />
          Book now
        </button>
        <div className={styles.headerScroll}>
          <span>Scroll</span>
          
          <Link
            activeClass="active"
            to= {destiny}
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          ><BsFillArrowDownCircleFill /></Link>
        </div>
      </div>
    </header>
  );
}