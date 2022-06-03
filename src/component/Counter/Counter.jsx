import React,{Component}  from "react";
import './Counter.css'

class Counter extends Component
{
    //Define the initial state in a constructor
    constructor()
    {
        super();

        this.state={
            counter : 0,
            Secondcounter : 100
        }
        // this.increment=this.increment.bind(this);

    }
    render = () =>{
    return(
    <div className="Counter">
         <button onClick={this.increment}>+1</button>
         <span className="Count">{this.state.counter}</span>
         <span className="Count">{this.state.Secondcounter}</span>
    </div>
    );
}
    increment =() =>
    {
        
      
         this.setState(
             {
                 counter : this.state.counter+1
             }
         )
    }
}
export default Counter