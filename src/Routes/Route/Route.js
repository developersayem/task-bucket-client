import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layouts/Main/Main';
import AddTask from '../../Pages/AddTask/AddTask';
import Form from '../../Pages/AddTask/Form/Form';





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
                path: '/addtaskform',
                element: <Form></Form>
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