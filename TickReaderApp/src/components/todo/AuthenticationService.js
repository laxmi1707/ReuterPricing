class AuthenticationService{
    registerSuccessfulLogin(username){
        console.log('username');
        sessionStorage.setItem('authenticatedUser', username);
    }
    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser');
        if(user===null){
            return false;
        }else{
            return true;
        }
    }
}

export default new AuthenticationService()