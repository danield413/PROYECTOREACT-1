import React, { Component } from 'react';
import {ButtonBackToHome} from '../components/ButtonBackToHome';

const API_KEY = '797a1f26';

export class Detail extends Component {
    
    state = { movie: {} }

    _fetchMovie( {id} ) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                console.log(movie)
                this.setState( { movie } )
            })
    }

    componentDidMount() {
        const { movieid } = this.props.match.params
        console.log(this.props.match.params)
        this._fetchMovie( {id : movieid} )
    }

    render() { 
        const {Title, Poster, Actors, Metascore, Plot} = this.state.movie
        return ( 
            <div>
                <ButtonBackToHome />
                <h1>{Title}</h1>
                <img src={Poster} alt={Title}/>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
         );
    }
}
 
