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
let newId: number = 0;
export function Testimonials() {
  const [reports, setReports] = useState<reportsProps>(testimonials[0]);
  const [actveL, setActiveL] = useState(false);
  const [actveR, setActiveR] = useState(false);

  useEffect(() => {
    isButtonActivated();
    timeTestimonials();
  }, [])



  function timeTestimonials() {
 
    setInterval(()=>{
      if(newId === 4){
        setReports(testimonials[0]);
        newId = 0;
        isButtonActivated();
      } else {
        setReports(testimonials[newId]);
        isButtonActivated();
      }
      newId = newId + 1;
      console.log(newId)
    }, 5000);
  }


  function isButtonActivated() {
    if(newId === 0){
      setActiveL(false);
      setActiveR(true);
    }else if(newId === 3){
      setActiveL(true);
      setActiveR(false);
    }else{
      setActiveL(true);
      setActiveR(true);
    }
  }

  function viewReport(inOrDe: string) {
    const id = reports.id;

    if (inOrDe === 'in') {
      for (let repo in testimonials) {
        if (testimonials[repo].id === id) {
          newId = Number(repo) + 1;
          setReports(testimonials[newId]);
          isButtonActivated();
        }
      };
    } else {
      for (let repo in testimonials) {
        if (testimonials[repo].id === id) {
          newId = Number(repo) - 1;
          setReports(testimonials[newId])
          isButtonActivated();
        }
      }
    }
  }


  return (
    <div className={styles.ContentSectionTestimonials}>
      <h4>Testimonials</h4>
      <q>{reports.text}</q>
      <br />{reports.author}, {reports.UF}
      <div>
        <BsFillArrowLeftSquareFill onClick={() => actveL && viewReport('de')} color={actveL ? "#E0B973" : "#ccc"} cursor={actveL ? 'pointer' : 'unset'} />
        <BsFillArrowRightSquareFill onClick={() => actveR && viewReport('in')} color={actveR ? "#E0B973" : "#ccc"} cursor={actveR ? 'pointer' : 'unset'} />
      </div>
    </div>
  );
}