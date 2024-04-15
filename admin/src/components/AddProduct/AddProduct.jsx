import React from 'react'
import { useState } from 'react'
import upload_area_icon from "../../assets/upload_area.svg"
const AddProduct = () => {

  const [image, setImage] = useState(false)
  const [imageRemoved, setImageRemoved] = useState(false);

  const [productDetails, setProductDetails] = useState({
    name: "",
    new_price: "",
    old_price: "",
    category: "men",
    image: ""
  })

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  }
  const productHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
  }
  const add_product = async () => {
    // console.log(productDetails)
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    }).then((res) => res.json()).then((data) => { responseData = data }).catch((error) => {
      console.error("Error: ", error);
    })

    if (responseData.success) {
      product.image = responseData.image_url;
      // console.log(product);
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }).then((res) => res.json()).then((data) => {
        if (data.success) {
          // alert("Product Added")
          // setProductDetails({
          //   name: "",
          //   new_price: "",
          //   old_price: "",
          //   category: "men"
          // })
          imageRemover();
        } else {
          alert("Failed to Add Product")
        }
      })
    }
  }

  const imageRemover=()=>{
    setImage(null);
    setImageRemoved(true)
  }

  return (
    <div className='box-border text-white w-full max-w-[800px] py-[10px] px-[50px] m-[20px] mb-5 mx-auto rounded-md bg-transparent --- mobile:max-sm:m-0 mobile:max-sm:mb-10'>
      <div className='text-center text-[32px] font-bold'>Add Product</div>
      <div className='w-full text-base'>
        <div className='my-2'>Product Title</div>
        <input value={productDetails.name} onChange={productHandler} className='inputstyle' type="text" name='name' placeholder='Type Here' />
      </div>
      <div className='flex gap-10 --- mobile:max-sm:flex-col mobile:max-sm:gap-1'>
        <div className='w-full text-base'>
          <div className='my-2'>Price</div>
          <input value={productDetails.old_price} onChange={productHandler} className='inputstyle' type="text" name='old_price' placeholder='Type Here' />
        </div>
        <div className='w-full text-base'>
          <div className='my-2'>Offer Price</div>
          <input value={productDetails.new_price} onChange={productHandler} className='inputstyle' type="text" name='new_price' placeholder='Type Here' />
        </div>
      </div>
      <div className='flex gap-10 --- mobile:max-sm:justify-between mobile:max-sm:'>
        <div className='w-full text-base --- mobile:max-sm:w-auto'>
          <div className='my-2'>Product Category</div>
          <select value={productDetails.category} onChange={productHandler} name="category" className='cursor-pointer w-[100px] h-[50px] text-sm p-[10px] border border-[#7b7b7b8d] rounded-md bg-black'>
            <option className='' value="men">Men</option>
            <option className='' value="women">Women</option>
            <option className='' value="kid">Kid</option>
          </select>
        </div>
        <div className='w-full flex gap-4 text-base --- mobile:max-sm:flex-col mobile:max-sm:gap-0 mobile:max-sm:w-auto'>
          <div className='mt-4 --- mobile:max-sm:mt-2 '>Upload Image </div>
          <label className='mt-2 cursor-pointer --- mobile:max-sm:mt-0' htmlFor="file-input">
            <img className='w-[120px] h-[120px] object-contain rounded-[10px] my-[10px] mx-0 --- mobile:max-sm:min-w-[100px] min-h-[100px]' src={image ? URL.createObjectURL(image) : upload_area_icon} alt="" />
            <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
          </label>
        </div>
      </div>
      <button onClick={() => add_product()} className='w-[160px] h-[50px] rounded-md mt-5 bg-[#6079ff] border-none text-base font-medium cursor-pointer text-white '>ADD</button>
    </div>
  )
}

export default AddProduct
