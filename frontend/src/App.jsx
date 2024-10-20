import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./pages/Products";
import { LayoutPages } from "./containers/LayoutPages";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPages />}>
          <Route index element={<Products />} />
        </Route>

        <Route path="*" element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
