import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'




function ResultAlbumCard({album}) {


    const { addAlbumToAlbumList, albumlist , mytop , addAlbumToMyTop } = useContext(GlobalContext)

    let storedAlbum = albumlist.find(a => a.idAlbum === album.idAlbum)


    let storedMyTop = mytop.find(a => a.idAlbum === album.idAlbum)


    const albumlistDisabled = storedAlbum ? true : storedMyTop ? true : false
    const myTopDisabled = storedMyTop ? true : false

  return (
    <div className="result-card">
        <div className="poster-wrapper">
            {
                album ? (
                    <img src={album.strAlbum3DFace ? album.strAlbum3DFace :
                        album.strAlbum3DCase ? album.strAlbum3DCase : album.strAlbumCDart} alt='poster album' />
                ) : <div className="filler-poster"></div>
            }
        </div>
        <div className="info">
            <div className="header">
                <h3 className="title">{album.strAlbum}</h3>
                <h4 className="release-date">{album.intYearReleased}</h4>
            </div>
            <div className="controls">
                <button
                disabled={albumlistDisabled}
                 onClick={() => addAlbumToAlbumList(album)} className='btn'>Add to AlbumList</button>
                <button
                disabled={myTopDisabled}
                 onClick={() => addAlbumToMyTop(album)} className='btn'>Add to my Top</button>
            </div>
        </div>
    </div>
  )
}

export default ResultAlbumCard