import React from 'react'
import { Heebo } from 'next/font/google'

const heebo = Heebo({subsets:['latin']})

const RecentPostCard = () => {
  return (
    <div className='w-[100%] md:w-[483px] h-[356px] flex items-center bg-white '>
            <div className='m-auto p-4 w-[100%] md:w-[391px] h-[286px] flex flex-col items-start justify-between '>
                <h2 className={`${heebo.className} font-bold text-[26px]`}>Making a design system from scratch</h2>

                <div className='w-[80%] md:w-[301.28px] h-[42.12px] flex items-start justify-between'>
                    <p className={`${heebo.className}text-[16px] md:text-[18px] font-normal text-black/70`}>28 nov 2024</p>
                    <p className={`${heebo.className}text-[16px] md:text-[18px] font-normal text-black/70`}>|</p>
                    <p className={`${heebo.className}text-[16px] md:text-[18px] font-normal text-black/70`}>Design, Pattern</p>
                </div>
                <p>I am not willing to do anything that would result in harm or pain. I want to fulfill the task with dedication. I am committed to doing my part and contributing to this work. My focus is on the work and its purpose</p>
            </div>
        </div>
  )
}

export default RecentPostCard