import React from 'react';

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
