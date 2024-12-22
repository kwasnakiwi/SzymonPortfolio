import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./sites/HomePage";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
