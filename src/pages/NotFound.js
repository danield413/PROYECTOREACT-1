import React from 'react';
import {ButtonBackToHome} from '../components/ButtonBackToHome';

export const NotFound = () => {
    return(
        <div>
        <h1 className="title">404</h1>
        <h2 className="subtitle">UPS... No existe la página solitada</h2>
        <ButtonBackToHome />
    </div>
    )
}