import React, { useState } from 'react'
import styles from './ReviewForm.module.scss'
const Score = () => {
    const [hovered, setHovered] = useState(null);
    const [clicked, setClicked] = useState(null);

    const goToFetch = e => {
        setClicked(e.target.id);
        fetch(`http://10.58.3.24:8000/products/1`, {
        //사용할 http 메소드 
        method: 'POST',
        //토큰
        headers: {
            Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.loTjeBWZ9SeXV-BcIxqOtX37AN30ROvsZl0_udeeRJU',
        },
        //서버에 보낼 데이터 (별점)
        body: JSON.stringify({
            rating: e.target.id
        }),
    });
    }

  return (
    <form class="mb-3" className={styles.myForm} method="post">
    <fieldset>
      {/* <span className={styles}>별점을 선택해주세요</span> */}
      <input type="radio" name="reviewStar" value="5" id="rate1"/><label
        for="rate1">★</label>
      <input type="radio" name="reviewStar" value="4" id="rate2"/><label
        for="rate2">★</label>
      <input type="radio" name="reviewStar" value="3" id="rate3"/><label
        for="rate3">★</label>
      <input type="radio" name="reviewStar" value="2" id="rate4"/><label
        for="rate4">★</label>
      <input type="radio" name="reviewStar" value="1" id="rate5"/><label
        for="rate5">★</label>
    </fieldset>
  </form>
  )
}

export default Score


