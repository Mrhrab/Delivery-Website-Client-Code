import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css';




const Login = () => {
    const { signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history =useHistory();
    const redirect_uri =location.state?.from || '/home';
    console.log('came from', location.state?.from);
    
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }
    return (
         <Container>
             <div id="log">
            <h1 className="title m-5">sign in to continue</h1>
            <button className="btn btn-danger button-space" onClick={handleGoogleLogin}>Login With Google</button>
         </div>
         </Container>
    );
};

export default Login;