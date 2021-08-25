



import {
  useSelector,
  useDispatch
} from 'react-redux'

import {
  selectSignedIn,
  selectUserData,
  selectSearchInput,
  setSearchInput
} from '../Redux/Reducers/User'



/** # Material UI Components
*/
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Avatar
} from '@material-ui/core'

import {
  Search as SearchIcon,
} from '@material-ui/icons'

import {
  alpha,
  makeStyles
} from '@material-ui/core/styles'


// Import Custom Components
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'




const useStyles = makeStyles( ( theme ) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  }
}) )







const Navbar = () => {
  /** Initializers
  */
  const dispatch = useDispatch()
  const classes = useStyles()

  /** # Redux States
  */
  const isSignedIn = useSelector( selectSignedIn )
  const userData = useSelector( selectUserData )
  const searchInput = useSelector( selectSearchInput )


  /** Element Handlers for Redux State
  */
  const inputHandler = value => {
    dispatch( setSearchInput( value ) )
  }



  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>

          {/** Burger Icon Button
          */}
          {
            isSignedIn && <Avatar className={classes.menuButton} alt={userData?.name} src={userData?.imageUrl} />
          }

          {/** Brand
          */}
          <Typography className={classes.title} variant="h6" noWrap>
            { isSignedIn && userData?.givenName }
          </Typography>

          {/** Search Input
          */}
          {
            isSignedIn && (
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                  value={searchInput}
                  onChange={ e => inputHandler( e.target.value )}
                />
              </div>
            )
          }

          {/** Separator
          */}
          <div className={classes.grow} />

          {/** Avatar Image
          */}
          {
            isSignedIn
            ? <LogoutButton />
            : <LoginButton variant={false} color={false} />
          }

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
