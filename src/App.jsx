import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import Home from './pages/Home'
import Favorate from './pages/Favourate'
import Navigation from './components/Navigation'
import { MovieProvider } from './context/MoviesContext'

function App() {

  return (
    <MovieProvider>
       <Navigation />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourate' element={<Favorate />} />
        </Routes>
      </main>

    </MovieProvider >
  )
}

export default App
