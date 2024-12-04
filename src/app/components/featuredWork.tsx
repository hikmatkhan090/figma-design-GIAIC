import { Heebo } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

const heebo = Heebo({ subsets: ['latin'] });

const FeaturedWork = () => {
  return (
    <div className=" flex justify-center items-center  py-10">
     
      <div className="w-[919px] h-[934.2px]  ">
        
       
        <h1 className={`${heebo.className} w-[152px] h-[32px] flex whitespace-nowrap text-start font-bold text-[22px] text-black relative`}>
          Featured Works
        </h1>

       
        <div className="my-6 flex items-start gap-6">
         
          <div className=" w-[246px] h-[180px] relative ">
            <Image
              src="/assets/Rectangle 30.png"
              alt="Dashboard Design Preview"
              width={246}
              height={180}
              className="rounded-md border-2 border-red-400"
            />
          </div>

          
          <div className="flex-1">
          
            <h2 className={`${heebo.className}w-[304px] h-[44px] whitespace-nowrap font-black text-[24px] text-gray-900`}>
              Designing Dashboards
            </h2>

            
            <div className="flex items-center gap-2 mt-2">
              <span className="w-[68px] h-[24px] flex items-center bg-red-400 text-white text-[18px] px-2 py-1 rounded-full">
                2024
              </span>
              <span className={`${heebo.className} text-zinc-500 text-xl`}>Dashboard</span>
            </div>

          
            <p className="w-[622px] h-[170px] mt-3 text-black text-[18px]">
              I am not willing to do anything that would result in harm or pain. I want to fulfill the task with dedication. I am committed to doing my part and contributing to this work. My focus is on the work and its purpose.
            </p>
          </div>
        </div>

       
        <div className="my-6 flex items-start gap-6">
          
          <div className=" w-[246px] h-[180px] relative">
            <Image
              src="/assets/Rectangle 32.png" 
              alt="New Design Preview"
              width={246}
              height={180}
              className="rounded-md border-2 border-red-300"
            />
          </div>

         
          <div className="flex-1">
            
            <h2 className={`${heebo.className} w-[304px] h-[44px] whitespace-nowrap font-black text-[24px] text-gray-900`}>
            Designing Dashboards
            </h2>

            
            <div className="flex items-center gap-2 mt-2">
              <span className="w-[68px] h-[24px] flex items-center bg-red-400 text-white text-[18px] px-2 py-1 rounded-full">
                2024
              </span>
              <span className={`${heebo.className} text-zinc-500 text-xl`}>Dashboard</span>
            </div>

         
            <p className=" w-[622px] h-[170px] mt-2 text-black text-[18px]">
            I am not willing to do anything that would result in harm or pain. I want to fulfill the task with dedication. I am committed to doing my part and contributing to this work. My focus is on the work and its purpose.
            </p>
          </div>
        </div>

       
        <div className="my-6 flex items-start gap-6">
          
          <div className=" w-[246px] h-[180px] relative">
            <Image
              src="/assets/Rectangle 34.png" 
              alt="New Design Preview"
              width={246}
              height={180}
              className="rounded-md border-2 border-red-300"
            />
          </div>

         
          <div className="flex-1">
            <h2 className={`${heebo.className} w-[304px] h-[44px] whitespace-nowrap font-black text-[24px] text-gray-900`}>
            Designing Dashboards
            </h2>

            <div className="flex items-center gap-2 mt-2">
              <span className="w-[68px] h-[24px] flex items-center bg-red-400 text-white text-[18px] px-2 py-1 rounded-full">
                2024

              </span>
              <span className={`${heebo.className} text-zinc-500 text-xl`}>Dashboard</span>
            </div>
            <p className=" w-[622px] h-[170px] mt-3 text-black text-[18px]">
            I am not willing to do anything that would result in harm or pain. I want to fulfill the task with dedication. I am committed to doing my part and contributing to this work. My focus is on the work and its purpose.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeaturedWork;
