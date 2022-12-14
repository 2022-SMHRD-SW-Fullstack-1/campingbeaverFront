import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import bonfire from "./iconimg/bonfire.png";
import court from "./iconimg/court.png";
import hotwater from "./iconimg/hotwater.png";
import mart from "./iconimg/mart.png";
import park from "./iconimg/park.png";
import pool from "./iconimg/pool.png";
import storm from "./iconimg/storm.png";
import wifi from "./iconimg/wifi.png";
import Axios from "axios";
import ReservCamp from "./ReservCamp";

const FilterButton = () => {
  const [inputText, setInputText] = useState([]);
  const [tagHandler, setTagHandler] = useState(new Map());

  const clickHandle = (e) => {
    let overlap = true;

    inputText.forEach((element) => {
      element == e.target.innerText && (overlap = false);
    });

    if (overlap) {
      setInputText((inputText) => [...inputText, e.target.innerText]);
    } else {
      const without = inputText.filter((it) => it !== e.target.innerText);
      setInputText(without);
    }
  };

  const inputTextList = inputText.map((inputText) => (
    <Button variant="outline-dark" onClick={clickHandle}>
      {inputText}
    </Button>
  ));

  const clearBtn = (e) => {
    setInputText([]);
    window.location.replace("/recommendation");
  };

  const dataCon = (e) => {
    const userHashTag = inputText;

    Axios.post("/beaver/hash", JSON.stringify(userHashTag), {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        alert("success!");
      })
      .catch(() => {
        alert("failed!");
      });

    setTagHandler(inputText);
  };

  return (
    <>
      <h1>πChoose Your Preference !π</h1>
      <div align="center">
        {["secondary"].map((variant) => (
          <Alert key={variant} variant={variant}>
            <h6 align="center">
              μνμλ μμ€ μμΈ νκ·Έλ₯Ό κ²μνμλ©΄ μΊ νμ₯μ μΆμ²ν΄λλ¦½λλ€!
            </h6>
            <Button variant="outline-dark" onClick={clickHandle}>
              <p>
                <img src={bonfire} width="50px" />
              </p>
              μ₯μνλ§€
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              <p>
                <img src={court} width="50px" />
              </p>
              μ΄λμμ€
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              <p>
                <img src={hotwater} width="50px" />
              </p>
              μ¨μ
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              <p>
                <img src={mart} width="50px" />
              </p>
              λ§€μ 
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              <p>
                <img src={park} width="50px" />
              </p>
              μ°μ±λ‘
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              <p>
                <img src={pool} width="50px" />
              </p>
              λ¬Όλμ΄μ₯
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              <p>
                <img src={storm} width="50px" />
              </p>
              μ κΈ°
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              <p>
                <img src={wifi} width="50px" />
              </p>
              μμ΄νμ΄
            </Button>
          </Alert>
        ))}
        {["secondary"].map((variant) => (
          <Alert key={variant} variant={variant}>
            {/* This is a {variant} check! */}
            <h6 align="center">
              νλ§λ³ νκ·Έλ₯Ό κ²μνμλ©΄ μΊ νμ₯μ μΆμ²ν΄λλ¦½λλ€!
            </h6>
            <Button variant="outline-dark" onClick={clickHandle}>
              λ°λ €κ²¬λλ°
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              μ΅μ€νΈλ¦Ό
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              μ»€ν
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              μμ΄λ€ λκΈ° μ’μ
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              λ΄
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              μ¬λ¦
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              κ°μ
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              κ²¨μΈ
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              λ³ λ³΄κΈ° μ’μ
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              λ¬Όλμ΄ νκΈ° μ’μ
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              μμ κ±° νκΈ° μ’μ
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              κΉ¨λν
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              λ°λ€κ° λ³΄μ΄λ
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              μ°¨λκΈ° νΈν
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              νλ§
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              κ·Έλμ΄ λ§μ
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              μΉμ ν
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              μ¬μ μλ
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              κ³κ³‘μ
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              μ¬μ΄νΈ κ°κ²©μ΄ λμ
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              κ°μ‘±
            </Button>
            <Button variant="outline-dark" onClick={clickHandle}>
              μνκ΅μ‘
            </Button>
          </Alert>
        ))}

        {["secondary"].map((variant) => (
          <Alert key={variant} variant={variant}>
            <h6 align="center">μ νν νκ·Έ</h6>

            {inputTextList}
          </Alert>
        ))}
        <div align="center">
          <Button variant="outline-danger" onClick={clearBtn}>
            μ΄κΈ°ν
          </Button>{" "}
        </div>
      </div>
      <ReservCamp
        tagHandler={tagHandler}
        setTagHandler={setTagHandler}
        {...inputText}
      />
    </>
  );
};

export default FilterButton;
