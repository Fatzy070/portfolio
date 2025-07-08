import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Info from '../data/Info';

const Home = () => {
    const {image , name , menuBar , menu , cancel } = Info;
    const [showMenu , setShowMenu] = useState(false);

    const toggleShow = () => {
      setShowMenu(!showMenu)
    }
  return (
    <>
      <div className='flex  justify-center pt-10 lg:pt-20'>
        <section className='z-10   bg-white h-[80px] sm:h-[100px]  md:h-[90px] flex items-center justify-between w-full mx-[1rem] md:mx-[5rem] lg:mx-[12rem] rounded-[60px]'>
          <div className='flex items-center gap-1 pl-2 '>
               <div className='name text-white text-[2.1rem]  w-[60px] h-[60px] rounded-[50%] flex justify-center items-center bg-black '>
                  <p>OF</p>
              </div>

                 <div className='name lg:text-[2rem] font-semibold'>
                    <p>{name}</p>
                </div>
          </div>
          <div className='flex relative h-full pr-14 items-center'>
            <div className='text-[1.2rem] md:text-[1.4rem] font-bold bg-black text-white w-[90px] md:w-[130px] flex justify-center items-center h-[60%] md:h-[75%] rounded-[50px]'>
              <p>Menu</p>
            </div>
            <div className='absolute right-[30px] md:right-[25px] bg-blue-800 h-[40px]  md:h-[60px] flex justify-center items-center w-[40px] md:w-[60px] rounded-full'>
            <FontAwesomeIcon icon={showMenu ? cancel : menuBar}  className='h-[50%] text-white' onClick={toggleShow} />
            </div>
          </div>
        </section>
         <div >
              {showMenu && (
                <nav className="absolute left-0 top-0   w-screen">
           <ul className='bg-[rgba(22,35,80,255)] h-[100dvh] flex flex-col items-center justify-center w-full ' >
         {menu.map((item, index) => (
           <li key={index} className="homes text-3xl text-white py-2">
             {item.name}
           </li>
         ))}
        </ul>
        </nav>
        )}
            </div>
      </div>
    </>
  );
};

export default Home;