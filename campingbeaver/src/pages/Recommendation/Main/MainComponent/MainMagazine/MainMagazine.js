import React, { Component } from "react";
import "./MainMagazine.scss";

const API = "http://10.58.1.45:8000/main/magazine";
export class MainMagazine extends Component {
  constructor() {
    super();
    this.state = {
      magazineList: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          magazineList: res.data,
        });
      });
  }

  render() {
    const { magazineList } = this.state;
    return (
      <div className="MainMagazine">
        <div classname="magazineContainer">
          {magazineList.map((magazinedata) => (
            <section className="magazineContainer">
              <div className="magazineLeft">
                <div className="imgLabel">
                  <p className="labelTxt">
                    20
                    {"/ "}
                    <span className="labelSpan">09W1</span>
                  </p>
                </div>
                <img
                  className="magazineImg"
                  src={magazinedata.thumbnail_url}
                  alt="magazine"
                />
                <button className="hoverView">
                  <i className="fas fa-search"></i>
                  <p className="viewTxt">VIEW</p>
                </button>
              </div>
              <div className="magazineRight">
                <div className="magazineTextContainer">
                  <div className="textTop">
                    <a className="magHotelName">{magazinedata.name}</a>
                    <p className="magTopTxt magType">
                      {magazinedata.category}
                      <span className="magTopTxt magLocation">
                        ㅣ{magazinedata.location}
                      </span>
                    </p>
                  </div>
                  <div className="textBottom">
                    <p className="descTitle">
                      {magazinedata.description_title}
                    </p>
                    <p className="desc">{magazinedata.description_first}</p>
                    <p className="magBtn">SHOW MORE +</p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    );
  }
}

export default MainMagazine;
