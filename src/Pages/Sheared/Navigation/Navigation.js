import React, { useContext } from 'react';
import { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import Logo from '../../../Assets/Img/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/UserContext';

const Navigation = () => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const { user, LogOut } = useContext(AuthContext);


    const navList = (
        <ul className="mb-4 mt-2   flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Link to="/addtask" className="text-sm flex items-center hover:text-[#FF1E56] font-semibold">
                Add Task
            </Link>
            <Link to="/mytask" className="text-sm flex items-center hover:text-[#FF1E56] font-semibold">
                My Tasks
            </Link>
            <Link to="/completedtask" className="text-sm flex items-center hover:text-[#FF1E56] font-semibold">
                Completed Task
            </Link>
        </ul>
    );
    return (
        <Navbar className="mx-auto max-w-screen-xl border-none py-2 px-4 lg:px-8 lg:py-4 bg-[#222831]">
            <div className="container mx-auto flex items-center justify-between ">
                <Typography
                    as="a"
                    href="#"
                    variant=""
                    className="mr-4 cursor-pointer py-1.5 font-normal"
                >
                    <div className=''>
                        <Link to='/' className='text-x text-[#FF1E56] font-bold mr-1'>Task Bucket</Link>
                        {/* <img className='w-[20px] hidden lg:block lg:fixed lg:top-5 lg:left-32' src={Logo} alt="" /> */}
                    </div>
                </Typography>
                <div className="hidden lg:block">{navList}</div>
                {!user ?
                    <div>
                        <Link to='/login' className='mr-5'>
                            <Button variant="gradient" color='pink' size="sm" className="hidden lg:inline-block">
                                <span>Login</span>
                            </Button>
                        </Link>
                        <Link to='/register'>
                            <Button variant="gradient" color='pink' size="sm" className="hidden lg:inline-block">
                                <span>Register</span>
                            </Button>
                        </Link>
                    </div> : <></>
                }
                {user ?
                    <div>
                        <h1 className='hidden lg:inline-block mr-5'>
                            {user ? user.displayName : 'Anonymous'}
                        </h1>
                        <Button
                            onClick={LogOut}
                            variant="gradient" color='pink' size="sm" className="hidden lg:inline-block">
                            <span>Log Out</span>
                        </Button>
                    </div> : <></>

                }
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                {navList}
                <div className='my-5'>

                    {!user ?
                        <div>
                            <Link to='/login' className='mr-5'>
                                <Button variant="gradient" fullWidth color='pink' size="sm" className="">
                                    <span>Login</span>
                                </Button>
                            </Link>
                            <Link to='/register'>
                                <Button variant="gradient" fullWidth color='pink' size="sm" className="">
                                    <span>Register</span>
                                </Button>
                            </Link>
                        </div> : <></>
                    }
                    {user ?
                        <div>
                            <h1 className=' mb-5'>
                                {user ? user.displayName : 'Anonymous'}
                            </h1>
                            <Button
                                onClick={LogOut}
                                variant="gradient" fullWidth color='pink' size="sm" className="">
                                <span>Log Out</span>
                            </Button>
                        </div> : <></>

                    }
                </div>
            </MobileNav>
        </Navbar>
    );
};

export default Navigation;