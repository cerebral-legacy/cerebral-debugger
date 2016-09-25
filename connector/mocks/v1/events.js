module.exports = [{
  "name": "signalWoop",
  "executionId": 5,
  "functionIndex": 0,
  "staticTree": [{
    name: "funcA",
    functionIndex: 0,
    outputs: {
      success: [{
        name: "funcB",
        functionIndex: 1,
        outputs: {
          success: [{
            name: "funcD",
            functionIndex: 3
          }],
          error: []
        }
      }],
      error: [{
        name: "funcC",
        functionIndex: 2
      }]
    }
  }],
  "payload": {"foo": "bip bap"},
  "datetime": 13503150913508,
  "data": null
}, {
  "name": "signalWoop",
  "executionId": 5,
  "functionIndex": 1,
  "payload": {"foo": "bip bap"},
  "datetime": 13503150914508,
  "data": {
    type: 'mutation',
    method: 'set',
    args: ['foo', 'bar2']
  }
}]
