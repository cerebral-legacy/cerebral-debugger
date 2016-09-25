let onChangeCallback;
let hasInitialized = false;

const connector = {
  onChange(cb) {
    onChangeCallback = cb;
  },
  sendEvent(eventName, payload) {
    if (payload === undefined) {
      var src = 'var event = new Event("cerebral2.debugger.' + eventName + '");window.dispatchEvent(event);';
      chrome.devtools.inspectedWindow.eval(src, function(res, err) {
        if (err) {
          console.log(err);
        }
      });
    } else {
      var detail = {
        detail: payload
      };
      var src = 'var event = new CustomEvent("cerebral2.debugger.' + eventName + '", ' + JSON.stringify(detail) + ');window.dispatchEvent(event);';
      chrome.devtools.inspectedWindow.eval(src, function(res, err) {
        if (err) {
          console.log(err);
        }
      });
    }
  },
  connect(initCallback) {
    const port = chrome.extension.connect({
        name: "Cerebral2"
    });

    // Listen to messages from the background page
    port.onMessage.addListener((message) => {
      message = JSON.parse(message);

      if (message.type === 'ping') {
        connector.sendEvent('pong');
        return;
      }

      if (hasInitialized) {
        onChangeCallback(message);
      } else if (message.type === 'init') {
        hasInitialized = true;
        initCallback(message.version || 'v1', () => {
          onChangeCallback(message);
        });
      }
    });

    connector.sendEvent('ping');
  }
};

export default connector;
