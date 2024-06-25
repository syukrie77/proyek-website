import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Blog from "../components/blog"
import Seo from "../components/seo"
import PostSummary from "../components/post-summary"

export default function Home({ data }) {
  return (
    <Layout>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h1 className="text-base text-5xl text-indigo-600 font-semibold tracking-wide uppercase">
              Berbagi Tip dan Trik
            </h1>
            { data.allWpPost.edges.map( ({ node }) => (
              <PostSummary post={node} />
              )
            )}
            <Seo/>
          </div>
        </div>
      </section>
    </Layout>
  )
}
/*
const GatsbyPage = () => (
  <Layout>
    <Seo title="Gatsby Page" />
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Gatsby Page!</h1>
      <h2 className=" text-base text-4xl text-indigo-600 font-semibold tracking-wide uppercase">
        Posts:
      </h2>
      <PostSummary/>
      <Seo/>
      <Blog/>
    </div>
  </Layout>
)

export default GatsbyPage
*/

export const pageQuery = graphql`
  {
    allWpPost(sort: {fields: [modified], order: [ASC]}, skip: 2){
      edges {
        node {
          title
          excerpt
          slug
          modified(formatString: "DDMMYYYY")
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`