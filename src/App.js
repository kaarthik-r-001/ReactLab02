import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Services from './components/Services';
import Products from './components/Products';
import CustomerCare from './components/CustomerCare';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Services/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/customer-care' element={<CustomerCare/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
