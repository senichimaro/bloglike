import {
  useEffect,
  useState
} from 'react'

import axios from 'axios'

import {
  Container,
  Grid
} from '@material-ui/core'

import {
  makeStyles
} from '@material-ui/core/styles'

import {
  useSelector,
  useDispatch
} from 'react-redux'

import {
  selectSearchInput,
  setBlogData
} from '../Redux/Reducers/User'



// Components
import Card from './Card'



// Material UI Styles
const useStyles = makeStyles({
  root:{
    flexGrow:1
  }
})






const BlogPosts = () => {
  /** # Initializers
  */
  const classes = useStyles()
  const dispatch = useDispatch()


  /** Local State
  */
  const [ posts , setPosts ] = useState([])

  /** Redux State
  */
  const searchInput = useSelector( selectSearchInput );


  /** URL API
  */
  const urlAPI = `https://gnews.io/api/v4/search?q=${ searchInput }&token=${ process.env.REACT_APP_GNEWS_TOKEN }&lang=en`

  useEffect(() => {
    axios
    .get(urlAPI)
    .then( res => {
      // console.log("res",res);
      setPosts( res.data );
      dispatch( setBlogData( res.data ) );
    })
    .catch( error => {
      // console.error(`ERROR at BlogPosts useEffect: ${error.message}`);
    })
  },[ searchInput , dispatch , urlAPI ])

  return (
    <Container maxWidth='lg' style={{paddingTop:20}}>
      <div className={classes.root} >
        <Grid container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Card posts={posts} />
        </Grid>
      </div>
    </Container>
  )
}

export default BlogPosts
