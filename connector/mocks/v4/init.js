module.exports = {
  "type": "init",
  "app": "1234",
  "data": {
    "showRenderOverlays": false,
    "disableDebugger": false,
    "isExecutingAsync": false,
    "initialModel": {
      version: 'APP 1',
      items: [],
      newItemTitle: ''
    },
    "signals":[
  {
    "name": "newItemTitleChanged",
    "start": 1468662315903,
    "isSync": true,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "operators.copy(\"input:title\", \"state:newItemTitle\")",
        "options": {},
        "duration": 4,
        "isAsync": false,
        "isExecuting": false,
        "hasExecuted": true,
        "path": [
          0
        ],
        "outputs": null,
        "actionIndex": 0,
        "serviceCalls": [],
        "input": {
          "title": "h"
        },
        "mutations": [
          {
            "datetime": 1468662315907,
            "name": "set",
            "path": [
              "newItemTitle"
            ],
            "args": [
              "h"
            ]
          }
        ]
      }
    ],
    "duration": 0,
    "signalStoreRef": "e73a1d8b-0f9d-4145-a0d8-7776b0a185c4",
    "payload": {
      "title": "h"
    }
  },
  {
    "name": "newItemTitleChanged",
    "start": 1468662316820,
    "isSync": true,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "operators.copy(\"input:title\", \"state:newItemTitle\")",
        "options": {},
        "duration": 0,
        "isAsync": false,
        "isExecuting": false,
        "hasExecuted": true,
        "path": [
          0
        ],
        "outputs": null,
        "actionIndex": 0,
        "serviceCalls": [],
        "input": {
          "title": "he"
        },
        "mutations": [
          {
            "datetime": 1468662316820,
            "name": "set",
            "path": [
              "newItemTitle"
            ],
            "args": [
              "he"
            ]
          }
        ]
      }
    ],
    "duration": 0,
    "signalStoreRef": "8ef12b70-4212-4d53-b8b0-9cc8013c73b3",
    "payload": {
      "title": "he"
    }
  },
  {
    "name": "newItemTitleChanged",
    "start": 1468662316885,
    "isSync": true,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "operators.copy(\"input:title\", \"state:newItemTitle\")",
        "options": {},
        "duration": 0,
        "isAsync": false,
        "isExecuting": false,
        "hasExecuted": true,
        "path": [
          0
        ],
        "outputs": null,
        "actionIndex": 0,
        "serviceCalls": [],
        "input": {
          "title": "hey"
        },
        "mutations": [
          {
            "datetime": 1468662316885,
            "name": "set",
            "path": [
              "newItemTitle"
            ],
            "args": [
              "hey"
            ]
          }
        ]
      }
    ],
    "duration": 0,
    "signalStoreRef": "bf847ee6-a937-467d-8b09-4213c96b1e89",
    "payload": {
      "title": "hey"
    }
  },
  {
    "name": "newItemTitleSubmitted",
    "start": 1468662316980,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "addItem",
        "options": {},
        "duration": 0,
        "isAsync": false,
        "isExecuting": false,
        "hasExecuted": true,
        "path": [
          0
        ],
        "outputs": null,
        "actionIndex": 0,
        "serviceCalls": [],
        "mutations": [
          {
            "datetime": 1468662316981,
            "name": "unshift",
            "path": [
              "items"
            ],
            "args": [
              "hey"
            ]
          }
        ]
      },
      {
        "name": "operators.set(\"state:newItemTitle\", \"\")",
        "options": {},
        "duration": 1,
        "isAsync": false,
        "isExecuting": false,
        "hasExecuted": true,
        "path": [
          1
        ],
        "outputs": null,
        "actionIndex": 1,
        "serviceCalls": [],
        "input": {},
        "mutations": [
          {
            "datetime": 1468662316981,
            "name": "set",
            "path": [
              "newItemTitle"
            ],
            "args": [
              ""
            ]
          }
        ]
      }
    ],
    "duration": 0,
    "signalStoreRef": "603362c9-8076-4248-956a-9e94a259ce98",
    "payload": {}
  },
  {
    "name": "newItemTitleChanged",
    "start": 1468662317524,
    "isSync": true,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "operators.copy(\"input:title\", \"state:newItemTitle\")",
        "options": {},
        "duration": 0,
        "isAsync": false,
        "isExecuting": false,
        "hasExecuted": true,
        "path": [
          0
        ],
        "outputs": null,
        "actionIndex": 0,
        "serviceCalls": [],
        "input": {
          "title": "h"
        },
        "mutations": [
          {
            "datetime": 1468662317524,
            "name": "set",
            "path": [
              "newItemTitle"
            ],
            "args": [
              "h"
            ]
          }
        ]
      }
    ],
    "duration": 0,
    "signalStoreRef": "10d16d5a-296a-40db-8104-2f856b83fd93",
    "payload": {
      "title": "h"
    }
  },
  {
    "name": "newItemTitleChanged",
    "start": 1468662317620,
    "isSync": true,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "operators.copy(\"input:title\", \"state:newItemTitle\")",
        "options": {},
        "duration": 0,
        "isAsync": false,
        "isExecuting": false,
        "hasExecuted": true,
        "path": [
          0
        ],
        "outputs": null,
        "actionIndex": 0,
        "serviceCalls": [],
        "input": {
          "title": "ha"
        },
        "mutations": [
          {
            "datetime": 1468662317620,
            "name": "set",
            "path": [
              "newItemTitle"
            ],
            "args": [
              "ha"
            ]
          }
        ]
      }
    ],
    "duration": 0,
    "signalStoreRef": "ff76c173-8156-4d24-8ca3-33e89aafa867",
    "payload": {
      "title": "ha"
    }
  },
  {
    "name": "newItemTitleChanged",
    "start": 1468662317763,
    "isSync": true,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "operators.copy(\"input:title\", \"state:newItemTitle\")",
        "options": {},
        "duration": 1,
        "isAsync": false,
        "isExecuting": false,
        "hasExecuted": true,
        "path": [
          0
        ],
        "outputs": null,
        "actionIndex": 0,
        "serviceCalls": [],
        "input": {
          "title": "hap"
        },
        "mutations": [
          {
            "datetime": 1468662317764,
            "name": "set",
            "path": [
              "newItemTitle"
            ],
            "args": [
              "hap"
            ]
          }
        ]
      }
    ],
    "duration": 0,
    "signalStoreRef": "0a415a97-aefc-4fd8-9b90-2cc6152fcf07",
    "payload": {
      "title": "hap"
    }
  }
]  }
}
