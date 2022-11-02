import React, { Component } from "react";
import PickArticle from "./PickArticle/PickArticle";
import SearchFilter from "./SearchFilter/SearchFilter";
import PageButton from "./PageButton/PageButton";

import "./Pick.scss";

const API = "http://10.58.1.45:8000/main/picks";

export class Pick extends Component {
  constructor() {
    super();
    this.state = {
      hotels: [],
      searchedHotel: [],
      handleSearch: "",
      filterList: [],
      pageHandling: {
        pages: [
          { value: 1, current: true },
          { value: 2, current: false },
          { value: 3, current: false },
          { value: 4, current: false },
          { value: 5, current: false },
          { value: 6, current: false },
          { value: 7, current: false },
        ],
        prev: null,
        next: 2,
      },
      qS: {
        limit: 12,
        offset: 0,
        location: "",
        category: "",
        price: "",
      },
    };
  }

  componentDidMount() {
    //  서버와 통신할 때 실제 사용하는 코드
    // fetch(`${API}?limit=12&offset=0`)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log("통신확인");
    //     this.setState({
    //       // hotels: res.hotels,
    //       searchedHotel: res.hotels,
    //     });
    //   });

    fetch("/data/pickData/hotels_data.json", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          searchedHotel: res.hotels
        });
      });
  }

  // 서버와 pagination 하는 function
  componentDidUpdate(prevPros, prevState) {
    const { qS } = this.state;
    if (
      prevState.qS.offset !== qS.offset ||
      prevState.qS.category !== qS.category ||
      prevState.qS.location !== qS.location ||
      prevState.qS.price !== qS.price
    ) {
      // this.QueryString(qS);
    }
  }

  setQueryString = (queryS) => {
    for (let key in queryS) {
      if (queryS[key] === "") {
        delete queryS[key];
      }
    }

    const queryString =
      "?" +
      Object.entries(queryS)
        .map((e) => "&" + e.join("="))
        .join("");

    fetch(`${API}${queryString}`)
      .then((res) => res.json())
      .then((res) => this.setState({ searchedHotel: res.hotels }));
  };

  setNewOffset = (targetPage) => {
    const newOffset = (targetPage - 1) * 12;

    this.setState((prevState) => ({
      qS: {
        ...prevState.qS,
        offset: newOffset,
      },
    }));
  };

  filteringHotel = (searchValue) => {
    const { searchedHotel } = this.state;
    let newValue = {};
    let searchType = "";
    let searchLocation = "";
    let searchPrice = "";

    if (searchedHotel[0].filters[0].options.includes(searchValue)) {
      searchValue.includes("전체")
        ? (searchType = "")
        : (searchType = searchValue);
       newValue = {category: searchType};
    } else if (searchedHotel[0].filters[1].options.includes(searchValue)) {
      searchValue.includes("전체")
        ? (searchLocation = "")
        : (searchLocation = searchValue);
      newValue = {location: searchLocation};
    } else if (searchedHotel[0].filters[2].options.includes(searchValue)) {
      searchValue.includes("전체")
        ? (searchPrice = "")
        : (searchPrice = searchValue);
      newValue = {price : searchPrice}
    }
   
   return this.setState((prevState) => ({
     qS: {
       ...prevState.qS,
       ...newValue,
       offset: 0
     }
   })),
   this.handlePageBtns("1");
  };

  handlePageBtns = (targetPage) => {
    const isClicked = (page, currentPage) => ({
      value: page,
      current: currentPage == page ? true : false,
    });

    const setPageBtns = (currentPage) => {
      const { pages, prev, next } = this.state.pageHandling;
      const maxPage = 20;
      let newPages = [];
      const initPages = [1, 2, 3, 4, 5, 6, 7];
      const lastPages = [maxPage-6, maxPage-5, maxPage-4, maxPage-3, maxPage-2, maxPage-1, maxPage];

      switch(currentPage){
        case "1":
        case "2":
        case "3":
          newPages = initPages;
          break;

        case String(maxPage):
        case String(maxPage-1):
        case String(maxPage-2):
          newPages = lastPages;
          break;

        case "<":
          if(prev === null) {
            newPages = initPages;
            currentPage = 1;
          } else if (prev <= 3){
            newPages = initPages;
            currentPage = prev;
          } else if (prev > maxPage-4) {
            newPages = lastPages;
            currentPage = prev;
          } else {
            newPages = pages.map((btn) => btn.value -1);
            currentPage = prev;
          }
          break;

        case ">":
          if(next === null) {
            newPages = lastPages;
            currentPage = maxPage;
            } else if(next < 5){
            newPages = initPages;
            currentPage = next;
          } else if (next > maxPage-3) {
            newPages = lastPages;
            currentPage = next;
          } else {
            newPages = pages.map((btn) => +btn.value +1);
            currentPage = next;
          }
          break;
        
        default:
          newPages = [
            currentPage - 3,
            currentPage - 2,
            currentPage - 1,
            currentPage,
            +currentPage + 1,
            +currentPage + 2,
            +currentPage + 3,
          ];
      }

      const clickedArr = newPages.map((page) => isClicked(page, currentPage));
      const prevPage = currentPage - 1;
      const nextPage = +currentPage + 1;

      return {
        pages: clickedArr,
        prev: prevPage > 0 ? prevPage : null,
        next: nextPage <= maxPage ? nextPage : null,
      };
    };
    const changed = setPageBtns(targetPage);

    this.setState((prevState) => ({
      pageHandling: {
        ...prevState.pageHandling,
        pages: changed.pages,
        prev: changed.prev,
        next: changed.next,
      },
    }));
  };

  render() {
    const { searchedHotel } = this.state;

    return (
      <div className="Pick">
        <div className="container">
          <section>
            <div>
              <span className="title">PICK</span>
              <br></br>
              <span className="titleDesc">
                매일 하루 한번! 스테이폴리오가 추천합니다
              </span>
            </div>
            <div className="searchFilterCon">
              {searchedHotel &&
                searchedHotel[0]?.filters?.map((filter, idx) => (
                  <SearchFilter
                    event={this.searchHotel}
                    filtering={this.filteringHotel}
                    key={idx}
                    data={filter}
                    id={idx}
                  />
                ))}
            </div>
          </section>
          <div className="articleCon">
            {searchedHotel &&
              searchedHotel[1]?.picks.map((hotel) => (
                <PickArticle
                  key={hotel.id}
                  id={hotel.id}
                  name={hotel.name}
                  engName={hotel.english_name}
                  desc={hotel.introduction}
                  mainImg={hotel.thumbnail_url}
                  location={hotel.location}
                  type={hotel.category}
                  minPrice={hotel.min_price}
                  maxPrice={hotel.max_price}
                  tags={hotel.tags}
                  history={this.props.history}
                />
              ))}
          </div>
          <div className="pagination">
            <ul>
              <PageButton
                pages={this.state.pageHandling.pages}
                prev={this.state.pageHandling.prev}
                next={this.state.pageHandling.next}
                clickEvent={this.handlePageBtns}
                setNewOffset={this.setNewOffset}
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Pick;
