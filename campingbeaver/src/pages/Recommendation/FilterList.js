import React from "react";

const FilterList = ({ tag }) => {
  console.log("현재 태그 리스트", tag);

  return (
    <div>
      {tag.map((item, idx) => {
        <p key={idx}>{item.tag}</p>;
      })}
    </div>
  );
};

export default FilterList;
