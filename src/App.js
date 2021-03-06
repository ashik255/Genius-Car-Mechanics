import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Booking from './Pages/Home/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Home/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
        <Route path='/booking/:serviceId'>
     <Booking></Booking>
        </Route>
        <Route path ='*'>
         <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
