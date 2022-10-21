import React from 'react'
import Footer from './Footer'
import Header from './Header'
import styles from './Layout.module.scss'
import Content from './Content'


const Layout = (props) => {
  return (
    <div className={styles.layout}>
        <Header/>
        <Content/>
        <main className={styles.main}>
            {props.children}
        </main>

        <Footer/>
    </div>
  )
}

export default Layout