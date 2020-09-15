import React,{Component, Fragment} from 'react';
import {BrowserRouter  as Router, Route, Switch, Link} from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute'
import Login from './LoginComponent';
import Pricing from './Pricing';
import Welcome from './WelcomeComponent';
import LogoutComponent from './LogoutComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';

class TodoApp extends Component{
   

    render(){
        return(
            <div className="OrderApp">
                <Router>
                    <Fragment>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/"  exact component={Login}/>
                            <Route path="/login"  component={Login}/>
                            <AuthenticatedRoute path="/welcome/:name"  component={Welcome}/>
                            <AuthenticatedRoute path="/welcome"  component={Welcome}/>
                            <AuthenticatedRoute path="/reuter-price-listing"  component={Pricing}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                            <Route  component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </Fragment>
                   
                </Router>
              
            </div>
        )
    }
}


function ErrorComponent (){
    return <div>Error occured. Contact support</div>
}


export default TodoApp