import React, {useState} from 'react'

const FilterSelect = ({handleTag}) => {

    const [value, setValue] = useState('')

    const inputHandle = (e) => {
        setValue(e.target.value)
    }
   

  return (
    <div>
        <input onChange={inputHandle} value={value}></input>
    </div>
  )
}

export default FilterSelect