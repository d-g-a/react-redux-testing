import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        { title: 'Mugre, Pelos, Sangre, Muerte', duration: '4:19'},
        { title: 'Ya No Se Va', duration: '7:30'},
        { title: 'Las Flores Yacen', duration: '4:40'},
        { title: 'Supersilverhaze II', duration: '6:46'}
    ];
};

const selectedSongReducer = ( selectedSong=null, action) => {
    if( action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});

