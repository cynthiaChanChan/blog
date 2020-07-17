import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const year = new Date().getFullYear()
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer>
      <p>
        Created by {data.site.siteMetadata.author}, &copy; {year}
      </p>
    </footer>
  )
}

export default Footer
