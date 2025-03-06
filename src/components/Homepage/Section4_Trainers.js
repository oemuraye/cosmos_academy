import oghaleImage from "../../assets/images/trustImg.png";
import alexImage from "../../assets/images/alexImage.png";
import blessingImage from "../../assets/images/blessingImage.png";
import menaImage from "../../assets/images/menaImage.png";
import piusImage from "../../assets/images/piusImage.png";


const trainers = [
  {
    name: "Trust Oghale",
    role: "Lead Digital Innovation",
    image: oghaleImage,
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
];

const TrainersSection = () => {
  return (
    <section className="trainers-section padding_y-spacing">
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

      <div className="trainers-cards container">
        {/* <div className="gradient-overlay left"></div> */}

        <div className="cards-display overflow-auto">
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

        {/* <div className="gradient-overlay right"></div> */}
      </div>

    </section>
  );
};

export default TrainersSection;
