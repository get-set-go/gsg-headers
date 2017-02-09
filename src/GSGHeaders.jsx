import '../node_modules/gsg-common-style/less/index.less';

import React from 'react';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class GSGHeaders extends React.Component {
  render() {
    return(
      <div className="page-header">
        {this.props.children}
      </div>
    );
  }
};
