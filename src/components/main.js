import React from 'react'
import '../styles/main.css'
import ListOfPlaces from './ListOfPlaces'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import MapComponent from './mapComponent';

function Main({ data }) {
  const bounds = [[0.5783, 7.9873], [25.5736, 93.2473]];
  return (
    <div className='main-section'>
      <div className='left-part'>
        <ListOfPlaces data={data} />

      </div>

      <div className='right-part'>
        <div className="map">
          <MapComponent/>
        </div>
      </div>

    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: ('YOUR_GOOGLE_API_KEY_GOES_HERE')
})(Main)