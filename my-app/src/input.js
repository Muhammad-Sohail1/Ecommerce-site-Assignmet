import React,{Component} from 'react'
import axios from "axios";

class Card extends Component{
    constructor(){
        super()
        this.state={
            Username    : "",
            Address     : "",
            Contact     : "",
            Email       : "",
            Quantity    : ""
        }
    }


    submited = (e) => {
        e.preventDefault();


            axios.post('http://localhost:3001/Electronic',this.state)
            .then((res)=> {
                    console.log(res);
            })


    }

        handlechange = (event) => {

            this.setState({
                
                [event.target.name] : event.target.value
            })
        }

  state = {
     isActive:false  }



  handleShow = ()=>{
      this.setState({
          isActive: true      })
  }

 
   render(){
       return(
           <div id="div2">
           {this.state.isActive ? <form onSubmit={this.submited}>
               <h2>Enter Correct Information For Delivery</h2>
               <input type="text" placeholder="Username" name="Username" value={this.state.Username} onChange={this.handlechange}/>
               <br />
               <input type="text" placeholder="Address" name="Address" value={this.state.Address} onChange={this.handlechange}/>
               <br />
               <input type="text" placeholder="Contact" name="Contact" value={this.state.Contact} onChange={this.handlechange}/>
               <br />
               <input type="text" placeholder="Email" name="Email" value={this.state.Email} onChange={this.handlechange}/>
                <br />
                <input type="text" placeholder="Quantity" name="Quantity" value={this.state.Quantity} onChange={this.handlechange}/>
               <br />
               <button id="btn2">Submit</button>
           </form> : null } 
            <button onClick={this.handleShow} id="cartbtn">Add Cart Button</button>
           </div>
       )
   }
}

export default Card;