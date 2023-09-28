import { useState, useEffect } from 'react';

import Login from './views/Login';
import Home from './views/Home';
import auth from './services/firebase';
import { onAuthStateChanged } from "firebase/auth";

import './App.css';

function App() {
  const [user, setUser] = useState(null);

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     setUser(user)
  //   }
  // });

  return (
    <div className="App">
      { user ? <Home user={user} /> : <Login /> }
    </div>
  );
}

export default App;