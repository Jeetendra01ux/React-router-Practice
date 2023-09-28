import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './About/About'
import Layout from './Layout'
import Contact from './components/Contact/Contact'
import Github ,{ githubInfoLoader } from './components/Github/Github'
//const router = createBrowserRouter([
// {
//   path: "/",
//  element: <Layout />,
//  children: [
//    {
//     path: "",
//     element: <Home />
//    }, {
//      path: "about",
//      element: <About />
//    },
//    {
//      path: "contact",
//       element: <Contact />
//    }
//  ]
//}

//])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='github' 
        loader={githubInfoLoader}
        element={<Github />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)