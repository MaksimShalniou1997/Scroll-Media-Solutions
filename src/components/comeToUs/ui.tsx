import { useStyles } from "./";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100%",
  height: "1000px",
  borderRadius: 100,
};

const OPTIONS = {
  minZoom: 4,
  maxZoom: 18,
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: false,
};

const center = {
  lng: 34.79955969891161,
  lat: 32.004763273483505,
};

export const ComeToUs = () => {
  const classes = useStyles();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDzERHR6IzLbvxZZNgRd3JFNB7lTguIYrY",
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    map.setZoom(18);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Come to Us!</h1>
      <div className={classes.mapContainer}>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={18}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={OPTIONS}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
