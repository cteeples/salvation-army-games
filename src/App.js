import './App.css';
import Signup from "./components/Signup"
import { Container, Navbar } from 'react-bootstrap'
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard/Dashboard"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    //
    <div className="main">
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute path="/dashboard" component={Dashboard}/>
              <Route path="/signup" component={Signup}/>
              <Route exact path="/" component={Login}/>
              <Route path="/login" component={Login}/>
              <Route path="/forgot-password" component={ForgotPassword}/>
            </Switch>
          </AuthProvider>
        </Router>
    </div>
  );
}

export default App;
