import React from 'react'
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {
  return (
   <>
   <div className="h-screen w-full bg-slate-900 flex items-center justify-center">
    <div className="bg-white w-[400px] h-[500px] rounded-lg p-5 ">
      <Header/>
      <Main/>
      <Footer/>
    </div>
    
   </div>
   </>
  );
}

export default App;
