import menaImage from "../../assets/images/menaImage.png";
import piusImage from "../../assets/images/piusImage.png";

import eventVideo1 from "../../assets/videos/eventVideo1.mp4";
import eventVideo2 from "../../assets/videos/eventVideo2.mp4";

const upcomingEvents = [
  {
    id: 1,
    instructor: "Pius Emuraye",
    role: "Website Developer",
    title: "Introduction to Website Development",
    date: "Mar 03, 2025",
    image: piusImage,
    media: eventVideo1, 
    isVideo: true,
},
{
    id: 2,
    instructor: "Jane Doe",
    role: "Social Media Manager",
    title: "Introduction to Social Media Management",
    date: "Mar 10, 2025",
    image: menaImage,
    media: eventVideo2, 
    isVideo: true,
  },
  // Add more events here...
];

const UpcomingSection = () => {
  return (
    <section className="upcoming-section padding_y-spacing container my-5">
      <section className="container">
        <div className="section-heading my-5">
          <h2>Upcoming Live Training</h2>
          <p>
            Our programs are designed to meet the demands of the ever-evolving
            tech industry, ensuring you gain hands-on experience and industry
            insights that translate into real-world impact.
          </p>
        </div>
      </section>

      <section className="upcoming-details container row">
        {upcomingEvents.map((event) => (
          <div key={event.id} className="col-md-6 col-sm-12 my-3">
            <div className="event-card row">
              <div className="event-media col-md-8 col-sm-12 my-1">
                {event.isVideo ? (
                  <video src={event.media} autoPlay loop muted></video>
                ) : (
                  <img src={event.media} alt={event.title} />
                )}
              </div>

              <div className="event-info col-md-4 col-sm-12 my-1">
                <div className="instructor">
                  <img src={event.image} alt={event.instructor} />
                  <div className="event-overlay">
                    <h4>{event.instructor}</h4>
                    <p className="role">{event.role}</p>
                  </div>
                </div>
                <div className="event-details mt-0 mt-md-3">
                    <h4>{event.title}</h4>
                    <h6>{event.date}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default UpcomingSection;