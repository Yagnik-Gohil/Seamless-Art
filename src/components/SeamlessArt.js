import { React, Fragment } from 'react'
import { AiFillGithub, AiOutlineLogin } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function SeamlessArt() {
  const userEmail = localStorage.getItem('user');
  return (
    <Fragment>
      <div className='p-3 d-flex justify-content-center align-items-center text-center vh-80'>
        <div>
          <h2>Welcome to Seamless Art</h2>
          <p className='fw-bold m-1'>Source Code: <a className='text-dark text-decoraation-none' href='https://github.com/Yagnik-Gohil/Seamless-Art' target="_blank" rel="noreferrer"><AiFillGithub size={30} /></a></p>
          {
            !userEmail &&
            <p className='fw-bold'>
              Login: <Link to="/login" className='text-dark text-decoraation-none'><AiOutlineLogin size={30} /></Link> &nbsp;
              Sign Up: <Link to="/signup" className='text-dark text-decoraation-none'><AiOutlineLogin size={30} /></Link>
            </p>
          }
        </div>
      </div>
    </Fragment>
  )
}

export default SeamlessArt

// "eslintConfig": {
//   "extends": [
//     "react-app",
//     "react-app/jest"
//   ]
// },