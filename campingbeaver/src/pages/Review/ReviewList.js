import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../Mypage/MyPage.module.scss";
import "./page.css";

const ReviewList = () => {
  const params = useParams();

  const [reviewList, setReviewList] = useState([]);
  const [user_id, setUser_id] = useState(localStorage.userId);

  const [choiceVal, setChoiceVal] = useState("");
  const [searchVal, setSearchVal] = useState("");

  const [page, setPage] = useState(1);
  const [totalCnt, setTotalCnt] = useState(0);
  const [postPerPage] = useState(5);

  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState(0);

  let navigate = useNavigate();

  const getReviewList = () => {
    axios
      .get(`/beaver/reviewlist/${user_id}`)
      .then((res) => {
        setReviewList((reviewList) => {
          return res.data;
        });
        setTotalCnt(res.data.length);
        setCurrentPosts(reviewList.slice(indexOfFirstPost, indexOfLastPost));
        setIndexOfLastPost(page * postPerPage);
        setIndexOfFirstPost(indexOfLastPost - postPerPage);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getReviewList();
  }, [totalCnt, indexOfFirstPost, indexOfLastPost, currentPosts]);

  const changeChoice = (event) => {
    setChoiceVal(event.target.value);
  };
  const changeSearch = (event) => {
    setSearchVal(event.target.value);
  };
  const search = () => {
    navigate("/ReviewList");
    getReviewList(choiceVal, searchVal, 1);
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="ListContainer">
      <table className="search">
        <tbody>
          <tr>
            <td>
              <select
                className="custom-select"
                value={choiceVal}
                onChange={changeChoice}
              >
                <option>?????? ?????? ??????</option>
                <option value="title">??????</option>
                <option value="content">??????</option>
                <option value="writer">?????????</option>
              </select>
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                placeholder="?????????"
                value={searchVal}
                onChange={changeSearch}
              />
            </td>
            <td>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={search}
              >
                <i className="fas fa-search"></i> ??????
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <br />

      <table className="table table-hover">
        <thead>
          <tr>
            <th className="col-1">????????????</th>
            <th className="col-2">??????</th>
            <th className="col-5">??????</th>
            <th className="col-1">??????</th>
            <th className="col-2">?????????</th>
            <th className="col-3"></th>
          </tr>
        </thead>

        <tbody>
          {currentPosts &&
            currentPosts.map(
              ({ rv_seq, rv_content, user_id, rv_photo, rv_rating }) => {
                return (
                  <TableRow
                    key={rv_seq}
                    rv_seq={rv_seq}
                    rv_content={rv_content}
                    user_id={user_id}
                    rv_photo={rv_photo}
                    rv_rating={rv_rating}
                  />
                );
              }
            )}
        </tbody>
      </table>

      <Pagination
        className="pagination"
        activePage={page}
        itemsCountPerPage={5}
        totalItemsCount={totalCnt}
        pageRangeDisplayed={5}
        prevPageText={"<"}
        nextPageText={">"}
        onChange={changePage}
      />
    </div>
  );
};

const TableRow = (props) => {
  const [show, setShow] = useState(false);
  const [dlt, setDlt] = useState(false);
  const [id, setId] = useState(localStorage.userId);
  const [deleteItem, setDeleteItem] = useState({
    user_id: id,
    rv_seq: props.rv_seq,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setDlt(false);
  const handleDlt = () => setDlt(true);
  const handleDelete = () => {
    axios
      .post(`/beaver/reviewlist/delete`, deleteItem)
      .then((res) => {
        window.location.replace("/Mypage/2");
      })
      .catch((error) => alert("Network Error: ", error));

    setShow(false);
  };

  return (
    <tr>
      <th>{props.rv_seq}</th>

      <td>
        {props.rv_photo != "" ? (
          <img
            src={props.rv_photo}
            alt="review thumbnail"
            width="120px"
            height="100px"
          ></img>
        ) : (
          <></>
        )}
      </td>
      <td>
        <span className="underline bbs-title">{props.rv_content} </span>{" "}
      </td>
      <td>???{props.rv_rating}.0</td>
      <td>{props.user_id}</td>
      <td className="ListBtnContainer">
        <button onClick={handleShow}>??????</button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>?????? ??????</Modal.Title>
          </Modal.Header>
          <Modal.Body>????????? ??????????????????????</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              ?????????
            </Button>
            <Button variant="success">???</Button>
          </Modal.Footer>
        </Modal>

        <button onClick={handleDlt}>??????</button>
        <Modal
          show={dlt}
          onHide={handleClose2}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>?????? ??????</Modal.Title>
          </Modal.Header>
          <Modal.Body>????????? ????????? ???????????????????</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              ?????????
            </Button>
            <Button variant="success" onClick={handleDelete}>
              ???
            </Button>
          </Modal.Footer>
        </Modal>
      </td>
    </tr>
  );
};
export default ReviewList;
