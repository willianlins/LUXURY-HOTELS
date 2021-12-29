import { useEffect, useState } from "react";
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from "react-icons/bs";

import styles from "./styles.module.scss";

const testimonials = [
  {
    id: 1,
    author: "Mr. and Mrs. Baxter",
    UF: "UK",
    text: "Calm, Serene, Retro – What a way to relax and enjoy"
  },
  {
    id: 2,
    author: "Mr. and Mrs. Uilha",
    UF: "US",
    text: "Our rooms are designed to transport you into an environment"
  },
  {
    id: 3,
    author: "Mr. and Mrs. EEEEVALDO",
    UF: "GI",
    text: "Take your mind off the day-to-day of home"
  },
  {
    id: 4,
    author: "Mr. and Mrs. Cabelo",
    UF: "TU",
    text: "We love life at the beach. Being close to the ocean with access"
  }
];

interface reportsProps {
  id: number,
  author: string,
  UF: string,
  text: string
}


export function ContentHome() {

  const [reports, setReports] = useState<reportsProps>(testimonials[0]);
  const [ actve, setActive ] = useState(true)
  let newId: number = 0;

 
  useEffect(() =>{
    newId+1 === testimonials.length-1 ? setActive(false) : setActive(true);
    console.log(newId)
  }, [newId, reports])



  function viewReport(inOrDe: string) {
    const id  =  reports.id;
    
    if(inOrDe === 'in'){
      for(let repo in testimonials){
        if(testimonials[repo].id === id ){
          newId = Number(repo)+1;
          setReports(testimonials[newId]);
        }
      };
    }else{
      for(let repo in testimonials){
        if(testimonials[repo].id === id ){
          newId = Number(repo)-1;
          setReports(testimonials[newId])
        }
      }
    }
    console.log(newId)
  }
  console.log(newId)

  return (
    <div className={styles.Container} >
      <div className={styles.ContentHomeMsg} >
        <p>All our room types are including complementary breakfast</p>
      </div>
      <section className={styles.ContentSection} id="contentHome">
        <div className={styles.ContentSectionLine}>
          <div></div>
          <div className={styles.ContentSectionInfo}>
            <h3>Luxury redefined</h3>
            <p>Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.</p>
            <button>Explore</button>
          </div>
        </div>
        <img className={styles.ContentSectionImg} src="./assets/steven-ungermann-aRT5UCf2MYY-unsplash.svg" alt="Quarto" />
        <div className={styles.ContentSectionImg}></div>
      </section>
      <section className={styles.ContentSection}>
        <div className={styles.ContentSectionLine}>
          <div></div>
          <div className={styles.ContentSectionInfo}>
            <h3>Leave your worries in the sand</h3>
            <p>We love life at the beach. Being close to the ocean with access to endless sandy beach ensures a relaxed state of mind. It seems like time stands still watching the ocean.</p>
            <button>Explore</button>
          </div>
        </div>
        <img className={styles.ContentSectionImg} src="./assets/andrew-ruiz-fmz-B9At9iQ-unsplash.svg" alt="Quarto" />
        <div className={styles.ContentSectionImg}></div>
      </section>
      <div className={styles.ContentSectionTestimonials}>
        <h4>Testimonials</h4>
        <q>{reports.text}</q>
        <br />{reports.author}, {reports.UF}
        <div>
          <BsFillArrowLeftSquareFill onClick={()=>viewReport('de')} color={actve ? "#E0B973" : "#ccc"} />
          <BsFillArrowRightSquareFill onClick={()=>viewReport('in') } color={actve ? "#E0B973" : "#ccc"}/>
        </div>
      </div>
    </div>
  );
}