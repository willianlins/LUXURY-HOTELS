import { Top } from "../components/Top";
import { ContentHome } from "../components/ContentHome";
import { Footer } from "../components/Footer";

import styles from "../styles/home.module.scss";

export function Home() {
  return (
    <div className={styles.HomeContainer}>
      <Top />
      <ContentHome />
      <Footer />
    </div>
  );
}