# Blog App
This web application build a "Blog like" functionality that use axios to get Posts data from an API (gnews) to be rendered in Material UI components and Styles. Implement Google Authentication from a React library and handle this data with Redux.

It's a Single Page Application that works with boolean interpreters to render components and data.


## Redux

#### Steps

1. Set a State
  1. Slice : create state object (two properties)
    - name : state associate name (string)
    - initialState : state (the state object)
    - reducers : state setters (functions object)

  2. Exports
    - export setters from slice.actions
    - export getters from state
    - export default slice.reducers

2. Store Configuration
  - import reducer data
  - configure store
  - name asignation
    * link the slice by a name into reducer object

3. Wrapping target Components
  - import Provider from react-redux
  - import the store
  - wrapp target component with Provider
  - pass to Provider the store like "store" prop


## Google Login
This library needs a Google OAuth credential that can be taken from developers console. It creates a button interface with some props and callbacks. Show a Google Authentication popup and resceives a response with user data, tokens, etc.
~~~
// test function
const responseGoogle = response => {
  console.log("login response", response);
}

<GoogleLogin
  clientId={ process.env.REACT_APP_GOOGLE_OAUTH }
  render={ renderProps => (
    <button onClick={renderProps.onClick}>Google Login</button>
  ) }
  buttonText='Login'
  onSuccess={responseGoogle}
  onFailure={responseGoogle}
  cookiePolicy={'single_host_origin'}
/>
~~~






## Packages
* [Redux : redux tollkit & react redux](#redux)
* [React Google Login](#react-google-login)
* [Material UI : core & icons](#material-ui)
* [Axios](#axios)

### Redux
~~~
npm i @reduxjs/toolkit react-redux
~~~

### React Google Login
~~~
npm i react-google-login
~~~

### Material UI
~~~
npm i @material-ui/core @material-ui/icons
~~~

### Axios
~~~
npm i axios
~~~
















































































//
