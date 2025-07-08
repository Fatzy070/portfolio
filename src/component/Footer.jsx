import React from 'react';

const Footer = () => {
    return (
        <>
        <div className=' bg-blue-600 flex justify-between items-center text-white pr-3 mt-10 rounded-[50px] md:`pl-7 md:py-[8px] md:mx-[4rem] lg:mx-[8rem]'>
               <div className='name border-white border text-white text-[2.1rem]  w-[60px] h-[60px] rounded-[50%] flex justify-center items-center bg-black '>
                  <p>OF</p>
              </div>
              <div className='text-[1.3rem] font-serif text-gray-300  font-semibold'>
                <h1>Designed and Built by Fatzy Faruk</h1>
              </div>
        </div>
        
        </>
    );
};

export default Footer;