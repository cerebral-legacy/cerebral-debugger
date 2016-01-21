require('./styles.css');
var ReactDOM = require('react-dom');
var React = require('react');
var ToolbarComponent = require('./toolbar');
var SignalComponent = require('./signal');
var SignalsComponent = require('./signals');
var connector = require('connector');
var createSignalsStructure = require('./createSignalsStructure');

var DOM = React.DOM;

var debuggerStyle = {
  fontFamily: 'Consolas, Verdana',
  fontSize: '14px',
  fontWeight: 'normal',
  backgroundColor: '#FFF',
  color: '#666',
  overflowY: 'auto',
  overflowX: 'hidden',
  boxSizing: 'border-box',
  height: '100%'
};

var DebuggerComponent = React.createClass({
  getInitialState: function () {
    return {
      currentSignalIndex: [-1, -1],
      signals: [],
      computedPaths: [],
      willStoreState: false,
      willKeepState: false,
      isExecutingAsync: false,
      disableDebugger: false
    };
  },
  update: function (state) {
    state.signals = createSignalsStructure(state.signals || []);

    if (!state.signals.length) {
      state.currentSignalIndex = [-1, -1];
    } else if (
      !this.state.signals.length ||
      this.state.currentSignalIndex[0] > 0 ||
      state.currentSignalIndex === this.state.signals.length - 1
    ) {
      state.currentSignalIndex = [state.signals.length - state.currentSignalIndex - 1, 0];
    } else {
      state.currentSignalIndex = this.state.currentSignalIndex;
    }

    this.setState(state);
  },
  componentDidMount: function () {
    connector.onChange(this.update);
  },
  onSignalClick: function (columnIndex, signalIndex, event) {
    this.setState({
      currentSignalIndex: [columnIndex, signalIndex || 0]
    });
  },
  remember: function (event) {
    event.preventDefault();

    var src = 'var event = new CustomEvent("cerebral.dev.remember", {detail: ' + (this.state.signals.length - this.state.currentSignalIndex[0] - 1) + '});window.dispatchEvent(event);';
    chrome.devtools.inspectedWindow.eval(src, function(res, err) {
      if (err) {
        console.log(err);
      }
    }.bind(this));
  },
  render: function () {
    var currentSignalIndex = this.state.currentSignalIndex;
    var signals = this.state.signals;
    var signal = signals.length ? signals[currentSignalIndex[0]][currentSignalIndex[1]] : null;

    return DOM.div({
          style: debuggerStyle
        },
        React.createElement(ToolbarComponent, {
          willStoreState: this.state.willStoreState,
          willKeepState: this.state.willKeepState,
          currentSignalIndex: currentSignalIndex,
          totalSignals: signals.length,
          computedPaths: this.state.computedPaths || [],
          isExecutingAsync: this.state.isExecutingAsync,
          isDisabled: this.state.disableDebugger,
          isRemembering: this.state.isRemembering,
          remember: this.remember
        }),
        DOM.div({
          style: {
            display: 'flex',
            alignItems: 'stretch',
            height: '100%',
            overflow: 'hidden'
          }
        },
          React.createElement(SignalsComponent, {
            signals: this.state.signals,
            currentSignalIndex: currentSignalIndex,
            onSignalClick: this.onSignalClick,
            onDoubleClick: this.remember
          }),
          signal ? React.createElement(SignalComponent, {
            key: currentSignalIndex,
            signal: signal,
            isExecutingAsync: this.state.isExecutingAsync
          }) : DOM.span()
        )
      );
  }
});

module.exports = {
  render: function () {
    ReactDOM.render(React.createElement(DebuggerComponent), document.querySelector('#root'));
  }
};
