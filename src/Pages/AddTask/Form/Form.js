import React, { useState } from 'react';
import { Button, Textarea, Input, Checkbox, Select, Option } from '@material-tailwind/react';
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';


const Form = () => {



    const handeleAddTask = () => {
    }

    return (
        <motion.div className='mt-10 w-full fixed'
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='w-full flex  justify-center'>
                <form className='w-4/5 shadow-2xl p-10 gap-10 bg-[#fff] rounded-lg'>
                    <div className='mb-5 text-white'>
                        <Input color='pink' size='lg' variant="outline" label="Title" />
                    </div>
                    <div className='text-white mb-5'>
                        <Textarea color='pink' variant="outline" label="Take a note" className='bg-red-500' />
                    </div>
                    <div className='flex justify-center'>
                        {/* <div>
                            <Select variant="outline" size='lg' label="Priority">
                                <Option className='bg-red-500 text-black mb-1'>High</Option>
                                <Option className='bg-yellow-500 text-black mb-1'>Medium</Option>
                                <Option className='bg-green-500 text-black'>Low</Option>
                            </Select>
                        </div> */}
                        <div className='flex'>
                            <div className=' mr-5' >
                                <Input color='pink' size='lg' variant="outline" label="Hours" />
                            </div>
                            <div className='mr-5' >
                                <Input color='pink' size='lg' variant="outline" label="Minutes" />
                            </div>
                            <div className='mr-5'>
                                <Select color='pink' variant="standard" size='lg' label="AM/PM">
                                    <Option className='  text-black mb-1'>AM</Option>
                                    <Option className=' text-black mb-1'>PM</Option>
                                </Select>
                            </div>
                        </div>
                        <div className='mr-5'>
                            <Select variant="standard" size='lg' label="Completed/Incomplete">
                                <Option className='bg-green-500 text-black mb-1'>Completed</Option>
                                <Option className='bg-red-500'>Incomplete</Option>
                            </Select>
                        </div>
                    </div>
                </form>
            </div>
            <div className='flex justify-center  mt-10'>
                <Link to='/addtask'>
                    <div className='flex text-pink-500 p-3 justify-center items-center mr-10 '>
                        <FaArrowLeft className='' />
                    </div>
                </Link>
                <Button
                    onClick={handeleAddTask}
                    className='flex justify-center items-center' color='pink' variant='gradient'>
                    <span>Add Task</span>
                </Button>
            </div>
        </motion.div>
    );
}

export default Form;