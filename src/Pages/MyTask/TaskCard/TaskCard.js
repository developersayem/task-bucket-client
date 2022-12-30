import React, { useState } from 'react';
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import { FaTrash, FaCheck } from "react-icons/fa";
import { toast, Toaster } from 'react-hot-toast';

const TaskCard = ({ item }) => {

    const { priority, task, date, taskType, title, comments } = item;

    let red;
    if (taskType == "incomplete") {
        red = true
    }

    const handleDelete = async () => {
        fetch(`https://task-bucket-server.vercel.app/mytask/${item._id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount === 1) {
                    toast.success("Deleted successfully!")
                }
            });
    };

    const handleCom = async () => {
        fetch(`https://task-bucket-server.vercel.app/mytaskid/${item._id}`, {
            method: "PUT",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount === 1) {
                    toast.success("Task Completed!")
                }
            });
    };


    return (
        <Card className="w-ful ">
            <Toaster />
            <CardHeader color="pink" className="">
                <Typography variant="h444444   " className="mb-2 capitalize px-10 py-5 ">
                    Title: {title && title}
                </Typography>
            </CardHeader>
            <CardBody className="text-center ">
                <Typography variant="h5" className="mb-2 capitalize">
                    Task:  {task && task}
                </Typography>
                <Typography variant="h5" className="mb-2 capitalize">
                    Priority:  {priority && priority}
                </Typography>
                <Typography className='capitalize'>
                    comments: {comments && comments}
                </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3 ">
                <Typography variant="small" className={red ? "text-red-500" : "text-green-500"}>{taskType && taskType}</Typography>
                <Typography variant="small" >{date && date}</Typography>
                <div>
                    <button
                        onClick={handleDelete}
                        className='text-red-500 mr-5'><FaTrash></FaTrash></button>
                    <button
                        onClick={handleCom}
                        className='text-green-500'><FaCheck></FaCheck></button>
                </div>
            </CardFooter>
        </Card>
    );
};

export default TaskCard;