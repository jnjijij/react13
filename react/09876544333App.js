// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';
import MovieSpecial from './MovieSpecial'; // Import the new component

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={MoviesList} />
          <Route path="/movies/:movieId" component={MovieDetail} />
          <Route path="/movies/special" component={MovieSpecial} /> {/* Add this route */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
