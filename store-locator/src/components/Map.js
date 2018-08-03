import React, {Component} from 'react';
import './Map.css';

export default class Map extends Component {
    render() {
        const imagePath = this.props.imagename? 'images/'+this.props.imagename:'images/none.png';
 
        return (
            <div className='MapBox'>
                <img src={imagePath} alt={this.props.location} />
            </div>
        );
    } 
}