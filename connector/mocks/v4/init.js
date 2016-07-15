module.exports = {
  "type": "init",
  "app": "1234",
  "data": {
    "showRenderOverlays": false,
    "disableDebugger": false,
    "isExecutingAsync": false,
    "initialModel": {
      version: 'APP 1'
    },
    "signals":[
  {
    "name": "app.footer.filterClicked",
    "start": 1468582961565,
    "isSync": true,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "setFilter",
        "options": {},
        "duration": 3,
        "isAsync": false,
        "isExecuting": false,
        "hasExecuted": true,
        "path": [
          0
        ],
        "outputs": null,
        "actionIndex": 0,
        "mutations": [
          {
            "name": "set",
            "path": [
              "app",
              "footer",
              "filter"
            ],
            "args": [
              "all"
            ]
          }
        ],
        "serviceCalls": [],
        "input": {}
      }
    ],
    "duration": 0,
    "signalStoreRef": "f90b4f1a-5fa2-4092-a775-bf8a4d752a55",
    "payload": {},
    "isRouted": true
  },
  {
    "name": "app.new.titleChanged",
    "start": 1468582963934,
    "isSync": true,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "setTitle",
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
        "mutations": [
          {
            "name": "set",
            "path": [
              "app",
              "new",
              "title"
            ],
            "args": [
              "h"
            ]
          }
        ],
        "serviceCalls": [],
        "input": {
          "title": "h"
        }
      }
    ],
    "duration": 0,
    "signalStoreRef": "7d916566-4188-4c9e-8378-b2db588b14f5",
    "payload": {
      "title": "h"
    }
  },
  {
    "name": "app.new.titleChanged",
    "start": 1468582964134,
    "isSync": true,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "setTitle",
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
        "mutations": [
          {
            "name": "set",
            "path": [
              "app",
              "new",
              "title"
            ],
            "args": [
              "he"
            ]
          }
        ],
        "serviceCalls": [],
        "input": {
          "title": "he"
        }
      }
    ],
    "duration": 0,
    "signalStoreRef": "4f007adf-4eb4-42d0-be0e-3a8c6a613954",
    "payload": {
      "title": "he"
    }
  },
  {
    "name": "app.new.titleChanged",
    "start": 1468582964181,
    "isSync": true,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "setTitle",
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
        "mutations": [
          {
            "name": "set",
            "path": [
              "app",
              "new",
              "title"
            ],
            "args": [
              "hey"
            ]
          }
        ],
        "serviceCalls": [],
        "input": {
          "title": "hey"
        }
      }
    ],
    "duration": 0,
    "signalStoreRef": "2a17455c-553e-4c58-96be-94270141fc07",
    "payload": {
      "title": "hey"
    }
  },
  {
    "name": "app.new.submitted",
    "start": 1468582964238,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "addTodo",
        "options": {},
        "duration": 2,
        "isAsync": false,
        "isExecuting": false,
        "hasExecuted": true,
        "path": [
          0
        ],
        "outputs": null,
        "actionIndex": 0,
        "mutations": [
          {
            "name": "set",
            "path": [
              "refs",
              "nextRef"
            ],
            "args": [
              1
            ]
          },
          {
            "name": "set",
            "path": [
              "app",
              "list",
              "todos",
              "0"
            ],
            "args": [
              {
                "$ref": 0,
                "$isSaving": true,
                "title": "hey",
                "completed": false
              }
            ]
          },
          {
            "name": "set",
            "path": [
              "app",
              "new",
              "title"
            ],
            "args": [
              ""
            ]
          }
        ],
        "serviceCalls": [
          {
            "name": "refs",
            "method": "next",
            "args": [
              {
                "app": {
                  "new": {
                    "title": ""
                  },
                  "list": {
                    "todos": {
                      "0": {
                        "$ref": 0,
                        "$isSaving": false,
                        "title": "hey",
                        "completed": false,
                        "id": 1468582966669
                      },
                      "1": {
                        "$ref": 1,
                        "$isSaving": false,
                        "title": "hopp",
                        "completed": false,
                        "id": 1468582967177
                      }
                    },
                    "isAllChecked": false,
                    "editedTodo": null,
                    "showCompleted": true,
                    "showNotCompleted": true
                  },
                  "footer": {
                    "filter": "all"
                  }
                },
                "refs": {
                  "nextRef": 2
                },
                "recorder": {
                  "isRecording": false,
                  "isPlaying": false,
                  "isPaused": false,
                  "hasRecorded": false,
                  "preventSignals": false
                }
              }
            ]
          }
        ],
        "output": {
          "ref": 0
        }
      },
      [
        {
          "name": "saveTodo",
          "options": {},
          "duration": 0,
          "isAsync": true,
          "isExecuting": false,
          "hasExecuted": true,
          "path": [
            1,
            0
          ],
          "outputs": {
            "success": [
              {
                "name": "updateTodo",
                "options": {},
                "duration": 1,
                "isAsync": false,
                "isExecuting": false,
                "hasExecuted": true,
                "path": [
                  1,
                  0,
                  "outputs",
                  "success",
                  0
                ],
                "outputs": null,
                "actionIndex": 2,
                "mutations": [
                  {
                    "name": "merge",
                    "path": [
                      "app",
                      "list",
                      "todos",
                      "0"
                    ],
                    "args": [
                      {
                        "id": 1468582966669,
                        "$isSaving": false
                      }
                    ]
                  }
                ],
                "serviceCalls": [],
                "input": {
                  "ref": 0,
                  "id": 1468582966669
                }
              }
            ],
            "error": [
              {
                "name": "setError",
                "options": {},
                "duration": 0,
                "isAsync": false,
                "isExecuting": false,
                "hasExecuted": false,
                "path": [
                  1,
                  0,
                  "outputs",
                  "error",
                  0
                ],
                "outputs": null,
                "actionIndex": 3
              }
            ]
          },
          "actionIndex": 1,
          "mutations": [],
          "serviceCalls": [],
          "input": {
            "ref": 0
          },
          "signals": [
            {
              "name": "app.new.titleChanged",
              "start": 1468582964486,
              "isSync": true,
              "isExecuting": false,
              "isPrevented": false,
              "branches": [
                {
                  "name": "setTitle",
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
                  "mutations": [
                    {
                      "name": "set",
                      "path": [
                        "app",
                        "new",
                        "title"
                      ],
                      "args": [
                        "h"
                      ]
                    }
                  ],
                  "serviceCalls": [],
                  "input": {
                    "title": "h"
                  }
                }
              ],
              "duration": 0,
              "signalStoreRef": "a7a08e0d-7479-4e50-91ba-f5b9ba239b1c",
              "payload": {
                "title": "h"
              }
            },
            {
              "name": "app.new.titleChanged",
              "start": 1468582964589,
              "isSync": true,
              "isExecuting": false,
              "isPrevented": false,
              "branches": [
                {
                  "name": "setTitle",
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
                  "mutations": [
                    {
                      "name": "set",
                      "path": [
                        "app",
                        "new",
                        "title"
                      ],
                      "args": [
                        "ho"
                      ]
                    }
                  ],
                  "serviceCalls": [],
                  "input": {
                    "title": "ho"
                  }
                }
              ],
              "duration": 0,
              "signalStoreRef": "80b75b27-11be-407a-b282-7816ffe3ecd2",
              "payload": {
                "title": "ho"
              }
            },
            {
              "name": "app.new.titleChanged",
              "start": 1468582964646,
              "isSync": true,
              "isExecuting": false,
              "isPrevented": false,
              "branches": [
                {
                  "name": "setTitle",
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
                  "mutations": [
                    {
                      "name": "set",
                      "path": [
                        "app",
                        "new",
                        "title"
                      ],
                      "args": [
                        "hop"
                      ]
                    }
                  ],
                  "serviceCalls": [],
                  "input": {
                    "title": "hop"
                  }
                }
              ],
              "duration": 0,
              "signalStoreRef": "b2c61f17-cca1-45e9-ad80-ddbc24817cad",
              "payload": {
                "title": "hop"
              }
            },
            {
              "name": "app.new.titleChanged",
              "start": 1468582964789,
              "isSync": true,
              "isExecuting": false,
              "isPrevented": false,
              "branches": [
                {
                  "name": "setTitle",
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
                  "mutations": [
                    {
                      "name": "set",
                      "path": [
                        "app",
                        "new",
                        "title"
                      ],
                      "args": [
                        "hopp"
                      ]
                    }
                  ],
                  "serviceCalls": [],
                  "input": {
                    "title": "hopp"
                  }
                }
              ],
              "duration": 0,
              "signalStoreRef": "92650831-b19d-4b73-8634-b8f91b8e04b0",
              "payload": {
                "title": "hopp"
              }
            },
            {
              "name": "app.new.submitted",
              "start": 1468582964952,
              "isExecuting": false,
              "isPrevented": false,
              "branches": [
                {
                  "name": "addTodo",
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
                  "mutations": [
                    {
                      "name": "set",
                      "path": [
                        "refs",
                        "nextRef"
                      ],
                      "args": [
                        2
                      ]
                    },
                    {
                      "name": "set",
                      "path": [
                        "app",
                        "list",
                        "todos",
                        "1"
                      ],
                      "args": [
                        {
                          "$ref": 1,
                          "$isSaving": true,
                          "title": "hopp",
                          "completed": false
                        }
                      ]
                    },
                    {
                      "name": "set",
                      "path": [
                        "app",
                        "new",
                        "title"
                      ],
                      "args": [
                        ""
                      ]
                    }
                  ],
                  "serviceCalls": [
                    {
                      "name": "refs",
                      "method": "next",
                      "args": [
                        {
                          "app": {
                            "new": {
                              "title": ""
                            },
                            "list": {
                              "todos": {
                                "0": {
                                  "$ref": 0,
                                  "$isSaving": false,
                                  "title": "hey",
                                  "completed": false,
                                  "id": 1468582966669
                                },
                                "1": {
                                  "$ref": 1,
                                  "$isSaving": false,
                                  "title": "hopp",
                                  "completed": false,
                                  "id": 1468582967177
                                }
                              },
                              "isAllChecked": false,
                              "editedTodo": null,
                              "showCompleted": true,
                              "showNotCompleted": true
                            },
                            "footer": {
                              "filter": "all"
                            }
                          },
                          "refs": {
                            "nextRef": 2
                          },
                          "recorder": {
                            "isRecording": false,
                            "isPlaying": false,
                            "isPaused": false,
                            "hasRecorded": false,
                            "preventSignals": false
                          }
                        }
                      ]
                    }
                  ],
                  "output": {
                    "ref": 1
                  }
                },
                [
                  {
                    "name": "saveTodo",
                    "options": {},
                    "duration": 0,
                    "isAsync": true,
                    "isExecuting": false,
                    "hasExecuted": true,
                    "path": [
                      1,
                      0
                    ],
                    "outputs": {
                      "success": [
                        {
                          "name": "updateTodo",
                          "options": {},
                          "duration": 1,
                          "isAsync": false,
                          "isExecuting": false,
                          "hasExecuted": true,
                          "path": [
                            1,
                            0,
                            "outputs",
                            "success",
                            0
                          ],
                          "outputs": null,
                          "actionIndex": 2,
                          "mutations": [
                            {
                              "name": "merge",
                              "path": [
                                "app",
                                "list",
                                "todos",
                                "1"
                              ],
                              "args": [
                                {
                                  "id": 1468582967177,
                                  "$isSaving": false
                                }
                              ]
                            }
                          ],
                          "serviceCalls": [],
                          "input": {
                            "ref": 1,
                            "id": 1468582967177
                          }
                        }
                      ],
                      "error": [
                        {
                          "name": "setError",
                          "options": {},
                          "duration": 0,
                          "isAsync": false,
                          "isExecuting": false,
                          "hasExecuted": false,
                          "path": [
                            1,
                            0,
                            "outputs",
                            "error",
                            0
                          ],
                          "outputs": null,
                          "actionIndex": 3
                        }
                      ]
                    },
                    "actionIndex": 1,
                    "mutations": [],
                    "serviceCalls": [],
                    "input": {
                      "ref": 1
                    },
                    "output": {
                      "id": 1468582967177
                    },
                    "outputPath": "success"
                  }
                ]
              ],
              "duration": 0,
              "signalStoreRef": "92032d72-b110-40e0-9cf9-1dd6d335223f",
              "payload": {
                "ref": 1,
                "id": 1468582967177
              }
            }
          ],
          "output": {
            "id": 1468582966669
          },
          "outputPath": "success"
        }
      ]
    ],
    "duration": 0,
    "signalStoreRef": "2da99395-e4c0-44aa-9083-e741557ce4c6",
    "payload": {
      "ref": 0,
      "id": 1468582966669
    }
  }
]
  }
}
