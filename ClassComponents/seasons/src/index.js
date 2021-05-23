import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    state = { lat:null, errorMessage:''};

    getCurrentPosition = () => {
        return new Promise((accept, reject) => {
            navigator.geolocation.getCurrentPosition(accept, reject);
        });
    };

    async componentDidMount (){
        try {
            const position = await this.getCurrentPosition();
            const { latitude } = position.coords;
            this.setState({lat:latitude});

        } catch (error) {
            this.setState({ errorMessage: error.message})
        }
    };

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
    };
}

ReactDOM.render(<App />, document.getElementById('root'));
