/* global kakao */
import React, { useEffect, useState } from "react";
import RecomDetail from './RecomDetail'


const Map = ({latitude,longitude}) => {

    const lat = {latitude}
    const lng = {longitude}
    //처음 지도 그리기
    useEffect(()=>{
        console.log(lat.latitude)
        const mapContainer = document.getElementById('map');
        let mapOption = { //지도 생성시 필요한 기본 옵션
            center: new kakao.maps.LatLng(lat.latitude, lng.longitude), 
            level : 4   //지도의 레벨(확대, 축소 정도)
        };
        const map = new kakao.maps.Map(mapContainer, mapOption);

        let markerPosition  = new kakao.maps.LatLng(lat.latitude, lng.longitude); 

        const marker = new kakao.maps.Marker({
            position: markerPosition
        });

        marker.setMap(map);


    },[latitude,longitude])

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