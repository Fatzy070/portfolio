import React from 'react';
import { Linkedin , Twitter , Github , Mail , Facebook} from 'lucide-react';


const Contact = () => {
  return (
    <>
      <div className=' mb-4 text-[3rem] contact mt-[2rem] text-blue-700 text-center '>
        <h1>Contact Me</h1>
      </div>
      <section className='flex flex-wrap justify-center  lg:px-[10rem] gap-6'>
        <div>
        <a href="" className='bg-white text-blue-700 justify-between pl-2 pr-4 items-center rounded-[30px] flex border w-[200px] '>
          <div className=' w-[35px] overflow-hidden bg-blue-800 flex justify-center items-center rounded-full h-[35px]'>
               <Linkedin size={24} color='white' />
          </div>
          <div className='text-[2rem] link '>
            <h1>LinkedIn</h1>
          </div>
        </a>
      </div>
      <div>
        <a href="" className='bg-white text-black justify-between pl-2 pr-5 items-center rounded-[30px] flex border w-[200px] '>
          <div className=' w-[35px] overflow-hidden bg-black flex justify-center items-center rounded-full h-[35px]'>
               <Twitter size={24} color='white' />
          </div>
          <div className='text-[2rem] link '>
            <h1>Twitter</h1>
          </div>
        </a>
      </div>
      <div>
        <a href="" className='bg-white text-black  justify-center items-center rounded-[30px] flex border w-[150px] '>
          <div className='text-[2rem] link'>
            <h1>Tiktok</h1>
          </div>
        </a>
      </div>
      <div>
        <a href="" className='bg-white text-black justify-between pl-2 pr-5 items-center rounded-[30px] flex border w-[200px] '>
          <div className=' w-[35px] overflow-hidden bg-black flex justify-center items-center rounded-full h-[35px]'>
               <Github size={24} color='white' />
          </div>
          <div className='text-[2rem] link '>
            <h1>Github</h1>
          </div>
        </a>
      </div>
      <div>
        <a href="" className='bg-white text-blue-600 justify-between pl-2 pr-3 items-center rounded-[30px] flex border w-[200px] '>
          <div className=' w-[35px] overflow-hidden bg-blue-700  flex justify-center items-center rounded-full h-[35px]'>
               <Facebook size={24} color='white' />
          </div>
          <div className='text-[2rem] link '>
            <h1>Facebook</h1>
          </div>
        </a>
      </div>
      <div>
        <a href="" className='bg-white text-blue-700 justify-center items-center rounded-[30px] flex border w-[180px] '>
          <div className='text-[2rem] link '>
            <h1>Telegram</h1>
          </div>
        </a>
      </div>
      <div>
        <a href="" className='bg-white text-gray-600 justify-between pl-2 pr-5 items-center rounded-[30px] flex border w-[160px] '>
          <div className=' w-[35px] overflow-hidden bg-gray-600 flex justify-center items-center rounded-full h-[35px]'>
               <Mail size={24} color='white' />
          </div>
          <div className='text-[2rem] link '>
            <h1>Email</h1>
          </div>
        </a>
      </div>
      </section>
    </>
  );
};

export default Contact;
