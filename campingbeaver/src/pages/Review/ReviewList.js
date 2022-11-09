import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../MyPage/MyPage.module.scss"
import "./page.css";

const ReviewList = () => {

	const params = useParams();


  	const [reviewList, setReviewList] = useState([]);

	// 검색용 Hook
	const [choiceVal, setChoiceVal] = useState("");
	const [searchVal, setSearchVal] = useState("");

	// Paging
	const [page, setPage] = useState(1); // 현재 페이지
	const [totalCnt, setTotalCnt] = useState(0); // 아이템 총 개수
	const [postPerPage] = useState(5); // 페이지당 아이템 개수

	const [indexOfLastPost, setIndexOfLastPost] = useState(0);
	const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
	const [currentPosts, setCurrentPosts] = useState(0);
 
	// Link 용 (함수) 
	let navigate = useNavigate();

	// const user_id = params.id
	const user_id = 'admin'

	/* [GET /bbs]: 게시글 목록 */
	const getReviewList = () => {

		axios.get(`/beaver/reviewlist/${user_id}`)
			.then((res) => {
				
				//console.log('가져오는 리뷰리스트',res.data);

				setReviewList(reviewList => {
					return res.data
				});
				setTotalCnt(res.data.length)
				setCurrentPosts(reviewList.slice(indexOfFirstPost, indexOfLastPost));
				setIndexOfLastPost(page * postPerPage)
				setIndexOfFirstPost(indexOfLastPost - postPerPage)
		
				
				
				// setTotalCnt(res.data.pageCnt);
			})
			.catch((err) => {
				console.log("[BbsList.js] useEffect() error :<");
				console.log(err);

			});
	}

	useEffect(() => {
		getReviewList();

		
	}, [ totalCnt, indexOfFirstPost,indexOfLastPost,currentPosts]);


	const changeChoice = (event) => { setChoiceVal(event.target.value); }
	const changeSearch = (event) => { setSearchVal(event.target.value); }
	const search = () => {
		console.log("[BbsList.js searchBtn()] choiceVal=" + choiceVal + ", searchVal=" + searchVal);

		navigate("/ReviewList");
		getReviewList(choiceVal, searchVal, 1);
	}

	const changePage = (page) => {
		setPage(page);
		console.log('페이지 : ', page)
		
	}

	return (

		<div className="ListContainer">
			{ /* 검색 */}
			<table className="search">
				<tbody>
					<tr>
						<td>
							<select className="custom-select" value={choiceVal} onChange={changeChoice}>
								<option>검색 옵션 선택</option>
								<option value="title">제목</option>
								<option value="content">내용</option>
								<option value="writer">작성자</option>
							</select>
						</td>
						<td>
							<input type="text" className="form-control" placeholder="검색어" value={searchVal} onChange={changeSearch} />
						</td>
						<td>
							<button type="button" className="btn btn-outline-secondary" onClick={search}><i className="fas fa-search"></i> 검색</button>
						</td>
					</tr>
				</tbody>
			</table><br />

			<table className="table table-hover">
				<thead>
					<tr>
						<th className="col-1">리뷰번호</th>
						<th className="col-2">상품</th>
						<th className="col-5">내용</th>
						<th className="col-1">별점</th>
						<th className="col-2">작성자</th>
						<th className="col-3"></th>
						
						
					</tr>
				</thead>

				<tbody>
					{
						currentPosts && currentPosts.map(({rv_seq, rv_content, user_id, rv_photo, rv_rating})=> {
							return <TableRow
									key = {rv_seq}
									rv_seq = {rv_seq}
									rv_content = {rv_content}
									user_id = {user_id}
									rv_photo = {rv_photo}
									rv_rating = {rv_rating}
									/>
									
						})}
				</tbody>
			</table>

			<Pagination className="pagination"
				activePage={page}
				itemsCountPerPage={5}
				totalItemsCount={totalCnt}
				pageRangeDisplayed={5}
				prevPageText={"<"}
				nextPageText={">"}
				onChange={changePage} />
		</div>
	);
}





/* 글 목록 테이블 행 컴포넌트 */
const TableRow = (props) => {

		const [show, setShow] = useState(false);
		const [dlt, setDlt] = useState(false);
		const [id, setId] = useState(localStorage.userId)
		const [deleteItem, setDeleteItem] = useState({
		// user_id : id,
		user_id :'admin',
		rv_seq : props.rv_seq,

		});


		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);
		const handleUpdate = () => {
			
		}

		const handleClose2 = () => setDlt(false);
		const handleDlt = () => setDlt(true);
		const handleDelete = () => {
		console.log(deleteItem)
		
		axios.post(`/beaver/reviewlist/delete`, deleteItem)
		.then((res)=>{

			window.location.replace("/Mypage/2")
		}).catch((error)=>console.log('Network Error: ', error))
		
		setShow(false)
		}

		

	return (
   
    
			<tr>
					<th>{props.rv_seq}</th>
					
						
							<td>
								{ props.rv_photo != '' ?
								<img 
									src={props.rv_photo}
									alt="review photo"
									width="120px"
									height="100px"
								>		
								</img>
								: <></>
								}
							</td>
							<td >
								{/* <Arrow depth={bbs.depth}></Arrow> &nbsp;  */}
								{ /* 답글 화살표 */}

								{ /* 게시글 상세 링크 */}
								{/* <Link to={{ pathname: `/bbsdetail/${bbs.seq}` }}>  */}
									<span className="underline bbs-title" >{props.rv_content} </span> { /* 게시글 제목 */}
								{/* </Link> */}
							</td>
							<td>★{props.rv_rating}.0</td>
							<td>{props.user_id}</td>
							<td className='ListBtnContainer'>
								
								<button onClick={handleShow}>수정</button>
								<Modal
									show={show}
									onHide={handleClose}
									backdrop="static"
									keyboard={false}
									centered
								>
									<Modal.Header closeButton>
									<Modal.Title>리뷰 수정</Modal.Title>
									</Modal.Header>
									<Modal.Body>
									리뷰를 수정하시겠어요?
									</Modal.Body>
									<Modal.Footer>
									<Button variant="secondary" onClick={handleClose}>
										아니오
									</Button>
									<Button variant="success" onClick={handleUpdate}>네</Button>
									</Modal.Footer>
								</Modal>

								<button onClick={handleDlt}>삭제</button>
								<Modal
									show={dlt}
									onHide={handleClose2}
									backdrop="static"
									keyboard={false}
									centered
								>
									<Modal.Header closeButton>
									<Modal.Title>리뷰 삭제</Modal.Title>
									</Modal.Header>
									<Modal.Body>
									정말로 리뷰를 지우시겠어요?
									</Modal.Body>
									<Modal.Footer>
									<Button variant="secondary" onClick={handleClose2}>
										아니오
									</Button>
									<Button variant="success" onClick={handleDelete}>네</Button>
									</Modal.Footer>
								</Modal>
							</td>
			</tr>
	);
}

const tap = "\u00A0\u00A0\u00A0\u00A0";
function Arrow( props ) {
	const depth = props.depth;

	if (depth === 0) {
		return null;
	}

	const taps = [];
	for(let i = 0; i < depth; i++) {
		taps.push(tap);
	}

	return (
		<>
			{taps} <i className="fas fa-long-arrow-alt-right"></i>
		</> 
	 );
}

export default ReviewList