import React , {Component} from 'react';
import {Link} from 'react-router-dom';

export class Movie extends Component {
    
    render() {
        const {id, title, year, poster} = this.props;

        return (  
            <Link to={`/detail/${id}`} className="card">
                <div className="card-image">
                    <figure className="image ">
                        <img 
                        src={poster} 
                        alt={title}
                        />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title} - {year}</p>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}
 
export default Movie;