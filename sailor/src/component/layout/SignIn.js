import React from 'react';
import { NavLink } from 'react-router-dom';

const SignIn = () => {

  return (
    <ul className='right'>
      <li><NavLink to='/'>Search</NavLink></li>
      <li><NavLink to='/'>Logout</NavLink></li>
      <li><NavLink to='/' className='btn btn-floating pink, lighten-1'></NavLink>NN</li>

    </ul>
  )
}

export default SignIn; 