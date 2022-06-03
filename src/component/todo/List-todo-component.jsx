import React,{Component} from 'react'


class ListTodoComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.state=
        {
            todo:
            [ 
              {id:1,description :'Learn react',done :false ,TargetDate:new Date()},
              {id:2,description :'Learn react',done :false ,TargetDate:new Date()},
              {id:3,description :'Learn react',done :false ,TargetDate:new Date()},
              {id:4,description :'Learn react',done :false ,TargetDate:new Date()},
              {id:5,description :'Learn react',done :false ,TargetDate:new Date()}



        ]
        }
    }
    

render()
{
    return(
        <div className='Todo'>
        <h1 >List Todo</h1>
        <div className='container'>
        <table  className='table'>
            <thead  >
                <tr >
                    <th  >id
                    </th>
                    <th>description     </th>
                   <th>Is Done?</th>
                   <th>
                       Target date
                   </th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.todo.map (
                            todo =>     
                               <tr>
                                   <td>{todo.id}</td>
                                   <td>{todo.description}</td>
                                   <td>{todo.done.toString()}</td>
                                   <td>{todo.TargetDate.toString()}</td>
                             </tr>
                    ) 
                }
            </tbody>
        </table>
        <br></br>
        <a href='/loginjj'><button className='btn btn-warning' id='hex' >Click to Add</button></a>
        </div>
         

     
        </div>
    );
}
}

export default ListTodoComponent