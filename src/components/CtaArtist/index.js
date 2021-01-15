import React from 'react';

//icons
import { FiMonitor, FiSmartphone, FiDownloadCloud } from 'react-icons/fi';

export default function CtaArtist() {
    return (
        <div className="container position-relative banner-artist">  
        <div className="blur-ball anime-opacity"/>
            <h1 className="title-large text-center">Seu artista preferido<br/> aonde estiver</h1>
            <div className="icon-area">
                <FiMonitor size={35} color={"#1DB954"} />
                <FiSmartphone size={35} color={"#1DB954"} />
                <FiDownloadCloud size={35} color={"#1DB954"} />
            </div>
        </div>
    )
}