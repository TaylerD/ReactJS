import Products from './components/Products';
import { Product } from './components/Product';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CategoriesProd } from './CategoriesProd';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/details/:idProduct" element={<Product />} />
        <Route path="/" element={<Products />} />
        <Route path="/categories/:id" element={<CategoriesProd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;