// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
import './custom.css'

function App() {

  return (
    <>
      <div>

      <Header />
      <Navigation />

      <Outlet />

      <Footer />

      </div>
      

    </>
  )
}

export default App
