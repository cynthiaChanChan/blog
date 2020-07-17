import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Post = ({ data: { markdownRemark } }) => {
  return (
    <Layout>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <p>{markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
    </Layout>
  )
}

export default Post
