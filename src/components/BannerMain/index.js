import React from 'react';

//assets
import BackgroundPrimary from '../../assets/image/ui/background/background-primary.svg';
import BackgroundSecondary from '../../assets/image/ui/background/background-secondary.svg';
import NoteMusic from '../../assets/image/ui/background/note-music.png';

//components
import { ButtonPrimary } from '../UI/Button';

export default function BannerMain(props) {
    return (
        <div className="background-area">
            {/* Text */}
            <h1 className="anime-content">
                <span className="word-1">Nunca</span><br /> 
                <span className="word-2">deixe</span> <br />
                <span className="word-3">a música</span><br /> 
                <span className="word-4">parar</span>
            </h1>
            {/* images banner */}
            <figure className="background-collection">
                <img className="image background-primary anime-background-primary" src={BackgroundPrimary} alt="background primary" />
                <img className="image background-secondary anime-background-secondary" src={BackgroundSecondary} alt="background secondary" />
                <img className="image note-music anime-note-music" src={NoteMusic} alt="note music" />
            </figure>

            <ButtonPrimary 
                title="Assinar" 
                class="anime-content"
            />
        </div>
    )
}