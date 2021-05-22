import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    state = { lat:null, errorMessage:''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
        position => {
            this.setState({ lat: position.coords.latitude});
        },
        error => {this.setState({ errorMessage: error.message})}
        );
    }

    render() {
        if (!this.state.lat && this.state.errorMessage) {
            return (
                <div>
                    Error: {this.state.errorMessage}
                </div> 
            );
        }
        else if (this.state.lat && !this.state.errorMessage) {
            return(
                <div>
                    Lattitude: {this.state.lat}
                </div>
            );
        }
        else{
            return <div>Loading!</div>
        } 
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
