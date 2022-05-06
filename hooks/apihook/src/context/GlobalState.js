import React, {createContext, useReducer, useEffect} from 'react'
import AppReducer from './AppReducer'

const initialState = {
    albumlist:
     localStorage.getItem('albumlist') ? JSON.parse(localStorage.getItem('albumlist'))
    : 
    [],
    mytop: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(()=> {
        localStorage.setItem('albumlist' , JSON.stringify(state.albumlist))

        localStorage.setItem('mytop' , JSON.stringify(state.mytop))
    }, [state])

    const addAlbumToAlbumList = album => {
        dispatch({
            type: "ADD_ALBUM_TO_ALBUM_LIST",
            payload: album
        })
    }

    const removeAlbumFromAlbumList = id => {
        dispatch(
          {  type: "REMOVE_ALBUM_FROM_ALBUM_LIST",
            payload: id}
        )
    }

    const addAlbumToMyTop = album => {
        dispatch({
            type: "ALL_ALBUM_TO_MY_TOP",
            payload: album
        })
    }

    const moveToAlbumList = album => {
        dispatch({
            type: "MOVE_TO_ALBUM_LIST",
            payload: album
        })
    }

    const removeFromMyTop = id => {
        dispatch({
            type: "REMOVE_FROM_MY_TOP",
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
            albumlist: state.albumlist,
             mytop: state.mytop,
             addAlbumToAlbumList,
             removeAlbumFromAlbumList,
             addAlbumToMyTop,
             moveToAlbumList,
             removeFromMyTop
             }}>
            { props.children }
        </GlobalContext.Provider>
    )
}