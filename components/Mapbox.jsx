import Map, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";
function Mapbox({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coords = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  const center = getCenter(coords);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  return (
    <Map
      {...viewport}
      mapStyle="mapbox://styles/fsanchez252/cld0soh6x000f01rn21flkz2g"
      mapboxAccessToken={process.env.mapbox_key}
      onMove={(nextViewport) => {
        setViewport(nextViewport.viewState);
      }}
    >
      {searchResults.map((result) => {
        return (
          <div key={result.long}>
            <Marker
              longitude={result.long}
              latitude={result.lat}
              offsetLeft={-20}
              offsetTop={10}
            >
              <p
                role="img"
                onClick={() => setSelectedLocation(result)}
                className="cursor-pointer text-2xl animate-bounce"
                aria-label="push-pin"
              >
                📌
              </p>
            </Marker>
            {selectedLocation.long === result.long && (
              <Popup
                onClose={() => setSelectedLocation(false)}
                closeOnClick={false}
                latitude={result.lat}
                longitude={result.long}
              >
                {result.title}
              </Popup>
            )}
          </div>
        );
      })}
    </Map>
  );
}

export default Mapbox;
