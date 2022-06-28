import React, { useEffect, useState } from 'react'
import './Home.scss'
import { Row } from './Row'
import axios from 'axios';
import {Link} from 'react-router-dom';
import {BiPlay} from 'react-icons/bi';
import {AiOutlinePlus} from 'react-icons/ai'



const apiKey ="861f5558aa5ac7cb419d45c40f0d4787";
const url ="https://api.themoviedb.org/3";
const upcoming ="upcoming";
const nowPlaying ="now_playing";
const popular ="popular";
const topRated ="top_rated";
const genre="genre";

export const Home =()=> {
   
    const [upcomingMovies,setUpcomingMovies] = useState([]);
    const [nowPlayingMovies,setNowPlayingMovies] = useState([]);
    const [popularMovies,setPopularMovies] = useState([]);
    const [topRatedMovies,setTopRatedMovies] = useState([]);
    const [genreData,setGenreData] = useState([]);

    useEffect(()=>{
        const fetchUpcoming = async()=> {
            try {
                const {data} = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
                setUpcomingMovies(data.results)
                //console.log(upcomingMovies);
            }
            catch (error) {
                console.log(error);
            }
        }
        const fetchNowPlaying = async()=> {
            try {
                const {data} = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
                setNowPlayingMovies(data.results)
                //console.log(upcomingMovies);
            }
            catch (error) {
                console.log(error);
            }
        }
        const fetchPopular = async()=> {
            try {
                const {data} = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
                setPopularMovies(data.results)
                //console.log(upcomingMovies);
            }
            catch (error) {
                console.log(error);
            }
        }
        const fetchTopRated = async()=> {
            try {
                const {data} = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
                setTopRatedMovies(data.results)
                //console.log(upcomingMovies);
            }
            catch (error) {
                console.log(error);
            }
        }
        const getAllGenre = async()=> {
            try {
                const {data:{genres}} = await axios.get(`${url}/${genre}/movie/list?api_key=${apiKey}`);
                setGenreData(genres)
                //console.log(genres);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchUpcoming();
        fetchNowPlaying();
        fetchPopular();
        fetchTopRated();
        getAllGenre();

    },[])

    
    

    
    return(
        <section className="home">
            <div className='banner' style={{
                backgroundImage:popularMovies[1]?`url(${`${url}/${popularMovies[1].poster_path}`})`:"rgb(16,16,16)"
            }}>
                {popularMovies[1]&&
              <h1>{popularMovies[1].original_title}</h1>
                }
                {popularMovies[1]&&
                <p>{popularMovies[1].overview}</p>
                }
               <div>
               <button><BiPlay/>Play </button>
               <button><AiOutlinePlus/>My List </button>
              </div> 
              
            </div>
           
           <Row title={"Upcoming Movies"} arr={upcomingMovies}/>
           <Row title="Tv shows"arr={nowPlayingMovies}/>
           <Row title="Movies"arr={popularMovies}/>
           <Row title="Recently Added"arr={topRatedMovies}/>
           
           <div className='genreBox'>
           
            {genreData.map((item)=>{
                return(
                    //console.log(item.name)
                    <Link key={item.id} to={`/genre/${item.id}`}>
                    {item.name}
                    </Link>
            
            )
               
            })}
                
           </div>
          
        </section>
    )
}