// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services/Services';
import Home from './components/Home/Home';

function App() {
  return (
    <>
     <Router>
       <Routes>
          <Route path='/home' element={<Home></Home>}>
          </Route>
          <Route path='/services' element={<Services></Services>}>
          </Route>
       </Routes>
     </Router>
    </>
  );
}

export default App;
