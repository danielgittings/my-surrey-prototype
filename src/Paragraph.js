import React from 'react';
import Loadable from 'react-loadable';

const loading = () => (
  <h3>...Loading</h3>
);

const LoadableBodyCopy = Loadable({
  loader: () => import('./BodyCopy'),
  loading: loading,
});

const LoadableImage = Loadable({
  loader: () => import('./Image'),
  loading: loading,
});

const LoadableGrid = Loadable({
  loader: () => import('./Grid'),
  loading: loading,
});

const LoadableEventsList = Loadable({
  loader: () => import('./EventsList'),
  loading: loading,
});

const PARAGRAPH_MAPPING = {
  body_copy: LoadableBodyCopy,
  image: LoadableImage,
  grid: LoadableGrid,
  events_list: LoadableEventsList
}

const Paragraph = ({ type, values }) => {
  const ParagraphComponent = PARAGRAPH_MAPPING[type];
  return <ParagraphComponent values={values} />;
}

export default Paragraph;
