import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

function AlbumControls({album , type}) {
    console.log(album);

    const {removeAlbumFromAlbumList , addAlbumToMyTop , moveToAlbumList , removeFromMyTop } = useContext(GlobalContext)
  return (

      <div className="inner-card-controls">
          
    {
        type === 'albumlist' && (
            <>
            <button className="ctrl-btn"
            onClick={() => addAlbumToMyTop(album)}>
                <i className="fa-fw fa fa-eye"></i>
            </button>
            <button className="ctrl-btn"
            onClick={() => removeAlbumFromAlbumList(album.idAlbum) }>
                <i className="fa-fw fa fa-times"></i>
            </button>
            </>
        )
    }


{
        type === 'mytop' && (
            <>
            <button className="ctrl-btn"
            onClick={() => moveToAlbumList(album)}
            >
                <i className="fa-fw fa fa-slash"></i>
            </button>
            <button className="ctrl-btn"
            onClick={() => removeFromMyTop(album.idAlbum)}
           >
                <i className="fa-fw fa fa-times"></i>
            </button>
            </>
        )
    }
         
      </div>
  )
}

export default AlbumControls