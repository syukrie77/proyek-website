import React from "react"
import { Link } from "gatsby"

export default function PostSummary({ post }) {
    const title = post.title
    const slug = post.slug
    const excerpt = post.excerpt

    return (
        <>
            <p className="mt-2 text-2xl leading-8 text-center font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                {title}
            </p>
            <p className="mt-4 max-w-xl text-lg text-gray-500 text-justify lg:mx-auto mb-4">
                {excerpt}
            </p>
            <Link className="w-1/5 mt-3 mx-auto flex items-center justify-center px-2 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-2 md:text-lg md:px-2"
            to={slug}>Read More</Link>
        </>
    )
}