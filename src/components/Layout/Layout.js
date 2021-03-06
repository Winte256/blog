/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.css';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import Navigation from '../Navigation';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <div className={s.layout}>
          <div className={s.layout__content}>
            <Header />
            {this.props.children}
            <Feedback />
            <Footer />
          </div>
          <div className={s.layout__sidebar}>
            <Navigation />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);
