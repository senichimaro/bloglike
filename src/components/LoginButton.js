import {
  GoogleLogin
} from 'react-google-login'

import { useDispatch } from 'react-redux'

import { setSignedIn, setUserData, } from '../Redux/Reducers/User'



/** # Material UI Components
*/
import { Button } from '@material-ui/core'





const LoginButton = ({ variant , color }) => {
  /** Initializers
  */
  const dispatch = useDispatch()


  /** # Login / Logout Functions
  */
  const login = response => {
    dispatch( setSignedIn( true ) )
    dispatch( setUserData( response.profileObj ) )
  }

  return (
    <GoogleLogin
      clientId={ process.env.REACT_APP_GOOGLE_OAUTH }
      render={ renderProps => (
        <Button variant={variant ? variant : 'text' } color={color ? color : 'inherit'} onClick={renderProps.onClick}>Login</Button>
      ) }
      buttonText='Login'
      onSuccess={login}
      onFailure={login}
      cookiePolicy={'single_host_origin'}
    />
  )
}

export default LoginButton
