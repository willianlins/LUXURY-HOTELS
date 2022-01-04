import { TopSmall } from "../components/TopSmall";
import { Footer } from "../components/Footer";

import { AiOutlineArrowRight } from "react-icons/ai";

import styles from "../styles/contactUs.module.scss";

export function ContactUs() {
  return (
    <>
      <TopSmall />
      <div className={styles.ContactUsContainer}>
        <h3> We are here for you</h3>
        <p>At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests, please forward it to our support desk and we will get back to you as soon as possible.</p>
        <div className={styles.ContactUsContent}>
          <div>
            497 Evergreen Rd. Roseville, <br />CA 95673<br /><br />
            <b>View map </b> <AiOutlineArrowRight /><br /><br />
            Phone: +44 345 678 903 <br />Email: luxury_hotels@gmail.com
          </div>
          <div>
            <form name="meuform" method="post" id="formulario">
              <label>Name</label>
              <input type="text" className={styles.FormInputText} id="name" />
              <label>Email Address</label>
              <input type="email" className={styles.FormInputText} id="email" />
              <label>Message</label>
              <textarea className={styles.FormTextArea} id="message"> </textarea>
              <input type="button" className={styles.FormSubmit} value="Submit" />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}