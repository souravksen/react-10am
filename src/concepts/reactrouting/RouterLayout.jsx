import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Mainpage from './components/Mainpage'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

const RouterLayout = () => {
    const routes=createBrowserRouter([
        {
            path:"/",
            element:<Mainpage/>,
            children:[
                {
                    path:"/home",
                    element:<Home/>
                },
                {
                    path:"/about",
                    element:<About/>
                },
                {
                    path:"/projects",
                    element:<Projects/>
                },
                {
                    path:"/contact",
                    element:<Contact/>
                },
                {
                    path:"/login",
                    element:<Login/>
                },
                {
                    path:"/dashboard",
                    element:<Dashboard/>
                }
            ]
        }
    ])
  return <RouterProvider router={routes}/>
}

export default RouterLayout


/*
const route=routeBrowser([
{
path:"/",
element:<MainPage/>
childre:[
{
path:"/home",
element:<Home/>
},
{
path:"/about",
element:<Home/>
},
{
path:"/projects",
element:<Project/>
},
{
path:"/contact",
element:<Contact/>
}
]
}
])
 return <RouterProvider routes={routes}/>











*/