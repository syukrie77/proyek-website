import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function BlogPost({ data }) {
  const post = data.allWpPost.edges[0].node
  //console.log(post)
  return (
    <Layout>
      <div className="w-4/5 max-w-3xl mx-auto mt-9 px-6">        
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-4 mb-4">{post.title}</h1>
        <div className="prose justify-stretch" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`