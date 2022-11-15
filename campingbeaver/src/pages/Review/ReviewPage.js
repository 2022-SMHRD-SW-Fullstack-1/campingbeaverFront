import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ReviewPage() {
  const [bbs, setBbs] = useState({});
  const { seq } = useParams();

  const navigate = useNavigate();

  const getBbsDetail = async () => {};

  const deleteBbs = async () => {
    await axios
      .delete(`http://localhost:3000/bbs/${seq}`)
      .then((resp) => {
        if (resp.data.deletedRecordCount === 1) {
          alert("게시글을 성공적으로 삭제했습니다 :D");
          navigate("/ReviewList");
        }
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getBbsDetail();
  }, []);

  const updateBbs = {
    seq: bbs.seq,
    id: bbs.id,
    title: bbs.title,
    content: bbs.content,
  };

  const parentBbs = {
    id: bbs.id,
    title: bbs.title,
  };

  return (
    <div>
      <div className="my-3 d-flex justify-content-end">
        <Link
          className="btn btn-outline-secondary"
          to={{ pathname: `/bbsanswer/${bbs.seq}` }}
          state={{ parentBbs: parentBbs }}
        >
          <i className="fas fa-pen"></i> 답글쓰기
        </Link>{" "}
        &nbsp;
        {localStorage.getItem("id") == bbs.id ? (
          <>
            <Link
              className="btn btn-outline-secondary"
              to="/bbsupdate"
              state={{ bbs: updateBbs }}
            >
              <i className="fas fa-edit"></i> 수정
            </Link>{" "}
            &nbsp;
            <button className="btn btn-outline-danger" onClick={deleteBbs}>
              <i className="fas fa-trash-alt"></i> 삭제
            </button>
          </>
        ) : null}
      </div>

      <table className="table table-striped">
        <tbody>
          <tr>
            <th className="col-3">작성자</th>
            <td>
              <span>{bbs.id}</span>
            </td>
          </tr>

          <tr>
            <th>제목</th>
            <td>
              <span>{bbs.title}</span>
            </td>
          </tr>

          <tr>
            <th>작성일</th>
            <td>
              <span>{bbs.createdAt}</span>
            </td>
          </tr>

          <tr>
            <th>조회수</th>
            <td>
              <span>{bbs.readCount}</span>
            </td>
          </tr>

          <tr>
            <th>내용</th>
            <td>
              <div>{bbs.content}</div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="my-3 d-flex justify-content-center">
        <Link className="btn btn-outline-secondary" to="/bbslist">
          <i className="fas fa-list"></i> 글목록
        </Link>
      </div>
      <br />
      <br />
    </div>
  );
}

export default ReviewPage;
