import React from 'react'
import { useQuery } from 'react-query'
import Planet from './Planet'

const Planets = () => {
  const fetchPlanets = async () => {
    const response = await fetch('http://swapi.dev/api/planets/')
    const data = await response.json()
    return data
  }

  const { data, status } = useQuery('planets', fetchPlanets)

  return (
    <div>
      <h2>Planets</h2>

      {status === 'loading' && <h2>Loading data...</h2>}
      {status === 'error' && <h4>Error fetching data</h4>}
      {status === 'success' && (
        <>
          {data.results?.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </>
      )}
    </div>
  )
}

export default Planets
