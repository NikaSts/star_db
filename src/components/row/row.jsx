import React, { PureComponent } from 'react';

export default class Row extends PureComponent {
  render() {
    const { left, right } = this.props;
    return (
      <>
        <div className="row mb2">
          <div className="col-md-4">
            {left}
          </div>
          <div className="col-md-8">
            {right}
          </div>
        </div>
      </>
    );
  }
}
