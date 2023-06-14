import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/home';
import About from '../pages/about/About'
import Error from '../pages/error/Error'
import Logement from '../pages/logement/Logement'
import Header from './Header/Header';
import Footer from './Footer/Footer';

function Navigation() {

  // const navigate = useNavigate()

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/error' element={<Error />} />
        <Route path='/logement/:id' element={<Logement />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}


export default Navigation



