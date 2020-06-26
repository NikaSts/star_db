import React, { Component } from 'react';
import './item-list.css';
import Spinner from '../spinner';
import ErrorMessage from '../error-message';


export default class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      itemList: [],
      loading: false,
      error: false,
    };

    this.updateList = this.updateList.bind(this);
    this.onListLoaded = this.onListLoaded.bind(this);
    this.onError = this.onError.bind(this);
  }

  componentDidMount() {
    this.updateList();
  }

  onError() {
    this.setState({
      loading: false,
      error: true,
    });
  }

  onListLoaded(itemList) {
    this.setState({
      itemList,
      loading: false,
    });
  }

  updateList() {
    const { getData } = this.props;
    getData()
      .then(this.onListLoaded)
      .catch(this.onError);
  }

  render() {
    const { onListItemClick, renderItem } = this.props;
    const { itemList, loading, error } = this.state;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const hasData = !(loading || error);
    return (
      <ul className="list-group">
        {errorMessage}
        {spinner}
        {hasData ? itemList.map((item) => {
          const { id } = item;
          const label = renderItem(item);
          return (
            <li
              className="list-group-item"
              key={id}>
              <button
                className="list-group-item list-group-item-action"
                type="button"
                onClick={() => onListItemClick(id)}
                onKeyPress={() => onListItemClick(id)}
                tabIndex="0">
                {label}
              </button>
            </li>
          );
        }) : null}
      </ul>
    );
  }
}
