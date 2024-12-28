import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./sites/HomePage";
import Python from "./sites/langs/Python";
import RestApi from "./sites/langs/RestAPI";
import Django from "./sites/langs/Django";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/python' element={<Python />} />
          <Route path='/restapi' element={<RestApi />} />
          <Route path='/django' element={<Django />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
