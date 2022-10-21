import React from 'react'
import styles from './Header.module.scss'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div>
        
        <img src={logo} width='200px'></img>
        
        </div> 
        <nav className={styles.navigation}>
          <ul>
            <li>
              메뉴1
            </li>
            <li>
              메뉴2
            </li>
          </ul>
          </nav>
          </div>
    
    </header>
  )
}

export default Header