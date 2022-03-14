import { useState } from 'react'
import { useQuery } from 'react-query'

const useGetStarWarData = (url) => {
  const [page, setPage] = useState(1)

  const fetchPlanets = async (key) => {
    const response = await fetch(`http://swapi.dev/api/${url}/?page=${key}`)
    const data = await response.json()
    return data
  }

  const {
    data,
    isLoading,
    isError,
    error,
    isFetched,
    isFetching,
    isPreviousData,
  } = useQuery([`${url}`, page], () => fetchPlanets(page), {
    keepPreviousData: true,
  })

  return {
    data,
    isLoading,
    isError,
    error,
    isFetched,
    isFetching,
    setPage,
    page,
    isPreviousData,
  }
}

export default useGetStarWarData
