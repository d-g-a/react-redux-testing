import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ mySelectedSong }) => {

    if (!mySelectedSong){
        return <div> Select A Song</div>;
    }

    return (
        <div>
            <h3>Details for: {mySelectedSong.title}</h3>
            <p>
                Duration: {mySelectedSong.duration}
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { mySelectedSong : state.selectedSong } 
}

export default connect(mapStateToProps)(SongDetail) ;