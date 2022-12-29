import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/UserContext';

const MyTask = () => {
    const [tasks, setTasks] = useState([]);


    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://task-bucket-server.vercel.app/mytasks?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(err => console.error(err))
    }, [])
    return (
        <div>
            <h1>{tasks.title}</h1>
        </div>
    );
};

export default MyTask;