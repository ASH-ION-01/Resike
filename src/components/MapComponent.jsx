import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import pointerImg from '../assets/pointer.png';
import redPointImg from '../assets/red-point.png';
import greenPointImg from '../assets/green-point.png';


const MapComponent = ({ startCoords, endCoords, speed }) => {
  const [currentPosition, setCurrentPosition] = useState(startCoords);

  const pointerIcon = L.divIcon({
    className: 'custom-pointer-icon',
    html: `<img src="${pointerImg}" style="transform: rotate(60deg); width: 8px; height: 45px;" />`,
    iconSize: [10,30 ],
    iconAnchor: [8, 22],
  });

  const redPointIcon = L.icon({
    iconUrl: redPointImg,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });

  const greenPointIcon = L.icon({
    iconUrl: greenPointImg,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });

  useEffect(() => {
    const startLat = startCoords[0];
    const startLng = startCoords[1];
    const endLat = endCoords[0];
    const endLng = endCoords[1];
  
    const totalIterations = 5; 
    const moveDuration = 2500; 
    const pauseDuration = 100; 
    const totalDuration = 16250; 
  
    const stepLat = (endLat - startLat) / totalIterations;
    const stepLng = (endLng - startLng) / totalIterations;
  
    let iteration = 0;
    let startTime = null;
  
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
  
      const progress = Math.min(elapsed / moveDuration, 1);
  
      const currentLat = startLat + iteration * stepLat + progress * stepLat;
      const currentLng = startLng + iteration * stepLng + progress * stepLng;
  
      setCurrentPosition([currentLat, currentLng]);
  
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else if (iteration < totalIterations - 1) {
        iteration += 1;
        startTime = null;
        setTimeout(() => {
          requestAnimationFrame(animate);
        }, pauseDuration);
      }
    };
  
    requestAnimationFrame(animate);
  }, [startCoords, endCoords]);
  

  return (
    <div className="flex justify-center items-center h-[80vh] mt-10 rounded-lg">
    <MapContainer center={startCoords} zoom={11} className="h-[80vh] w-[90vw] rounded-lg">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={startCoords} icon={redPointIcon} />
      <Marker position={endCoords} icon={greenPointIcon} />
      <Marker position={currentPosition} icon={pointerIcon} />
    </MapContainer>
  </div>
  );
};

export default MapComponent;
