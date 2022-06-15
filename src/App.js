import './App.css';
import freeCodeCampLogo from './images/freecodecamp_logo.png';

function App() {
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={ freeCodeCampLogo } 
          className='freecodecamp-logo'
          alt='Logo de freecodecamp' />
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
