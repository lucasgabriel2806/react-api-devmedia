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
  
  return (

    <div className="App">

      {/* O operador ?. (chamado optional chaining) impede erros caso user seja undefined. Sem isso, daria erro se tentasse acessar user.login antes da resposta da API.  */}
      <p>Usuário: {user?.login}</p>

      <p>Biográfia: {user?.bio}</p>
      
    </div>

  );

}

export default App;
