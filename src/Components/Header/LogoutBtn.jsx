import React from 'react';
import {useDispatch} from 'react-redux';
import {logout} from "../../Store/AuthSlice";
import authservice from "../../appwrite/Auth";


function LogoutBtn(){
    const dispatch = useDispatch();
    const logoutHandler=()=>{
        authservice.logout().then(()=>{
            dispatch(logout());
        })}
    return(
       <button className='inline-block px-6 py-2 duration-200 hover:bg-amber-400 rounded-full' onClick={logoutHandler}>logout</button>
    )
}
export default LogoutBtn;