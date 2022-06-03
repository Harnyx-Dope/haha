import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import AuthenticationService  from './AuthenticationService.js';




class HeaderComponent extends Component{
    
    render()
    {
        const isUSerloggedin=AuthenticationService.isUserLoggegin();
        console.log(isUSerloggedin);
        
        
        return(
           
           
            <header className='YOYO'>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><a  href='/Login' className='navbar-brand'>Todoapp</a> </div>
                <ul className="navbar-nav">
                   {isUSerloggedin && <li className="nav-link">  <a href='/Welcome/Home'>Home</a></li>}
                   {isUSerloggedin && <li className="nav-link" > <Link to="/todos" >Todo</Link></li>}
                </ul>
                <ul className="navbar-nav   navbar-collapse justify-content-end">
                {!isUSerloggedin &&  <li className="nav-link" > <a href='/login'>Login</a></li>}
                {isUSerloggedin && <li className="nav-link" > <a href='/logout' onClick={AuthenticationService.logout}>Logout</a></li>}
                    
         </ul>
            </nav>
         </header>
           
        ); 
}
}
export default HeaderComponent