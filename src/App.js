import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieNavbar from './components/MovieNavbar'
import MainComponent from './components/MainComponent'

const App = () => {
  return (
    <div className='App'>
      <header>
        <MovieNavbar />
      </header>
      <main>
        <MainComponent />
      </main>
    </div>
  )
}
export default App
