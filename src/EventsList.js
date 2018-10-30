import React from 'react';
import { Query } from 'react-apollo';
import { Link } from '@reach/router';

import EVENTS_QUERY from './queries/EventsQuery';

const styles = {
  width: '1000px',
  margin: '0 auto',

  heading: {
    fontSize: '3rem',
    textAlign: 'center'
  },
}

const EventsList = () => {
  const tid = process.env.REACT_APP_HUB_TERM_ID;

  return (
    <Query query={EVENTS_QUERY} variables={{ tid }}>
      {({ loading, error, data }) => {

        if (loading) return (
          <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <p style={{ fontSize: '1rem'}}>Loading...</p>
          </div>
        );

        if (error) return <div>Error :(</div>;

        return (
          <div style={styles}>
            <h1 style={styles.heading}>Upcoming events</h1>
            <ul>
              {data.nodeQuery.events
                .map(event => <li><Link to={event.url.path}>{event.title}</Link></li>)
              }
            </ul>
          </div>
        )
      }}
    </Query>
  )
};

export default EventsList;
