/* global kakao */
import React, { useEffect } from "react";

const Map = ({ latitude, longitude, siteName }) => {
  const lat = { latitude };
  const lng = { longitude };
  useEffect(() => {
    const mapContainer = document.getElementById("map");
    let mapOption = {
      center: new kakao.maps.LatLng(lat.latitude, lng.longitude),
      level: 4,
    };
    const map = new kakao.maps.Map(mapContainer, mapOption);

    let markerPosition = new kakao.maps.LatLng(lat.latitude, lng.longitude);

    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, [latitude, longitude]);

  const decimalProps = {
    latitude,
    longitude,
  };
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "inline-block",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        <div id="map" style={{ width: "99%", height: "500px" }}></div>
      </div>
    </div>
  );
};
export default Map;
