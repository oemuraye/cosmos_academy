import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "../../data/blogPosts";
import HeroSection from "../../components/BlogPostPage/HeroSection";
import AuthorDetails from "../../components/BlogPostPage/AuthorDetails";
import BlogList from "../../components/BlogPostPage/BlogList";

import './blogPost.css';
import { Helmet } from "react-helmet-async";

const BlogPost = () => {
  const { postID } = useParams(); 
  
  const post = posts.find((p) => p.slug === postID);  

  return (
    <>
      <Helmet>
        <title>{`Blog - ${post?.title || 'Catalog'} - Cosmos Academy`}</title>

        <meta property="og:title" content={post?.title} />
        <meta property="og:description" content={post?.subtitle || "Read this blog post on Cosmos Academy"} />
        <meta property="og:image" content={post?.image || "https://cosmosacademy.org/static/media/Website%20that%20thinks.4977ad356c90f7dcf9a5.png"} />
        <meta property="og:url" content={`${window.location.origin}/blog/${post?.slug}`} />
        <meta property="og:type" content="article" />

        {/* Twitter card support */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post?.title} />
        <meta name="twitter:description" content={post?.subtitle || "Read this blog post on Cosmos Academy"} />
        <meta name="twitter:image" content={post?.image || "https://cosmosacademy.org/static/media/Website%20that%20thinks.4977ad356c90f7dcf9a5.png"} />
      </Helmet>
      <main className="blog_post-page section-width">
        {post && (
          <div className="container">
            <HeroSection post={post} />

            <hr className="d-block d-md-none mt-3" />
            <AuthorDetails author={post.author} post={post} />
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
    </>
  );
};

export default BlogPost;