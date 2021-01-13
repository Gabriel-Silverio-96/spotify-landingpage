import React from 'react';

//Assets
import IphoneMockup from '../../assets/image/ui/background/iphone-mockup.png'
import ButtonPrimary from '../UI/Button';

export default function CtaMusic(props) {
    return (
        <div className="background background-image">
            <div className="container">
                <div className="row align-center">
                    <div className="col">
                        <h1 className="title-large">A Música<br/> muda tudo</h1>
                        <p>Depois, apenas R$ 16,90/mês.<br/> Cancele quando quiser.</p>

                        <ButtonPrimary title="Assinar" />
                    </div>

                    <div className="col">
                        <img width="450" className="image margin-bottom-negative" src={IphoneMockup} alt="Iphone mockup"/>
                    </div>
                </div>
            </div>
        </div>
    )
}