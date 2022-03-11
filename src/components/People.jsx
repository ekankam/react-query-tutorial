import React from 'react'
import { useQuery } from 'react-query'
import Person from './Person'

const People = () => {
  const fetchPeople = async () => {
    const response = await fetch('http://swapi.dev/api/people/')
    const data = await response.json()
    return data
  }

  const { data, status } = useQuery('people', fetchPeople)

  return (
    <div>
      <h2>People</h2>

      {status === 'loading' && <h4>Loading data...</h4>}
      {status === 'error' && <h4>Error fetching data</h4>}

      {status === 'success' && (
        <>
          {data.results?.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </>
      )}
    </div>
  )
}

export default People
