import React from 'react';
import { git, google } from '../assets';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../redux/bikeSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                toast.success("Log Out eseguito correttamente");
                dispatch(removeUser());
            }).catch((error) => {
                console.log(error);
            });
    };

    const handleLoginWithGithub = () => {
        window.location.href = `${process.env.REACT_APP_BASE_URL}/auth/github`;
    }

    return (
        <div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
            <div className='w-full flex items-center justify-center gap-10'>
                <div onClick={handleGoogleLogin} className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-yellow-500 cursor-pointer duration-300'>
                    <img className='w-8' src={google} alt='googleLogo' />
                    <span className='text-sm text-gray-900'>Sing in with Google</span>
                </div>
                <button onClick={handleSignOut} className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'>Sign Out</button>
            </div>

            <div className='w-full flex items-center justify-center gap-10'>
                <div onClick={handleLoginWithGithub} className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-purple-500 cursor-pointer duration-300'>
                    <img className='w-8' src={git} alt='gitHubLogo' />
                    <span className='text-sm text-gray-900'>Sing in with GitHub</span>
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