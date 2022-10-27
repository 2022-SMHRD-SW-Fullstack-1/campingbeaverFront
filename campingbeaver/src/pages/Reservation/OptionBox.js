import React, { useState } from 'react'

const OptionBox = () => {
  const selectList = ["텐트", "의자", "테이블","타프"];
  const [options, setOptions] = useState('');
  const [selected,setSelectList] = useState([]);

  const selectOption = (e) => {
    setSelectList(selected =>[...selected, e.target.value]);
    setOptions(e.target.value);
  }
  const onselInc = (e) => {
    console.log(e.target.value);
  }
  const onselDec = (e) => {
    e.target.value;
  }
  const deleteOption = (target) => {
   
   }
  return (
    <div>
          <select onChange={selectOption} value={options}>
            {selectList.map((item)=>(
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
        {selected.map(sel =>(<div><p>{sel}</p>
        <p><button onClick={onselDec}>-</button>
        <span>1</span>
        <button onClick={onselInc}>+</button>
        <button>X</button></p></div>))}
    </div>
  )
}

export default OptionBox