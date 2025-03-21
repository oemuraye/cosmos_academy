import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6"; // External link icon
import { Link } from "react-router-dom";

import externalGoLinkIcon from "../../assets/icons/externalGoLink-black_icon.png";
import blogImg1 from "../../assets/images/blogImg1.png";
import blogImg2 from "../../assets/images/blogImg2.png";

const blogPosts = [
  {
    id: 1,
    slug: 'nigerian-tech-ecosystem',
    title: "The Nigerian Tech Ecosystem: A Call for Authentic Innovation",
    author: "Trust Oghale",
    date: "Feb 28, 2025",
    image: blogImg1,
  },
  {
    id: 2,
    slug: 'future-of-ai',
    title: "10 Product design portfolios to inspire you.",
    author: "Alexander Ikani",
    date: "Feb 28, 2025",
    image: blogImg2,
  },
  {
    id: 3,
    slug: 'engine-development',
    title: "10 Product design portfolios to inspire you.",
    author: "Alexander Ikani",
    date: "Feb 28, 2025",
    image: blogImg2,
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section section-width padding_y-spacing my-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
          <h2 className="">From Our Blog</h2>
          <Link href="#" className="heading-link d-flex gap-2 align-items-center">
            View More Blog Content <img src={externalGoLinkIcon} className='' alt="icon" width='10px' height='10px' />
          </Link>
        </div>

        <div className="row blog-cards g-4">
          {blogPosts.map((post) => (
            <Link to={`/blog-post/${post.slug}`} key={post.id} className="col-md-4 col-sm-12">
              <div className="blog-card card border-0 shadow-sm">
                <img src={post.image} alt={post.title} className="card-img-top img-fluid" height="185px" width='341px' />
                <div className="card-body">
                  <h4 className="card-title">{post.title}</h4>
                  <p className="text-muted small">
                    <strong className="me-2">{post.date} |</strong>  by {post.author}
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