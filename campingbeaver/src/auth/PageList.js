const PageList = ({
    pageLimit,
    goToPage,
    firstPage,
    previousPage,
    nextPage,
    lastPage,
    totalCounts,
  }) => {
    const calculateBtn = Math.ceil(totalCounts / pageLimit);
  
    return (
      <div className="pageList">
        <button onClick={firstPage}>FIRST</button>
        <button
          onClick={() => {
            previousPage(calculateBtn);
          }}
        >
          <span className="leftBtn">{`<`}</span>PREV
        </button>
        <ul>
          {totalCounts &&
            Array(calculateBtn)
              .fill()
              .map((_, i) => (
                <li key={i + 1}>
                  <button onClick={e => goToPage(e.target.innerText - 1)}>
                    {i + 1}
                  </button>
                </li>
              ))}
        </ul>
        <button
          onClick={() => {
            nextPage(calculateBtn);
          }}
        >
          NEXT<span className="rightBtn">{`>`}</span>
        </button>
        <button
          onClick={() => {
            lastPage(calculateBtn);
          }}
        >
          LAST
        </button>
      </div>
    );
  };
  
  export default PageList;