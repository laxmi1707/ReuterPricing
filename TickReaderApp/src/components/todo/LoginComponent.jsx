import React, {Component, Fragment} from 'react';
import AuthenticationService from './AuthenticationService.js';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: 'lux',
            password:'',
            showLoginSuccess: false,
            showErrorMessage: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    handleChange(event){
        console.log(event.target.value)
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    loginClicked(){
        //lux , dummy
        if( this.state.username==='lux' && (this.state.password==='dummy' || this.state.password==="Dummy"))
        {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`);
            this.setState({
               showLoginSuccess: true,
               showErrorMessage: false
           })

        }else{
            this.setState({
                showLoginSuccess: false,
                showErrorMessage: true
            })
        }
    }
    // handlePasswordChange(event){
    //     console.log(event.target.value)
    //     this.setState({
    //         password: event.target.value
    //     })
    // }
    render(){
        return(
            <Fragment>
                <h1> Login </h1>
                <div className="container">
                {this.state.showErrorMessage && <div className="alert alert-warning">Invalid Login</div>}
               
                UserName : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
                <div className="container">
                   <hr/> Use "dummy" as default password
                </div>

            </Fragment>
        )
    }
}


function ShowInvalidCredential(props){
    if(props.showErrorMessage){
        return   <div>Invalid Login</div>
    }
    return null 
}


function ShowSuccessMessage(props){
    if(props.showLoginSuccess){
        return <div> Login SuccessFull</div>
    }
    return null 
}
export default Login