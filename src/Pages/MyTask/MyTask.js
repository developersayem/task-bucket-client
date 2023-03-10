import { motion, AnimatePresence } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/UserContext';
import TaskCard from './TaskCard/TaskCard';

const MyTask = () => {
    const [tasks, setTasks] = useState([]);
    const [selectedId, setSelectedId] = useState(null)


    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://task-bucket-server.vercel.app/mytasks?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(err => console.error(err))
    }, [])


    console.log(tasks)
    return (
        <div>
            <div className='grid grid-cols-1 gap-10 mx-16 mt-24'>
                {
                    tasks.map(item => <TaskCard
                        key={item._id}
                        item={item}
                    ></TaskCard>)
                }
            </div >
        </div>
    )

};

export default MyTask;