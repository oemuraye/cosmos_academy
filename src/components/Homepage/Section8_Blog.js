import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { posts } from "../../data/blogPosts";

import externalGoLinkIcon from "../../assets/icons/externalGoLink-black_icon.png";
import blogImg1 from "../../assets/images/blogImg1.png";
import blogImg2 from "../../assets/images/blogImg2.png";

const blogPosts = [
  {
    id: 1,
    slug: "nigerian-tech-ecosystem",
    title: "The Nigerian Tech Ecosystem: A Call for Authentic Innovation",
    author: "Trust Oghale",
    date: "Feb 28, 2025",
    image: blogImg1,
  },
  {
    id: 2,
    slug: "future-of-ai",
    title: "10 Product design portfolios to inspire you.",
    author: "Alexander Ikani",
    date: "Feb 28, 2025",
    image: blogImg2,
  },
  {
    id: 3,
    slug: "engine-development",
    title: "10 Product design portfolios to inspire you.",
    author: "Alexander Ikani",
    date: "Feb 28, 2025",
    image: blogImg2,
  },
  // Add more posts if needed
];

const shuffleArray = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const BlogSection = () => {
  const [randomPosts, setRandomPosts] = useState([]);

  useEffect(() => {
    const shuffled = shuffleArray(posts);
    setRandomPosts(shuffled.slice(0, 3));
  }, []);

  useEffect(() => {
    const updateRandomPosts = () => {
      const shuffled = shuffleArray(posts);
      setRandomPosts(shuffled.slice(0, 3));
    };
  
    updateRandomPosts(); 
    const interval = setInterval(updateRandomPosts, 30000); // Every 30 seconds
  
    return () => clearInterval(interval); 
  }, []);
  

  return (
    <section className="blog-section section-width padding_y-spacing my-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
          <h2>From Our Blog</h2>
          <Link to="/resources" className="heading-link d-flex gap-2 align-items-center">
            View More Blog Content
            <img src={externalGoLinkIcon} alt="external link icon" width="10" height="10" />
          </Link>
        </div>

        <div className="row blog-cards g-4">
          {randomPosts.map((post) => (
            <Link to={`/blog-post/${post.slug}`} key={post.id} className="col-md-4 col-sm-12 my-4">
              <div className="blog-card card border-0 shadow-sm">
                <img src={post.image} alt={post.title} className="card-img-top img-fluid" />
                <div className="card-body">
                  <h4 className="card-title mt-2">{post.title}</h4>
                  <p className="text-muted small">
                    <strong className="me-2">{post.author.date} |</strong> by {post.author.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;