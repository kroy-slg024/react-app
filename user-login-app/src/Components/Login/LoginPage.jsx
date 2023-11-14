import React, {useState} from "react";
import '../../App.css'

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onClickHandler = (e) => {
        e.preventDefault();
        console.log('User enters: '+email);
    }

    return (
        <div>
            <div className='MainContainer'>
                <h1>Log In</h1>
                <div className="FormContainer">
                    <form onSubmit={onClickHandler}>
                        <label htmlFor='email'>Email</label>  <br/>
                        <input type='text' name="email" id="email" placeholder="xyz@gmail.com"/> <br/>
                        <label htmlFor='password'>Password</label>  <br/>
                        <input type="password" name="password" id='password' placeholder="xxxxxx"/> <br/>
                        <button type="submit">Log In</button>  <br/>
                    </form>
                    <text onClick={props.toggleForm}>Don't have an account? Sign Up</text>
                </div>
            </div>
        </div>
    )
}