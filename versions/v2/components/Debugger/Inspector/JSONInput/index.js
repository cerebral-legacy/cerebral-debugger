import React from 'react';
import styles from './styles.css';
import {
  isObject,
  isArray
} from 'common/utils';

class JSONInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: true,
      value: this.props.value,
      initialValue: this.props.value
    };
  }
  componentDidMount(prevProps, prevState) {
    this.refs.input.select();
  }
  onChange(value) {
    let isValid = true;
    var parsedValue = value;

    try {
      parsedValue = JSON.parse(value);
    } catch (e) {
      isValid = value.length ? true : false;
    }

    if (isObject(parsedValue) || isArray(parsedValue)) {
      return;
    } else {
      value = parsedValue;
    }

    this.setState({
      value,
      isValid
    });
  }
  onBlur() {
    this.setState({
      value: this.state.initialValue
    });
    this.props.onBlur();
  }
  render() {
    return (
      <form onSubmit={(event) => {event.preventDefault();this.props.onSubmit(this.state.value)}}>
        <input
          ref="input"
          type="Text"
          autoFocus
          onKeyDown={(event) => {event.keyCode === 27 && this.onBlur()}}
          className={this.state.isValid ? styles.input : styles.invalidInput}
          value={String(this.state.value)}
          onChange={(event) => this.onChange(event.target.value)}
          onBlur={() => this.onBlur()}/>
      </form>
    );
  }
}

 export default JSONInput;
