import { useState } from 'react'
import '../SearchBar/SearchBar.css'
import {campsiteinfo} from './campsiteinfo.js'
import {packageinfo} from './packageinfo.js'

const SearchBar = () => {
    const [query, setQuery] = useState('');
    
    console.log(packageinfo.filter(packageinfo=>packageinfo.pkg_name.includes("패키지")))
  return (
    <div className='searchbar'>
        <input 
        type='text' 
        placeholder='Search..' 
        className='search' 
        onChange={(e)=> setQuery(e.target.value)}
        />
        <ul className='list'>
            {packageinfo.filter((packageinfo) => 
               packageinfo.pkg_name.toLowerCase().includes(query)
            ).map((packageinfo) => (
                <li key={packageinfo.pkg_seq} className='listItem'>
                    {packageinfo.pkg_name}
                </li>
            ))}
        </ul>

    </div>
  )
}

export default SearchBar