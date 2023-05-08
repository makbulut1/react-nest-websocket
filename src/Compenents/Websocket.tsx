import {useContext, useEffect, useState} from "react";
import {websocketContext} from "../contexts/WebsocketContext";


export const Websocket = () => {
    const [value, setValue] = useState('');
const socket=  useContext(websocketContext);
    useEffect(() => {
        socket.on('connect', ()=> {
            console.log('Connected');
        })
        socket.on('onMessage', (data) => {
            console.log(data);
            console.log('onMessage event received! ')
        })
        return(() => {
            console.log('Unregistering Event...');
            socket.off('connect');
            socket.off('onMessages');
        })
    },[]);
    const onSubmit = () => {
        socket.emit('onMessage', value);
    };
  return(
      <div>
          <div>
              <h1>
                  WebSocket Compenent
              </h1>
              <input type="text" onChange={(e) => (setValue(e.target.value))}/>
              <button onClick={() => socket.emit('newMessage', value)}>Submit</button>
          </div>
      </div>
  )
};