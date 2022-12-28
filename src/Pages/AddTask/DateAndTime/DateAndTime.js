import React, { useState } from 'react';
import styles from 'react-day-picker/dist/style.module.css';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { Button } from '@material-tailwind/react';
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
// import { TimePicker } from 'react-ios-time-picker';


const DateAndTime = () => {
    const [selected, setSelected] = useState();
    const [datePiker, setDatePiker] = useState(480);

    // const [value, setValue] = useState('10:00');
    // const onChange = (timeValue) => {
    //     setValue(timeValue);
    // }
    let footer = <p>Please pick a day.</p>;
    let date;

    if (selected) {
        date = format(selected, 'PP');
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

    const ClassNames = {
        ...styles,
        head: 'custom-head'
    };


    const handeleNext = () => {
        setDatePiker(-1000)
    }

    return (
        <motion.div className='mt-10 fixed'
            initial={{ x: -1000 }}
            animate={{ x: datePiker }}
            transition={{ duration: 0.5 }}
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
            {/* <label for="time" className='mr-5  text-small font-thin mt-2 text-gray-500'>Time :</label>
            <TimePicker className='w-full border-5' onChange={onChange} value={value} /> */}
            {
                date ?
                    <div className='flex justify-center  mt-5'>
                        <Link to='/addtaskform'>
                            <Button
                                onClick={handeleNext}
                                className='flex justify-center items-center' color='pink' variant='gradient'>
                                <span>Next</span>
                                <FaArrowRight className='' />
                            </Button>
                        </Link>
                    </div> : <></>
            }
        </motion.div>
    );
}

export default DateAndTime;