import React from 'react';
import './BlogCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import blog_pic from '../../assets/blog_pic.jpg';

const BlogCard = () => {
  return (
    <div className='screen-container'>
      <div className='app-container'>
        <div className='blog-container'>
          <img src={blog_pic} className='image-container' />
          <span className='details-container'>
            <span className='type-container'>
              {"Interior"}
            </span>
            <span className='title-container'>
              {"Top 5 Living Room Inspirations"}
            </span>
            <span className='subtitle-container'>
              {"Curated vibrants colors for your living, make it pop & calm in the same time."}
            </span>
            <span className='button-container'>
              {"Read more"}
              <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default BlogCard