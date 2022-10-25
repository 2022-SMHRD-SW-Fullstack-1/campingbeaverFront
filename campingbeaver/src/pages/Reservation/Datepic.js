import React, {useState} from 'react'
import DatePicker from 'react-datepicker'

const Datepic = () => {
    const [startDate, setStartDate] = useState(new Date());
  return 
  (
    <div>
        <DatePicker selected={startDate} onChange={date=>setStartDate(date)}/>
    </div>
  )
}


export default Datepic