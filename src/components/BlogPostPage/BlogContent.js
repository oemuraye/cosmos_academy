import React from 'react'

const BlogContent = ({ content }) => {
  return (
    <div className="blog-content">
      {content.map((section, index) => (
        <div key={index}>
          <h3>{section.heading}</h3>
          <p>{section.text}</p>
        </div>
      ))}
    </div>
  )
}

export default BlogContent
