import React, { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const tabsData = [
  { id: 1, name: "Web Development", description: "Master front-end and back-end development with modern frameworks and technologies like HTML, CSS, JavaScript, React, and Node.js. Build dynamic websites and scalable applications that power the digital economy." },
  { id: 2, name: "Social Management", description: "Learn how to effectively manage and grow social communities, engage audiences, and create impactful digital campaigns." },
  { id: 3, name: "Brand Development", description: "Develop skills in branding, storytelling, and identity creation to help businesses stand out in the market." },
  { id: 4, name: "Artificial Intelligence", description: "Understand AI concepts, machine learning, and automation to create smart solutions for real-world problems." },
  { id: 5, name: "Mobile Development", description: "Create powerful mobile applications using React Native, Flutter, and native technologies for iOS and Android." },
  { id: 6, name: "Digital Innovation", description: "Explore emerging technologies and digital transformation strategies that shape the future of industries." },
];

const ProgramsDisplay = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const tabsContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (tabsContainerRef.current) {
      const scrollAmount = 200;
      tabsContainerRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <section className="programs-section px-4 py-5">
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="fw-bold">Explore Programs</h4>
        <div className="d-flex gap-2 align-items-center">
            <button className="nav-btn left-btn" onClick={() => handleScroll("left")}>
                <FaArrowLeft />
            </button>
            <button className="nav-btn right-btn" onClick={() => handleScroll("right")}>
                <FaArrowRight />
            </button>
        </div>
      </div>

      <div className="d-flex align-items-center position-relative">
        

        <div className="tabs-container d-flex overflow-auto" ref={tabsContainerRef}>
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              className={`tab-item ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>

      </div>

      {/* Tab Description */}
      <p className="mt-3 tab-description">
        {tabsData.find((tab) => tab.id === activeTab)?.description}
      </p>
    </section>
  );
};

export default ProgramsDisplay;
