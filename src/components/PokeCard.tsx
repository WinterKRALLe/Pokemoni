import { forwardRef } from "react"
import "./styles.scss"

import { typeColor } from "./../switches/color_icon"

interface PostProps {
  name, type, image: string
}


const Post = forwardRef<HTMLDivElement, PostProps>(({ name, type, image }, ref) => {

  const color = typeColor(type)

  const postBody = (
    <a className="Pokemon1" href={name}>
      <div className="description" style={{ backgroundColor: `rgb(${color})` }}>
        <h2 className="name">{name}</h2>
        <h4 className="type">{type}</h4>
      </div>
      <div className="image"><img src={image} loading="lazy" /></div>
    </a>
  )

  const content = ref ? <div className="Pokemon" ref={ref}>{postBody}</div> : <div className="Pokemon">{postBody}</div>

  return content
})

export default Post
