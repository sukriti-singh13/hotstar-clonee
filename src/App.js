import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SportVideo from "./pages/SportVideo";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<SportVideo />} />
      </Routes>
    </div>
  );
}

export default App;
