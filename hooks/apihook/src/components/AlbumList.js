import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import AlbumCard from './albumCard'

function AlbumList() {

  const { albumlist } = useContext(GlobalContext)
  return (
    <div>
        <div className="album-page">
          <div className="container">
            <div className="header">
              <h1 className="heading">My Album List</h1>
              <span className='count-pill'>
                {albumlist.length}  {albumlist.length > 1 ? "Albums" : "Album"}
              </span>
            </div>
            {
          albumlist.length > 0 ? (
            <div className="album-grid">
            { albumlist.map(album => (
              <AlbumCard key={album.idAlbum}
                album={album}
                type='albumlist' />
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

export default AlbumList