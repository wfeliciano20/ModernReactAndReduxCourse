import React, { Component } from 'react'

export default class ImageList extends Component {

    images = this.props.images.map( image => {
        return (
        <img key={image.id} 
        alt={image.description} 
        src={image.urls.regular} />
    );});
    
    render() {
        return (
            <div>
                {this.images}
            </div>
        )
    }
}
