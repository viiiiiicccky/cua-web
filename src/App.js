import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Home from "./pages/Home";
import GameSchedule from "./pages/GameSchedule";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game-schedule" element={<GameSchedule />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
