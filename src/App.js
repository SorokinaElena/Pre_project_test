import './App.css';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<MainPage />}/>
                <Route path='categories/:category' element={<CategoryPage />}/>
                <Route path='products/:id' element={<ProductPage />}/>
                <Route path='cart' element={<CartPage />}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
