import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

  const {user} = useContext(UserContext)

  if(!user){
    return (
      <div className=' pt-2 text-xl text-white'>
        Login error
      </div>
    )
  }

  return (
    <div className=' pt-2 text-xl text-white'>
      Welcome User: {user.userName}
    </div>
  )
}

export default Profile
