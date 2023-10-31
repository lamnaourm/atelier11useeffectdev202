import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function User({ user, handleChange, activeId }) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if(activeId===user.id){
            const getPosts = async ()=>{
                let res = await axios.get("https://jsonplaceholder.typicode.com/posts?userid="+activeId);
                return res.data
              }
              getPosts().then((posts)=>setPosts(posts));
        }
    },[activeId])

    return (
        <div>
            <h1>Nom : {user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Ville : {user.address.city} Rue : {user.address.street}</p>
            <button onClick={() => handleChange(user.id)} disabled={activeId===user.id}>Details user</button>
        </div>
    )
}
