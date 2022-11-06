import "./App.css";
import Boundary from "./boundary";
import { Routes, Route } from "react-router-dom";
import Counter from "./counter";
import Test from "./test";
import Home from "./Home";
import NotFoundPage from "./NotFoundPage";
import Nav from "./nav";
import Counter_2 from "./Counter-2";

function App() {
  return (
    <div>
      <Nav/>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path='/counter-2' element={<Counter_2 />} />
          <Route path="/error" element={ 
          <Boundary>
          <Test />
          </Boundary>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
