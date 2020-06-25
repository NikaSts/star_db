import React, { Component } from 'react';
import API from '../../api/api';
import Spinner from '../spinner';
import ErrorMessage from '../error-message';
import { ImageEndPoint } from '../../utils';
import './person-details.css';


export default class PersonDetails extends Component {
  constructor() {
    super();
    this.state = {
      person: -1,
      loading: false,
      error: false,
    };
    this.api = new API();

    this.updatePerson = this.updatePerson.bind(this);
    this.onPersonLoaded = this.onPersonLoaded.bind(this);
    this.onError = this.onError.bind(this);
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    const { person } = this.props;
    if (person !== prevProps.person) {
      this.updatePerson();
    }
  }

  onError() {
    this.setState({
      loading: false,
      error: true,
    });
  }

  onPersonLoaded(person) {
    this.setState({
      person,
      loading: false,
    });
  }

  updatePerson() {
    const { person } = this.props;
    if (person < 0) {
      return;
    }
    this.api
      .getPersonById(person)
      .then(this.onPersonLoaded)
      .catch(this.onError);
  }

  render() {
    const { person, loading, error } = this.state;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const hasData = !(loading || error);
    let content = hasData ? <Person person={person} /> : null;
    if (person < 0) {
      content = <p>Select a person from list</p>;
    }
    return (
      <section className="person-details d-flex">
        {errorMessage}
        {spinner}
        {content}
      </section>
    );
  }
}

const Person = ({ person }) => {
  const {
    id, name, gender, birthYear,
  } = person;

  return (
    <>
      <div>
        <h3>{name}</h3>
        <table>
          <tbody>
            <tr>
              <td className="term">Name</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td className="term">Gender</td>
              <td>{gender}</td>
            </tr>
            <tr>
              <td className="term">Birth Year</td>
              <td>{birthYear}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <img src={`${ImageEndPoint.PERSON}${id}.jpg`} alt={`Planet ${name}`} />
    </>
  );
};
