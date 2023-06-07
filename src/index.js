import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/app.scss';

import Navigation from './components/navigation';
// import Footer from './components/Footer/Footer';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <div className='container'>
      <Navigation />
    </div>
    {/* <Footer /> */}
  </div>
);
