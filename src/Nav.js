import React from 'react';
import { Link } from "@reach/router"
import { Query } from 'react-apollo';

import MENU_QUERY from './queries/MenuQuery';

const Nav = (props) => (
  <Query query={MENU_QUERY}>
    {({ loading, error, data }) => {

      if (loading) return (
        <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <p style={{ fontSize: '1rem'}}>Loading...</p>
        </div>
      );

      if (error) return <div>Error :(</div>;

      // Get the menu items for this hub only
      let [ navLinks ] = data.menu.links
        .filter(hub => hub.url.path === `/${process.env.REACT_APP_HUB_NAME}`);

      let hubLinks;
      const exploded = props['*'].split('/')[0];

      if (exploded) {
        hubLinks = navLinks.links
          .filter(link => link.url.path === `/${process.env.REACT_APP_HUB_NAME}/${exploded}`);
      } else {
        hubLinks = navLinks.links;
      }

      return (
        <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '30px 0' }}>
          <ul style={{ width: '1000px', margin: '0 auto 0', display: 'inline-flex'}}>
            <Link to="/">{navLinks.label}</Link>
            {
              hubLinks.map(link =>
                  <li key={link.label} style={{ display: 'flex', flexDirection: 'column', padding: '0 20px'}}>
                    <Link to={link.url.path.replace(`/${process.env.REACT_APP_HUB_NAME}`, '')}>{link.label}</Link>
                    <br />
                    <br />
                    {link.links.length > 0 && exploded &&
                      <ul style={{ display: 'flex', listStyle: 'none'}}>
                        {
                          link.links
                          .map(sub => <li><Link style={{ padding: '0 20px' }} to={sub.url.path.replace(`/${process.env.REACT_APP_HUB_NAME}`, '')}>{sub.label}</Link></li>)
                        }
                      </ul>
                    }
                  </li>)
            }
          </ul>
        </nav>
      )
    }}
  </Query>
);

export default Nav;