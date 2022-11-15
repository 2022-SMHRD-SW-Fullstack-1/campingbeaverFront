import { useNavigate } from "react-router-dom";
import Eheart from "../../components/img/WhiteEheart.png";
import Fheart from "../../components/img/Fheart.png";
import { useState } from "react";
import axios from "axios";

const Items = ({ getItemData, id, listType, img, itemName, price }) => {
  const [userwishbtn, setUserwishbtn] = useState("x");
  const priceToString = Number(price).toLocaleString("ko-KR");
  const navigate = useNavigate();

  const [user_id, setUser_id] = useState(localStorage.userId);

  const [wishItem, setWishItem] = useState({
    user_id: user_id,
    pkg_seq: parseInt(id),
  });

  const goToDetail = () => {
    navigate(`/storedetail${id}`);
  };

  const wishBtn = () => {
    if (userwishbtn == "x") {
      setUserwishbtn("o");

      axios
        .post(`/beaver/wishlist/add`, wishItem)
        .then((res) => {})
        .catch((error) => console.log("Network Error: ", error));
    } else {
      setUserwishbtn("x");
      axios
        .post(`/beaver/wishlist/delete`, wishItem)
        .then((res) => {})
        .catch((error) => console.log("Network Error: ", error));
    }
  };

  return (
    <div className={listType === "small" ? "smallItems" : "bigItems"}>
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
            {userwishbtn == "x" ? (
              <img src={Eheart}></img>
            ) : (
              <img src={Fheart}></img>
            )}
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
