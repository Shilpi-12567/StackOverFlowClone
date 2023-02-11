import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import Search from '../../assets/Search.svg';
import Avatar from '../../Components/Avatar/Avatar'
const Navbar=()=> {
  var User = null
  return (
    <div>
 <nav className='main-nav'>
         <div className='navbar'>
           <Link to='/' className='nav-item nav-logo'>
             <img src={logo} alt='logo' />
           </Link>
           <Link to='/' className='nav-item nav-btn'>About</Link>
           <Link to='/' className='nav-item nav-btn'>Products</Link>
           <Link to='/' className='nav-item nav-btn'>For Teams</Link>
         </div>
         <form>
           <input type="text" placeholder='Search...' />
           <img src={Search} alt="search" width="18" className='search-icon' />
         </form>
         { User === null ? 
                    <Link to='/Auth' className='nav-item nav-links'>Login</Link> : 
                    <>
                        <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'>
                          <Link to={`/Users/${User?.result?._id}`} 
                        style={{color:"white", textDecoration:'none'}}>
                          {User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                        <button className='nav-item nav-links'>Log out</button>
                    </>
                }
       </nav>
    </div>
  )
}

export default Navbar