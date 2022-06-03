import React from 'react'
import { useParams} from 'react-router-dom'

import HelloWorldService from '../../Api/Todo/HelloWorldService.js';

function retrieveWelcomemessage()
{
     HelloWorldService.execute()
     .then(response =>  console.log(response.data))
      
}
function Welcomecomponent() {
    const { name } = useParams();
     
    
      
    return ( 
      <div className='Welcome'> 
          <h1>Welcome</h1>
          <div>
          Welcome to the Application {name}!!
          <br></br>
          <a href='/todos'><button className='btn btn-warning' id="AA">Click to Open the Application</button> </a>
          </div>
          <div>
            <br></br>
            
             
               Click Here to get customised Welcome Message!!!
               <br></br>
               <button className='btn btn-success'  onClick={retrieveWelcomemessage()}>YO</button>
                
               
                



          </div>
      </div> 
    );
    
  }
  
   
    


export default Welcomecomponent