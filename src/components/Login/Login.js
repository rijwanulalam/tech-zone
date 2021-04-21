import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import login from '../../assets/login.svg';
import GoogleButton from 'react-google-button'
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
    
      const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
          const { displayName, email } = result.user;
          const signedInUser = { displayName, email }
          setLoggedInUser(signedInUser);
          sessionStorage.setItem('email', email)
          sessionStorage.setItem('displayName', displayName)
          storeAuthToken();
        }).catch(function (error) {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      }
    
      const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function (error) {
            // Handle error
          });
      }
    return (
        <div className="login-page container">
            
      <div className="row align-items-center" style={{ height: "100vh" }}>
         <h1 className="font-weight-bold text-center">Login Here</h1>
        <div className="col-md-6 shadow p-5">
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">Forgot your password?</label>
          </div>
          <div className="from-group mt-5">
            <GoogleButton onClick={handleGoogleSignIn}>Google Sign in</GoogleButton>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-center">
          <img className="img-fluid" src={login} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;