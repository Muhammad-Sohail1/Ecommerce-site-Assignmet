import React, { useState } from "react";
import axios from "axios";
import Card from "./input";

const Commerce = () => {

      
   const [val ,setval] = useState({
     
      
      Title : "",
      Product_Details : "",
      Product_Price : "",
      Product_ID : ""

   });

    const submits = (e) => {
        e.preventDefault();
          axios.post('http://localhost:3001/Electronic',val)
          .then((res) => {
              
          })

    }

          // if show the data on browser page use this method and map method i am not doing yet 

          // axios.get('http://localhost:3001/Electronic')
          // .then((res)=> {
          //   console.log(res.data)
          // })


   const changehandle = (event) => {

    const {name ,value} = event.target;
    console.log(value)

    setval(preve => ({

      ...preve,
      [name] : value

    }))
   }

   

  return(
    <React.Fragment>
      <h1>Ecommerce-App For Free Home Delivery</h1>
      <div id="div1">
        <h3>Enter Product Name And Details</h3>
      <form onSubmit={submits}>
        <input type="text" placeholder="Title" name="Title" value={val.Title} onChange={changehandle}/>
        <br />
        <input type="text" placeholder="Product Details" name="Product_Details" value={val.Product_Details} onChange={changehandle} />
        <br />
        <input type="text" placeholder="Product Price" name="Product_Price" value={val.Product_Price} onChange={changehandle} />
        <br />
        <div id="mg">
         <img src="http://res.cloudinary.com/piaic/image/upload/c_scale,w_143/v1590006536/samsung-galaxy-s10_dnrlz8.jpg" alt="samsung" ></img> 
         </div>
         <br />
         <input type="text" placeholder="Product ID" name="Product_ID" value={val.Product_ID} onChange={changehandle}  />
          <br />
          <button id="btn">Submit</button>
      </form>
      </div>
    <br />
    <div>
      <Card />
    </div>
      
    </React.Fragment>
  )
}

export default Commerce;
