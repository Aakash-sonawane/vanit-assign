import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function MapComponent() {
    const mapContainerStyle = {
      height: '400px',
      width: '100%',
    };
  
    const center = {
      lat: 28.5783,
      lng: 76.9873,
    };
  
    return (
      <LoadScript googleMapsApiKey="AIzaSyCMVJMjNx-mwAc3cE_QbDDler9ZHBd76ZQ">
        <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={13}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    );
  }