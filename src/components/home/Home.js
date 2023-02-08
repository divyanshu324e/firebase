import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"

export default function Home() {
  return (
    <div className='home'>
      <div className='login'>
      <Link to='/login' className='btn'>Login</Link>
      </div>
      <div className='signup'>
      <Link to='/Signup' className='btn'>Signup</Link>
      </div>

    </div>
  )
}
