import React from "react"
import { Link } from "gatsby"

const BlogItem = ({slug, title}) => {
    return (
        <div>
        <Link to={`/${slug}`}>{title}</Link>
        </div>
    )
}

export default BlogItem