
import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import {auth} from '../../firebase';
import { useNavigate } from "react-router-dom";


function SignIn () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const [error, setError] = useState('')

    const handleClick = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
            console.log(userCredential)
            navigate ('/')
        })
        
        .catch((error) => {
            switch (error.code) {
                case 'auth/user-not-found':
                case 'auth/wrong-password':
                    setError('Invalid email or password.');
                    break;
                case 'auth/invalid-email':
                    setError('Invalid email format.');
                    break;
                default:
                    setError('An error occurred. Please try again later.');
            }
        })
    }

    

    return (
        <div className="container login">
            <form>
                {/* <label>Name</label>
                <input type="text" placeholder="Name"/> */}

                <div class="email">
                    <label className="">Email</label>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div class="pass">
                    <label>Password</label>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value) }/>
                </div>
            </form>

            <button onClick={handleClick}>Login</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}

        </div>
    );
};

export default SignIn;
