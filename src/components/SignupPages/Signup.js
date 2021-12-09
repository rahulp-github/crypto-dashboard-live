import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom'
/*------------------------------------------------------------------------------------------------
                                        End OF Imports                                          
------------------------------------------------------------------------------------------------*/

export default function Signup() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    // Signup Handler
    async function handleSignup(e) {
        e.preventDefault();
        try{
            let res = await fetch('https://crypto-dashboard-api-server.herokuapp.com/signup', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });
            let resJson = await res.json();
                if(resJson.status === "ok"){
                    alert('Signup Successfull !! \n Login With your Username and password');
                    history.push('/signin');
            }
            else{
                alert(`Error ${resJson.message}`);
            }
            setUsername('');
            setPassword('');
        }
        catch(e){
            alert(`Error ${e}`);
        } 
    }

    return (
        <div className="container signupPage">
            <form onSubmit={handleSignup} >
                <div className="card" >
                    <div className="card-header login">
                        Sign Up <i className="bi bi-person-plus-fill"></i>
                    </div>
                    <div className="list-group list-group-flush">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Enter your Username <span className="star">*</span></label>
                            <input type="text" className="form-control" onChange={(e)=>setUsername(e.target.value)} value={username} name="username" id="signupUsername" placeholder="Enter your username" required/> 
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Enter your Password <span className="star">*</span></label>
                            <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} name="password" id="signupPassword" placeholder="Your Passwords are hashed !!" required/> 
                        </div>
                    </div>
                </div>
                <div id="btn">
                    <button type="submit"  className="btn btn-outline-primary"> Signup </button>
                    <p>Already Signed Up ? <Link to="/signin">SignIn</Link> </p>
                </div>
            </form>
        </div>
    )
}
