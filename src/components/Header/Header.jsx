import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import styles from "./Header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={styles.header}>
      <h1>
        <Link to="/" className={styles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.active}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.active}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.active}
              to="/blog"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
