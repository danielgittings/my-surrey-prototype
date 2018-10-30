import React from 'react';
import { Router } from "@reach/router";
import Loadable from 'react-loadable';

import Nav from './Nav';
import EventsList from './EventsList';
import Event from './Event';

import './App.css';

const loading = () => (
  // <div style={{ width: '1000px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
  //   <h3>...Loading</h3>
  // </div>
  <>
  </>
);

const NewsStory = () => (
  <h1>Here is my news story</h1>
);

const NewsList = () => (
  <h1>These are my news stories</h1>
);

const Page = Loadable({
  loader: () => import('./Page'),
  loading: loading,
});

const Home = Loadable({
  loader: () => import('./Home'),
  loading: loading,
});

const App = () => (
  <>
    <Router>
      <Nav path="*" />
    </Router>
    <Router>
      <Home path="/" />
      <Page path="/*" />
      <NewsList path="/news" />
      <NewsStory path="/news/:title" />
      <EventsList path="/events" />
      <Event path="/events/:title" />
    </Router>
  </>
)

export default App;
