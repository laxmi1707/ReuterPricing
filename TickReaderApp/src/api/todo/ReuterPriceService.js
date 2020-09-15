
import axios from 'axios';

class ReuterPriceService{
   
 
    // getPriceListing(){
    //     return axios.get("http://localhost:8000/order")
    // }
    onMessageReceived = (msg) => {
        console.log('New Message Received!!', msg);
       // setMessages(messages.concat(msg));
      }
    
}
export default new ReuterPriceService()