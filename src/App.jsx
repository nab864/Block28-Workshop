import { Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Mainsection from './components/Mainsection'

function App() {

  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>

        <Navbar />
        <Mainsection />
        <Navbar />
      </div>
    </>
  )
}

export default App
