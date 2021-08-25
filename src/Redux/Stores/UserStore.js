import { configureStore } from '@reduxjs/toolkit'
import UserReducer from '../Reducers/User'

export default configureStore({
  reducer:{
    user:UserReducer
  }
})
