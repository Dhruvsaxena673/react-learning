import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user}=useContext(UserContext)
  if(!user) return <div>Please enter correct username and password!!</div>
  else  return <div>Welcome Back Hero! {user.username}</div>
}

export default Profile
