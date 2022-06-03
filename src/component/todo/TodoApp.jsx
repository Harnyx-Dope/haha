
import React,{Component} from 'react'
import {BrowserRouter as  Router,Route,Routes} from 'react-router-dom'
 
import  LoginComponent from './LoginComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import Welcomecomponent from './Welcome.jsx';
import Errorcompo from './Error-Component.jsx';
import HeaderComponent from './Headrer-Component.jsx';
import FooterComponent from './Footer-Component.jsx';
import ListTodoComponent from './List-todo-component.jsx';
 


class TodoApp extends Component{
    render()
    {
         
        
         
         
         
        return (
            <div className="TodoApp">
         
            <Router>
                   <HeaderComponent></HeaderComponent>
                 <Routes>
                 
                        
                         <Route exact path="/" element={<LoginComponent></LoginComponent>}/>
                         <Route exact path="/Login" element={<LoginComponent></LoginComponent>}/>
                         <Route exact path="/Welcome/:name" element={<Welcomecomponent></Welcomecomponent> } /> 
                         <Route exact path="/todos" element={<ListTodoComponent></ListTodoComponent>} /> 
                         <Route exact path="*" element={<Errorcompo></Errorcompo>} /> 
                         <Route exact path="/logout" element={<LogoutComponent></LogoutComponent>} /> 
                          
                 </Routes>
                  <FooterComponent></FooterComponent>
                
            </Router>
            
             
             {/* <LoginComponent></LoginComponent>
             <Welcomecomponent></Welcomecomponent> */}


            </div>

        );
    }
}
  
export default TodoApp