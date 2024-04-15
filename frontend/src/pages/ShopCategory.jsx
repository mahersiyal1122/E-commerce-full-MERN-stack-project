import React, {useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from "../components/assets/dropdown_icon.png"
import Item from '../components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='mb-20 --- lg:max-xl:mb-0 --- mobile:max-sm:mb-0'>
      <img className='block my-8 mx-auto w-[83%] --- lg:max-xl:w-[90%] --- sm:max-lg:w-full --- mobile:max-sm:w-full mobile:max-sm:my-0 mobile:max-sm:mb-4 mobile:max-sm:h-24' src={props.banner} alt="" />
      <div className='flex justify-between items-center my-0 mx-[120px] --- lg:max-xl:mx-[100px] --- md:max-lg:mx-[80px] --- sm:max-lg:mx-[30px] --- mobile:max-sm:mx-[20px]'>
        <p className='text-sm ---'>
          <span className='font-semibold'>Showing 1-12</span> out of 36 products
        </p>
        <div className='flex justify-center items-center gap-1 py-[10px] px-5 rounded-[40px] border border-[#888] --- mobile:max-sm:text-[10px] mobile:max-sm:p-0 mobile:max-sm:w-16 mobile:max-sm:h-6 mobile:max-sm:self-start'>
          Sort by <img className='mobile:max-sm:w-[8px]' src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className='my-5 mx-[120px] grid grid-cols-4 gap-y-20 --- lg:max-xl:mx-[30px] lg:max-xl:justify-items-center lg:max-xl:grid-cols-3 lg:max-xl:gap-y-16 --- sm:max-lg:grid-cols-2 sm:max-lg:mx-auto sm:max-lg:justify-items-center ---  mobile:max-sm:mx-[20px] mobile:max-sm:grid mobile:max-sm:grid-cols-2 mobile:max-sm:gap-6 mobile:max-sm:w-[90vw] '>
        {all_product.map((item,index)=>{
          if (props.category===item.category) {
            return <Item key={index} id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price} image={item.image}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className='flex justify-center items-center my-36 mx-auto w-[233px] h-[69px] text-[#787878] bg-[#ededed] rounded-[75px] text-lg font-medium cursor-pointer --- lg:max-xl:my-24 --- sm:max-lg:my-20 --- mobile:max-sm:my-8 mobile:max-sm:text-sm mobile:max-sm:w-[135px] mobile:max-sm:h-[42px] '>
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
