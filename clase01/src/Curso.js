const Curso = (curso, nombre, duracion) => {
    return(
      <>
        <h2>{curso}</h2>
        <div>Profesor: <span>{nombre}</span></div>
        <div>Duración: <span>{duracion} semanas</span></div>
        <hr />
      </>
    )
}

export default Curso;
