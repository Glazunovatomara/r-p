import './App.css'
import Header from './components/Header/Header'
import Home from './components/HomePage/Home'
import Footer from './components/Footer/Footer'
import CardPage from './components/Cards/CardPage/CardPage'
import WordsAdd from './components/Words/WordsAdd/WordsAdd'
import Word from './components/Words/Word/Word'
import ErrorPage from './components/ErrorPage/ErrorPage'


function App() {

  return (
    <>
    <Header/>
    <Home/>
    <WordsAdd/>
    <Word/>
    <CardPage/>
    <ErrorPage/>
    <Footer/>
    </>
  )
}

export default App
