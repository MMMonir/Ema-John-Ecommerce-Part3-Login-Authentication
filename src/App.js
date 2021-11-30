import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRouter/PrivateRouter';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path='/'>
              <Shop />
            </Route>
            <Route path='/shop'>
              <Shop />
            </Route>
            <Route path='/review'>
              <OrderReview />
            </Route>
            <Route path='/inventory'>
              <Inventory />
            </Route>
            <PrivateRoute path='/placeorder'>
              <PlaceOrder />
            </PrivateRoute>
            <PrivateRoute path='/shipping'>
              <Shipping />
            </PrivateRoute>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
          </Switch>
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
