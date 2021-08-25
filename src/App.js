import {
  selectSignedIn
} from './Redux/Reducers/User'

import {
  useSelector
} from 'react-redux'

// global styles
import './App.css';


// Components
import Navbar from './components/Navbar'
import BlogPosts from './components/BlogPosts'
import Home from './components/Home'







function App() {
  const isSignedIn = useSelector( selectSignedIn )



  return (
    <div className="home">
      <Navbar />
      {
        isSignedIn
        ? <BlogPosts />
        : <Home />
      }
    </div>
  );
}

export default App;
