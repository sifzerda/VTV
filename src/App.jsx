// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

function App() {

  return (
    <>

      <header className="header">
        <Header />
        <Navigation />
      </header>

      <main className="main-content">

      <Outlet />

      </main>
      <Footer />

    </>
  )
}

export default App
