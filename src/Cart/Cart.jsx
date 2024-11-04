import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function Cart() {
    const userId=localStorage.getItem("userId")
    const [cartItems,setCartItems]=useState([])
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        fetchCartItems()
    },[])
    function fetchCartItems(){
        axios.get(`https://mern-ecommerece.onrender.com/api/cart?userId=${userId}`)
            .then((res)=>{
                console.log(res.data.items)
                setCartItems(res.data.items)
                setLoading(false)
            })
    }
    return (
        <div>
            {
               loading?(
                <p>Loading</p>
               ):(
                <div className="cart-container">
                    {
                         cartItems.map((item)=>(
                            <div className="productItem" key={item._id}>
                                <p>Name:{item.product.name}</p>
                                <p>Stock:{item.product.stock}</p>
                                <p>Quantity:{item.quantity}</p>
                            </div>
                        ))
                    }
                </div>
               )
            }
        </div>
    )
}