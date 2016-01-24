import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';
import {
  isObject,
  isArray,
  isString,
  isBoolean,
  isNumber,
  isNull
} from 'common/utils';
import JSONInput from './JSONInput';
import connector from 'connector';

function renderType(value, hasNext, path) {
  if (isArray(value)) {
    return <ArrayValue value={value} hasNext={hasNext} path={path}/>;
  }
  if (isObject(value)) {
    return <ObjectValue value={value} hasNext={hasNext} path={path}/>;
  }

  return <Value value={value} hasNext={hasNext} path={path}/>;

}

class ObjectValue extends React.Component {
  static contextTypes = {
    options: React.PropTypes.object.isRequired
  }
  constructor(props, context) {
    super(props);
    this.state = {
      isCollapsed: Object.keys(props.value).length > 3 ? true : context.options.expanded ? false : true
    };
  }
  renderProperty(key, value, index, hasNext, path) {
    this.props.path.push(key);
    const property = (
      <div className={styles.objectProperty} key={index}>
        <div className={styles.objectPropertyKey}>{key}:</div>
        <div className={styles.objectPropertyValue}>{renderType(value, hasNext, path.slice())}</div>
      </div>
    );
    this.props.path.pop();
    return property;
  }
  render() {
    const {value, hasNext} = this.props;
    if (this.state.isCollapsed) {
      return (
        <div className={styles.object} onClick={() => this.setState({isCollapsed: false})}>
          <strong>{'{ '}</strong>{Object.keys(value).join(', ')}<strong>{' }'}</strong>
          {hasNext ? ',' : null}
        </div>
      );
    } else {
      const keys = Object.keys(value);
      return (
        <div className={styles.object}>
          <div onClick={() => this.setState({isCollapsed: true})}><strong>{'{ '}</strong></div>
          {keys.map((key, index) => this.renderProperty(key, value[key], index, index < keys.length - 1, this.props.path))}
          <div><strong>{' }'}</strong>{hasNext ? ',' : null}</div>
        </div>
      );
    }
  }
}

class ArrayValue extends React.Component {
  static contextTypes = {
    options: React.PropTypes.object.isRequired
  }
  constructor(props, context) {
    super(props);
    this.state = {
      isCollapsed: !context.options.expanded || props.value.length > 20 ? true : false
    };
  }
  renderItem(item, index, hasNext, path) {
    this.props.path.push(index);
    const arrayItem = (
      <div className={styles.arrayItem} key={index}>
        {renderType(item, hasNext, path.slice())}
      </div>
    );
    this.props.path.pop();
    return arrayItem;
  }
  render() {
    const {value, hasNext} = this.props;
    if (this.state.isCollapsed) {
      return (
        <div className={styles.array} onClick={() => this.setState({isCollapsed: false})}>
          <strong>{'[ '}</strong>{value.length}<strong>{' ]'}</strong>
          {hasNext ? ',' : null}
        </div>
      );
    } else {
      return (
        <div className={styles.array}>
          <div onClick={() => this.setState({isCollapsed: true})}><strong>{'[ '}</strong></div>
          {value.map((item, index) => this.renderItem(item, index, index < value.length - 1, this.props.path))}
          <div><strong>{' ]'}</strong>{hasNext ? ',' : null}</div>
        </div>
      );
    }
  }
}

@Cerebral()
class Value extends React.Component {
  static contextTypes = {
    options: React.PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      path: props.path.slice()
    };
  }
  onClick() {
    this.setState({
      isEditing: this.context.options.canEdit ? true : false
    });
  }
  onSubmit(value) {
    this.props.signals.debugger.modelChanged({
      path: this.state.path,
      value
    })
    this.setState({isEditing: false});
    connector.sendEvent('changeModel', {
      path: this.state.path,
      value: value
    });
  }
  renderValue(value, hasNext) {
    if (this.state.isEditing) {
      return (
        <JSONInput
          value={value}
          onBlur={() => this.setState({isEditing: false})}
          onSubmit={(value) => this.onSubmit(value)}/>
        );
    } else {
      return <div><span>{isString(value) ? '"' + value + '"' : String(value)}</span>{hasNext ? ',' : null}</div>;
    }
  }
  render() {
    let className = styles.string;
    if (isNumber(this.props.value)) className = styles.number;
    if (isBoolean(this.props.value)) className = styles.boolean;
    if (isNull(this.props.value)) className = styles.null;
    return (
      <div
        className={className}
        onClick={() => this.onClick()}>
        {this.renderValue(this.props.value, this.props.hasNext)}
      </div>
    );
  }
}

class Inspector extends React.Component {
  static childContextTypes = {
    options: React.PropTypes.object.isRequired
  }
  getChildContext() {
    return {
      options: {
        expanded: this.props.expanded || false,
        canEdit: this.props.canEdit || false
      }
    }
  }
  render() {
    return renderType(this.props.value, false, []);
  }
}

export default Inspector;
