import AllComponets from "./Pages/AllPage/AllComponets";
import IndividualProductPage from "./Pages/ProductPage/IndividualProductPage";
import ProductPage from "./Pages/ProductPage/ProductPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CarrierDetailsPage from "./components/CarrierDetails/CarrierDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllComponets/>}/>
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/product/:id" element={<IndividualProductPage/>} />
        <Route path="/carrier/:id" element={<CarrierDetailsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
