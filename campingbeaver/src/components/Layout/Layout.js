import React from 'react'
import Footer from './Footer'
import Header from './Header'
import styles from './Layout.module.scss'
import MyPage from './MyPage'


const Layout = (props) => {
  return (
    <div className={styles.layout}>
        <Header/>
        <MyPage/>
        <main className={styles.main}>
            {props.children}
        </main>

        <Footer/>
    </div>
  )
}

export default Layout