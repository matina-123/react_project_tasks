import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import './button.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import ListInReact from './day7/listand keysrendering'
import Counter from './Day6/day6handsontask/task1'
import App from './App'
// import './badge.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
<BrowserRouter> 
<Routes>
  <Route path='/' element={<App/>}>
    <Route index element={<ListInReact/>} />
  <Route path='/counter' element={<Counter/>}/>
  </Route>
</Routes>
</BrowserRouter>
  </StrictMode>,
)

