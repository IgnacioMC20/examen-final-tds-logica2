import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Table } from './Table'
import { mesesArrayDos, mesesArrayUno, semestreDos, semestreUno } from './data'

function App() {
  

  const [primerSemestre, setPrimerSemestre] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {
          primerSemestre ? (<h1>Primer Semestre</h1>) : (<h1>Segundo Semestre</h1>)
        }
        
        {
          primerSemestre ? (<Table semestre={semestreUno} mesesArray={mesesArrayUno} />) : (<Table semestre={semestreDos} mesesArray={mesesArrayDos} />)
        }
        {/* <Table semestre={semestreUno} mesesArray={mesesArrayUno}/> */}
        <button
        className='custom-button'
         onClick={() => {
          setPrimerSemestre(!primerSemestre);
        }}>Cambiar de Semestre</button>
      </header>
    </div>
  )
}

export default App
