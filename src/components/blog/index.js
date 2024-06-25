import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const Blog = () => {
    const data = useStaticQuery(graphql`
        {
            allWpPost {
                nodes {
                    title
                    date(formatString: "DD-MM-YYYY")
                    slug
                    excerpt
                }
            }
        }
    `)
    const allArticles = data.allWpPost.nodes.map((item, index) => (
        <div key={index} className="font-semibold justify-self-auto">
            <Link to={`/${item.slug}`}>
                <h2 className="text-clip text-gray-700 hover:text-blue-500">
                    {item.title}
                </h2>
                <p className=" text-sm text-gray-500 mb-4">{item.date}</p>
            </Link>
        </div>
    ) )

    return (
        <div>
            <h3 className="text-lg font-bold mt-4 mb-4">All Posts</h3>
            <div>
                {allArticles}
            </div>
        </div>
    )
}

export default Blog