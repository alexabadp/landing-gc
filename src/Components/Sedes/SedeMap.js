import { withRouter } from "react-router-dom";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./Sedes.css";
import { useMemo } from "react";

function SedeMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC78fsXg01rMBapBJ_6Fs4IR6bzfw9F8Mo",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: -11.9477, lng: -77.0607 }), []);

  return (
    <GoogleMap zoom={18} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}

export default withRouter(SedeMap);
