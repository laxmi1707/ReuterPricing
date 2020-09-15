import React, { useState } from 'react';
import SockJsClient from 'react-stomp';
import update from 'immutability-helper';
import Messages from './Messages';



const SOCKET_URL = 'http://localhost:9001/reuter-price/';

const Pricing = () => {
  const [messages, setMessages] = useState([])
  
  let onConnected = () => {
    console.log("Connected!!")
  }

  let onMessageReceived = (msg) => {
    console.log('New Message Received!!', msg);
        //  setMessages(messages.concat(msg));
       const index =  messages.findIndex((eachMsg) => eachMsg.symbol === msg.symbol);
       console.log('index is',index);
       if(index >= 0){
           console.log('index found');
           const updatedMessage = update(messages, {$splice: [[index, 1, msg]]});
           setMessages(updatedMessage);
       }else{
        console.log('simply appending');
            setMessages(messages.concat(msg));
       }
        // setMessages(messages.filter((e) => e.symbol === msg.symbol))
  }
  

  return (
    <div className="Pricing">
      
          <>
           Reuter Price Listing
           <div className="container">
            <SockJsClient
              url={SOCKET_URL}
              topics={['/topic/reuter-price']}
              onConnect={onConnected}
              onDisconnect={console.log("Disconnected!")}
              onMessage={msg => onMessageReceived(msg)}
              debug={false}
            />
            </div>
            <Messages
              messages={messages}
             
            />
          
          </>
       
    </div>
  )
}

export default Pricing;