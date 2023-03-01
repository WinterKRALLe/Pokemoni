import { forwardRef } from "react"
import "./styles.scss"

interface PostProps {
  name, type, image: string
}

const Post = forwardRef<HTMLDivElement, PostProps>(( {name, type, image}, ref) => {
  const postBody = (
    <>
      <a className="Pokemon" href={name}>
      <div className="description">
          <h2 className="name">{name}</h2>
          <h4 className="type">{type}</h4>
          </div>
        <div className="image"><img src={image} loading="lazy" /></div>
      </a>
    </>
  )

  const content = ref ? <div ref={ref}>{postBody}</div> : <div>{postBody}</div>

  return content
})

export default Post