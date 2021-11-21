import initializeFirebase from "../Components/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile,signOut } from "firebase/auth";
import { useEffect, useState,} from "react";



initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const auth = getAuth();
    const [admin, setAdmin] = useState(false);

    const singUp = (email, password, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                savedUser(email, name)
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
                // ..
            })
            .finally(() => setIsLoading(false))
            ;

    }

    const singIn = (email, password, history, location) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                setAuthError('');
                const destination = location?.state?.from || '/';
                history(destination);

            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false))
            ;

    }
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])
    console.log(user);
    const savedUser = (email, displayName) => {
        const user = { email, displayName }
        fetch('https://car-sels.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    return {
        singUp,
        singIn,
        user,
        setUser,
        isLoading,
        authError,
        logOut

    }


}

export default useFirebase;