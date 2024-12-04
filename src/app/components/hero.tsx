import { Heebo } from 'next/font/google'
import Image from 'next/image'

const heebo = Heebo({subsets:['latin']});

const Hero = () => {
  return (
    <div className='my-[66px] p-6 mx-auto w-[92%]  md:w-[1030px] md:h-[308px] flex flex-col-reverse md:flex-row items-center justify-between'>
        {/* text div */}
        <div className=' md:w-[521px] h-[305px]  flex flex-col md:justify-between items-start justify-evenly'>
            <h1 className={`${heebo.className} mt-[27px] md:text-[48px] font-black text-myBlack`}>Hi, I am Hikmat, <br/>
            Creative Technologist</h1>
            <p className={`${heebo.className} text-myBlack text-[16px] font-normal`} >I am not willing to do anything that would result in harm or pain. I want to fulfill the task with dedication. I am committed to doing my part and contributing to this work. My focus is on the work and its purpose</p>
            <button className= {`${heebo.className} w-[205px] h-[50px] bg-myPink text-white rounded-sm shadow-md shadow-black/60 text-[18px] font-medium `}>Download Resume</button>

        </div>
        {/* image div */}
        <div className='w-[282px] h-[292px] relative'>
            <Image className='z-50'  src={"/assets/hero-image.png"} alt='hero-image'  width={282} height={292}/>
            <div className='bg-heroElipse w-[292px] h-[299px] -z-10 rounded-full absolute top-2 right-2'/>
        </div>
    </div>
  )
}

export default Hero