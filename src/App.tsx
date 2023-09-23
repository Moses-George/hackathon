import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/layout/layout';
import Contact from './pages/contact';
import Home from './pages/home';
import Register from './pages/register';

// const LocationProvider = ({children}) => {

// }

const RoutesWithAnimation = () => {

  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

function App() {

  return (
    <Layout>
      <RoutesWithAnimation />
    </Layout>
  )
}

export default App;
