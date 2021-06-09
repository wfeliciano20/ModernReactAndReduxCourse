import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: "No scrubs", duration: "4:05" },
        { title: "Macarena", duration: "2:30" },
        { title: "All Star", duration: "3:15" },
        { title: "I want it that way", duration: "3:30" },
    ];
};

const selectSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectSong: selectSongReducer,
});
