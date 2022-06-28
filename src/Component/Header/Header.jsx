import React from 'react'
//import logo from '../../logo.png'
import {Link} from 'react-router-dom'
import {ImSearch} from 'react-icons/im'


export const Header = () => {
  return (
    <nav className='header'>
        <img src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg' alt="logo"/>
        <div>
          <Link to="/tvshows">Tv Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/recently-addes">Recently Added</Link>
          <Link to="/mylist">My List</Link>
        </div>
        <ImSearch/>
    </nav>
  )
}
