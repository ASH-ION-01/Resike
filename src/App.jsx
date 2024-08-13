import React from 'react';
import MapComponent from './components/MapComponent';
import './App.css';
import Details from './components/Details';

function App() {
  const startCoords = [22.1696, 91.4996];
  const endCoords = [22.2637, 91.7159];
  const speed = 20; // km/h

  return (
    <div className="gp-y-2">
      <Details/>
      <MapComponent startCoords={startCoords} endCoords={endCoords} speed={speed} />
    </div>
  );
}

export default App;
