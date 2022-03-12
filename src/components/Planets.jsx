import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Planet from './Planet'

const fetchPlanets = async (page = 0) => {
  const response = await fetch(`http://swapi.dev/api/planets/?page=${page}`)
  const data = await response.json()
  return data
}

const Planets = () => {
  const [page, setPage] = useState(1)
  const { data, isLoading, isError, error, isFetched, isFetching } = useQuery(
    ['planets', page],
    () => fetchPlanets(page),
    {
      keepPreviousData: true,
    }
  )

  const prevButtonHandler = () => setPage((page) => page - 1)
  const nextButtonHandler = () => setPage((page) => page + 1)
  const lastPage = data?.count / 10

  return (
    <div>
      <h2>Planets</h2>

      <button
        onClick={() => prevButtonHandler()}
        disabled={page === 1}
        className={`${page === 1 && 'disable'}`}
      >
        Previous Page
      </button>
      <span>Page: {page}</span>
      <button
        onClick={() => nextButtonHandler()}
        disabled={page === lastPage}
        className={`${page === lastPage && 'disable'}`}
      >
        Next Page
      </button>

      {isLoading && <h2>Loading data...</h2>}
      {isError && <h4>{error}</h4>}
      {isFetched && (
        <>
          {data.results?.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </>
      )}
      {isFetching && <h4>Loading next page...</h4>}
    </div>
  )
}

export default Planets
