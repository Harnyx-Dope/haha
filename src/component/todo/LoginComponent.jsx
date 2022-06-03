import React from 'react'
import {Navigate} from 'react-router-dom'
import AuthenticationService  from './AuthenticationService.js';
import './todo.css';


class LoginComponent extends React.Component{
   
    constructor(props)
    {
        super(props)
        this.state={
            username :"enter username",
            password : '',
             hasLoginfailed : false,
             exact:false,
             showsucessmessage:false,
              

        }
        
        this.handleusernamechange=this.handleusernamechange.bind(this)
        this.handlepasswordchange=this.handlepasswordchange.bind(this)
        this.Loginclick=this.Loginclick.bind(this)
      
         
    }
    handleusernamechange(event)
    {
   
        this.setState({username:event.target.value})
         

    }
    handlepasswordchange(event)
    {
        
        this.setState({password:event.target.value})

    }
     onClick()
     {
         
     }
     Loginclick()
     
    {
        
       
         
        if(this.state.username==='HVG' && this.state.password==='284120')
        { 
             
            
             this.setState({showsucessmessage:true})
             this.setState({hasLoginfailed:false})
           
             
         }
        else
        {

             console.log('Username/Password is incorrect')
             this.setState({hasLoginfailed:true})
             this.setState({showsucessmessage:false})
        }
             
 
     }
     



    render()
    
    
    {
     
     return(
        <div className='papa'>
            <h1 >Login</h1>
            <div className='container'>
             
            {this.state.hasLoginfailed && <div className='alert alert-warning'>Invalid Credentials</div>}
            {this.state.showsucessmessage &&  <Navigate to={`/Welcome/${this.state.username}`}></Navigate>}
            {this.state.showsucessmessage && AuthenticationService.registerSuccessfullogin(this.state.username)}
             
             
              
         User Name: <input type = "text" name="username" Value={this.state.username} onChange={this.handleusernamechange}></input>
         Password : <input type ="password" name="password" Value={this.state.password} onChange={this.handlepasswordchange}></input>
         <button className='btn btn-success'     onClick={() =>  this.Loginclick() }>Login</button>
         </div>
         </div>
    )
}
}


export default LoginComponent