import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';
    const handlerGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }
    return (
        <div>
            <div>
                <h2>Login</h2>
                <form onSubmit=''>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br/>
                    <input type="password" name="" id="" />
                    <br/>
                    <input type="submit" value="Submit" className="btnCart" />
                </form>
                <p>New to Ema-John? <Link to="/register">Create Account</Link></p>
                <div>-------- or --------</div>
                <button className="btnCart" onClick={handlerGoogleSignIn}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;