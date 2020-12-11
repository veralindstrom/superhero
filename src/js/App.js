import React from 'react';
import LoginModel from './LoginModel';
import '../css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../context/Auth';
import PrivateRoute from './PrivateRoute';
import Home from '../presenters/home';
import { Header } from './Header';
import YourScores from '../presenters/YourScores';
import AllScores from '../presenters/AllScores';
import PageNotFound from './PageNotFound';
import Item from '../presenters/BuildQuiz';

function App() {
 
  return (
    <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/signup" component={LoginModel}/>
          <PrivateRoute exact path="/" component={Home}/>
          <PrivateRoute exact path="/quizitem/:id" component={Item}/>
          <PrivateRoute exact path="/scoreboard" component={AllScores}/>
          <PrivateRoute exact path="/myscores" component={YourScores}/>
          <Route path="*" component={PageNotFound}/>
        </Switch>
      </Router>
    </AuthProvider>
    
  );
};

export default App;