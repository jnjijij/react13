// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/movies/:movieId">
              <MovieDetail />
            </Route>
            <Route path="/">
              <MoviesList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
