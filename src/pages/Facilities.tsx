import { Footer } from "../components/Footer";
import {Top} from "../components/Top"

import styles from "../styles/facilities.module.scss"

export function Facilities() {
  return(
    <div className={styles.FacilitiesContainer}>
      <Top />
      <Footer />
    </div>
  );
}