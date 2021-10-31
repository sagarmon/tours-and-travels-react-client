import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import welcome from '../../images/welcomev33.png';

const Test = () => {
    const {
        user,
        handleGoogleSignIn
        // handleEmailChange,
        // handlePasswordChange,
        // handleRegistration,
        // isLogin,
        // handleNameChange,
        // toggleLogin,
        // error
    } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    // console.log('came from', location.state?.from);

    // const url = location.state?.from || "/home";

    const handleGoogleLogin = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_uri)
            })
    }


    return (
        <div>
            {user?.email ?
                <div className="bg-success text-white">
                    <h2>You are logged in using {user.email}</h2>
                    <img src={welcome} alt="" className="w-100" />
                </div>
                :
                <div className="m-5">
                    <button onClick={handleGoogleLogin} className="btn btn-primary">Google Sign In</button>
                </div>}
        </div>
    );
};

export default Test;