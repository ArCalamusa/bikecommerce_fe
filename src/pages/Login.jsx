import React, { useEffect, useState } from 'react';
import { git, google } from '../assets';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { Form, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../redux/bikeSlice';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // useEffect(() => {
    //     const session = localStorage.getItem('loggedIn');
    //     if (session) {
    //         navigate("/")
    //     }
    // }, [navigate])


    /* AUTH GOOGLE */
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = (e) => {
        e.preventDefault()
        signInWithPopup(auth, provider).then((result) => {
            const user = result.user;
            dispatch(addUser({
                _id: user.uid,
                name: user.displayName,
                email: user.email,
                image: user.photoURL,
            })
            );
            setTimeout(() => {
                navigate("/");
            }, 1500)
        }).catch((error) => {
            console.log(error);
        });
    };

    /* LOGOUT */
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                toast.success("Logout successfully");
                dispatch(removeUser());
            }).catch((error) => {
                console.log(error);
            });
    };
    /* FINE AUTH GOOGLE */

    const handleChange = (event) => {
        setFormData(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios('http://localhost:5050/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        const user = await response.json()
        if (response.ok) {
            localStorage.setItem("loggedIn", JSON.stringify(user))
            navigate("/home")
        }
        return user;
    }

    return (
        <div className='w-full flex flex-col items-center justify-center gap-10'>
            {/* inizio form */}
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <div className="mt-2">
                            <input
                                name="email"
                                type="text"
                                onChange={handleChange}
                                value={formData.email}
                                className="block w-full h-12 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder='e-mail'
                            />
                        </div>
                    </div>

                    <div>
                        <div className="mt-2">
                            <input
                                name="password"
                                type="password"
                                onChange={handleChange}
                                value={formData.password}
                                className="block w-full h-12 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder='password'
                            />
                        </div>
                    </div>

                    <div>
                        <button type="submit" onSubmit={handleSubmit} className="flex w-full h-12 justify-center items-center rounded-md bg-indigo-600 px-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                </form>

            </div>
            <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
                <hr className="border-gray-500 w-20" />
                <p className="text-center text-sm">OR</p>
                <hr className="border-gray-500 w-20" />
            </div>
            {/* fine form */}

            <div className='w-full flex items-center justify-center gap-10'>
                <div onClick={handleGoogleLogin} className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-yellow-500 cursor-pointer duration-300'>
                    <img className='w-8' src={google} alt='googleLogo' />
                    <span className='text-sm text-gray-900'>Sing in with Google</span>
                </div>
                <button onClick={handleSignOut} className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'>Sign Out</button>
            </div>


            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Login;