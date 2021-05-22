import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lattitude: null,
            errorMessage: ''
        };
        window.navigator.geolocation.getCurrentPosition(
        position => {
            this.setState({ lattitude: position.coords.latitude});
        },
        error => {this.setState({ errorMessage: error.message})}
        );

    }

    render() {
        if (!this.state.lattitude && this.state.errorMessage) {
            return (
                <div>
                    Error: {this.state.errorMessage}
                </div> 
            );
        }
        else if (this.state.lattitude && !this.state.errorMessage) {
            return(
                <div>
                    Lattitude: {this.state.lattitude}
                </div>
            );
        }
        else{
            return <div>Loading!</div>
        }
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
