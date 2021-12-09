import React from 'react'
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

/*------------------------------------------------------------------------------------------------
                                        End OF Imports                                          
------------------------------------------------------------------------------------------------*/


export default function SignIn({handleAuthentication}) {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const history = useHistory();

    // Signin Handler 
    async function handleSignin(e){
        e.preventDefault();
        try{
            let res = await fetch('https://crypto-dashboard-api-server.herokuapp.com/signin',{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({
                    username,
                    password
                })
            });
            let resJson = await res.json();
            if(resJson.status === "ok"){
                localStorage.setItem("token",resJson.token);
                alert('Login successfull');
                handleAuthentication();
                history.push('/');  
            }
            else{
                alert(`Error ${resJson.message}`);
            }
        }
        catch(e){
            alert(`Error ${e}`);
        }
    }

    return (
        <div className="container signupPage">
        <form onSubmit={handleSignin}>
            <div className="card">
                    <div className="card-header login">
                        Sign In <i className="bi bi-box-arrow-right"></i>
                    </div>
                    <div className="list-group list-group-flush">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Enter your Username <span className="star">*</span></label>
                            <input type="text" className="form-control" onChange={(e)=>setUsername(e.target.value)} value={username} name="username" id="signinUsername" placeholder="Enter your username" required/> 
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Enter your Password <span className="star">*</span></label>
                            <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} name="password" id="signinPassword" placeholder="Your Passwords are hashed !!" required/> 
                        </div>
                    </div>
                </div>
                <div id="btn">
                    <button type="submit"  className="btn btn-outline-primary"> SignIn </button>
                    <p>Not  Signed Up ? <Link to="/signup">SignUp</Link> </p>
            </div>
        </form>
        </div>
    )
}
