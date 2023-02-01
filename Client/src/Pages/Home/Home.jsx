import React from 'react'
import HomeMainbar from '../../Components/HomeMainbar/HomeMainbar'
import Leftsidebar from '../../Components/LeftSidebar/Leftsidebar'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'
import '../../App.css';
const Home = () => {
  return (
    <div className='home-container-1'>
<Leftsidebar/>
<div className='home-container-1'>
  <HomeMainbar/>
<RightSidebar/>
</div>
    </div>
  )
}

export default Home