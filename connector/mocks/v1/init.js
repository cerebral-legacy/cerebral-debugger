module.exports = {
  "willKeepState": false,
  "disableDebugger": false,
  "currentSignalIndex": 0,
  "isExecutingAsync": false,
  "isRemembering": false,
  "computedPaths": [],
  "signals": [
    {
      "name": "app.new.titleChanged",
      "start": 1452960398493,
      "isSync": true,
      "isExecuting": false,
      "branches": [
        {
          "name": "setTitle",
          "input": {
            "title": "h"
          },
          "duration": 3,
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
          "isAsync": false,
          "outputPath": null,
          "isExecuting": false,
          "hasExecuted": true,
          "path": [
            0
          ],
          "outputs": null,
          "actionIndex": 0
        }
      ],
      "duration": 0,
      "input": {
        "title": "h"
      }
    },
    {
      "name": "app.new.titleChanged",
      "start": 1452960398675,
      "isSync": true,
      "isExecuting": false,
      "branches": [
        {
          "name": "setTitle",
          "input": {
            "title": "he"
          },
          "duration": 0,
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
          "isAsync": false,
          "outputPath": null,
          "isExecuting": false,
          "hasExecuted": true,
          "path": [
            0
          ],
          "outputs": null,
          "actionIndex": 0
        }
      ],
      "duration": 0,
      "input": {
        "title": "he"
      }
    },
    {
      "name": "app.new.titleChanged",
      "start": 1452960398724,
      "isSync": true,
      "isExecuting": false,
      "branches": [
        {
          "name": "setTitle",
          "input": {
            "title": "hey"
          },
          "duration": 1,
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
          "isAsync": false,
          "outputPath": null,
          "isExecuting": false,
          "hasExecuted": true,
          "path": [
            0
          ],
          "outputs": null,
          "actionIndex": 0
        }
      ],
      "duration": 0,
      "input": {
        "title": "hey"
      }
    },
    {
      "name": "app.new.submitted",
      "start": 1452960398902,
      "isExecuting": false,
      "branches": [
        {
          "name": "addTodo",
          "input": {},
          "output": {
            "ref": 0
          },
          "duration": 0,
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
                0
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
          "isAsync": false,
          "outputPath": null,
          "isExecuting": false,
          "hasExecuted": true,
          "path": [
            0
          ],
          "outputs": null,
          "actionIndex": 0
        },
        {
          "name": "setSaving",
          "input": {
            "ref": 0
          },
          "duration": 3,
          "mutations": [
            {
              "name": "set",
              "path": [
                "app",
                "new",
                "isSaving"
              ],
              "args": [
                true
              ]
            }
          ],
          "isAsync": false,
          "outputPath": null,
          "isExecuting": false,
          "hasExecuted": true,
          "path": [
            1
          ],
          "outputs": null,
          "actionIndex": 1
        },
        [
          {
            "name": "saveTodo",
            "input": {
              "ref": 0
            },
            "output": {
              "id": 1452960401269
            },
            "duration": 0,
            "mutations": [],
            "isAsync": true,
            "outputPath": "success",
            "isExecuting": false,
            "hasExecuted": true,
            "path": [
              2,
              0
            ],
            "outputs": {
              "success": [
                {
                  "name": "updateTodo",
                  "input": {
                    "ref": 0,
                    "id": 1452960401269
                  },
                  "duration": 1,
                  "mutations": [
                    {
                      "name": "merge",
                      "path": [
                        "app",
                        "list",
                        "todos",
                        0
                      ],
                      "args": [
                        {
                          "id": 1452960401269,
                          "$isSaving": false
                        }
                      ]
                    }
                  ],
                  "isAsync": false,
                  "outputPath": null,
                  "isExecuting": false,
                  "hasExecuted": true,
                  "path": [
                    2,
                    0,
                    "outputs",
                    "success",
                    0
                  ],
                  "outputs": null,
                  "actionIndex": 3
                }
              ],
              "error": [
                {
                  "name": "setError",
                  "input": {},
                  "output": null,
                  "duration": 0,
                  "mutations": [],
                  "isAsync": false,
                  "outputPath": null,
                  "isExecuting": false,
                  "hasExecuted": false,
                  "path": [
                    2,
                    0,
                    "outputs",
                    "error",
                    0
                  ],
                  "outputs": null,
                  "actionIndex": 4
                }
              ]
            },
            "actionIndex": 2,
            "signals": [
              {
                "name": "app.new.titleChanged",
                "start": 1452960399131,
                "isSync": true,
                "isExecuting": false,
                "branches": [
                  {
                    "name": "setTitle",
                    "input": {
                      "title": "h"
                    },
                    "duration": 1,
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
                    "isAsync": false,
                    "outputPath": null,
                    "isExecuting": false,
                    "hasExecuted": true,
                    "path": [
                      0
                    ],
                    "outputs": null,
                    "actionIndex": 0
                  }
                ],
                "duration": 0,
                "input": {
                  "title": "h"
                }
              },
              {
                "name": "app.new.titleChanged",
                "start": 1452960399242,
                "isSync": true,
                "isExecuting": false,
                "branches": [
                  {
                    "name": "setTitle",
                    "input": {
                      "title": "he"
                    },
                    "duration": 1,
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
                    "isAsync": false,
                    "outputPath": null,
                    "isExecuting": false,
                    "hasExecuted": true,
                    "path": [
                      0
                    ],
                    "outputs": null,
                    "actionIndex": 0
                  }
                ],
                "duration": 0,
                "input": {
                  "title": "he"
                }
              },
              {
                "name": "app.new.titleChanged",
                "start": 1452960399299,
                "isSync": true,
                "isExecuting": false,
                "branches": [
                  {
                    "name": "setTitle",
                    "input": {
                      "title": "hey"
                    },
                    "duration": 1,
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
                    "isAsync": false,
                    "outputPath": null,
                    "isExecuting": false,
                    "hasExecuted": true,
                    "path": [
                      0
                    ],
                    "outputs": null,
                    "actionIndex": 0
                  }
                ],
                "duration": 0,
                "input": {
                  "title": "hey"
                }
              },
              {
                "name": "app.new.submitted",
                "start": 1452960399371,
                "isExecuting": false,
                "branches": [
                  {
                    "name": "addTodo",
                    "input": {},
                    "output": {
                      "ref": 1
                    },
                    "duration": 0,
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
                          1
                        ],
                        "args": [
                          {
                            "$ref": 1,
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
                    "isAsync": false,
                    "outputPath": null,
                    "isExecuting": false,
                    "hasExecuted": true,
                    "path": [
                      0
                    ],
                    "outputs": null,
                    "actionIndex": 0
                  },
                  {
                    "name": "setSaving",
                    "input": {
                      "ref": 1
                    },
                    "duration": 2,
                    "mutations": [
                      {
                        "name": "set",
                        "path": [
                          "app",
                          "new",
                          "isSaving"
                        ],
                        "args": [
                          true
                        ]
                      }
                    ],
                    "isAsync": false,
                    "outputPath": null,
                    "isExecuting": false,
                    "hasExecuted": true,
                    "path": [
                      1
                    ],
                    "outputs": null,
                    "actionIndex": 1
                  },
                  [
                    {
                      "name": "saveTodo",
                      "input": {
                        "ref": 1
                      },
                      "output": {
                        "id": 1452960401818
                      },
                      "duration": 0,
                      "mutations": [],
                      "isAsync": true,
                      "outputPath": "success",
                      "isExecuting": false,
                      "hasExecuted": true,
                      "path": [
                        2,
                        0
                      ],
                      "outputs": {
                        "success": [
                          {
                            "name": "updateTodo",
                            "input": {
                              "ref": 1,
                              "id": 1452960401818
                            },
                            "duration": 1,
                            "mutations": [
                              {
                                "name": "merge",
                                "path": [
                                  "app",
                                  "list",
                                  "todos",
                                  1
                                ],
                                "args": [
                                  {
                                    "id": 1452960401818,
                                    "$isSaving": false
                                  }
                                ]
                              }
                            ],
                            "isAsync": false,
                            "outputPath": null,
                            "isExecuting": false,
                            "hasExecuted": true,
                            "path": [
                              2,
                              0,
                              "outputs",
                              "success",
                              0
                            ],
                            "outputs": null,
                            "actionIndex": 3
                          }
                        ],
                        "error": [
                          {
                            "name": "setError",
                            "input": {},
                            "output": null,
                            "duration": 0,
                            "mutations": [],
                            "isAsync": false,
                            "outputPath": null,
                            "isExecuting": false,
                            "hasExecuted": false,
                            "path": [
                              2,
                              0,
                              "outputs",
                              "error",
                              0
                            ],
                            "outputs": null,
                            "actionIndex": 4
                          }
                        ]
                      },
                      "actionIndex": 2
                    }
                  ],
                  {
                    "name": "unsetSaving",
                    "input": {
                      "ref": 1,
                      "id": 1452960401818
                    },
                    "duration": 0,
                    "mutations": [
                      {
                        "name": "set",
                        "path": [
                          "app",
                          "new",
                          "isSaving"
                        ],
                        "args": [
                          false
                        ]
                      }
                    ],
                    "isAsync": false,
                    "outputPath": null,
                    "isExecuting": false,
                    "hasExecuted": true,
                    "path": [
                      3
                    ],
                    "outputs": null,
                    "actionIndex": 5
                  }
                ],
                "duration": 0
              }
            ]
          }
        ],
        {
          "name": "unsetSaving",
          "input": {
            "ref": 0,
            "id": 1452960401269
          },
          "duration": 1,
          "mutations": [
            {
              "name": "set",
              "path": [
                "app",
                "new",
                "isSaving"
              ],
              "args": [
                false
              ]
            }
          ],
          "isAsync": false,
          "outputPath": null,
          "isExecuting": false,
          "hasExecuted": true,
          "path": [
            3
          ],
          "outputs": null,
          "actionIndex": 5
        }
      ],
      "duration": 0
    }
  ]
}
