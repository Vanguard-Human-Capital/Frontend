import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home.tsx'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
