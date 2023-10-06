import React from 'react';
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Home = (props) => {
  const navigate = useNavigate();
  return (
    <>
      
    <div className="relative w-full h-screen  overflow-hidden bg-opacity-100 py-24 ">
      <div className=''>
      <img
        src="background.jpg"
        alt="Background"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-40"
      />
          </div>
      
          <div className="text-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
         
            <img src="img1.png" className=' w-50 text-center mx-auto block '/>
            <h1 className=" mx-auto mt-10  text-black text-4xl font-serif text-left tracking-wide font-bold uppercase lg:text-2xl pl-10 sm:text-center">
            Explore the flavors and tastes</h1> <br />
              <button onClick={() => navigate("/food")} className='bg-pink-600 lg:px-10 py-5 text-xl uppercase sm:px-10 py:10 text-white font-bold mb-1 p-5 ml-5 text-center'>search recipes</button>  
            
          </div>
        </div>

      <p>
       
      </p>
    
    </div>
    </>
  );
}

export default Home;
