import React from 'react'
import ReservEmpty from './ReservEmpty'
import ReservNotEmpty from './ReservNotEmpty'
import styles from './ReservList.module.scss'


const ReservList = () => {
  return(
    <div>
       <div className={styles.top}>
          <h1 className={styles.contact}>
          My Reservation
          </h1>
          <p className={styles.contact1}>예약 / 취소 내역</p>
        </div>

      <div>
        <div>
           <ReservNotEmpty/>
        </div>
      </div>
    
    </div>
  )
}

export default ReservList




//<div>
    //     <div className={styles.top}>
    //       <h1>
    //       My Reservation
    //       </h1>
    //       <p>예약 / 취소 내역</p>   
    //   </div>

    //   <div>
    //     <table className=''>
    //         <thead>
    //         <tr>
    //             <th>예약번호</th>
    //             <th>예약날짜</th>
    //             <th>예약상품명</th>
    //             <th>결제금액</th>
    //             <th>리뷰작성</th>
    //             <th>배송현황</th>
    //             <th>예약취소</th>
    //         </tr>
    //         </thead>
    //         <tbody>
    //         <tr>
    //             <td>20221024</td>
    //             <td>20221024</td>
    //             <td>피크닉 패키지</td>
    //             <td>59,000원</td>
    //             <td><button>작성</button></td>
    //             <td><button>조회</button></td>
    //             <td><button>취소</button></td>
    //         </tr>
    //         </tbody>
    //     </table>
    //   </div>

    // </div>