import React from 'react';
import { useState } from 'react';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className='text-white text-center text-[3rem] md:text-[6rem] font-bold'>
        <h1 className='fredi text-[rgba(29,78,216,255)]'>About me</h1>
        <h1 className='about-text transform translate-y-[-4.1rem] md:translate-y-[-8.5rem]'>About me</h1>
      </div>
    <div className="mx-[1.5rem] md:mx-[3rem] text-white  leading-relaxed">
     <div className='about-me md:text-[1.3rem] p-[20px] md:p-[2rem] rounded-[1rem] bg-[rgba(23,37,84,255)]'>
         <p>
        Hello there! I'm <span className="font-semibold text-blue-600">Ogunsola Faruk</span>, a passionate and creative web developer with a strong interest in both frontend and backend technologies. I specialize in building user-friendly, responsive websites and web applications using tools like HTML, CSS, JavaScript, React, Node.js, and MongoDB.
        {!showMore && <span className="text-gray-500">...</span>}
        {showMore && (
          <>
            <br /><br />
            I'm someone who believes in continuous learning and growth. Whether it's solving bugs, creating elegant UI, or building full-stack projects, I enjoy turning ideas into reality through clean, efficient code. My journey started out of curiosity, but quickly turned into a full-blown passion for tech.

            <br /><br />
            Outside of coding, you’ll probably catch me exploring cybersecurity concepts, listening to music, or learning something new on YouTube. I'm always open to opportunities where I can contribute, grow, and collaborate with others who are as passionate about technology as I am.

            <br /><br />
            Thanks for stopping by — let's build something great together!
          </>
        )}
      </p>
     </div>
        
      <section className='flex justify-center'>
          <div className='border-blue-600 hover:bg-white  border-[1px] mt-[1rem] border-solid text-center w-[185px] py-1 rounded-[50px]'>
        <button
        onClick={() => setShowMore(!showMore)}
        className="text-blue-600 font-semibold text-[1.6rem]"
      >
        {showMore ? '🙈 Read less' : '👁 Read More'}
      </button>
      </div>
      </section>
    </div>

    </>
  );
};

export default About;
