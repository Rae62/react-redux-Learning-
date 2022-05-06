import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import AlbumCard from './albumCard'

function MyTop() {
  const {mytop} = useContext(GlobalContext)
  return (
    
       <div>
        <div className="album-page">
          <div className="container">
            <div className="header">
              <h1 className="heading">My Top</h1>
              <span className='count-pill'>
                {mytop.length}  {mytop.length > 1 ? "Mytops" : "Mytop"}
              </span>
            </div>
            {
          mytop.length > 0 ? (
            <div className="album-grid">
            { mytop.map(album => (
              <AlbumCard key={album.idAlbum}
                album={album}
                type='mytop' />
            )) }
          </div>

          ) : (
              <h2 className="no-albums">No albums in your list ! Add some taste !</h2>
          )
           }

          </div>
        </div>
    </div>
  )
}
  

export default MyTop