import { useState } from "react"

export const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onClickHandler = (e) => {
        e.preventDefault();
        console.log('User enters: '+email);
    }

    return (
        <div>
            <div className="MainContainer">
                <h1>Sign Up</h1>
                <p>Welcome to Sign Up page</p>
                <div className="FormContainer">
                    <form onSubmit={onClickHandler}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="John"/> <br/>
                        <label htmlFor='email'>Email</label>
                        <input type='text' name="email" id="email" placeholder="xyz@gmail.com"/> <br/>
                        <label htmlFor='password'>Password</label>
                        <input type="password" name="password" id='password' placeholder="xxxxxx"/> <br/>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}