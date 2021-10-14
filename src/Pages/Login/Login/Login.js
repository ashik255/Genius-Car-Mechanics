import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const {signInUsingGoogle}= useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <Button onClick={signInUsingGoogle} variant="outline-warning">Please Log In</Button>
        </div>
    );
};

export default Login;