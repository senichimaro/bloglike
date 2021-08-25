import { GoogleLogout } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { setSignedIn, setUserData, } from '../Redux/Reducers/User'



/** # Material UI Components
*/
import { Button } from '@material-ui/core'




const LogoutButton = () => {
  /** Initializers
  */
  const dispatch = useDispatch()

  const logout = response => {
    dispatch( setSignedIn( false ) )
    dispatch( setUserData( null ) )
  }

  return (
    <GoogleLogout
      clientId={ process.env.REACT_APP_GOOGLE_OAUTH }
      render={ renderProps => (
        <Button color='inherit' onClick={renderProps.onClick}>Logout</Button>
      ) }
      buttonText='Logout'
      onLogoutSuccess={logout}
    />
  )
}

export default LogoutButton
