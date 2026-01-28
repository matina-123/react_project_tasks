import Dashboard from "./dashboard"
import Login from "./login"

let InitialPage = ({isloggedin}) => {
    if(isloggedin){
        return(
            <>
           <Dashboard/>
            </>
        )
    }else{
        return(
            <>
            <Login/>
            </>
        )
    }
}
export default InitialPage;