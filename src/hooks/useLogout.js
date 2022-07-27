import { useState } from 'react';
//firebase imports
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';

export const useLogout = () => {
    const [error, setError] = useState(null);
    const logout = () => {
        signOut(auth)
        .then(()=> {
            
        })
        .catch(err => {
            setError(err.message)
        })
    };

    return { logout, error }
};