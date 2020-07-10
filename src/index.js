import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { BrowserRouter, withRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const Routes = () => {
  const routes = [
    { path: '/', Component: Home },
  ];
  return (
    <>
      {routes.map(({ path, Component, props }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match !== null}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              <div className="page">
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Component {...props} match={match} />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </>
  );
};

const App = withRouter(() => (
  <>
    <NavBar />
    <div className={['/', '/services'].includes(window.location.pathname) ? undefined : 'page-content'}>
      <Routes />
    </div>
    <Footer />
  </>
));

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
