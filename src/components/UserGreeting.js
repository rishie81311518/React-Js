import React, { Component } from 'react'

class UserGreeting extends Component {

constructor(props) {
  super(props)

  this.state = {
     isLoggedIn: true
  }
}


    render() {
 

        //short circuit method
        return this.state.isLoggedIn && <div>Welcome Rishie</div>



       // ternary operators 
        // return this.state.isLoggedIn ? (
        //     <div>welcome Rishie</div>
        // ) : (
        //     <div>Welcome Kiki </div>
        // )
   

    // js element variables method 
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Rishie</div>
    // } else{
    //     message = <div>Welcome Kiki</div>
    // }

    // return <div>{message}</div>




        // if else conditonal rendering
    // if(this.state.isLoggedIn) {
    //     return <div>Welcome Rishie</div>
    // }
    // else {
    //     return <div>Welcome kiki</div>
    // }
  
// return (
//         <div>
//       <div>Welcome Rishie</div>
//       <div>Welcome Kiki</div>
//         </div>
// )
    }
}

export default  UserGreeting