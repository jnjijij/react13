// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';
import MovieSpecial from './MovieSpecial';
import MovieSpecial2 from './MovieSpecial2';
import MovieSpecial3 from './MovieSpecial3';
import MovieSpecial4 from './MovieSpecial4'; // Import the new component
import MovieSpecial5 from './MovieSpecial5'; // Import the new component

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={MoviesList} />
          <Route path="/movies/:movieId" component={MovieDetail} />
          <Route path="/movies/special" component={MovieSpecial} />
          <Route path="/movies/special2" component={MovieSpecial2} />
          <Route path="/movies/special3" component={MovieSpecial3} />
          <Route path="/movies/special4" component={MovieSpecial4} />
          <Route path="/movies/special5" component={MovieSpecial5} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
