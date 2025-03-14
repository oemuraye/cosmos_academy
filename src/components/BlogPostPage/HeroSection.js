import React from 'react'

const HeroSection = ({ post }) => {  
  return (
    <div className="hero-section">
      <div className="container">
        <div className="blog-breadcrumb d-flex gap-2 align-items-center my-2">
          <p role='button' onClick={() => window.history.back()} className="mb-0">Back</p>
          <span>|</span>
          <p className="mb-0 text-muted">{post.category}</p>
        </div>
          <div className="row">
              <section className="col-md-7 col-sm-12 my-3">
                <img src={post.image} alt={post.title} className="img-fluid rounded" width="100%" height=""/>
              </section>
              
              <section className="col-md-5 col-sm-12 my-3">
                <div className="text-center text-md-start mb-4 mb-md-0 px-1 pt-5 pt-md-0">
                    <h1 className="mb-3">{post.title}</h1>
                    <p>{post.subtitle}</p>
                </div>
              </section>
          </div>
      </div>
    </div>
  )
}

export default HeroSection
