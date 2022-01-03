import { Footer } from "../components/Footer";
import { Top } from "../components/Top"
import { FacilitiesContent } from "../components/FacilitiesContent"
import { Testimonials } from "../components/Testimonials";

import styles from "../styles/facilities.module.scss"

export function Facilities() {
  return (
    <>
      <Top destiny= "aqui" />
      <div className={styles.FacilitiesContainer} id="aqui">
        <div className={styles.ContentFacilitiesMsg}>
          <h2>Facilities</h2>
          <p>We want your stay at our lush hotel to be truly unforgettable. That is why we give special attention to all of your needs so that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure and our modern luxury resort facilities will help you enjoy the best of all.</p>
        </div>
        {/* <FacilitiesContent img="humphrey-muleba-LOA2mTj1vhc-unsplash 1.png"  title="The Gym" />
        <FacilitiesContent img="Poolside-bar.png"  title="Poolside bar" />
        <FacilitiesContent img="adetayo-adefala-1K2iQQM31D0-unsplash 1.png"  title="The spa" />
        <FacilitiesContent img="big-tiny-belly-XtnNrQYC7ts-unsplash 1.png"  title="Swimming poll" />
        <FacilitiesContent img="jason-leung-poI7DelFiVA-unsplash 1.png"  title="Restaurant" />
        <FacilitiesContent img="bianca-jordan-o7SvheEZoks-unsplash 1.png"  title="Laudry" /> */}
        <FacilitiesContent img="soumtesteboy.jpg"  title="Laudry" />
        <FacilitiesContent img="soumtesteboy.jpg"  title="Laudry" />
        <FacilitiesContent img="soumtesteboy.jpg"  title="Laudry" />
        <FacilitiesContent img="soumtesteboy.jpg"  title="Laudry" />
        <FacilitiesContent img="soumtesteboy.jpg"  title="Laudry" />
        <FacilitiesContent img="soumtesteboy.jpg"  title="Laudry" />
        <Testimonials />
      </div>
      <Footer />
    </>
  );
}