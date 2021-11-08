// import logo from './logo.svg';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services/Services';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Booking from './components/Booking/Booking/Booking';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Confirm from './components/Confirm/Confirm';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>    
    <AuthProvider>
      <Router>
        <Switch>
            <Route exact path='/'>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path='/home'>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path='/services'>
              <Header></Header>
              <Services></Services>
            </Route>
            <PrivateRoute path='/contact'>
              <Header></Header>
              <Contact></Contact>
              <Footer></Footer>
            </PrivateRoute>
            <Route path='/login' >
            <Login></Login>
            </Route>
            <Route path='/register'>
            <Header></Header>
            <Register></Register>
            </Route>
            <PrivateRoute path="/booking/:serviceId"> 
            <Header></Header>
            <Booking></Booking>
            </PrivateRoute> 
            <Route path='/confirm'>
            <Header></Header>
            <Confirm></Confirm>
            </Route>
            <Route path="*">
            <NotFound></NotFound>
            </Route>
        </Switch>
      </Router>
     </AuthProvider>

    </>
  );
}

export default App;
