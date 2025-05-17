import "./App.css";
import Header from "./component/Header";
import Slider from "./component/Slider";
import GenreMovieList from "./component/GenreMovieList"; 
import ProductionHouse from "./component/ProductionHouse";



function App() {
  return (
    <div>
       <Header />
       <Slider />
       <ProductionHouse/>
      <GenreMovieList/> 

    </div>
  );
}

export default App;
