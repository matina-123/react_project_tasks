import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import './button.css'
// import './badge.css'

import StateExample from './Day6/stateexample.jsx'
import Greeting from './Day5handsontask1.jsx'
import Button from './Day4handsontask2.jsx'
import { Badge } from './extrabadgetask3.jsx'
import UserInfo from './Day5handsontask2.jsx'
import UserProfile from './Day4handsontask1.jsx'
import App from './App.jsx'
import ConditionalRendering from './Day6/conditinalrendering/conditionalrendering.jsx'
import InitialPage from './Day6/conditinalrendering/initial.jsx'
import CounterApp from './Day6/day6handsontask/task.jsx'
// import Dashboard from './Day6/conditinalrendering/dashboard.jsx'
// import Login from './Day6/conditinalrendering/login.jsx'
// import ExampleComponent from './task1.jsx'
// import EventsExample from './task2.jsx'
// import SpreadExample from './task3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   <Greeting/>
   <Button text="Click Me"/>
   <Badge label="New"/>
   <UserInfo name="John Doe" age={21} />
   <UserProfile name="Jane Smith" age={28} email="jane@example.com"/>
  <StateExample/>
  <App/>
   <ConditionalRendering/> 
  {/* <Dashboard/> */}
  {/* <Login/> */}
  <InitialPage
  isloggedin={false}/>
  <CounterApp/>
  </StrictMode>,
)
