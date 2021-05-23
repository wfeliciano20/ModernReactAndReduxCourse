import React from 'react';

const getSeason = (lat,month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer':'winter';
    }else{
        return lat > 0 ? 'winter':'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude,new Date().getMonth());
    const expression = season === 'winter' ? 'Burr, it is chilly':'Lets hit the breach';
        
    return (
        <div>{expression}</div>
    );
};

export default SeasonDisplay;