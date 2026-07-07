import type { Ref } from "react"
import "./styles.scss"

import { typeColor } from "./../switches/color_icon"

interface PostProps {
  name: string
  type: string
  image: string
  ref?: Ref<HTMLDivElement>
}

const Post = ({ name, type, image, ref }: PostProps) => {

  const color = typeColor(type)

  return (
    <div className="Pokemon" ref={ref}>
      <a className="Pokemon1" href={name}>
        <div className="description" style={{ backgroundColor: `rgb(${color})` }}>
          <h2 className="name">{name}</h2>
          <h4 className="type">{type}</h4>
        </div>
        <div className="image"><img src={image} loading="lazy" alt={name} /></div>
      </a>
    </div>
  )
}

export default Post
