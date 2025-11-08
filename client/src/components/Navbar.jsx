
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../app/features/authSlice';

const Navbar = () => {

  const {user} = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const navigate = useNavigate();


  const logoutUser = () => {
    navigate('/')
    dispatch(logout())
  }

  return (
    <div className='shadow bg-white'>
      <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all'>
        <Link to='/' >
          <img src='/logo.svg' alt='logo' className='h-11 w-auto' />
        </Link>

        <div className='flex items-center gap-4 text-sm'>
          <p className='max-sm:hidden' >Hi, {user?.name}</p>
          <div className="button-bg rounded-full p-0.5 hover:scale-105 transition duration-300 active:scale-100">
            <button onClick={logoutUser} className=' bg-white hover:bg-slate-50 border border-gray-300 px-7 py-1.5 rounded-full active:scale-95 transition-all'>Logout</button>
          </div>

        </div>
      </nav>

      <style>
        {`
          @keyframes shine {
            0% {
              background-position: 0% 50%;
            }

            50% {
              background-position: 100% 50%;
            }

            100% {
              background-position: 0% 50%;
            }
          }

          .button-bg {
            background: conic-gradient(from 0deg, #39FF14, #000, #000, #39FF14, #000, #000, #000, #39FF14);
background-size: 300% 300%;
animation: shine 6s ease-out infinite;
          }
        `}
      </style>



    </div>

  )
}

export default Navbar
