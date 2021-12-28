import {FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa"


import styles from "./styles.module.scss"


export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTriangulo}></div>
      <div>
        <div className={styles.footerContainer}>
          <div className={styles.footerLogo}>
            <img src="./assets/logoFooter.svg" alt="Luxuria Hotels" />
            <span>
              497 Evergreen Rd. Roseville, CA 95673 <br />+44 345 678 903 <br />luxury_hotels@gmail.com
            </span>
          </div>
          <nav className={styles.footerMenu}>
            <ul>
              <li><a href="http://localhost:3000/">About Us</a></li>
              <li><a href="http://localhost:3000/">Contact</a></li>
              <li><a href="http://localhost:3000/">Terms & Conditions</a></li>
            </ul>
          </nav>
          <div className={styles.footerSocial}>
            <FaFacebookF /><a href="http://localhost:3000/">Facebook</a><br/>
            <FaTwitter/><a href="http://localhost:3000/">Twitter</a><br/>
            <FaInstagram /><a href="http://localhost:3000/">Instagram</a><br/>     
          </div>
          <div className={styles.footerSearch}>
            Subscribe to our newsletter
            <div>
              <input type="text" placeholder="Email Address" />
              <button>OK</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}