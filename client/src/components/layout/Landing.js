import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      
      <div className='dark-overlay'>
        <div className='landing-inner'>
          
          <h1 className='x-large'>LineUp</h1>
          <p className='lead'>
            Keep It Tickin
          </p>
          <br></br>
          <br></br>
          <div className='buttons'>
            <div className="col">
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            </div>
            <div className="col">
            <Link to='/Calendar' className='btn btn-light'>
               Calendar
            </Link>

            </div>
            <div className="col" >
            <Link to='/AddEvent' className='btn btn-primary'>
               Add Event
            </Link>
            </div>
            <div className="col">
            <Link to='/login' className='btn btn-light'>
               Admin Login
            </Link>
            </div>
            <div className="col">
            <Link to='/GetHolidays' className='btn btn-primary'>
               Get My Holidays
            </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
