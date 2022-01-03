
import styles from "./styles.module.scss";


interface FacilitiesContentProps {
  img: string,
  title: string,
}


export function FacilitiesContent({img, title}: FacilitiesContentProps){
  console.log(`./assets/${img}`);
  return(
    <div className={styles.FacilitiesContainter}>
      <img src={`./assets/${img}`} alt="Facilities"/>
      <div className={styles.FacilitiesContainterMsg}>
        <h3>{title}</h3>
      </div>
    </div>
  );
}