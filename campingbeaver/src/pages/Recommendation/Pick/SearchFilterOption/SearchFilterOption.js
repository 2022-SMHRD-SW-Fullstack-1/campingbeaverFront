 import React, { Component } from "react";

import "./SearchFilterOption.scss"


export class SearchFilterOption extends Component {

  getValue = () => {
    this.props.getFilterValue(this.searchValue.innerText);
  }

  render() {
    const { option } = this.props;

    return (
      <li
        className="SearchFilterOption" 
        onClick={this.getValue}
      >
       <span ref={(ref)=>{this.searchValue=ref}}>{option}</span>
      </li>   
    );
  }
}

export default SearchFilterOption;  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        