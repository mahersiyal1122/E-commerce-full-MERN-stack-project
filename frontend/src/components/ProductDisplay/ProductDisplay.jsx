import React, { useContext } from 'react'
import star_icon from "../assets/star_icon.png"
import star_dull_icon from "../assets/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {
    const {product}=props;

    const {addToCart}=useContext(ShopContext)

  return (
    <div className='flex my-0 mb-10 mx-[120px] --- lg:max-xl:mx-[60px] --- sm:max-lg:mx-[40px] --- mobile:max-sm:mx-[20px] mobile:max-sm:grid mobile:max-sm:gap-8'>
      <div className='flex gap-4 w-[50vw] --- sm:max-lg:flex-col-reverse --- mobile:max-sm:w-full mobile:max-sm:flex-col-reverse '>
        <div className='flex flex-col gap-4 --- sm:max-lg:grid sm:max-lg:grid-cols-4 --- mobile:max-sm:grid mobile:max-sm:grid-cols-4'>
            <img className='h-[100px] w-[120px] --- sm:max-lg:w-full --- mobile:max-sm:w-full' src={product.image} alt="" />
            <img className='h-[100px] w-[120px] --- sm:max-lg:w-full --- mobile:max-sm:w-full' src={product.image} alt="" />
            <img className='h-[100px] w-[120px] --- sm:max-lg:w-full --- mobile:max-sm:w-full' src={product.image} alt="" />
            <img className='h-[100px] w-[120px] --- sm:max-lg:w-full --- mobile:max-sm:w-full' src={product.image} alt="" />
        </div>
        <div>
            <img className='w-[420px] h-[448px] --- sm:max-lg:w-full sm:max-lg:h-[400px] --- mobile:max-sm:w-full mobile:max-sm:h-[410px]' src={product.image} alt="" />
        </div>
      </div>
      <div className='flex flex-col my-0 ml-[30px] w-[50vw] --- mobile:max-sm:w-full mobile:max-sm:ml-0'>
        <h1 className='text-[#3d3d3d] text-3xl font-bold --- lg:max-xl:text-2xl --- sm:max-lg:text-xl --- mobile:max-sm:text-xl'>{product.name}</h1>
        <div className='flex items-center gap-1 text-[#1c1c1c] text-base mt-2 --- lg:max-xl:mt-1 --- sm:max-lg:mt-1'>
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className='flex items-center gap-7 text-2xl font-bold my-[20px] mx-0 --- '>
            <div className='text-[#818181] line-through'>
                ${product.old_price}
            </div>
            <div className='text-[#ff4141]'>
                ${product.new_price}
            </div>
        </div>
        <div className='text-sm'>
        Upgrade your casual wardrobe with our Classic Cotton T-Shirt, a timeless piece designed for comfort and style. Crafted from premium 100% cotton fabric, this T-shirt offers a soft and breathable feel, making it perfect for all-day wear.
        </div>
        <div>
            <h1 className='text-[#656565] text-xl font-semibold mt-3'>Select Size</h1>
            <div className='flex gap-5 my-4 mx-0 --- mobile:max-sm:gap-4'>
                <div className='bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer py-2 px-3 --- lg:max-xl:px-2 lg:max-xl:py-1 --- mobile:max-sm:p-0 mobile:max-sm:text-sm mobile:max-sm:w-10 mobile:max-sm:flex mobile:max-sm:justify-center mobile:max-sm:items-center mobile:max-sm:h-9 '>SM</div>
                <div className='bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer py-2 px-3 --- lg:max-xl:px-2 lg:max-xl:py-1 --- mobile:max-sm:p-0 mobile:max-sm:text-sm mobile:max-sm:w-10 mobile:max-sm:flex mobile:max-sm:justify-center mobile:max-sm:items-center mobile:max-sm:h-9 '>MD</div>
                <div className='bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer py-2 px-3 --- lg:max-xl:px-2 lg:max-xl:py-1 --- mobile:max-sm:p-0 mobile:max-sm:text-sm mobile:max-sm:w-10 mobile:max-sm:flex mobile:max-sm:justify-center mobile:max-sm:items-center mobile:max-sm:h-9 '>LG</div>
                <div className='bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer py-2 px-3 --- lg:max-xl:px-2 lg:max-xl:py-1 --- mobile:max-sm:p-0 mobile:max-sm:text-sm mobile:max-sm:w-10 mobile:max-sm:flex mobile:max-sm:justify-center mobile:max-sm:items-center mobile:max-sm:h-9 '>XL</div>
                <div className='bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer py-2 px-3 --- lg:max-xl:px-2 lg:max-xl:py-1 --- mobile:max-sm:p-0 mobile:max-sm:text-sm mobile:max-sm:w-10 mobile:max-sm:flex mobile:max-sm:justify-center mobile:max-sm:items-center mobile:max-sm:h-9 '>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}} className='w-[150px] py-3 text-base font-semibold text-white bg-[#ff4141] mb-1 border-none outline-none cursor-pointer --- lg:max-xl:w-[130px] lg:max-xl:text-sm --- mobile:max-sm:w-[120px] mobile:max-sm:text-sm '>ADD TO CART</button>
        <p className='mt-1 --- mobile:max-sm:text-sm'><span className='font-semibold'>Category :</span> {product.category.toUpperCase()}, T-Shirt, Crop Top</p>
        <p className='mt-1 --- mobile:max-sm:text-sm'><span className='font-semibold'>Tags :</span> Modern, Latest, Classic</p>
      </div>
    </div>
  )
}

export default ProductDisplay
