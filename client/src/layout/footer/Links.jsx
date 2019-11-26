import React from 'react';

const Links = () => {
  return (
    <div className='d-flex mb-3 ml-5'>
      <i className="far fa-2x fa-address-card text-secondary"></i>
      <div className='d-flex m-auto w-50'>
        <span className='ml-3 mr-auto'>
          <a href='https://www.facebook.com/raul.savin.3' target='_blank' rel="noopener noreferrer">
            <i className='social-border m-auto fab fa-facebook-f fa-1x'></i>
          </a>
        </span>
        <span className='ml-3 mr-auto'>
          <a href='https://twitter.com' target='_blank' rel="noopener noreferrer">
            <i className='social-border fab fa-twitter fa-1x'></i>
          </a>
        </span>
        <span className='ml-3 mr-auto'>
          <a href='https://www.instagram.com' target='_blank' rel="noopener noreferrer">
            <i className='social-border fab fa-instagram fa-1x'></i>
          </a>
        </span>
        <span className='ml-3 mr-auto'>
          <a href='https://www.linkedin.com' target='_blank' rel="noopener noreferrer">
            <i className='social-border fab fa-linkedin-in fa-1x'></i>
          </a>
        </span>
      </div>
    </div>
  )
}

export default Links;