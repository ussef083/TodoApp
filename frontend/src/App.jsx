import React from 'react'
import First from './components/first/First'
import './App.css'
import Second from './components/second/Second'
import { Toaster } from 'react-hot-toast';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <div className='App'>
      <Toaster position="top-right"  toastOptions={{style: {fontWeight: 600}}}/>
      <First/>
      <Second/>
      <Footer/>
    </div>
  )
}

export default App