import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from  'react-router-dom';
import Landing from "../pages/landing/landing.page";

const Routes = () => {
    return (
        <Router>
          <Route exath path='/'><Landing /></Route>
        </Router>
    )
};

export default Routes;
