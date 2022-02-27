import React, { useEffect, useState } from "react";
import api from "./services/api";

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .post("",{
        metadata:{
          msg_sender: 'msg_sender', 
          epoch_index: 0, 
          input_index: 0, 
          block_number: 0, 
          time_stamp: 0, 
          },
        payload: {
          payload: 'payload',
        }
      })
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);


  return (
    <div className="App">
      <p>Usuário: {user?.metadata}</p>
      <p>Biografia: {user?.payload}</p>
    </div>
  );
}