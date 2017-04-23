import React from 'react';
import ToHome from 'components/ui/ToHome';
import Text from 'components/elements/form/Text';
import TextArea from 'components/elements/form/TextArea';
import ChangeState from 'helpers/form/newValue';
import request from 'superagent';
import baseUrl from 'components/const/StaticData';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setError = this.setError.bind(this);
    this.setValue = this.setValue.bind(this);
    this.state = {
      form: {
        values: {
          fullName: '',
          email: '',
          message: ''
        },
        errors: {
          fullName: false,
          email: false,
          message: false
        }
      }
    };
  }

  onSubmit(e) {
    e.preventDefault();
    request
      .post(`${baseUrl}/contact`)
      .send(this.state.form.values)
      .end((err) =>
        err ? alert(err) : alert('sended!')
      );
  }

  setError(fieldName, value) {
    this.setState(
      ChangeState(this.state, ['form', 'errors', fieldName], value)
    );
  }

  setValue(fieldName, value) {
    this.setState(
      ChangeState(this.state, ['form', 'values', fieldName], value)
    );
  }

  onChange(fieldName) {
    return (e) => {
      this.setError(fieldName, false);
      switch (fieldName) {
        case 'email':
          if (e.target.value.indexOf('@') == -1)
            this.setError(fieldName, true);
          break;
        case 'fullName':
          if (e.target.value.length < 3)
            this.setError(fieldName, true);
          break;
        case 'message':
          if (e.target.value.length < 10)
            this.setError(fieldName, true);
          break;
      }
      return this.setValue(fieldName, e.target.value);
    };
  }

  render() {
    const { values: {fullName, email, message}, errors } = this.state.form;
    return (
      <div>
      <ToHome/>
      <form className="ui form" onSubmit={this.onSubmit}>
        <Text
          name="fullName"
          label="Full Name"
          value={fullName}
          error={errors.fullName}
          onChange={this.onChange('fullName')} />
        <Text
          name="email"
          label="Email"
          value={email}
          error={errors.email}
          onChange={this.onChange('email')} />
        <TextArea
          name="message"
          label="Message"
          value={message}
          error={errors.message}
          onChange={this.onChange('message')} />
          <input className="ui button primary" type="submit" value="Submit"/>
      </form>
      </div>
    );
  }

}

export default About;
