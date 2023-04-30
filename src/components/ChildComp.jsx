import { useState } from "react";

function ChildComp() {
  const [name, setName] = useState("Jack");

  const [counter, setCounter] = useState(0);

  const [movies, setMovies] = useState([]);

  const [newMovie, setNewMovie] = useState('');

  function handleClick() {
    setName("John");
  }

  function handleClickCounter() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function handleAddMovie() {
    setMovies( function(prevMovies) { 
        return [ ...prevMovies, newMovie] 
    });
  }

  return (
    <>
      <div>
        HELLO {name} FROM CHILD COMPONENT
        <div>
          <button onClick={handleClick}>Change Name</button>
        </div>
      </div>

      <div>
        My Counter is:{counter}
        <div>
          <button onClick={handleClickCounter}>Increment Counter</button>
        </div>
      </div>

      <div>
        <input type="text" name="" id="" onChange={ e => setNewMovie(e.target.value) }/>
        <button onClick={handleAddMovie}>Add Movie</button>

        <div>
            <ul>
                
                { movies.map( (m,i) => <li key={i}>{m}</li> ) }
                 
            </ul>
        </div>

      </div>
    </>
  );
}

export default ChildComp;
