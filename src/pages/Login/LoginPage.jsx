import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { LoginButton } from '../../components/Login/Login'
import { LogoutButton } from '../../components/Logout/Logout'
import { Profile } from '../../components/Profile/Profile'


const LoginPage = () => {
    const {isAuthenticated } = useAuth0();
    
  return (
    <div>
       {isAuthenticated ?(<>
        <Profile />
        <LogoutButton />
        </>
        ): (
        <LoginButton />)}
      
      
    </div>
  )
}

export default LoginPage