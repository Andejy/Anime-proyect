import AnimeList from "./components/AnimeList";
import Cidebar from "./components/Cidebar";
import Header from "./components/Header";
import Search from "./components/Search";
import "./index.css";

function App() {
  return (
    <>
      <Header></Header>

      <Search></Search>
      <div className="container">
        {" "}
        <AnimeList></AnimeList>
      </div>
    </>
  );
}

export default App;
