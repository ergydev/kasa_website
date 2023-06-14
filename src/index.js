import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/app.scss';

import Navigation from './components/navigation';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <div className='container'>
      <Navigation />
    </div>
  </div>
);
