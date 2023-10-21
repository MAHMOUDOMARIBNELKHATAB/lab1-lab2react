import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter,Routes , Route } from "react-router-dom";
import Details from "./components/details/Details.jsx";
import Home from "./components/shop/Home.jsx";
import About from "./components/counter-lab1/About.jsx";
import Loader from "./components/loader/loader.jsx";




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes> 
          <Route path="/"  element={<Home/>}/> 
          <Route  path="/home/:id"  element={<Details/>}/>
          <Route  path="/about"  element={<About/>}/> 

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
