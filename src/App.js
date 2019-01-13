import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './components/ErrorHandlers/MissingPageError';
import ArticleContainerComponent from './components/Articles/ArticlesContainer';
import RegistrationPageComponent from './components/Authentication/Registration/RegistrationPage';
import Profile from './containers/ProfileContainer';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            {/* exact looks for the exact path,
            it prevents the home page from being rendered in all the pages */}
            <Route path="/" component={ArticleContainerComponent} exact />
            <Route path="/articles" component={ArticleContainerComponent} exact />
            <Route path="/register" component={RegistrationPageComponent} exact />
            <Route path="/profile" exact component={Profile} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
