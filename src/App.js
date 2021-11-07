// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services/Services';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Booking from './components/Booking/Booking/Booking';

function App() {
  return (
    <>
     <Router>
       <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path="/booking/:serviceId" element={<Booking></Booking>} />
          <Route path="*" element={<NotFound />} />
       </Routes>
     </Router>
    </>
  );
}

export default App;
