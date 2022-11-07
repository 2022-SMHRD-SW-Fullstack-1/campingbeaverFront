import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Eheart from'../../components/img/WhiteEheart.png'
import Fheart from'../../components/img/Fheart.png'
import { useState } from 'react';
import axios from 'axios';


const Items = ({ getItemData, id, listType, img, itemName, price }) => {
  const [like, setLike] = useState(false);
  const [userwishbtn, setUserwishbtn] = useState('x')
  const priceToString = Number(price).toLocaleString('ko-KR');
  const navigate = useNavigate();

  const [user_id, setUser_id] = useState(localStorage.userId)

  const [wishItem, setWishItem] = useState({
    // user_id : user_id,
    user_id :'admin',
    pkg_seq :parseInt(id)
    })
  

  const goToDetail = () => {
    navigate(`/productDetail/${id}`);
  };


  const wishBtn = () => {
    if(userwishbtn=='x'){
      setUserwishbtn('o')

      axios.post(`/beaver/wishlist/add`, wishItem)
      .then((res)=>{
          console.log(wishItem)
          
      }).catch((error)=>console.log('Network Error: ', error))  
    }
    
    else{
      setUserwishbtn('x')
      console.log(wishItem)
    
      axios.post(`/beaver/wishlist/delete`, wishItem)
      .then((res)=>{
          console.log(wishItem)
          
      }).catch((error)=>console.log('Network Error: ', error))  
    }
  }

  return (
    <div className={listType === 'small' ? 'smallItems' : 'bigItems'}>
      <span className="itemImg">
        <span className="itemButton">
          <button
            onClick={() => {
              getItemData({ id, img, itemName, price });
            }}
            className="shopBtn"
          >
            Quick Shop
          </button>
          <button className="cartBtn" onClick={wishBtn}>
            {userwishbtn=='x'? <img src={Eheart}></img> : <img src={Fheart}></img>}
          </button>
          {/* <IconFavorite
          className={
            Items.id === like
              ? "icon-favorite"
              : "icon-favorite active"
          }
          onClick={() => {
            setLike(!like);
          }}
        /> */}
        </span>
        
        <img src={img} alt="product thumbnail"/>
      </span>
      <div className="description">
        <div onClick={goToDetail} className="name">
          {itemName}
        </div>
        <hr />
        <div className="price">￦{priceToString}</div>
      </div>
    </div>
  );
};

// const IconFavorite = styled.button`
//   &.active {
//     background-position: -689px -430px;
//     width: 0px;
//     padding-top: 0px;
//   }

//   text-align: left;
//   box-sizing: border-box;
//   position: absolute;
//   top: 0px;
//   right: 0px;
//   // background-image: url(https://www.idus.com/resources/dist/images/sp/sp-icon_1634026706070.png);
//   height: 0;
//   overflow: hidden;
//   display: inline-block;
//   visibility : hidden;
//   vertical-align: middle;
//   font-size: 0;
//   line-height: 0;
//   letter-spacing: 0;
//   z-index: 80;
//   background-position: -689px -469px;
//   width: 0px;
//   padding-top: 0px;
// `;

export default Items;