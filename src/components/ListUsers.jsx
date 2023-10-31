import React, { useState } from 'react'
import User from './User'

function ListUsers({ users }) {

  const [activeId, setActiveId] = useState(0);


  return (
    <div>
      <h1>Nombre d'utilisateurs : {users.length}</h1>
      {
        users.map(u =>
          <User key={u.id} user={u} activeId={activeId} handleChange={(id) => setActiveId(id)} />
        )
      }
    </div>
  )
}

export default ListUsers
