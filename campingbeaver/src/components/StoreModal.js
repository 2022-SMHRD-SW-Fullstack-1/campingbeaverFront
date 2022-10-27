import { AiFillCloseSquare } from 'react-icons/ai';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import { GrFacebook, GrTwitter } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './StoreModal.scss';

const StoreModal = ({ items, closeModal }) => {
  const [count, setCount] = useState(1);
  const { id, img, itemName, price, option_product_id } = items;

  const currentCount = e => {
    const count = e.target;
    setCount(count);
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
    if (count <= 1) {
      alert('주문 수량은 1 이상이어야 합니다.');
      setCount(1);
    }
  };

  const navigate = useNavigate();

  const goToCart = () => {
    fetch(`http://10.58.2.129:8000/carts/`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
      body: JSON.stringify({
        option_product_id: Number(option_product_id),
        count: Number(count),
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          navigate('../cart');
        }
      });
  };

  const priceToString = Number(price).toLocaleString('ko-KR');
  const calculateTotalPrice = price * count;
  const totalPriceToString = calculateTotalPrice.toLocaleString('ko-KR');

  const handleWishList = () => {
    alert('로그인 후 관심상품 등록을 해주세요.');
  };

  const goToDetail = () => {
    navigate(`/productDetail/${id}`);
  };

  return (
    <div className="storeModal">
      <div className="modalBackground" />
      <div className="modalComponent">
        <AiFillCloseSquare
          onClick={() => {
            closeModal(false);
          }}
          className="closeBtn"
        />
        <section className="imgSection">
          <img src={img} alt="Product Thumbnail" />
        </section>
        <section className="infoSection">
          <h2 className="itemName">{itemName}</h2>
          <hr />
          <table>
            <tr className="description">
              <th>상품 간략설명</th>
              <td>description</td>
            </tr>
            <tr className="price">
              <th>판매가</th>
              <td>￦{priceToString}</td>
            </tr>
            <tr>
              <th>배송 방법</th>
              <td>택배</td>
            </tr>
            <tr>
              <th>배송비</th>
              <td>￦3,000 (￦50,000 이상 구매 시 무료)</td>
            </tr>
            <tr>
              <th>SNS 상품홍보</th>
              <td className="snsBtn">
                <GrFacebook className="facebookBtn" />
                <GrTwitter className="twitterBtn" />
              </td>
            </tr>
          </table>
          <hr />

          <div className="amountTab">
            <span className="itemName">{itemName}</span>
            <div className="inputAmount">
              <div
                className="amountInput"
                onChange={currentCount}
                type="number"
              >
                <span>{count}</span>
              </div>
              <div className="amountHandler">
                <button onClick={increaseCount} className="up">
                  <IoMdArrowDropup className="arrow" />
                </button>
                <button onClick={decreaseCount} className="down">
                  <IoMdArrowDropdown className="arrow" />
                </button>
              </div>
            </div>
            <span className="amountPrice">￦{totalPriceToString}</span>
          </div>
          <hr />
          <div className="totalPrice">
            총 상품금액 :<span> ￦{totalPriceToString} </span>({count}개)
          </div>
          <div className="totalBuyBtn">
            <button onClick={goToDetail} className="buyBtn">
              BUY NOW
            </button>
            <button onClick={goToCart} className="cartBtn">
              CART
            </button>
          </div>
          <button onClick={handleWishList} className="wishList">
            <span>+ WISH LIST</span>
          </button>
        </section>
      </div>
    </div>
  );
};

export default StoreModal;