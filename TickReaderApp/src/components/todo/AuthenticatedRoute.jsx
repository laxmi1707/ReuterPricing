import React, {Component} from 'react';
import {BrowserRouter as  Router, Route, Redirect} from 'react-router-dom';
import AuthenticationService from './AuthenticationService';

class AuthenticatedRoute extends Component{
   render(){
      if(AuthenticationService.isUserLoggedIn()){
        return <Route {...this.props}></Route>

      }else{
         return  <Redirect to="/login"/> 
      }
    }
}

export default AuthenticatedRoute