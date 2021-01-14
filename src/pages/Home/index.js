import React from 'react';

//components
import Header from '../../components/Header';
import BannerMain from '../../components/BannerMain';
import CtaMusic from '../../components/CtaMusic';
import CtaArtist from '../../components/CtaArtist';

function App() {
  return (
    <div className="App">
      <Header/>

      <BannerMain />

      <CtaMusic />

      <CtaArtist />
    </div>
  );
}

export default App;
