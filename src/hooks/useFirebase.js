import { useEffect, useState } from "react"
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useHistory, useLocation } from "react-router";

// Initialize Firebase
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // extra start
    const [name, setName] = useState("");
    const [isLogin, setLogin] = useState(false);
    // extra end

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    ////
    // const history = useHistory();
    // const location = useLocation();

    // console.log(location);

    // const url = location.state?.from || "/home";
    // console.log(url);
    ////

    // const handleGoogleSignIn = () => {
    //     signInWithPopup(auth, googleProvider)
    //         .then(result => {
    //             // console.log(result.user);
    //             setUser(result.user);
    //             // history.push(url);
    //         })
    //         .catch(error => {
    //             console.log(error.message);
    //             setError(error.message);
    //         })
    // }

    ////
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    ////

    const handleEmailRegistration = e => {
        e.preventDefault();

        // console.log(email, password);
        // console.log("registration clicked");
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setError(""); // if no error
                // verifyEmail();
                // setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // const handleEmailChange = e => {
    //     setEmail(e.target.value);
    // }

    // const handlePasswordChange = e => {
    //     setPassword(e.target.value);
    // }

    const handleEmailLogin = (email, password) => {
        console.log("login clicked");

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                // console.log(user);
                setError("");
                // ...
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            }).catch((error) => {
                setError(error);
            });
    }

    // extra start

    const handleRegistration = e => {
        e.preventDefault();

        // console.log(email, password);
        // if (password.length < 6) {
        //     setError("Password should be at least 6 characters long");
        //     return;
        // }
        // if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        //     setError("Password must contain 2 uppercase letters");
        //     return;
        // }

        // isLogin ? processLogin(email, password) : registerNewUser(email, password);
        // or
        if (isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password);
        }

    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setError("");
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setError(""); // if no error
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const toggleLogin = e => {
        setLogin(e.target.checked);
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { });
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                // console.log(result);
            })
    }

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => { })
    }





    // extra end

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log("inside state change", user);
                setUser(user);
            }
        })
    }, [])

    return {
        user,
        error,
        handleGoogleSignIn,
        handleEmailRegistration,
        handleLogOut,
        handleEmailChange,
        handlePasswordChange,
        handleEmailLogin,

        handleRegistration,
        isLogin,
        handleNameChange,
        toggleLogin,
        handleResetPassword

    }
}

export default useFirebase;