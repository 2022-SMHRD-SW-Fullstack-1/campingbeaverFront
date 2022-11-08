import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Pagination from "react-js-pagination";

import "./page.css";


const ReviewList = () => {

	const params = useParams();

  	const [reviewList, setReviewList] = useState([]);

	// 검색용 Hook
	const [choiceVal, setChoiceVal] = useState("");
	const [searchVal, setSearchVal] = useState("");

	// Paging
	const [page, setPage] = useState(1);
	const [totalCnt, setTotalCnt] = useState(0);

	// Link 용 (함수) 
	let navigate = useNavigate();

	// const user_id = params.id
	const user_id = 'admin'

	/* [GET /bbs]: 게시글 목록 */
	const getReviewList = async (choice, search, page) => {

		await axios.get(`/beaver/reviewlist/${user_id}`)
			.then((res) => {
				
				console.log('가져오는 리뷰리스트',res.data);

				setReviewList(res.data);
				setTotalCnt(reviewList.length)
				// setTotalCnt(res.data.pageCnt);
			})
			.catch((err) => {
				console.log("[BbsList.js] useEffect() error :<");
				console.log(err);

			});
	}

	useEffect(() => {
		getReviewList();
	}, []);


	const changeChoice = (event) => { setChoiceVal(event.target.value); }
	const changeSearch = (event) => { setSearchVal(event.target.value); }
	const search = () => {
		console.log("[BbsList.js searchBtn()] choiceVal=" + choiceVal + ", searchVal=" + searchVal);

		navigate("/ReviewList");
		getReviewList(choiceVal, searchVal, 1);
	}

	const changePage = (page) => {
		setPage(page);
		getReviewList(choiceVal, searchVal, page);
	}

	return (

		<div>
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
						<th className="col-8">제목</th>
						<th className="col-3">작성자</th>
					</tr>
				</thead>

				<tbody>
					{
						reviewList && reviewList.map(({rv_seq, rv_content, user_id})=> {
							return <TableRow
									key = {rv_seq}
									rv_seq = {rv_seq}
									rv_content = {rv_content}
									user_id = {user_id}
									/>
						})}
				</tbody>
			</table>

			<Pagination className="pagination"
				activePage={page}
				itemsCountPerPage={10}
				totalItemsCount={totalCnt}
				pageRangeDisplayed={5}
				prevPageText={"‹"}
				nextPageText={"›"}
				onChange={changePage} />
				
			<div className="my-5 d-flex justify-content-center">
				<Link className="btn btn-outline-secondary" to="/ReviewForm"><i className="fas fa-pen"></i> &nbsp; 글쓰기</Link>
			</div>

		</div>
	);
}

/* 글 목록 테이블 행 컴포넌트 */
function TableRow(props) {

	return (
   
    
			<tr>
					<th>{props.rv_seq}</th>
					
						
							<td >
								{/* <Arrow depth={bbs.depth}></Arrow> &nbsp;  */}
								{ /* 답글 화살표 */}

								{ /* 게시글 상세 링크 */}
								{/* <Link to={{ pathname: `/bbsdetail/${bbs.seq}` }}>  */}
									<span className="underline bbs-title" >{props.rv_content} </span> { /* 게시글 제목 */}
								{/* </Link> */}
							</td>
							<td>{props.user_id}</td>
					
				
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