// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
// import { Button } from './components/ui/button';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
import Contact from './pages/contact';
import Home from './pages/home';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App
