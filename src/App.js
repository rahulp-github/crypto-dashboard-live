import './App.css';
import Home from './components/Home';
import Navbar from './components/NavBar';
import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Signup from './components/SignupPages/Signup';
import SignIn from './components/SignupPages/Signin';
import jwt from 'jsonwebtoken'
import History from './components/History';
import ProtectedRoute from './components/ProtectedRoute';

/*------------------------------------------------------------------------------------------------
                                        End OF Imports                                          
------------------------------------------------------------------------------------------------*/


function App() {

  let history = useHistory();

  // States
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [historyFilters, setHistoryFilters] = useState([]);

  // Check If Token is valid
  // If Token Valid -> isAuthenticated -> true
  // Else redirect to signin page
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const user = jwt.decode(token)
      if (!user) {
        localStorage.removeItem('token');
        history.push('/signin');

      } else {
        setIsAuthenticated(true);
      }
    }
  }, []);

  /*------------------------------------------------------------------------------------------------
                                        Routing                                         
  ------------------------------------------------------------------------------------------------*/

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/" render={(props) => <Home historyFilters={historyFilters} toggleHistory={toggleHistory} isAuthenticated={isAuthenticated} {...props} />}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/signin" render={(props) => <SignIn handleAuthentication={handleAuthentication} {...props} />}></Route>
        <ProtectedRoute path="/history" handleSearchAgain={handleSearchAgain} isAuthenticated={isAuthenticated} component={History}></ProtectedRoute>
      </Switch>
    </>
  );


  // Handling Authentication
  function handleAuthentication() {
    setIsAuthenticated(true);
  }

  // Handling Logout
  function handleLogout() {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  }

  // Handler when clicked on search again in History
  function handleSearchAgain(filters, idx) {
    setHistoryFilters(filters[idx].currency);
  }

  // Reset the History State
  function toggleHistory() {
    setHistoryFilters([]);
  }
}

export default App;
