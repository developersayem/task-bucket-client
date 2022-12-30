import React, { useContext, useState } from 'react';
import styles from 'react-day-picker/dist/style.module.css';
import { Button } from '@material-tailwind/react';
import { DayPicker } from 'react-day-picker';
import { motion } from "framer-motion"
import { format } from 'date-fns';
import { toast, Toaster } from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../../Contexts/UserContext';
import { Link, useLocation, useNavigate } from "react-router-dom";


const AddTask = () => {
    useTitle("Add Services")
    const Navigate = useNavigate();
    const from = "/mytask";

    const [selected, setSelected] = useState();

    const ClassNames = {
        ...styles,
        head: 'custom-head'
    };
    let footer = <p>Please pick a day.</p>;
    let date;

    if (selected) {
        date = format(selected, 'PP');
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

    const { user } = useContext(AuthContext)
    const email = user?.email || null;
    const userName = user?.displayName || null;

    const handleAddTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const task = form.task.value;
        const comments = form.comments.value;
        const taskType = form.taskType.value;
        const priority = form.priority.value;
        const taskData = {
            title,
            task,
            comments,
            taskType,
            priority,
            date,
            email,
            userName
        }
        fetch("https://task-bucket-server.vercel.app/task", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(taskData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged
                    > 0) {
                    toast.success('Task Added Successfully');
                    Navigate(from, { replace: true });
                }
            });
    }



    return (
        <div className='w-full mb-10' >
            <Toaster />
            <div className='lg:flex  lg:ml-28 text-white '>
                <motion.div className='mt-10 lg:w-1/3'
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                >
                    <div className='w-full flex  justify-center'>
                        <style>{`.custom-head { color: red }`}</style>
                        <DayPicker
                            mode="single"
                            classNames={ClassNames}
                            selected={selected}
                            onSelect={setSelected}
                            footer={footer}
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className='lg:w-1/2 mt-8'>
                    <form onSubmit={handleAddTask}
                        className="mt-10 px-10" action="#">
                        <label className="block mt-3" for="email">
                            <input type="text" name="title" id="title" placeholder="Title" className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-pink-400 focus:outline-none focus:ring focus:ring-pink-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" required />
                        </label>

                        <label className="block mt-3" for="email">
                            <textarea type="text" name="task" id="task" placeholder="Task" className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-pink-400 focus:outline-none focus:ring focus:ring-pink-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" required />
                        </label>

                        <label className="block mt-3" for="email">
                            <textarea type="text" name="comments" id="comments" placeholder="Comments" className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" required />
                        </label>
                        <div className='flex justify-evenly gap-5 mt-1'>
                            <select name='taskType' className="select text-black py-2 px-3 select-bordered rounded-md w-full my-2" required>
                                <option disabled value='Type'>Type</option>
                                <option value='incomplete'>Incomplete</option>
                                <option value='completed'>Completed</option>
                            </select>
                            <select name='priority' className="select text-black py-2 px-3 select-bordered rounded-md w-full my-2" required>
                                <option disabled value='priority'>Priority</option>
                                <option value='high'>High</option>
                                <option value='medium'>Medium</option>
                                <option value='low'>Low</option>
                            </select>
                            {/* <select name='minute' className="select text-black py-2 px-3 select-bordered rounded-md w-full my-2" required>
                            <option value='01:00AM'>01:00AM</option>
                            <option value='02:00AM'>02:00AM</option>
                            <option value='03:00AM'>03:00AM</option>
                            <option value='04:00AM'>04:00AM</option>
                            <option value='05:00AM'>05:00AM</option>
                            <option value='06:00AM'>06:00AM</option>
                            <option value='07:00AM'>07:00AM</option>
                            <option value='08:00AM'>08:00AM</option>
                            <option value='09:00AM'>09:00AM</option>
                            <option value='10:00AM'>10:00AM</option>
                            <option value='11:00AM'>11:00AM</option>
                            <option value='12:00PM'>12:00PM</option>
                            <option value='01:00PM'>01:00PM</option>
                            <option value='02:00PM'>02:00PM</option>
                            <option value='03:00PM'>03:00PM</option>
                            <option value='04:00PM'>04:00PM</option>
                            <option value='05:00PM'>05:00PM</option>
                            <option value='06:00PM'>06:00PM</option>
                            <option value='07:00PM'>07:00PM</option>
                            <option value='08:00PM'>08:00PM</option>
                            <option value='09:00PM'>09:00PM</option>
                            <option value='10:00PM'>10:00PM</option>
                            <option value='11:00PM'>11:00PM</option>
                            <option value='12:00AM'>12:00AM</option>
                        </select> */}

                        </div>
                        {selected ?
                            <div className="mt-4 sm:flex sm:items-center sm:-mx-2 flex justify-center">
                                <Button type='submit' variant='gradient' color='pink'>
                                    Add Task
                                </Button>
                            </div> : <></>}
                    </form>
                </motion.div >
            </div>
        </div >
    );
};

export default AddTask;