import React,{useEffect, useState} from 'react'
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';


function App() {


  const [resData,setRes]=useState('');
  const [search,setSearch]=useState('Coimbatore')


  const fetchData=async(cityName)=>{
    const API=`https://api.openweathermap.org/data/2.5/weather?q=${'coimbatore'}&appid=4f6aac01155638965656568c414dbb17&units=Metric`;
    try{
      let res=await fetch(API)
      let data=await res.json(); 
      console.log(data); 
    }catch(err){
      console.log(err.message);
    }

  } 

 return (
   <>
   <div className="h-screen w-full bg-slate-900 flex items-center justify-center">
    <div className="bg-white w-[400px] h-[500px] rounded-lg p-5 flex flex-col justify-between">
      <Header setSearch={setSearch}/>
      <Main data={resData}/>
      <Footer/>
    </div>
    
   </div>
   </>
  );
}

export default App;
