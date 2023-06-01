import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/home';
import About from '../pages/about/about'
import Error from '../pages/error/error'
import Logement from '../pages/logement/Logement'
import Header from './Header/header';

function Navigation() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/error' element={<Error />} />
        <Route path='/logement' element={<Logement />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default Navigation


