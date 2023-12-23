import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom'
import Layout from './Layout'
import {About, Home, Contect, User, Github} from './components'
import { githubInfoLoader } from './components/Github/Github'

// One of the way to create router
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contect",
//         element: <Contect />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contect' element={<Contect/>}/>
      <Route path='user/:id' element={<User/>}/>
      <Route 
        loader={githubInfoLoader}
        path='github' 
        element={<Github/>}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
