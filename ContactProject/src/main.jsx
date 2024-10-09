import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {Contact} from './components'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>} >
      {/* <Route path=''element={<Home/>}/> */}
      {/* <Route path='features'element={<Features/>}/> */}
      {/* <Route path='blog'element={<Blog/>}/> */}
      {/* <Route path='shop'element={<Shop/>}/> */}
      {/* <Route path='about'element={<About/>}/> */}
      <Route path=''element={<Contact/>}/>
    </Route>

  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
