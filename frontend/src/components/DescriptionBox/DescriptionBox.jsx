import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='my-20 mx-[120px] --- lg:max-xl:mx-[60px] --- sm:max-lg:mx-[40px] --- mobile:max-sm:mx-[20px] mobile:max-sm:my-10'>
      <div className='flex'>
        <div className='flex justify-center items-center text-base font-semibold w-[170px] h-[70px] border border-[#d0d0d0] --- mobile:max-sm:text-sm mobile:max-sm:w-[130px] mobile:max-sm:h-[50px] --- mobile:max-mb_max:w-1/2'>Description</div>
        <div className='flex justify-center items-center text-base font-semibold w-[170px] h-[70px] border border-[#d0d0d0] --- mobile:max-sm:text-sm mobile:max-sm:w-[130px] mobile:max-sm:h-[50px] bg-[#fbfbfb] text-[#555] --- mobile:max-mb_max:w-1/2'>Reviews (122)</div>
      </div>
      <div className='flex flex-col gap-5 border border-[#d0d0d0] p-9 pb-[60px] --- sm:max-lg:text-sm sm:max-lg:p-6 --- mobile:max-sm:text-sm mobile:max-sm:p-4 mobile:max-sm:gap-2'>
        <p>An e-commerce online platform is a digital marketplace where businesses and consumers buy and sell goods or services online. It features product listings, secure payment gateways, order management, and customer accounts for a seamless shopping experience. With search and filter options, promotions, and responsive design, these platforms attract global customers and offer 24/7 availability. They reduce overhead costs, provide valuable data analytics, and are scalable to meet growing demands. E-commerce platforms revolutionize shopping, offering convenience, accessibility, and a broader market reach for businesses.</p>
        <p>In conclusion, e-commerce online platforms have transformed the way businesses engage with customers, providing a convenient and accessible marketplace for buying and selling goods and services globally.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
