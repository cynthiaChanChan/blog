import React from "react"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "../../styles/global.scss"
import styles from "./Layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
