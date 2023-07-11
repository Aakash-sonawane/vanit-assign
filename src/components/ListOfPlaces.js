import React, { useState } from 'react'

export default function ListOfPlaces({data}) {
    const[distance,setDistance]=useState(4232);

  return (
    <>
        <div className='distance-contaner'>
        <div className='distance'>
            <p>Distance</p>
            <p>{distance}</p>
        </div>
        <input type='range' min={0} max={5000} value={distance} onChange={(e)=>{setDistance(e.target.value)}}/>

        </div>

        <div>
          {
            data && data.map((data)=>{
              return(
                data.image &&
                <div className='card'>
                  <div>
                    <img src={data.image.photo.photoSizes[6].url}/>
                  </div>

                  <div>
                    <p>{data.detailsV2.names.name}</p>
                    <p></p>
                    <p></p>
                    <p></p>
                  </div>
                </div>
              )
            })
          }

        </div>

    </>
  )
}
