import React, { useState, useEffect } from 'react';
import Spinner from '../components/spinner';
import ErrorMessage from '../components/error-message';


const withData = (Component, getData) => {
  const WrapperWithData = (props) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const onDataLoaded = (loadedData) => {
      setData(loadedData);
      setLoading(false);
    };

    const onError = () => {
      setLoading(false);
      setError(true);
    };

    const loadData = () => {
      setLoading(true);
      getData()
        .then(onDataLoaded)
        .catch(onError);
    };

    useEffect(() => {
      loadData();
    }, []);

    return (
      <>
        {error ? <ErrorMessage /> : null}
        {loading ? <Spinner /> : null}
        {!(loading || error) ? <Component {...props} items={data} /> : null}
      </>
    );
  };
  return WrapperWithData;
};

export default withData;
