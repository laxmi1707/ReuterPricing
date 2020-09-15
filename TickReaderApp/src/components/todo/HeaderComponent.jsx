import  React,{Component} from 'react';
import { Link} from 'react-router-dom';
import AuthenticationService from './AuthenticationService';
import { withRouter } from 'react-router';

class HeaderComponent extends Component{
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        
        console.log(isUserLoggedIn);
        return(
           <header>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div><a href="https://github.com/laxmi1707/" className="navbar-brand"> ProjectGitPage </a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li key={1}> <Link className= "nav-link" to="/welcome">Home</Link></li>}
                        {isUserLoggedIn && <li key={2}> <Link className="nav-link" to="/reuter-price-listing">Listing </Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse  justify-content-end">
                        {!isUserLoggedIn && <li key={3}><Link className="nav-link" to="/login">login</Link></li>}
                        {isUserLoggedIn && <li key={4}><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>logout</Link></li>}
                    </ul>
                    </nav>
           </header>
        )
    }
}


export default withRouter(HeaderComponent)