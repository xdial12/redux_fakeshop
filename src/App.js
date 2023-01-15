import './App.css';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Header from './containers/Header.js';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';


function App() {
  return (
   <div className="App">
    <Router>
      <Header />
      <Routes> 
       <Route path= "/" element= { <ProductListing/> } />
       <Route path="/product/:productId"  element={< ProductDetail/> } />
       <Route> 404 Not Found! </Route>
      </Routes> 
    </Router>
   </div>
  );
}

export default App;