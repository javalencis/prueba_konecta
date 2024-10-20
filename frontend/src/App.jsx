import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./pages/Products";
import { LayoutPages } from "./containers/LayoutPages";
import { Sales } from "./pages/Sales";
import { NotFound } from "./pages/NotFound";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPages />}>
          <Route index element={<Products />} />
          <Route path="/ventas" element={<Sales />} />
          <Route path="*" element={<NotFound/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
