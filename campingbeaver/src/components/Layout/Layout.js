import React from 'react'
import Footer from './Footer'
import Header from './Header'
import styles from './Layout.module.scss'
import Content from './Content'
import Survey from './Survey'


const Layout = (props) => {
  return (
    <div className={styles.layout}>
        <Header/>
        <Content/>
        <Survey/>

        <main className={styles.main}>
            {props.children}
        </main>
        <h1 align='center'>Our Recommendation</h1>

        <Footer/>
    </div>
  )
}

export default Layout