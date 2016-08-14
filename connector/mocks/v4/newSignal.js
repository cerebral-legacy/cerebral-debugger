module.exports = {
	"type": "signals",
	"app": "1234",
	"version": "v3",
	"data": {
		"signals": [
  {
    "name": "newItemTitleChanged",
    "start": 1468620188082,
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
    "signalStoreRef": "62b06ecb-bf54-456c-bf60-cba3fd88b0d4",
    "payload": {
      "title": "h"
    }
  },
  {
    "name": "newItemTitleChanged",
    "start": 1468620188232,
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
    "signalStoreRef": "1efa16f9-09b7-4750-a1ad-37166252d733",
    "payload": {
      "title": "he"
    }
  },
  {
    "name": "newItemTitleChanged",
    "start": 1468620188287,
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
          "title": "hey"
        },
        "mutations": [
          {
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
    "signalStoreRef": "4e76cf82-210e-4316-845b-56d77eeb8d47",
    "payload": {
      "title": "hey"
    }
  },
  {
    "name": "newItemTitleSubmitted",
    "start": 1468620188599,
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
    "signalStoreRef": "10cc28a6-9aaf-47f6-913f-c0ba4d78b967",
    "payload": {}
  },
  {
    "name": "newItemTitleChanged",
    "start": 1468620189871,
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
          "title": "h"
        },
        "mutations": [
          {
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
    "signalStoreRef": "0f691047-95bb-4ca6-9ab5-9ccf94593930",
    "payload": {
      "title": "h"
    }
  },
  {
    "name": "newItemTitleChanged",
    "start": 1468620190088,
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
    "signalStoreRef": "38774b95-d40b-453e-a3c0-02adb8fd8d86",
    "payload": {
      "title": "he"
    }
  },
  {
    "name": "newItemTitleChanged",
    "start": 1468620190159,
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
          "title": "hey"
        },
        "mutations": [
          {
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
    "signalStoreRef": "1d66a88b-9a14-44be-9bec-36be8c2b81e3",
    "payload": {
      "title": "hey"
    }
  }
]	}
}
