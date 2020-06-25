import React, { Component } from 'react';
import './item-list.css';
import API from '../../api/api';
import Spinner from '../spinner';
import ErrorMessage from '../error-message';


export default class ItemList extends Component {
  constructor() {
    super();
    this.api = new API();
    this.state = {
      peopleList: [],
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

  onListLoaded(peopleList) {
    this.setState({
      peopleList,
      loading: false,
    });
  }

  updateList() {
    this.api
      .getAllPeople()
      .then(this.onListLoaded)
      .catch(this.onError);
  }

  render() {
    const { onListItemClick } = this.props;
    const { peopleList, loading, error } = this.state;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const hasData = !(loading || error);

    return (
      <ul className="list-group">
        {errorMessage}
        {spinner}
        {hasData ? peopleList.map(({ id, name }) => (
          <li
            className="list-group-item"
            key={id}>
            <button
              className="list-group-item list-group-item-action"
              type="button"
              onClick={() => onListItemClick(id)}
              onKeyPress={() => onListItemClick(id)}
              tabIndex="0">
              {name}
            </button>
          </li>
        )) : null}
      </ul>
    );
  }
}
