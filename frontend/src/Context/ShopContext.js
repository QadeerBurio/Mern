// context.js
import React, { createContext, useEffect, useState } from 'react';
// import {loadStripe} from '@stripe/stripe-js';

export const ShopContext= createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for(let index=0; index<300+1; index++){
        cart[index]=0
    }
    return cart;
}

const ShopContextProvider=(props)=>{
    const [all_product, setAll_Product]=useState([]);
    const [cartItems, setCartItems]=useState(getDefaultCart());

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Product(data))

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart',{
                method:"POST",
                headers:{
                    Accept:'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                    
                },
                body:"",

            }).then((response)=>response.json())
            .then((data)=>setCartItems(data));
        
        }
    }, [])

    const AddToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                    
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data))
        }
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                    
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data))
        }

    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                let itemInfo = all_product.find(product => product.id === Number(itemId));
                totalAmount += itemInfo.new_price * cartItems[itemId];
            }
        }
        return totalAmount;
    }
    const getTotalCartItems=()=>{
        let totalItem=0;
        for(const itemId in cartItems ){
            if(cartItems[itemId]>0){
                totalItem+=cartItems[itemId];
            }
        }
        return totalItem;
    }

    // // payment integration
    // const makePayment= async()=>{
    //     const stripe = await loadStripe("pk_test_51OtXwpGGzAqDIIFfOQ5dyccmgQeDx0LbgH354X9sGuXpze99eaLmAEX4tNuh1Z9flcA2QzHYojWty3zzEnzG47hf00RvXo53iG")

    //     const body ={
    //         products:cartItems,
    //     }
    //     const headers={
    //         "Content-Type":"application/json"
    //     }
    //     const response=await fetch("http://localhost:4000/create-checkout-session",{
    //         method:"POST",
    //         headers:headers,
    //         body:JSON.stringify(body)
    //     })

    //     const session=await response.json();

    //     const result =stripe.redirectToCheckout({
    //         sessionId:session.id
    //     });

    //     if(result.error){
    //         console.log(result.error)
    //     }
    // }
    const contextValue={getTotalCartItems, getTotalCartAmount,all_product , cartItems, AddToCart, removeFromCart , }


    return (<ShopContext.Provider value={contextValue}>
    {props.children}

    </ShopContext.Provider>)

}

export default ShopContextProvider;