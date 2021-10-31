import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import PremiumServices from './components/PremiumServices/PremiumServices';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import AddAService from './components/AddAService/AddAService';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute exact path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <PrivateRoute path="/placeorder/:orderId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <PrivateRoute path="/addaservice">
              <AddAService></AddAService>
            </PrivateRoute>

            {/* <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>

            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute> */}

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/premiumservices">
              <PremiumServices></PremiumServices>
            </PrivateRoute>

            {/* <Route path="/booking/:serviceId">
              <Booking></Booking>
            </Route> */}

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
