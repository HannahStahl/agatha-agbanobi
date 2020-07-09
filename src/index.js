import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { BrowserRouter, withRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import RFP from './components/RFP';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import config from './config';

const Routes = ({ blogPosts }) => {
  const routes = [
    { path: '/', Component: Home },
    { path: '/about', Component: About },
    { path: '/services', Component: Services },
    { path: '/blog', Component: Blog, props: { blogPosts } },
    { path: '/contact', Component: Contact },
    { path: '/submit-rfp', Component: RFP },
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

const App = withRouter(() => {
  const [programs, setPrograms] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(`${config.apiURL}/publishedItems/${config.userID}`).then((res) => res.json()),
      fetch(`${config.apiURL}/itemsToPhotos/${config.userID}`).then((res) => res.json()),
      fetch(`${config.apiURL}/photos/${config.userID}`).then((res) => res.json()),
    ]).then((results) => {
      const [itemsList, programsToPhotos, photos] = results;
      itemsList.forEach((program, index) => {
        const programPhotoIds = programsToPhotos
          .filter((row) => row.itemId === program.itemId)
          .map((row) => row.photoId);
        itemsList[index].photos = photos.filter(
          (photo) => programPhotoIds.includes(photo.photoId),
        );
      });
      const programsList = itemsList.filter((itemInList) => itemInList.cmsPageConfigId === '1');
      const blogPostsList = itemsList.filter((itemInList) => itemInList.cmsPageConfigId === '3');
      setPrograms(programsList);
      setBlogPosts(blogPostsList);
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className={['/', '/services'].includes(window.location.pathname) ? undefined : 'page-content'}>
        <Routes programs={programs} blogPosts={blogPosts} />
      </div>
      <Footer />
    </>
  );
});

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
