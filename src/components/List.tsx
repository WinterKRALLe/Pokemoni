import { useState, useRef, useCallback } from "react"
import usePosts from "../hooks/usePosts"
import Pokecard from "./PokeCard"

const List = () => {
  const [pageNum, setPageNum] = useState(1)
  const {
    isLoading,
    isError,
    error,
    results,
    hasNextPage
  } = usePosts(pageNum)

  const intObserver = useRef<IntersectionObserver | null>(null)
    const lastPostRef = useCallback((post: HTMLDivElement | null) => {
        if (isLoading) return

        if (intObserver.current) intObserver.current.disconnect()

        intObserver.current = new IntersectionObserver(posts => {
            if (posts[0].isIntersecting && hasNextPage) {
                console.log('We are near the last post!')
                setPageNum(prev => prev + 21)
            }
        })

        if (post) intObserver.current.observe(post)
    }, [isLoading, hasNextPage])

  //DODELAT
  if (isError) { return <center>{error.message}</center> }

  const content = results.map((p, i) => {
    if(p.sprites.other.dream_world.front_default) {
      if (results.length === i + 1)
          return <Pokecard 
                    ref={lastPostRef} 
                    key={i} 
                    name={p.name} 
                    type={p.types[0].type.name} 
                    image={p.sprites.other.dream_world.front_default} 
                  />
      
      return <Pokecard 
                key={i} 
                name={p.name} 
                type={p.types[0].type.name} 
                image={p.sprites.other.dream_world.front_default} 
              />
    }
})


  return (
    <>
      {isLoading && <center>Loading ...</center>}
      {content}
    </>
  )
}

export default List