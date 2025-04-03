import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/pages/Home.jsx'
import { AuthLayout, Login } from './Components/index.js'


import AddPost from "./Components/pages/AddPost.jsx";
import Signup from './Components/pages/Signup'
import EditPost from "./Components/pages/EditPost";

import Post from "./Components/pages/Post";

import AllPosts from "./Components/pages/AllPosts";

const router = createBrowserRouter([
  {gi
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        // {
        //     path: "/login",
        //     element: (
        //         <AuthLayout authentication={false}>
        //             <Login />
        //         </AuthLayout>
        //     ),
        // },
        // {
        //     path: "/signup",
        //     element: (
        //         <AuthLayout authentication={false}>
        //             <Signup />
        //         </AuthLayout>
        //     ),
        // },
        // {
        //     path: "/all-posts",
        //     element: (
        //         <AuthLayout authentication>
        //             {" "}
        //             <AllPosts />
        //         </AuthLayout>
        //     ),
        // },
        // {
        //     path: "/add-post",
        //     element: (
        //         <AuthLayout authentication>
        //             {" "}
        //             <AddPost />
        //         </AuthLayout>
        //     ),
        // },
        // {
        //     path: "/edit-post/:slug",
        //     element: (
        //         <AuthLayout authentication>
        //             {" "}
        //             <EditPost />
        //         </AuthLayout>
        //     ),
        // },
        // {
        //     path: "/post/:slug",
        //     element: <Post />,
        // },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)