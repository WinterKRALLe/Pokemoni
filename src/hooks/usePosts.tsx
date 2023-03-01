import { useState, useEffect } from 'react'
import { fetchDataPage } from '../api/fetch'

const usePosts = (pageNum = 21) => {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState< { message?: string } >({})
    const [hasNextPage, setHasNextPage] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setIsError(false)
        setError({})

        const controller = new AbortController()
        const { signal } = controller

        fetchDataPage(pageNum, { signal })
            .then(data => {
                setResults([...data])
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

export default usePosts