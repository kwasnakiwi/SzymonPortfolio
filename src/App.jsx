import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./sites/HomePage";
import Python from "./sites/langs/Python";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/python' element={<Python />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
