import React, { useEffect, useState } from 'react';

import api from './services/api';

function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/users/lucasgabriel2806")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  useEffect(() => {
   api
     .post("https://minhaapi/novo-usuario",{
        nome: 'Romulo',
        sobrenome: 'Sousa'
  })
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (

    <div className="App">

      {/*  */}
      <p>Usuário: {user?.login}</p>

      <p>Biográfia: {user?.bio}</p>
      
    </div>

  );

}

export default App;
