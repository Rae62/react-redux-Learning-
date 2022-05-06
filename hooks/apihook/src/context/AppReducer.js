// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case "ADD_ALBUM_TO_ALBUM_LIST" :
            return {
                ...state,
                albumlist: [action.payload, ...state.albumlist]
            }
            case "REMOVE_ALBUM_FROM_ALBUM_LIST" :
                return {
                    ...state,
                    albumlist: state.albumlist.filter(
                        album => album.idAlbum !== action.payload)
                }
                case "ALL_ALBUM_TO_MY_TOP" :
                    return {
                        ...state,
                       mytop: [action.payload, ...state.mytop],
                       albumlist : state.albumlist.filter(
                           album =>album.idAlbum !== action.payload.idAlbum
                       )
                    }
                    case "MOVE_TO_ALBUM_LIST" :
                        return {
                            ...state,
                            mytop: state.mytop.filter(album => album.idAlbum !== action.payload.idAlbum),
                            albumlist: [action.payload, ...state.albumlist]
                        }
                        case "REMOVE_FROM_MY_TOP" :
                            return {
                                ...state,
                                mytop: state.mytop.filter(album => album.idAlbum !== action.payload)
                            }

        default: return state
    }
}