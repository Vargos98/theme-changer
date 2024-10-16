import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
const Profile = () => {
  const { user } = useContext(UserContext);


  <div>
    if(!user) return <div><h1>Please Login</h1>
    </div>


    <div>
      <h1>Welcome, {user.username}!</h1>

    </div>

  </div>
}

export default Profile