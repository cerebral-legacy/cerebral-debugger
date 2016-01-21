let onChangeCallback;
let hasInitialized = false;
let initialMessage;
let currentVersion = null;

const connector = {
  onChange(cb) {
    onChangeCallback = cb;
    cb(initialMessage);
    hasInitialized = true;
  },
  connect(initCallback) {
    const port = chrome.extension.connect({
        name: "Cerebral"
    });

    // Listen to messages from the background page
    port.onMessage.addListener((message) => {
      message = JSON.parse(message);

      var init = function () {
        initialMessage = message;
        currentVersion = initialMessage.version || 'v1';
        initCallback(currentVersion);
      };

      if (hasInitialized && message.version && message.version !== currentVersion) {
        init();
      } else if (hasInitialized) {
        onChangeCallback(message);
      } else {
        init();
      }
    });

    const src = 'var event = new Event("cerebral.dev.requestUpdate");window.dispatchEvent(event);';
    chrome.devtools.inspectedWindow.eval(src, function(res, err) {
      if (err) {
        console.log(err);
      }
    });
  }
};

export default connector;
