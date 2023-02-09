import React from 'react'
import Header from '../../components/Header/Header'
import Media from '../../components/Media/Media'
import SearchContainer from '../../components/SearchContainer/SearchContainer'
import "../../App.css"

const HomePage = () => {
  return (
    <>
    <div className="app">  
    <div className='main'>
      <Header />
      <SearchContainer/>
      <Media/>
    </div>
     
    </div>
    </>
  )
  
}

export default HomePage