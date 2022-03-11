import React from 'react'

const Person = ({ person }) => {
  return (
    <article className="card">
      {' '}
      <h3>{person.name}</h3>
      <p>Gender - {person.gender}</p>
      <p>Birth year - {person.birth_year}</p>
    </article>
  )
}

export default Person
