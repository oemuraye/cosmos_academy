import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "../../data/blogPosts";
import HeroSection from "../../components/BlogPostPage/HeroSection";
import AuthorDetails from "../../components/BlogPostPage/AuthorDetails";
import BlogList from "../../components/BlogPostPage/BlogList";

import './blogPost.css';

const BlogPost = () => {
  const { postID } = useParams(); 
  
  const post = posts.find((p) => p.slug === postID);  

  return (
    <main className="blog_post-page section-width">
      {post && (
        <div className="container">
          <HeroSection post={post} />

          <hr className="d-block d-md-none mt-3" />
          <AuthorDetails author={post.author} />
          <hr className="d-block d-md-none mb-5" />
          
          <div className="blog-content padding_y-spacing">
            {post.content.map((section, index) => (
              <div key={index} className="blog-section my-5 py-2">
                {section.heading && <h2 className="fw-bold">{section.heading}</h2>}
                <p dangerouslySetInnerHTML={{ __html: section.text }}></p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="container my-5">
        {/* <h2 className="text-center my-5">Related Blog Posts</h2> */}
        <BlogList />
      </div>
    </main>
  );
};

export default BlogPost;