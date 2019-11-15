import React from 'react';

const Links = props => {
  return (
    <div className='d-flex mb-3'>
      <i className="far fa-2x fa-address-card text-secondary"></i>
      <div className='d-flex m-auto w-50'>
        <span className='ml-3 mr-auto'>
          <a href='https://www.facebook.com/raul.savin.3' target='_blank' rel="noopener noreferrer">
            <i className='social-border m-auto fab fa-facebook-f fa-1x'></i>
          </a>
        </span>
        <span className='ml-3 mr-auto'>
          <a href='https://twitter.com/texterror2' target='_blank' rel="noopener noreferrer">
            <i className='social-border fab fa-twitter fa-1x'></i>
          </a>
        </span>
        <span className='ml-3 mr-auto'>
          <a href='https://www.instagram.com/_texterror_/' target='_blank' rel="noopener noreferrer">
            <i className='social-border fab fa-instagram fa-1x'></i>
          </a>
        </span>
        <span className='ml-3 mr-auto'>
          <a href='https://www.linkedin.com/in/raul-savin-660010188/' target='_blank' rel="noopener noreferrer">
            <i className='social-border fab fa-linkedin-in fa-1x'></i>
          </a>
        </span>
      </div>
    </div>
  )
}

export default Links;