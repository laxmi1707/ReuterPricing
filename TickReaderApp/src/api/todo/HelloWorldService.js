import Axios from "axios";

import axios from 'axios';

class HelloWorldService{

    executeHelloWorldService(){
        return axios.get('http://localhost:8000/greeting');
       // console.log('HelloWorld');
    }
}

export default new HelloWorldService()