import AuthenticationService from "./AuthenticationService"

function Errorcompo()
{
     return <div className="Error">Sorry!!! you have entered and Invalid URL..!!! Check it or conatct to support
            < br></br>
            < br></br>

            <a href="/logout"><button className="btn btn-danger" onClick={AuthenticationService.logout}>Continue</button></a>
     </div>
}
 
export default Errorcompo