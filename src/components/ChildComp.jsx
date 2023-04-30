import { useState } from "react";

function ChildComp() {
  const [name, setName] = useState("Jack");

  const [counter, setCounter] = useState(0);

  const [movies, setMovies] = useState([]);

  const [newMovie, setNewMovie] = useState("");

  const [books, setBooks] = useState([
    { isbn: 12345, title: "Travels With My Aunt", genre: "fiction" },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newGenre, setNewGenre] = useState("");

  function handleClick() {
    setName("John");
  }

  function handleClickCounter() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function handleAddMovie() {
    setMovies(function (prevMovies) {
      return [...prevMovies, newMovie];
    });
  }

  function handleAddBook() {
    setBooks(function (prevBooks) {
      let newBook = {
        isbn: prevBooks.length + 1,
        title: newTitle,
        genre: newGenre,
      };
      let newBookList = [...prevBooks, newBook]
      //console.table(newBookList);
      return newBookList;
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
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setNewMovie(e.target.value)}
        />
        <button onClick={handleAddMovie}>Add Movie</button>

        <div>
          <ul>
            {movies.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <input
          type="text"
          placeholder="BookTitle"
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          onChange={(e) => setNewGenre(e.target.value)}
        />
        <button onClick={handleAddBook}>Add Book</button>

        <div>
          <ul>
          {books.map((b) => (
              <li key={b.isbn}>{b.title} ({b.genre})</li>
            ))}

          </ul>
        </div>
      </div>
    </>
  );
}

export default ChildComp;
