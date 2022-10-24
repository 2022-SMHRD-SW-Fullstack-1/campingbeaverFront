import React, { useEffect, useState } from 'react'
import { TabContent } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import ReservList from './ReservCheck/ReservList';
import ReservNotEmpty from './ReservCheck/ReservNotEmpty';
import styles from './SideNav.module.scss'
import WishList from './WishList';


const SideNav = () => {

  let [tab, setTab] = useState(0);
  
  function TabContent(props) {
    if(props.tab === 0){
      return <div><ReservList/></div>
    }else if(props.tab === 1){
      return <div><WishList/></div>
    }else if(props.tab === 2){
      return <div> 회원정보수정 </div>
    }
  }
 
  return (
    <div className={styles.SideNav}>
    <Nav className="flex-column mt-5 mb-3" variant="tabs" defaultActiveKey="link-0">
      {/* <Nav.Link href="/home">Active</Nav.Link> */}
      <Nav.Link className={styles.head} eventKey="disabled" disabled>My Page</Nav.Link>

      <Nav.Link eventKey="link-0" onClick={()=>{setTab(0)}}>
        예약/취소 정보
      </Nav.Link>

      <Nav.Link eventKey="link-1" onClick={()=>{setTab(1)}}>
        관심 상품
      </Nav.Link>

      <Nav.Link eventKey="link-2" onClick={()=>{setTab(2)}}>
        회원 정보 수정
      </Nav.Link>
    </Nav>
    <TabContent tab={tab}/>
    </div>
  )
}



export default SideNav