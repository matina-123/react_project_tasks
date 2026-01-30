import { Link, Outlet } from "react-router";


function App() {
  return (
  <>
 <p>
  <Link to="/">Home</Link>
  <Link to="/counter" >Counter</Link>
 </p>
 <Outlet/>
 <p>footer there</p>
</>
);
}

export default App;
