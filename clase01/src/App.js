import Curso from './Curso';

function App() {
  let nombre = 'Cristian Yañez Manriquez'
  return (
    <div>
      <h1>Plataforma de Cursos de Escalab</h1>
      <hr />
      {Curso('React JS', 'Alex Marín Mendez', 5)}
      {Curso('Javascript', 'Aldo Martinez', 9)}
      {Curso('Javascript', 'Cristian Yañez Manriquez', 9)}
    </div>
  );
}

export default App;
