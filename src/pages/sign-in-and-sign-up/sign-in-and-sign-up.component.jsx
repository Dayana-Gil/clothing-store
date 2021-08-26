import React from 'react';

import './sign-in-and-sign-up.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';

//FUNCTIONAL, NOT CONTAINING STATE
//COMPONENTS HANDLE STATE AND THE PAGE HOLDS THE COMPONENTS
const SignInAndSignUpPage = () =>(
    <div className='sign-in-and-sign-up'>
        <SignIn />
    </div>
);

export default SignInAndSignUpPage;