import { useEffect } from 'react';

const haversineDistance = ([lat1, lon1], [lat2, lon2]) => {
  const toRad = (val) => (val * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const useVesselNavigation = (startCoords, endCoords, speed, setCurrentPosition) => {
  useEffect(() => {
    const distance = haversineDistance(startCoords, endCoords);
    const totalTime = (distance / speed) * 3600;
    const steps = 60 * totalTime;
    const latStep = (endCoords[0] - startCoords[0]) / steps;
    const lonStep = (endCoords[1] - startCoords[1]) / steps;

    let currentStep = 0;

    const animate = () => {
      if (currentStep < steps) {
        startCoords[0] += latStep;
        startCoords[1] += lonStep;
        setCurrentPosition([startCoords[0], startCoords[1]]);
        currentStep++;
        requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      currentStep = steps;
    };
  }, [startCoords, endCoords, speed, setCurrentPosition]);
};

export default useVesselNavigation;
