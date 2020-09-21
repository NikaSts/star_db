import React, { PureComponent } from 'react';

const withActiveItem = (Component) => {
  class Wrapper extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: null,
      };
      this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(activeItem) {
      this.setState({ activeItem });
    }

    render() {
      const { activeItem } = this.state;
      return (
        <Component
          {...this.props}
          activeItem={activeItem}
          onItemClick={this.handleItemClick}
      />
      );
    }
  }
  return Wrapper;
};

export default withActiveItem;
