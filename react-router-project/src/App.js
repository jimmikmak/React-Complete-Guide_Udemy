import { Routes, Route } from "react-router-dom";

import Welcome from "./components/Welcome";
import Products from "./components/Products";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/products" elemet={<Products />}></Route>
      </Routes>
    </div>
  );
};

export default App;
