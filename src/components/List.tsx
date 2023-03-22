import { useState, useRef, useCallback, useEffect, useMemo } from "react"
import { fetchDataPage } from "../api/fetch"
import Pokecard from "./PokeCard"
import Loader from "./Loader"

const List = () => {
  const useCustomHookPokemons = (pageNum = 1) => {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState<{ message?: string }>({})
    const [hasNextPage, setHasNextPage] = useState(false)

    useEffect(() => {
      setIsLoading(true)
      setIsError(false)
      setError({})

      const controller = new AbortController()
      const { signal } = controller

      fetchDataPage(pageNum, { signal })
        .then(data => {
          setResults(data)
          setHasNextPage(Boolean(data.length))
          setIsLoading(false)
        })
        .catch(e => {
          setIsLoading(false)
          if (signal.aborted) return
          setIsError(true)
          setError({ message: e.message })
        })

      return () => controller.abort()

    }, [pageNum])

    return { isLoading, isError, error, results, hasNextPage }
  }

  const [pageNum, setPageNum] = useState(1)
  const {
    isLoading,
    isError,
    error,
    results,
    hasNextPage
  } = useCustomHookPokemons(pageNum)

  const intObserver = useRef<IntersectionObserver | null>(null)

  const lastPostRef = useCallback((post: HTMLDivElement | null) => {
    if (isLoading) return

    if (intObserver.current) intObserver.current.disconnect()

    intObserver.current = new IntersectionObserver(posts => {
      if (posts[0].isIntersecting && hasNextPage) {
        setPageNum(prev => prev + 21)
      }
    })

    if (post) intObserver.current.observe(post)
  }, [isLoading, hasNextPage])


  const content = useMemo(() => {
    if (isError) return <center>{error.message}</center>

    return results.map((p, i) => {
      if (p.sprites.other.dream_world.front_default) {
        if (results.length === i + 1) {
          return (
            <Pokecard
              ref={lastPostRef}
              key={i}
              name={p.name}
              type={p.types.map(t => t.type.name)}
              image={p.sprites.other.dream_world.front_default}
            />
          )
        }

        return (
          <Pokecard
            key={i}
            name={p.name}
            type={p.types[0].type.name}
            image={p.sprites.other.dream_world.front_default}
          />
        )
      }
    })
  }, [isError, error.message, results, lastPostRef])

  return isLoading
    ? (
      "loading..."
    )
    : (
      <> {content} </>
    )
}

export default List
