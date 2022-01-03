import { Footer } from "../components/Footer";
import { Top } from "../components/Top"
import { FacilitiesContent } from "../components/FacilitiesContent"

import styles from "../styles/facilities.module.scss"

export function Facilities() {
  return (
    <>
      <Top />
      <div className={styles.FacilitiesContainer}>
        <div className={styles.ContentFacilitiesMsg}>
          <h2>Facilities</h2>
          <p>We want your stay at our lush hotel to be truly unforgettable. That is why we give special attention to all of your needs so that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure and our modern luxury resort facilities will help you enjoy the best of all.</p>
        </div>
        <FacilitiesContent />
      </div>
      <Footer />
    </>
  );
}