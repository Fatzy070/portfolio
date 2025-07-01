import React from 'react';
import Nodelogo from '../assets/Node.js_logo.svg'
import reactlogo from '../assets/react.svg'
import tailwindlogo from '../assets/Tailwind_CSS_Logo.svg'

const Skills = () => {
    return (
        <>
           <section className='flex justify-center pt-[7rem] md:pt-[10rem] lg:pt-20'>
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
           <div className='text-white text-center text-[1.3rem] px-10 md:px-0 md:text-[1.5rem] py-7'>
                <p>A Software Engineer | Web Developer with <span className='rounded-full px-2  bg-[rgba(29,78,216,255)] '>Year Of Experience</span></p>
            </div>
            <div className='text-white flex justify-center gap-4'>
                <div className='border-[2px] px-3 py-[8px] text-[rgba(29,78,216,255)] hover:bg-[rgba(29,78,216,255)] rounded-[10px] hover:text-white transition-all border-solid border-[rgba(29,78,216,255)]'>
                    <p>Resume</p>
                </div>
                <div className='border-[rgba(29,78,216,255)] transition-all bg-[rgba(29,78,216,255)] hover:bg-black rounded-[10px]  px-3 py-[8px] border-[2px] border-solid '>
                    <p>Hire me</p>
                </div>
            </div>
           <section className='flex mt-[2rem] relative border mx-[2rem] md:mx-[5rem] lg:mx-[20rem] justify-between h-[15rem] md:h-[20rem]'>
             <div>
                    <div className='flex mb-[3rem] md:mb-[5rem] bg-white border w-[100px] md:w-[150px] justify-center items-center py-[4px] md:py-3 rounded-[30px] gap-2 md:gap-3'>
                <div>
                    <img src={tailwindlogo} alt='' className='w-[20px] md:w-[35px]' />
                </div>
                <div className='text-[13px] md:text-[1.2rem] font-bold'>
                    <p>Tailwind</p>
                </div>
            </div>
                <div className='flex absolute left-[-20px] md:left-[-50px] bg-white border w-[100px] md:w-[150px]  justify-center items-center py-[4px] md:py-3 rounded-[30px] gap-2 md:gap-3'>
                <div>
                    <img src={reactlogo } alt='' className='w-[20px] md:w-[35px]' />
                </div>
                <div className='text-[13px] md:text-[1.2rem] font-bold'>
                    <p>React</p>
                </div>
            </div>
             </div>
             <div>
                    <div className='flex mb-[3rem] md:mb-[5rem] bg-white border w-[100px] md:w-[150px] justify-center items-center py-[4px] md:py-3 rounded-[30px] gap-2 md:gap-3'>
                <div>
                    <img src={tailwindlogo} alt='' className='w-[20px] md:w-[35px]' />
                </div>
                <div className='text-[13px] md:text-[1.2rem] font-bold'>
                    <p>Tailwind</p>
                </div>
            </div>    
            <div className='flex absolute right-[-20px] md:right-[-50px] bg-white border w-[100px] md:w-[150px]  justify-center items-center py-[4px] md:py-3 rounded-[30px] gap-2 md:gap-3'>
                <div>
                    <img src={Nodelogo} alt='' className='w-[20px] md:w-[35px]' />
                </div>
                <div className='text-[13px] md:text-[1.2rem] font-bold'>
                    <p>NodeJs</p>
                </div>
            </div>
             </div>
           </section>
        </>
    );
};

export default Skills;