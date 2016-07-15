export default [
  {
    "name": "app.footer.filterClicked",
    "start": 1468573470741,
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
    "signalStoreRef": "62ce3f2d-4993-4e01-9bd6-8543bf085ff6",
    "payload": {},
    "isRouted": true
  },
  {
    "name": "app.new.titleChanged",
    "start": 1468573472561,
    "isSync": true,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "setTitle",
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
    "signalStoreRef": "b9d4167c-7f8e-449a-9bd3-b585ea1c7de1",
    "payload": {
      "title": "h"
    }
  },
  {
    "name": "app.new.titleChanged",
    "start": 1468573472672,
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
    "signalStoreRef": "08b553ae-452d-42dc-a4d1-913264dd94b9",
    "payload": {
      "title": "he"
    }
  },
  {
    "name": "app.new.titleChanged",
    "start": 1468573472752,
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
    "signalStoreRef": "bf1347a1-274a-4688-8e1e-5ca0f36e93ec",
    "payload": {
      "title": "hey"
    }
  },
  {
    "name": "app.new.submitted",
    "start": 1468573472895,
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
                        "id": 1468573475118
                      },
                      "1": {
                        "$ref": 1,
                        "$isSaving": false,
                        "title": "happ",
                        "completed": false,
                        "id": 1468573476415
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
                        "id": 1468573475118,
                        "$isSaving": false
                      }
                    ]
                  }
                ],
                "serviceCalls": [],
                "input": {
                  "ref": 0,
                  "id": 1468573475118
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
              "start": 1468573473362,
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
              "signalStoreRef": "d6375a65-792c-4c3b-853f-e4cd7f1adb51",
              "payload": {
                "title": "h"
              }
            },
            {
              "name": "app.new.titleChanged",
              "start": 1468573473424,
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
                        "ha"
                      ]
                    }
                  ],
                  "serviceCalls": [],
                  "input": {
                    "title": "ha"
                  }
                }
              ],
              "duration": 0,
              "signalStoreRef": "816438cd-c2e0-4d99-9e3a-6a0536b596d0",
              "payload": {
                "title": "ha"
              }
            },
            {
              "name": "app.new.titleChanged",
              "start": 1468573473464,
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
                        "hap"
                      ]
                    }
                  ],
                  "serviceCalls": [],
                  "input": {
                    "title": "hap"
                  }
                }
              ],
              "duration": 0,
              "signalStoreRef": "3e6322ae-5f50-4be6-b4e7-d8eb424a8690",
              "payload": {
                "title": "hap"
              }
            },
            {
              "name": "app.new.titleChanged",
              "start": 1468573473600,
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
                        "happ"
                      ]
                    }
                  ],
                  "serviceCalls": [],
                  "input": {
                    "title": "happ"
                  }
                }
              ],
              "duration": 0,
              "signalStoreRef": "b71dac18-0c68-457b-8b33-66cef4288372",
              "payload": {
                "title": "happ"
              }
            },
            {
              "name": "app.new.submitted",
              "start": 1468573473679,
              "isExecuting": false,
              "isPrevented": false,
              "branches": [
                {
                  "name": "addTodo",
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
                          "title": "happ",
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
                                  "id": 1468573475118
                                },
                                "1": {
                                  "$ref": 1,
                                  "$isSaving": false,
                                  "title": "happ",
                                  "completed": false,
                                  "id": 1468573476415
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
                                  "id": 1468573476415,
                                  "$isSaving": false
                                }
                              ]
                            }
                          ],
                          "serviceCalls": [],
                          "input": {
                            "ref": 1,
                            "id": 1468573476415
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
                      "id": 1468573476415
                    },
                    "outputPath": "success"
                  }
                ]
              ],
              "duration": 0,
              "signalStoreRef": "b98d4e26-7e82-42af-ae25-d9cf30d45741",
              "payload": {
                "ref": 1,
                "id": 1468573476415
              }
            }
          ],
          "output": {
            "id": 1468573475118
          },
          "outputPath": "success"
        }
      ]
    ],
    "duration": 0,
    "signalStoreRef": "ef3dc095-af19-4e66-9d5a-53a088096ceb",
    "payload": {
      "ref": 0,
      "id": 1468573475118
    }
  }
]
