import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './AddProduct.css'
export default function AddProduct() {
    const navigate=useNavigate()
    const [productName,setProductName]=useState("")
    const [productPrice,setProductPrice]=useState("")
    const [productDescription,setProductdescription]=useState("")
    const [stock,setStock]=useState("")
    const [category,setCatogry]=useState("")
    function addProduct(){

    }
    return (
        <div className='product-container'>
            <div className="form-group">
                <label htmlFor="">Product Name</label>
                <input 
                    type="text" 
                    placeholder='Enter product Name'
                    onChange={(e)=>setProductName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Product Price</label>
                <input 
                    type="text" 
                    placeholder='Enter price'
                    onChange={(e)=>setProductPrice(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Description</label>
                <input 
                    type="text" 
                    placeholder='Enter product description'/>
            </div>
            <div className="form-group">
                <label htmlFor="">Stock</label>
                <input 
                    type="text" 
                    placeholder='Enter Stock'
                    onChange={(e)=>setStock(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Category</label>
                <input 
                    type="text" 
                    placeholder='Enter which category'
                    onChange={(e)=>setCatogry(e.target.value)}/>
            </div>
            <button onClick={addProduct}>Add Product</button>
        </div>
    )
}

