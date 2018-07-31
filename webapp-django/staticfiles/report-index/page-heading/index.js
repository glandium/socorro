/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import PropTypes from 'prop-types';
import React from 'react';

export default class PageHeading extends React.Component {
  static propTypes = {
    product: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    signature: PropTypes.string.isRequired,
  };

  render() {
    const { product, version, signature } = this.props;
    return (
      <div className="page-heading">
        <h2>
          {product} {version} Crash Report [@ {signature} ]
        </h2>
      </div>
    );
  }
}
