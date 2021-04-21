import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Orders from './components/Dashboard/Orders/Orders';
import AddReviews from './components/Dashboard/AddReviews/AddReviews';
import Settings from './components/Dashboard/Settings/Settings';
import AddServices from './components/Dashboard/AddServices/AddServices';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import Checkout from './components/Checkout/Checkout';
import AllOrders from './components/Dashboard/AllOrders/AllOrders';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/dashboard/admin">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute path="/orders">
          <Orders></Orders>
        </PrivateRoute>
        <PrivateRoute path="/addReviews">
          <AddReviews></AddReviews>
        </PrivateRoute>
        <PrivateRoute path="/addServices">
          <AddServices></AddServices>
        </PrivateRoute>
        <PrivateRoute path="/settings">
          <Settings></Settings>
        </PrivateRoute>
        <PrivateRoute path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </PrivateRoute>
        <PrivateRoute path="/allOrders">
          <AllOrders></AllOrders>
        </PrivateRoute>
        <PrivateRoute path="/checkout/:pId">
          <Checkout></Checkout>
        </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider>
    
  );
}

export default App;
