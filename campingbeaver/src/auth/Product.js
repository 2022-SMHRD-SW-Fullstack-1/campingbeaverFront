import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({item, idx}) => {

    console.log(item)
    const containerStyle = {
        border : '1px solid gray',
        display : 'flex',
        flexDirection : 'column'
    }

    
  return (
    <div style={containerStyle}>
        <img src={item.itemThumbnail} width="100px"></img>
        <h2>
            <Link to={'/detail'+idx+'?itemName='+item.itemName+'&price='+item.price+'&itemThumbnail='+item.itemThumbnail}>
                {item.itemName}
            </Link>
            </h2>
        <p>{item.price}</p>
        <p>{item.itemThumbnail}</p>
    </div>
  )
}

export default Product