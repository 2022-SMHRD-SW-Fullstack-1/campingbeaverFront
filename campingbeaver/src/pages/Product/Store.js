import { CgViewSplit } from 'react-icons/cg';
import { MdCalendarViewMonth } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import StoreModal from '../../components/StoreModal';
import PageList from './PageList.js';
import Items from './Items';
import './Store.scss';
import axios from 'axios';

const Store = () => {
  const [items, setItems] = useState([]);
  const [listType, setListType] = useState('small');
  const [openModal, setOpenModal] = useState(false);
  const [itemData, setItemData] = useState({});
  const [totalCounts, setTotalCounts] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const urlCategory = params.get('category');
  const urlMaterial = params.get('material');
  const urlOffset = params.get('offset');
  const categoryString = `category=${urlCategory}`;
  const materialString = `material=${urlMaterial}`;

  useEffect(() => {
    axios.get("/beaver/pkglist")
    .then(response=>{
      console.log(response.data)
      
      setItems(response.data);
    })
  }, []);

  const handleURL = name => {
    if (urlMaterial) {
      navigate(`?${categoryString}&${materialString}&${name}`);
    }
    if (!urlMaterial && urlCategory) {
      navigate(`?${categoryString}&${name}`);
    }
    if (!urlMaterial && !urlCategory) {
      navigate(`?${name}`);
    }
  };

  const pageLimit = 8;

  const goToPage = btnIndex => {
    // console.log('btnIndex', btnIndex);
    const offset = btnIndex * pageLimit;
    const pageString = `offset=${offset}&limit=${pageLimit}`;
    handleURL(pageString);
  };

  const goToMaterial = e => {
    navigate(`?${categoryString}&material=${e.target.innerHTML}`);
  };

  const sortNewest = () => {
    const newestString = 'sort_method=-the_newest';
    handleURL(newestString);
  };

  const sortName = () => {
    const nameString = 'sort_method=name';
    handleURL(nameString);
  };

  const sortHighPrice = () => {
    const highPriceString = 'sort_method=price';
    handleURL(highPriceString);
  };

  const sortLowPrice = () => {
    const lowPriceString = 'sort_method=-price';
    handleURL(lowPriceString);
  };

  const firstPage = () => {
    const firstPageString = 'offset=0&limit=8';
    Number(urlOffset) > 0
      ? handleURL(firstPageString)
      : alert('이미 첫번째 페이지 입니다.');
    handleURL(firstPageString);
  };

  const previousPage = () => {
    const calculateOffset = urlOffset - pageLimit;
    const pageChangerString = `offset=${calculateOffset}&limit=8`;
    handleURL(pageChangerString);
    if (Number(urlOffset) <= 0) {
      firstPage();
    }
  };

  const nextPage = calculateBtn => {
    const calculateOffset = Number(urlOffset) + Number(pageLimit);
    const pageChangerString = `offset=${calculateOffset}&limit=8`;
    handleURL(pageChangerString);
    if (totalCounts - pageLimit < urlOffset) {
      lastPage(calculateBtn);
    }
  };

  const lastPage = calculateBtn => {
    const calculateLast = (calculateBtn - 1) * pageLimit;
    const lastPageString = `offset=${calculateLast}&limit=8`;
    Number(urlOffset) === Number(calculateLast)
      ? alert('이미 마지막 페이지 입니다.')
      : handleURL(lastPageString);
    handleURL(lastPageString);
  };

  const changeBigList = () => {
    setListType('big');
  };

  const changeSmallList = () => {
    setListType('small');
  };

  const getItemData = ItemData => {
    setOpenModal(true);
    setItemData(ItemData);
  };

  const CATEGORY = {
    컵: [
      { id: 1, name: '마블' },
      { id: 2, name: '스틴슨' },
      { id: 3, name: '클래식' },
    ],
    플레이트: [
      { id: 1, name: '마블' },
      { id: 2, name: '스틴슨' },
      { id: 3, name: '클래식' },
    ],
    보울: [
      { id: 1, name: '마블' },
      { id: 3, name: '클래식' },
    ],
    키친웨어: [{ id: 1, name: '마블' }],
    굿즈: [
      { id: 1, name: '휴대폰케이스' },
      { id: 2, name: '에어팟케이스' },
      { id: 3, name: '신발' },
    ],
  };

  return (
    <>
      {openModal && <StoreModal items={itemData} closeModal={setOpenModal} />}
      <div className="store">
        <section>
          <h2>전체상품</h2>
          {urlCategory && (
            <div className="category">
              {CATEGORY[urlCategory].map(({ id, name }) => {
                return (
                  <button key={id} onClick={goToMaterial}>
                    {name}
                  </button>
                );
              })}
            </div>
          )}
          <div className="itemCategory">
            <div className="itemAmount">
              <b>{items.length}</b>
              <span>개의 상품이 있습니다.</span>
            </div>
            <div className="itemSort">
              <button onClick={sortNewest}>신상품</button>
              <button onClick={sortName}>상품명</button>
              <button onClick={sortHighPrice}>낮은가격</button>
              <button onClick={sortLowPrice}>높은가격</button>
              <button onClick={changeSmallList} className="icon">
                <MdCalendarViewMonth />
              </button>
              <button onClick={changeBigList} className="icon">
                <CgViewSplit />
              </button>
            </div>
          </div>
          <div className="itemList">
          
            {items.map(({ pkg_seq, pkg_photo, pkg_name, pkg_price}) => {
              return (
                <Items
                  getItemData={getItemData}
                  id={pkg_seq}
                  listType={listType}
                  key={pkg_seq}
                  img={pkg_photo}
                  itemName={pkg_name}
                  price={pkg_price}
                />
              );
            })}
          </div>

          <PageList
            pageLimit={pageLimit}
            totalCounts={totalCounts}
            goToPage={goToPage}
            firstPage={firstPage}
            previousPage={previousPage}
            nextPage={nextPage}
            lastPage={lastPage}
          />
        </section>
      </div>
    </>
  );
};



export default Store;