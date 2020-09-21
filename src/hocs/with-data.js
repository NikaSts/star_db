import React, { PureComponent } from 'react';
import Spinner from '../components/spinner';
import ErrorMessage from '../components/error-message';


const withData = (Component, getData) => {
  class WrapperWithData extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        isLoading: false,
        hasError: false,
      };

      this.updateData = this.updateData.bind(this);
      this.onDataLoaded = this.onDataLoaded.bind(this);
      this.onError = this.onError.bind(this);
    }

    componentDidMount() {
      this.updateData();
    }

    onError() {
      this.setState({
        isLoading: false,
        hasError: true,
      });
    }

    onDataLoaded(data) {
      this.setState({
        data,
        isLoading: false,
      });
    }

    updateData() {
      this.setState({
        isLoading: true,
      });
      getData()
        .then(this.onDataLoaded)
        .catch(this.onError);
    }

    render() {
      const { data, isLoading, hasError } = this.state;

      if (isLoading) {
        return <Spinner />;
      }

      if (hasError) {
        return <ErrorMessage />;
      }

      return <Component {...this.props} items={data} />;
    }
  }

  return WrapperWithData;
};

export default withData;
