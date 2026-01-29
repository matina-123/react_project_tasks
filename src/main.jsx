import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import './button.css'
// import './badge.css'

import StateExample from './Day6/classwork/stateexample.jsx'
import Greeting from './day5/handsontask1.jsx'
import Button from './day4/handsontask2.jsx'
import { Badge } from './day5/extrabadgetask.jsx'
import UserInfo from './day5/handsontask2.jsx'
import UserProfile from './day4/hansontask1.jsx'
// import App from './App.jsx'
import ConditionalRendering from './Day6/conditinalrendering/conditionalrendering.jsx'
import InitialPage from './Day6/conditinalrendering/initial.jsx'
// import CounterApp from './Day6/day6handsontask/task.jsx'
import Counter from './Day6/day6handsontask/task1.jsx'
import ToggleButton from './Day6/day6handsontask/task2.jsx'
import TextInputDisplay from './Day6/day6handsontask/task3.jsx'
import ThemeSwitcher from './Day6/day6handsontask/task4.jsx'
import ColorPicker from './Day6/day6handsontask/task5.jsx'
import ToggleImage from './Day6/day6handsontask/task6.jsx'
import ClickTracker from './Day6/day6handsontask/task7.jsx'
import PasswordToggle from './Day6/day6handsontask/task8.jsx'
import RandomQuote from './Day6/day6handsontask/task9.jsx'
import TrafficLight from './Day6/day6handsontask/task10.jsx'
import LoginButton from './Day6/classwork/loginbutton.jsx'
import LogoutButton from './Day6/classwork/logoutbutton.jsx'
import DestructuringTasks from './day4/destructuringtask.jsx'
import EventTasks from './day4/eventtask.jsx'
import JSXTasks from './day4/jsxtask.jsx'
import SpreadTasks from './day4/spreadtask.jsx'
import ListInReact from './day7/listand keysrendering.jsx'

// import Dashboard from './Day6/conditinalrendering/dashboard.jsx'
// import Login from './Day6/conditinalrendering/login.jsx'
// import ExampleComponent from './task1.jsx'
// import EventsExample from './task2.jsx'
// import SpreadExample from './task3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListInReact/>
   <Greeting/>
   <Button text="Click Me"/>
   <Badge label="New"/>
   <UserInfo name="John Doe" age={21} />
   <UserProfile name="Jane Smith" age={28} email="jane@example.com"/>
  <StateExample/>
  <LoginButton/>
  <LogoutButton/>
  
  <DestructuringTasks/>
  <EventTasks/>
  <JSXTasks/>
  <SpreadTasks/>
   <ConditionalRendering/> 
  {/* <Dashboard/> */}
  {/* <Login/> */}
  <InitialPage
  isloggedin={false}/>
  <Counter/>
  <ToggleButton/>
  <TextInputDisplay/>
  <ThemeSwitcher/>
  <ColorPicker/>
  <ToggleImage/>
  <ClickTracker/>
  <PasswordToggle/>
  <RandomQuote/>
  <TrafficLight/>

  </StrictMode>,
)
