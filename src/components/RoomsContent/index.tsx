
import styles from "./styles.module.scss";

import {BsPlusCircleFill} from "react-icons/bs"

interface RoomsContentProps {
  img: string,
  title: string,
}
export function RoomsContent({ img, title }: RoomsContentProps) {
  return (
    <div className={styles.RoomsContainerMain}>
      <div className={styles.RoomsContainter}>
        <img src={`./assets/${img}`} alt="Facilities" />
        <div className={styles.RoomsContainterMsg}>
          <h3>{title}</h3>
        </div>
      </div>
      <div>
        <div className={styles.RoomsContainerDetails}>
          <div className={styles.RoomsDetails}>
            <BsPlusCircleFill />
            <label>View room details</label>
          </div>
          <button>$147 Avg/night</button>
        </div>
      </div>
    </div>
  );
}