import React from 'react'
import User from './User'

function ListUsers({users}) {
  return (
    <div>
      <h1>Nombre d'utilisateurs : {users.length}</h1>
      {
        users.map(u => 
          <User key={u.id} user={u} />
          )
      }
    </div>
  )
}

export default ListUsers
