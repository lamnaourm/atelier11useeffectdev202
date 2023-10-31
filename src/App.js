import { useState, useEffect } from 'react';
import axios from "axios"

import './App.css';
import ListUsers from './components/ListUsers';


function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    const getUsers = async ()=>{
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      return res.data
    }
    getUsers().then((users)=>setUsers(users));
  },[])

  return (
    <div className="App">
       {users ? <ListUsers users={users}/> : "Pas d'utilisateurs"}
    </div>
  );
}

export default App;
