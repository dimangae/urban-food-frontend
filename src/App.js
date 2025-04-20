
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appbar from './components/Appbar';
import Products from './components/Products';
import Updateproducts from './components/Updateproducts';
import Deleteproducts from './components/Deleteproducts';
import Updatesuppliers from './components/Updatesuppliers';
import Deletesuppliers from './components/Deletesuppliers';
import Customers from './components/Customers';
import Suppliers from './components/Suppliers';
import Updatecustomers from './components/Updatecustomers';
import Deletecustomers from './components/Deletecustomers';
import Orders from './components/Orders';
import Updateorders from './components/Updateorders';
import Deleteorders from './components/Deleteorders';
import Deldrivers from './components/Deldrivers';
import Deletedeldrivers from './components/Deletedeldrivers';
import Updatedeldrivers from './components/Updatedeldrivers';
import Payments from './components/Payments';
import Updatepayments from './components/Updatepayments';
import Deletepayments from './components/Deletepayments';
import Reviews from './components/Reviews';
import Deletereviews from './components/Deletereviews';
import Carts from './components/Carts';
import Dashboard from './components/Dashboard';
import Customersdash from './components/Customersdash';
import Productsdash from './components/Productsdash';
import Suppliersdash from './components/Suppliersdash';
import Deldriversdash  from './components/Deldriversdash';
import Ordersdash  from './components/Ordersdash';
import Paymentsdash from './components/Paymentsdash';
import Reviewsdash from './components/Reviewsdash';
import Cartsdash from './components/Cartsdash';




/*function App() {
  return (
    <div className="App">
      <Appbar/>
      <Dashboard/>
      
    </div>
  );
}

export default App;*/


function App() {
  return (
    <Router>
       <Appbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        
        <Route path="/cus" element={<Customersdash />} />
        <Route path="/pro" element={<Productsdash />} />
        <Route path="/sup" element={<Suppliersdash />} />
        <Route path="/deld" element={<Deldriversdash />} />
        <Route path="/ord" element={<Ordersdash />} />
        <Route path="/pay" element={<Paymentsdash />} />
        <Route path="/rev" element={<Reviewsdash />} />
        <Route path="/car" element={<Cartsdash />} />
        <Route path="/ViewCart" element={<Carts/>} />
        <Route path="/Addcustomers" element={<Customers/>} />
        <Route path="/Updatecustomers" element={<Updatecustomers />} />
        <Route path="/Deletecustomers" element={<Deletecustomers />} />
        <Route path="/Suppliers" element={<Suppliers />} />
        <Route path="/Updatesuppliers" element={<Updatesuppliers />} />
        <Route path="/Deletesuppliers" element={<Deletesuppliers />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Updateproducts" element={<Updateproducts />} />
        <Route path="/Deleteproducts" element={<Deleteproducts />} />
        <Route path="/Deldrivers" element={<Deldrivers />} />
        <Route path="/Updatedeldrivers" element={<Updatedeldrivers />} />
        <Route path="/Deletedeldrivers" element={<Deletedeldrivers />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Updateorders" element={<Updateorders />} />
        <Route path="/Deleteorders" element={<Deleteorders />} />
        <Route path="/Payments" element={<Payments />} />
        <Route path="/Updatepayments" element={<Updatepayments />} />
        <Route path="/Deletepayments" element={<Deletepayments />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/Deletereviews" element={<Deletereviews />} />
      </Routes>
    </Router>
  );
}

export default App;

