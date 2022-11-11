import './App.css';
import { Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import SeamlessArt from './components/SeamlessArt';
import Home from './components/Home';
import Checkout from './components/Checkout';
import ProductDetails from './components/ProductDetails';
import Account from './components/Account';
import Orders from './components/Orders';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">

        <Sidebar></Sidebar>

        <div className="col-lg p-0 min-vh-100">
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<SeamlessArt/>} exact></Route>
            <Route path="/home" element={<Home/>} exact></Route>
            <Route path="/checkout" element={<Checkout/>} exact></Route>
            <Route path="/details/:id" element={<ProductDetails/>} exact></Route>
            <Route path="/account" element={<Account/>} exact></Route>
            <Route path="/orders" element={<Orders/>} exact></Route>
          </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;
