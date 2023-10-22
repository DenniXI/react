import React from 'react';
import {useCurrentLocation} from './UseCurrentLocation';

function App() {
  const { location, error, loading, getCurrentLocation } = useCurrentLocation();

  return (
    <div>
      <h1>Current Location</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {location && (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
      <button onClick={getCurrentLocation}>Get Current Location</button>
    </div>
  );
}

export default App;