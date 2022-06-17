import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Form from "./Components/Form/Form";
import Acknowledgment from "./Components/Acknowledgment/Acknowledgment";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formulario" element={<Form />} />
          <Route path="/agradecimiento" element={<Acknowledgment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
