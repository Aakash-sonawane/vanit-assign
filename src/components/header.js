import React from 'react'
import '../styles/header.css'

export default function Header({search,setSearch}) {
  return (
    <div className='header-nav'>
        <div>
            <input type='date' className='round'/>
        </div>
        <div>
            <input type='search' className='round search' defaultValue={'tower of london'} value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        </div>
        <div>
            <input type='submit' className='round' value={'filter'}/>
        </div>
        <div>
            <select className='round'>
                <option>Attractions</option>
                <option>Attractions</option>
                <option>Attractions</option>
                <option>Attractions</option>
                <option>Attractions</option>
                <option>Attractions</option>
            </select>
        </div>
      
    </div>
  )
}
