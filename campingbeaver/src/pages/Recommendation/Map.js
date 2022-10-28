/* global kakao */
import React, { useEffect, useState } from "react";



const Map = () => {
    const [map,setMap] = useState(null);

    //처음 지도 그리기
    useEffect(()=>{
        const container = document.getElementById('map');
        let options = { //지도 생성시 필요한 기본 옵션
            center: new kakao.maps.LatLng(33.450701, 126.570667), 
            level : 4   //지도의 레벨(확대, 축소 정도)
        };
        const Map = new kakao.maps.Map(container, options);

        let markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 

        const marker = new kakao.maps.Marker({
            position: markerPosition
        });

        marker.setMap(map);


    },[])

    return (
        <div
            style={{
                width: '100%',
                display: 'inline-block',
                marginLeft: '5px',
                marginRight: '5px',
            }}
        >
            <div id="map" style={{ width: '99%', height: '500px' }}></div>
      </div>
      );
    };
export default Map