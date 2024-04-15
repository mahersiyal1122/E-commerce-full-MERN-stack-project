import React from 'react'
import hand_icon from "../assets/hand_icon.png"
import arrow_icon from "../assets/arrow.png"
import hero_image from "../assets/hero_image.png"

const Hero = () => {
    return (
        <div className='flex justify-between px-28 h-screen mb-20 --- lg:max-xl:h-auto lg:max-xl:px-16 --- sm:max-lg:px-12 sm:max-lg:justify-between sm:max-lg:py-5 sm:max-lg:pr-0 sm:max-lg:h-auto --- mobile:max-sm:p-5 mobile:max-sm:h-max mobile:max-sm:pr-0 mobile:max-sm:mb-5' style={{background: "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)"}}>
            <div className='flex flex-col justify-center gap-5 leading-[1.1] ---  --- sm:max-md:gap-3 --- mobile:max-sm:gap-2 '>
                <h2 className='text-[#090909] text-2xl font-semibold --- lg:max-xl:text-xl --- sm:max-md:text-lg --- mobile:max-sm:text-base '>NEW ARRIVALS ONLY</h2>
                <div className='--- sm:max-md:flex sm:max-md:flex-col sm:max-md:gap-2 --- mobile:max-sm:gap-2'>
                    <div className='flex items-center gap-5 '>
                        <p className='text-[#171717] text-8xl font-bold --- lg:max-xl:text-7xl --- sm:max-lg:text-6xl  --- sm:max-md:text-4xl --- mobile:max-sm:text-3xl'>new</p>
                        <img className='w-24  --- lg:max-xl:w-20 --- sm:max-lg:w-16 --- sm:max-md:w-14 --- mobile:max-sm:w-10' src={hand_icon} alt="" />
                    </div>
                    <p className='text-[#171717] text-8xl font-bold --- lg:max-xl:text-7xl --- sm:max-lg:text-6xl --- sm:max-md:text-4xl --- mobile:max-sm:text-3xl'>Collections</p>
                    <p className='text-[#171717] text-8xl font-bold --- lg:max-xl:text-7xl --- sm:max-lg:text-6xl --- sm:max-md:text-4xl --- mobile:max-sm:text-3xl'>for everyone</p>
                </div>
                <div className='flex justify-center items-center gap-4 w-80 h-20 bg-[#ff4141] text-white rounded-[75px] mt-7 text-xl font-medium cursor-pointer --- sm:max-lg:w-72 sm:max-lg:h-[70px] sm:max-lg:mt-4 --- mobile:max-sm:w-40 mobile:max-sm:h-10 mobile:max-sm:text-xs mobile:max-sm:gap-2 mobile:max-sm:mt-2'>
                    <div>Latest Collection</div>
                    <img className='mobile:max-sm:w-5' src={arrow_icon} alt="" />
                </div>
            </div>
            <div className='flex flex-col justify-center ---'>
                <img className='w-[450px] --- lg:max-xl:w-[360px] --- sm:max-lg:w-[400px] sm:max-lg:h-[500px] --- sm:max-md:w-[350px] sm:max-md:h-[450px] --- mobile:max-sm:w-[200px] mobile:max-sm:h-[280px]' src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero
