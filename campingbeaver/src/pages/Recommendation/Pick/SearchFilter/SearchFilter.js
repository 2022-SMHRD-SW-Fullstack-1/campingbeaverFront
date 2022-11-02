import React, { Component } from "react";
import SearchFilterOption from "../SearchFilterOption/SearchFilterOption";

import "./SearchFilter.scss";

export class SearchFilter extends Component {
  constructor() {
    super();
    this.state = {
      filterOptions: [],
      searchFilterTitle: "",
      displayMode: false,
    };
  }

  componentDidMount() {
    this.setState({ searchFilterTitle: this.props.data.options[0]})
  }

  handleSearchFilter = () => {
    const { displayMode } = this.state;
    const { data } = this.props;
    this.setState({ displayMode: !displayMode });
    let filterOptions = data.options;
    this.setState({ filterOptions });
  };

  getFilterValue = (searchValue) => {
    this.setState({ searchFilterTitle: searchValue });
    this.props.filtering(searchValue);
  };

  handleBlur = () => {
    const { displayMode } = this.state;
    this.setState({ displayMode: false });
  };

  render() {
    const { id } = this.props;
    const {
      filterOptions,
      searchFilterTitle,
      displayMode,
    } = this.state;

    return (
      <div
        className="SearchFilter"
        id={id}
        tabIndex="0"
        onClick={this.handleSearchFilter}
        onBlur={this.handleBlur}
      >
        <span className="filterTitle">{searchFilterTitle}</span>
        <div className="selector"></div>

        <ul
          onClick={this.isVisible}
          className={displayMode ? "optionBox" : "optionBox displayMode"}
        >
          {filterOptions &&
            filterOptions.map((option, idx) => (
            <SearchFilterOption
              key={idx}
              option={option}
              getFilterValue={this.getFilterValue}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchFilter;
