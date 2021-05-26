import React, { Component } from 'react'

export default class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load',this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spansNum = Math.ceil(height/10);
        this.setState({ spans:spansNum });
    }

    render() {
        const {description,urls} = this.props.img;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    ref={this.imageRef}
                    alt={description} 
                    src={urls.regular} 
                    />
            </div>
        );
    }
}
