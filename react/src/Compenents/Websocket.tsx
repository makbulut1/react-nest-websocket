import {useContext, useEffect, useState} from "react";
import {websocketContext} from "../contexts/WebsocketContext";

type MessagePayload = {
    content: string;
    msg: string;
}

export const Websocket = () => {
    const [value, setValue] = useState('');
    const [messages, setMessages] = useState<MessagePayload[]>([]);
    const socket=  useContext(websocketContext);
    useEffect(() => {
        socket.on('connect', ()=> {
            console.log('Connected');
        })
        socket.on('onMessage', (newMessage: MessagePayload) => {
            console.log('onMessage event received! ')
            console.log(newMessage);
            setMessages((prev) => [...prev, newMessage])
        })
        return(() => {
            console.log('Unregistering Event...');
            socket.off('connect');
            socket.off('onMessages');
        })
    },[]);
    const onSubmit = () => {
        socket.emit('newMessage', value);
        setValue('')
    };
  return(
      <div>
          <div>
                <h1>
                    WebSocket Compenent
                </h1>
                <div>
                    {messages.length === 0 ? (
                        <div>No message</div>
                    ): (
                        <div>
                          {messages.map((msg)=> (
                           <div>
                              <p>{msg.content}</p>
                           </div>))}
                        </div> )}
                </div>
              <div>
              <input
                  type="text"
                  value={value}
                  onChange={(e) => (setValue(e.target.value))}/>
              <button
                  onClick={onSubmit}>
                  Submit
              </button>
              </div>
          </div>
      </div>
  )
};