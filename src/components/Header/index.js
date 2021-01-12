import React from 'react';

//assets
import Logo from '../../assets/image/logo-spotify.svg';

export default function Header() {
    return (
        <header>
            <div className="container">
                <nav>
                    <img className="logo" src={Logo} />
                </nav>
            </div>
        </header>
    )
}