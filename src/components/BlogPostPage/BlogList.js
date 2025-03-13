import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../../data/blogPosts";

const BlogList = () => {
  return (
    <div className="row">
      {posts.map((post) => (
        <Link to={`/blog-post/${post.id}`} key={post.id} className="col-md-4 col-sm-12 my-4">
          <div className="blog-card card border-0 shadow-sm">
            <img src={post.image} alt={post.title} className="card-img-top img-fluid" height="185px" width="341px" />
            <div className="card-body">
              <h4 className="card-title">{post.title}</h4>
              <p className="text-muted small">
                <strong className="me-2">{post.author.date} |</strong> by {post.author.name}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
