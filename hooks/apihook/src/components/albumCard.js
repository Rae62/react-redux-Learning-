import React from 'react'
import AlbumControls from './AlbumControls';

function AlbumCard({album, type}) {
    console.log(album);
  return (
    <div className="album-card">
        <div className="overlay"></div>
     
        {
         album ? (
             <img src={album.strAlbum3DFace ?
                 album.strAlbum3DFace :
                 album.strAlbum3DCase ?
                 album.strAlbum3DCase :
                 album.strAlbumCDart} alt='poster album' />
         ) : <div className="filler-poster"></div>
            }
            <AlbumControls album={album} type={type}/>
    </div>
  )
}

export default AlbumCard