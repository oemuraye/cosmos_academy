import React, { useRef, useState } from 'react';

import { Link } from 'react-router-dom';
import { posts } from "../../data/blogPosts";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import blogImg1 from "../../assets/images/blogImg1.png";
import blogImg2 from "../../assets/images/blogImg2.png";

const blogPostes = [
  {
    id: 1,
    slug: 'nigerian-tech-ecosystem',
    title: "The Nigerian Tech Ecosystem: A Call for Authentic Innovation",
    author: "Trust Oghale",
    date: "Feb 28, 2025",
    image: blogImg2,
    category: "Web Development",
  },
  {
    id: 2,
    slug: 'future-of-ai',
    title: "10 Product design portfolios to inspire you.",
    author: "Alexander Ikani",
    date: "Feb 28, 2025",
    image: blogImg2,
    category: "Web Development",
  },
  {
    id: 3,
    slug: 'engine-development',
    title: "10 Product design portfolios to inspire you.",
    author: "Alexander Ikani",
    date: "Feb 28, 2025",
    image: blogImg2,
    category: "Social Management",
  },
];

const tabsData = [
  { id: 1, name: "Web Development", description: "Master front-end and back-end development with modern frameworks and technologies like HTML, CSS, JavaScript, React, and Node.js. Build dynamic websites and scalable applications that power the digital economy." },
  { id: 2, name: "Social Management", description: "Learn how to effectively manage and grow social communities, engage audiences, and create impactful digital campaigns." },
  { id: 3, name: "Product Design", description: "Learn the fundamentals of user experience (UX) and user interface (UI) design to create visually appealing and user-friendly digital products." },
  { id: 4, name: "Brand Development", description: "Develop skills in branding, storytelling, and identity creation to help businesses stand out in the market." },
  { id: 5, name: "Digital Innovation", description: "Explore emerging technologies and digital transformation strategies that shape the future of industries." },
  { id: 6, name: "Mobile Development", description: "Create powerful mobile applications using React Native, Flutter, and native technologies for iOS and Android." },
  { id: 7, name: "Artificial Intelligence", description: "Understand AI concepts, machine learning, and automation to create smart solutions for real-world problems." },
  { id: 8, name: "Embedded System/IoT", description: "Understand the principles of embedded systems and IoT technologies to build smart devices and systems that connect the physical world to the digital world." },
  { id: 9, name: "AR/VR Development", description: "Create immersive experiences using augmented reality (AR) and virtual reality (VR) technologies to enhance user interactions and engagement in digital environments." },
];

const BlogSection = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
    const tabsContainerRef = useRef(null);
  
    const handleScroll = (direction) => {
      if (tabsContainerRef.current) {
        const scrollAmount = 200;
        tabsContainerRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
      }
    };
  
    const activeTabName = tabsData.find(tab => tab.id === activeTab)?.name;
  
    const filteredBlog = posts.filter(course => course.category === activeTabName);
  return (
    <section className='blog_section padding_y-spacing container my-5' id='blogs-section'>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold">Browse Blogs</h4>
        <div className="d-flex gap-3 align-items-center">
            <span role='button' className="nav-btn left-btn" onClick={() => handleScroll("left")}>
                <FaArrowLeft color="#FDFCFD" />
            </span>
            <span role='button' className="nav-btn right-btn" onClick={() => handleScroll("right")}>
                <FaArrowRight color="#FDFCFD" />
            </span>
        </div>
      </div>

      <div className="d-flex align-items-center position-relative">
        {/* Tabs */}
        <section className="tabs-section overflow-auto mb-3" ref={tabsContainerRef}>
            <div className="custom-tabs d-flex align-items-center gap-2">
                {tabsData.map((tab) => (
                    <span
                        key={tab.id} role='button'
                        className={`tab-item ${activeTab === tab.id ? "custom-tabActive" : ""}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.name}
                    </span>
                ))}
            </div>
        </section>
      </div>

      {/* Tab Description
      <div className="tab-description container">
        <p className="mt-3 tab-heading text-center">
            {tabsData.find((tab) => tab.id === activeTab)?.description}
        </p>

      </div> */}

      {/* Courses Display */}
      <div className="courses-display container row my-5">
        {filteredBlog.length > 0 ? (
          filteredBlog.map((blog) => (
            <Link to={`/blog-post/${blog.slug}`} key={blog.id} className="col-md-4 col-sm-12 my-4">
              <div className="blog-card card border-0 shadow-sm">
                <img loading='lazy' src={blog.image} alt={blog.title} className="card-img-top" height="185px" width='341px' />
                <div className="card-body">
                  <h4 className="card-title">{blog.title}</h4>
                  <p className="text-muted small">
                    <strong className="me-2">{blog.author.date} |</strong>  by {blog.author.name}
                  </p>
                </div>
              </div>
          </Link>
          ))
        ) : (
          <p className="text-center m-auto mt-4">No blog available for this category.</p>
        )}
      </div>
    </section>
  )
}

export default BlogSection