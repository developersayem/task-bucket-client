import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";

import {
    Card,
    Input,
    Button,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { AuthContext } from '../../Contexts/UserContext';
import useTitle from '../../Hooks/useTitle';
import { toast, Toaster } from 'react-hot-toast';



const Register = () => {

    useTitle("Register");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false)

    const { creteUser, updateUser, googleLogin } = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const password = form.password.value;
        creteUser(email, password)
            .then((result) => {
                form.reset();
                setSuccess(true);
                setError(false);
                updateUser(fullName)
                    .then((result) => {
                        console.log("done")
                        toast.success("Registration Successfully!");
                    })
                    .catch((err) => console.error(err));
            })
            .catch((err) => {
                console.error(err);
                setError(true);
                setSuccess(false)
                toast.error("Registration Failed")
            });

    }

    return (
        <div>
            <Toaster />
            <div className='flex justify-center content-center my-16'>
                <Card className="w-96">
                    <CardHeader
                        variant="gradient"
                        color={success ? "green" : error ? "red" : "blue"}
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="h3" color="white">
                            {success ? "Success!" : error ? "Error!" : "Register"}
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <form onSubmit={handleRegister}>
                            <div className='mb-3'>
                                <Input type="text" name='fullName' label="Name" size="lg" required />
                            </div>
                            <div className='mb-3'>
                                <Input type="email" name='email' label="Email" size="lg" required />
                            </div>
                            <div className='mb-3'>
                                <Input type="password" name='password' label="Password" size="lg" required />
                            </div>
                            <Button className='mt-5 hover:scale-110' variant="gradient" type='submit' fullWidth>
                                Register
                            </Button>
                            <div>
                                <p className='mt-2'>OR</p>
                            </div>
                            <Button onClick={googleLogin} className='mt-2 relative hover:scale-110' variant="gradient" type='submit' fullWidth>
                                Google
                            </Button>
                        </form>
                        {/* <div className="-ml-2.5">
                            <Checkbox label="Remember Me" />
                        </div> */}
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Typography variant="small" className="mt-6 flex justify-center">
                            Already have an account?
                            <Typography
                                as="a"
                                href="#signup"
                                variant="small"
                                color="blue"
                                className="ml-1 font-bold"
                            >
                                <span>
                                    <Link to="/login">
                                        Login
                                    </Link>
                                </span>
                            </Typography>
                        </Typography>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default Register;