import React,{useEffect, useState} from 'react'
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { IoCloseCircleSharp } from "react-icons/io5";

import suns from './images/sun.png'
import cloudy from './images/clouds.png'
import sunnycloudy from './images/sunnycloud.png'
import rainny from './images/rain.png'
import sunnyrainny from './images/sunnyrain.png'
import snowflakes from './images/snowflake.png'
import stormy from './images/storm.png'
import mist from './images/foggy.png'

function App() {

  const CloudsObj={
    "01d":suns,
    "01n":suns,
    "02d":sunnycloudy,
    "02n":sunnycloudy,
    "03d":cloudy,
    "03n":cloudy,
    "04d":rainny,
    "04n":rainny,
    "09d":rainny,
    "09n":rainny,
    "10d":sunnyrainny,
    "10n":sunnyrainny,
    "11d":stormy,
    "11n":stormy,
    "13d":snowflakes,
    "13n":snowflakes,
  }





  const [search,setSearch]=useState('Coimbatore')
  const [city,setCity]=useState('Coimbatore');
  const [temp,setTemp]=useState()
  const [cloud,setCloud]=useState()
  const [lon,setLon]=useState()
  const [lat,setLat]=useState()
  const [humidity,setHumidity]=useState()
  const [wind,setWind]=useState()
  const [country,setCountry]=useState()
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false)




  const API_KEY="4f6aac01155638965656568c414dbb17"
  const fetchData=async()=>{
    const API=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=Metric`;
    try{
      setLoading(true)
      let res=await fetch(API)
      let data=await res.json(); 
      if(data.cod==='404')
        {
          setError(true)
          setLoading(false)
        }
      setCity(data.name)
      setCloud(CloudsObj[data.weather[0].icon]);
      setLat(data.coord.lat)
      setLon(data.coord.lon)
      setTemp(Math.floor(data.main.temp))
      setHumidity(data.main.humidity)
      setWind(data.wind.speed)
      setCountry(data.sys.country)

    }catch(err){
      console.log(err.message);
    }finally{
      setLoading(false)    
    }

  } 
  useEffect(()=>{fetchData()},[])

  console.log(cloud);


 return (
   <>
   <div className="h-screen w-full bg-slate-900 flex items-center justify-center">
    <div className="bg-white w-[400px] h-[500px] rounded-lg p-5 flex flex-col justify-between relative">
  
      <Header setSearch={setSearch} search={fetchData} />
      <Main lon={lon} lat={lat}  city={city} cloud={cloud} temp={temp} country={country} citynotfound={error} />
      <Footer humidity={humidity} wind={wind} />
     {loading?<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-md  ">
      <Loader/>
      </div>:
      null}
      {error?
      <>
      <div className="absolute w-full h-full backdrop-blur-md top-0 left-0 flex items-center justify-center ">
        <span className='text-4xl text-red-600 font-bold '>City Not Found</span>
        <button className='absolute top-7 right-7'><IoCloseCircleSharp className='text-4xl text-red-600  ' onClick={()=>setError(false)} /></button>
      </div>
      </> 
       :null}
      
    </div>
    
   </div>
   </>
  );
}
function Loader() {

  return<>
  
  <div class='flex space-x-2 justify-center items-center 
 '>
 	<span class='sr-only'>Loading...</span>
  	<div class='h-8 w-8 rounded-full animate-bounce [animation-delay:-0.3s] bg-slate-800'></div>
	<div class='h-8 w-8 rounded-full animate-bounce [animation-delay:-0.15s] bg-slate-800'></div>
	<div class='h-8 w-8  rounded-full animate-bounce bg-slate-800'></div>
</div>

  </>
}

export default App;
