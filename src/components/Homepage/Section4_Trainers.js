import { useEffect, useRef, useState } from "react";

import oghaleImage from "../../assets/images/trustImg.png";
import alexImage from "../../assets/images/alexImage.png";
import blessingImage from "../../assets/images/blessingImage.png";
import menaImage from "../../assets/images/menaImage.png";
import profImage from "../../assets/images/prof-img.png";
import piusImage from "../../assets/images/piusImage.png";
import israelImage from "../../assets/images/israelImage.png";
import aromeImage from "../../assets/images/aromeImage.png";
import fonaImage from "../../assets/images/fonaImage.png";
import danielImage from "../../assets/images/danielImage.png";
import obadaImage from "../../assets/images/obadaImage.png";


const trainers = [
  {
    name: "Trust Oghale",
    role: "Lead Digital Innovation",
    image: oghaleImage,
  },
  {
    name: "Prof. Conrad Omonhinmin",
    role: "Chief Impact Assesor",
    image: profImage,
  },
  {
    name: "Alexander Ikani",
    role: "Lead Product Designer",
    image: alexImage,
  },
  {
    name: "Blessing Chinazor",
    role: "Senior Product Designer",
    image: blessingImage,
  },
  {
    name: "Okemena Agelebe",
    role: "Management/Marketing Lead",
    image: menaImage,
  },
  {
    name: "Pius Emuraye",
    role: "Lead Product Developer",
    image: piusImage,
  },
  {
    name: "Israel Ufumaka",
    role: "Artificial Intelligence Expert",
    image: israelImage,
  },
  {
    name: "Arome Ibrahim",
    role: "AR/VR Developer",
    image: aromeImage,
  },
  {
    name: "Erhabor Fona",
    role: "Mobile Developer",
    image: fonaImage,
  },
  {
    name: "Daniel Fishbone",
    role: "Embedded System/IOT",
    image: danielImage,
  },
  {
    name: "Obadamilare Akinyiga ",
    role: "Artificial Intelligence Developer",
    image: obadaImage,
  },
];

const TrainersSection = () => {
  const containerRef = useRef(null);
  const [direction, setDirection] = useState(1);
  const isUserScrolling = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollSpeed = 2; // Adjust speed
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isUserScrolling.current) {
          container.scrollBy({ left: scrollSpeed * direction, behavior: "smooth" });
        }

        // Reverse direction at edges
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          setDirection(-1);
        } else if (container.scrollLeft <= 0) {
          setDirection(1);
        }
      }, 20); // Adjust interval for smooth scrolling
    };

    startAutoScroll();

    return () => clearInterval(scrollInterval);
  }, [direction]);
  
  return (
    <section className="trainers-section section-width padding_y-spacing">
      <div className="container">
        <div className="section-heading my-5">
          <h2>Meet your trainers and start your journey</h2>
          <p>
            Our trainers are industry experts, innovators, and mentors dedicated
            to helping you unlock your full potential. We bring a wealth of
            real-world experience, knowledge, and a passion for guiding the next
            generation of tech leaders.
          </p>
        </div>
      </div>

      <div className="trainers-cards container" ref={containerRef}>

        <div className="cards-display">
          {trainers.map((trainer, index) => (
            <div className="trainer-card my-4" key={index}>
              <img src={trainer.image} alt={trainer.name} width="100%" height="250px" className="img-fluid xt-border-radius" />
              <div className="card-content p-3">
                <h6>{trainer.name}</h6>
                <p>{trainer.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default TrainersSection;
