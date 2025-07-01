import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';




const Contact = () => {
  return (
    <>
      <div className='text-white'>
          <h1>Contact Me</h1>
      </div>
      <section className='text-white'>
        <div>
          <div>
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
