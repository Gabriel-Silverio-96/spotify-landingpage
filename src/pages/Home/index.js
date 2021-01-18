import React from 'react';
import { Helmet } from 'react-helmet';

//components
import Header from '../../components/Header';
import BannerMain from '../../components/BannerMain';
import CtaMusic from '../../components/CtaMusic';
import CtaArtist from '../../components/CtaArtist';
import CtaSpotifyFree from '../../components/CtaSpotifyFree';
import CtaNews from '../../components/CtaNews';
import Footer from '../../components/Footer';

function App() {
  return (
    <div className="App">
      {/* Informações do head */}
      <Helmet>
        <title>Spotify | Landing page</title>
        <link rel="canonical" href="https://gabriel-silverio-96.github.io/spotify-landingpage/" />
      </Helmet>

      <Header/>

      <BannerMain />

      <CtaMusic />

      <CtaArtist />

      <CtaSpotifyFree />

      <CtaNews />

      <Footer />
    </div>
  );
}

export default App;
