import React, { useEffect, useState } from 'react';

import api from './services/api';

function App() {

  const [user, setUser] = useState();

  return (

    <div className="App">

      {/*  */}
      <p>Usuário: {user?.login}</p>

      <p>Biográfia: {user?.bio}</p>
      
    </div>

  );

}

export default App;
