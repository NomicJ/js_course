import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Button from "../pages/Button";
import ImageFromApi from "../pages/ImageFromApi";
import ToDoList from "../pages/ToDoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link className="App-link" to={"/"}>
          ToDoList
        </Link>
        <Link className="App-link" to={"/second"}>
          ImageFromApi
        </Link>
        <Link className="App-link" to={"/third"}>
          Button
        </Link>
      </header>
      <main className="main__content">
        <Routes>
          <Route path="/" element={<ToDoList />} />
          <Route path="/second" element={<ImageFromApi />} />
          <Route path="/third" element={<Button />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
