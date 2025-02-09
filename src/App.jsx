import './App.css'
import Header from './components/Header/Header'
import Home from './components/HomePage/Home'
import Footer from './components/Footer/Footer'
import CardPage from './components/CardPage/CardPage'
import WordsAdd from './components/WordsAdd/WordsAdd'
import WordsList from './components/Words/Words'
import Words from './components/Words/Words'


function App() {

  return (
    <>
    <Header/>
    <Home/>
    <WordsAdd/>
    <WordsList/>
    <Words/>
    <CardPage/>
    <Footer/>
    </>
  )
}

export default App
