
import {
  Container,
  Typography,
  Grid
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'



/** # Custom Components
*/
import LoginButton from './LoginButton'



/** # Material UI Styles
*/
const useStyles = makeStyles( ( theme ) => ({
  root:{
    paddingTop:50
  }
}))


const Home = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid style={{textAlign:'center', padding:'0 50px'}} item xs={12}>

          <Typography variant='h2' component='h1'>
            News Articles Data
          </Typography>

          <p>
            Material UI Cards are surfaces that display elements, like text and images,
            and clearly indicates hierarchy easy to scan.
            It uses configurations from <span style={{backgroundColor:'#eee',padding:'0 5px'}}>/core</span>
            & <span style={{backgroundColor:'#eee',padding:'0 5px'}}>core/styles</span>.
            A Card is a pre-built component from Material UI their header, body content
            are imported from <span style={{backgroundColor:'#eee',padding:'0 5px'}}>@material-ui/core</span>. Icons comes from the independent Material UI Icons library <span style={{backgroundColor:'#eee',padding:'0 5px'}}>@material-ui/icons</span>.
            Each article has a title, a description, the url of the main image and
            the date of publication.
          </p>

          <Typography variant='h4' component='h2'>
            <LoginButton variant={'contained'} color={'primary'} />
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
