import { Footer } from "../components/Footer";
import { Top } from "../components/Top"
import { Testimonials } from "../components/Testimonials";

import styles from "../styles/Rooms.module.scss"
import { RoomsContent } from "../components/RoomsContent";

export function Rooms() {
  return (
    <>
      <Top destiny="aqui"/>
      <div className={styles.RoomsContainer} >
        <div className={styles.RoomsFacilitiesMsg} id="aqui">
          <h2>Rooms and Rates</h2>
          <p>Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces.</p>
        </div>
        <RoomsContent img="soumtesteboy.jpg"  title="Single room" />
        <RoomsContent img="soumtesteboy.jpg"  title="Double room" />
        <RoomsContent img="soumtesteboy.jpg"  title="Twin room" />
        <Testimonials />
      </div>
      <Footer />
    </>
  );
}