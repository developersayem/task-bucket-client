import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layouts/Main/Main';
import AddTask from '../../Pages/AddTask/AddTask';
import LogIn from '../../Pages/LogIn/LogIn';
import MyTask from '../../Pages/MyTask/MyTask';
import Register from '../../Pages/Register/Register';





export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/addtask',
                element: <AddTask></AddTask>
            },
            {
                path: '/mytask',
                element: <MyTask></MyTask>
            },
            {
                path: '/completedtask',
                element: <MyTask></MyTask>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])


const Route = () => {


    return (
        <div>

        </div>
    );
};

export default Route;