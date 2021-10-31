import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Delivery from './pages/Delivery/Delivery';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import MyOrders from './pages/MyOrders/MyOrders';
import AboutUs from './pages/AboutUs/AboutUs';
import Reviews from './pages/Reviews/Reviews';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AddService from './pages/AddService/AddService';
import ManageOrder from './pages/ManageOrder/ManageOrder';


function App() {
  return (
    <div className="App">
     <AuthProvider>
         <BrowserRouter>
           <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/deliveries">
            <Delivery></Delivery>
          </Route>

          <PrivateRoute exact path="/myOrders/:serveKey">
            <MyOrders></MyOrders>
          </PrivateRoute>

          <PrivateRoute path="/manageOrder">
            <ManageOrder></ManageOrder>
          </PrivateRoute>

          <Route path="/addService">
            <AddService></AddService>
          </Route>

          <Route path="/aboutUs">
            <AboutUs></AboutUs>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/reviews">
            <Reviews></Reviews>
          </PrivateRoute>

         
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
