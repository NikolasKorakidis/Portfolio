import React from "react"
// import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <section className="blog-page">
      <Blogs blogs={blogs} title="blog" />
    </section>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        date(formatString: "MMMM Do, YYYY")
        desc
        id
        slug
        category
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Blog
