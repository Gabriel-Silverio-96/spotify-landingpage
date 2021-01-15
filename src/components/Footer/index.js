import React from 'react';

//assets
import Logo from '../../assets/image/logo-spotify.svg';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row align-center justify-space-between">
                    <div className="col-footer">
                        <img className="logo logo-footer" src={Logo} />
                    </div>
                    <div className="col-footer">
                        <ul className="link-footer">
                            <li>Legal</li>
                            <li>Privacidade</li>
                            <li>Coockie</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}