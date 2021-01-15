import React from 'react';

//components
import { ButtonPrimary } from '../UI/Button';

export default function CtaSpotifyFree() {
    return (
        <div>            
            <div className="background background-image-2">
                <div className="container">
                    <div className="row align-center height-content">
                        <div className="col">
                            <h1 className="title-large">Spotify<br /> free</h1>
                            <p>Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.</p>
                            <ButtonPrimary title="Obter" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}