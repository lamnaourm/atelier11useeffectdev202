import React from 'react'

export default function User({user}) {
  return (
    <div>
        <h1>Nom : {user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Ville : {user.address.city} Rue : {user.address.street}</p>
        <button>Details user</button>
    </div>
  )
}
