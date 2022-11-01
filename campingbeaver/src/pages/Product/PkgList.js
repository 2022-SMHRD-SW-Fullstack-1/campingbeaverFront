import React, {useState, useEffect} from 'react'
import axios from 'axios'

const PkgList = () => {
  const [pkgitems,setPkgitems] = useState([])
  useEffect(()=> {
    axios.get("/beaver/pkglist")
    .then(response=>{
      console.log(response.data)
      console.log(response.data[0].pkg_seq)
      console.log(response.data[1].pkg_name)
      console.log(response.data[2].pkg_type)
      console.log(response.data[3].pkg_cnt)
      console.log(response.data[4].pkg_hash)
      console.log(response.data[5].pkg_price)
      console.log(response.data[6].pkg_photo)
     setPkgitems(response)
    })
  },[])


  return (
    <>
        <h2>상품 불러오기!</h2>
    </>
  )
}

export default PkgList