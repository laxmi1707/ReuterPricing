import  React,{Component} from 'react';
import {Link} from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService.js'
class Welcome extends Component{
    constructor(props){
        super(props);
        this.state = {
            welcomeMessage:''
        }
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
        this.handleSuccessResponse = this.handleSuccessResponse.bind(this);
    }
    render(){
        return(
            <>
            <h1>Welcome!</h1>
            <div className="container" >Welcome to Reuter Pricing Application : {this.props.match.params.name}
               <p> Click on the menu Listing to go to listing page </p>
            </div>
            </>

          
        )
    }
    retrieveWelcomeMessage(){
        HelloWorldService.executeHelloWorldService().then(response => this.handleSuccessResponse(response))
    }

    handleSuccessResponse(response){
        this.setState({
            welcomeMessage: response.data
        })
    }
}


export default Welcome