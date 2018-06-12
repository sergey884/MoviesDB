import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './containers/App';
import Search from './components/Search';
import NotFound from './components/NotFound';
import MovieDetails from './components/MovieDetails';
import configureStore from './store/configureStore';

const store = configureStore();

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store);

const rnd = (Component) => {
  render(
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Component} />
          <Route path="/film/:id" component={MovieDetails} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
};

rnd(App);


if (module.hot) {
  module.hot.accept('./containers/App', () => {
    console.log('rnd hot');
    rnd(App);
  });
}
