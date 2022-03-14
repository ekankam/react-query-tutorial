import useGetStarWarData from '../hooks/useGetStarWarData'
import Planet from './Planet'

const Planets = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    isFetched,
    isFetching,
    setPage,
    page,
    isPreviousData,
  } = useGetStarWarData('planets')

  console.log(data)
  return (
    <div>
      <h2>Planets</h2>

      <button
        disabled={page === 1}
        onClick={() => setPage((old) => old - 1)}
        className={`${page === 1 && 'disable'}`}
      >
        Previous Page
      </button>
      <span>Page: {page}</span>
      <button
        disabled={isPreviousData || !data?.next}
        onClick={() => setPage((old) => old + 1)}
        className={`${!data?.next && 'disable'}`}
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
