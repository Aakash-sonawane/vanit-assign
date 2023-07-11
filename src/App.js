import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Header from './components/header';
import Main from './components/main';

function App() {
  const [data,setData]=useState([]);
  const [search,setSearch]=useState('tower of london')
  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
    params: {
      query:search,
      lang: 'en_US',
      units: 'km'
    },
    headers: {
      'X-RapidAPI-Key': 'ea36f39708mshcff41166d989675p1a3f22jsn7a5c68b1401e',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };


  let id;

  useEffect(()=>{

   id= setTimeout(()=>{
      
       fetchData();
    },500)

    return function(){
      clearTimeout(id)
    }

  },[search])

  const fetchData=async()=>{
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setData(response.data.data.Typeahead_autocomplete.results)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="main">
      <Header search={search} setSearch={setSearch}/>
      <Main data={data}/>
    </div>
  );
}

export default App;
