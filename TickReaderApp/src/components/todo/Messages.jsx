import React from 'react'

const Messages = ({ messages }) => {

    let renderMessage = (message) => {
        const { symbol, midPrice, trend } = message;
        // const messageFromMe = currentUser.username === message.sender;
       
        return (
            <tr key={message.symbol}>
              <td>{message.symbol}</td>
              <td>{message.midPrice}</td> 
              <td>{message.trend === 'up' ? <span className='up-arrow'>&#8679;</span> : <span className='down-arrow'>&#8681;</span> }</td>
            </tr>
          );
         
    };

    return (
        <>  
            <table className="table">
                    <thead>
                        <tr>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Trend</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                            messages.map(msg => renderMessage(msg))
                            }
                    </tbody>
                </table>
           </>            

    )
}


export default Messages