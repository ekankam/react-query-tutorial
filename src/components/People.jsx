import useGetStarWarData from '../hooks/useGetStarWarData'
import Person from './Person'

const People = () => {
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
  } = useGetStarWarData('people')

  console.log(data)
  return (
    <div>
      <h2>People</h2>

      <button
        onClick={() => setPage((old) => old - 1)}
        disabled={page === 1}
        className={`${page === 1 && 'disable'}`}
      >
        Previous Page
      </button>
      <span>Page: {page}</span>
      <button
        onClick={() => setPage((old) => old + 1)}
        disabled={isPreviousData || !data?.next}
        className={`${!data?.next && 'disable'}`}
      >
        Next Page
      </button>

      {isLoading && <h2>Loading data...</h2>}
      {isError && <h4>{error}</h4>}
      {isFetched && (
        <>
          {data.results?.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </>
      )}
      {isFetching && <h4>Loading next page...</h4>}
    </div>
  )
}

export default People
