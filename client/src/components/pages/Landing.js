import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Landing = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    document.title = 'Dev Board';
  }, []);

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <nav className='top'>
        <h2>
        <i class="bi bi-laptop text-info" style={{ fontSize: 32 }}></i> Dev Board</h2>
        
        <div>
          <Button color='inherit' href='/login'>
            Login
          </Button>
          <Button variant='contained' href='/register'>
            Sign Up
          </Button>
        </div>
      </nav>
      <div className='landing-inner'>
        <h1> <i class="bi bi-laptop text-info" style={{ fontSize: 77 }}></i>  Dev Board</h1>
        <h2>A dev team workspace to collaborate on projects, <br></br> using project boards built with the MERN Stack.</h2>
        <div>
          <br></br>
        </div>
        <div className='buttons'>
          <div><h3>Sign up and get started with Dev Board today. </h3>
          <br></br>
          </div>
          <Button variant='outlined' color='inherit' href='/register'>
            Sign Up Here
          </Button>
        </div>
      </div>
      <h6>
           <i class="bi bi-laptop text-info" style={{ fontSize: 18 }}></i> &nbsp; Dev Board by <a className='text-white' style={{ textDecoration: 'none' }} href='https://devpunch.com/' target='_blank' rel="noreferrer">DevPunch Software</a> | Copyright © 2022
        </h6>
    </section>
  );
};

export default Landing;