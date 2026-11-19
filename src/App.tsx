import './App.css'
import Tablazat from './component/Tablazat'
import UjKonyv from './component/UjKonyv'

function App() {

  return (
    <>
      <header><h1>Táblázat Context-tel</h1></header>
      <main>
        <UjKonyv/>
        <Tablazat/>
      </main>
      <footer>
        <p>Molnár Beatrix</p>
      </footer>
    </>
  )
}

export default App
