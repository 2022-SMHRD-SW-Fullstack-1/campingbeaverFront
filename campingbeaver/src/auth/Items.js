import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Items = ({ getItemData, id, listType, img, itemName, price }) => {
  const priceToString = Number(price).toLocaleString('ko-KR');
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/productDetail/${id}`);
  };

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
          <button className="cartBtn">
            <FaShoppingCart />
          </button>
        </span>
        <img src={img} alt="product thumbnail" />
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

export default Items;