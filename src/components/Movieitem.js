import React from 'react'
import './Movieitem.css';
function Movieitem({item}) {

    const baseurl = 'https://image.tmdb.org/t/p/w500/';
    return (
        <div className = 'card col-lg-3 moviecard'>
            <img src ={`${baseurl}${item.poster_path}`} className = 'img-fluid' alt = 'img'></img>
            <div className = 'cardbody'>
                <h3>Rating:{item.vote_average}</h3>
            </div>
            
        </div>
    )
}

export default Movieitem
