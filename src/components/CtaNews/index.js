import React from 'react';

//components
import { ButtonSecondary } from '../UI/Button';
import Input from '../UI/Input';

//assets
import Microphone from '../../assets/image/ui/background/microphone.png';

export default function CtaNews(params) {
    return (
        <div className="container">
            <div className="background background-image-3">
                <div className="row align-center">
                    <div className="col">
                        <h1 className="title-large title-large-responsive">Novidades<br /> spotify</h1>
                        <p>Fique por dentro de todas<br/> novidades do universo da música</p>

                        <Input 
                            type="text" 
                            placeholder="Digite seu melhor email"
                        />
                        <ButtonSecondary title="Enviar" />
                    </div>

                    <div className="col">
                        <img width="350" className="image margin-bottom-negative" src={Microphone} alt="Iphone mockup"/>
                    </div> 
                </div>
            </div>
        </div>
    )
}