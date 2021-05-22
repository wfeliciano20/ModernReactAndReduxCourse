import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lattitude: null
        };
        window.navigator.geolocation.getCurrentPosition(
        position => {
            this.setState({ lattitude: position.coords.latitude});
        },
        err => console.log(err)
        );

    }

    render() {
        
        return (
            <div>Lattitude: {this.state.lattitude}</div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
