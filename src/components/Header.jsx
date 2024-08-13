import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
import { addUser, removeUSer } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

function Header() {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  

  return (
    <div className=" w-full  ">
          <div className="w-44 ">
            <img className='w-full ' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
          </div>
    </div>
  )
}

export default Header