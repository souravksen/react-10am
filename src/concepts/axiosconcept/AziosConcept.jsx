import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AziosConcept = () => {
    const[products,setproducts]=useState([])
    const fdata=async()=>{
        const {data}=await axios.get("https://fakestoreapi.com/products")
        setproducts(data)
    }
    useEffect(()=>{
        fdata()
    },[])
  return (
    <div>
        <h1>AxiosConcept</h1>
        {
            products.length==0?<h1>Loading...</h1>:products.map((ele,index)=>{
                return(
                    <h1>{ele.tittle}</h1>

                )
            })
        }
    </div>
  )
}

export default AziosConcept