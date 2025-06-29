import React from 'react';

const Skills = () => {
    return (
        <>
           <section className='flex justify-center pt-20'>
              <div className='name border-[4px] justify-between items-center  border-[rgba(29,78,216,255)] rounded-[50px] border-solid text-white flex w-full mx-6 md:mx-[10rem] lg:mx-[18rem] px-5 md:px-10 h-[50px] md:h-[80px] lg:h-[100px]  lg:px-16 text-[1.7rem] md:text-[2.2rem] lg:text-[3.3rem]'>
                <div>
                    <h1>I'm</h1>
                </div>
                <div className='text-[rgba(29,78,216,255)]'>
                    <h1>Ogunsola</h1>
                </div>
                <div className='text-[rgba(29,78,216,255)]'>
                    <h1>Faruk</h1>
                </div>
            </div>
           </section>
           <div className='text-white text-center text-[1.5rem] py-4'>
                <p>A Software Engineer | Web Developer with <span className='rounded-full px-2  bg-[rgba(29,78,216,255)] '>Year Of Experience</span></p>
            </div>
        </>
    );
};

export default Skills;