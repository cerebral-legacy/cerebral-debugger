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
    "name": "app.feedRouted",
    "start": 1468226312630,
    "isSync": true,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "addons.when(\"state:/app.user\")",
        "options": {
          "outputs": [
            "true",
            "false"
          ]
        },
        "duration": 0,
        "isAsync": false,
        "isExecuting": false,
        "hasExecuted": true,
        "path": [
          0
        ],
        "outputs": {
          "true": [
            {
              "name": "addons.set(\"state:/app.currentPage\", \"inspirasjon\")",
              "options": {},
              "duration": 0,
              "isAsync": false,
              "isExecuting": false,
              "hasExecuted": false,
              "path": [
                0,
                "outputs",
                "true",
                0
              ],
              "outputs": null,
              "actionIndex": 1
            },
            {
              "name": "addons.set(\"state:/header.isNotificationLoading\", true)",
              "options": {},
              "duration": 0,
              "isAsync": false,
              "isExecuting": false,
              "hasExecuted": false,
              "path": [
                0,
                "outputs",
                "true",
                1
              ],
              "outputs": null,
              "actionIndex": 2
            },
            [
              {
                "name": "http.get (/notifications)",
                "options": {},
                "duration": 0,
                "isAsync": true,
                "isExecuting": false,
                "hasExecuted": false,
                "path": [
                  0,
                  "outputs",
                  "true",
                  2,
                  0
                ],
                "outputs": {
                  "success": [
                    {
                      "name": "setNotifications",
                      "options": {},
                      "duration": 0,
                      "isAsync": false,
                      "isExecuting": false,
                      "hasExecuted": false,
                      "path": [
                        0,
                        "outputs",
                        "true",
                        2,
                        0,
                        "outputs",
                        "success",
                        0
                      ],
                      "outputs": null,
                      "actionIndex": 4
                    }
                  ],
                  "error": [
                    {
                      "name": "addons.copy(\"input:/result\", \"state:/header.notificationError\")",
                      "options": {},
                      "duration": 0,
                      "isAsync": false,
                      "isExecuting": false,
                      "hasExecuted": false,
                      "path": [
                        0,
                        "outputs",
                        "true",
                        2,
                        0,
                        "outputs",
                        "error",
                        0
                      ],
                      "outputs": null,
                      "actionIndex": 5
                    }
                  ]
                },
                "actionIndex": 3
              }
            ],
            {
              "name": "addons.set(\"state:/header.isNotificationLoading\", false)",
              "options": {},
              "duration": 0,
              "isAsync": false,
              "isExecuting": false,
              "hasExecuted": false,
              "path": [
                0,
                "outputs",
                "true",
                3
              ],
              "outputs": null,
              "actionIndex": 6
            },
            {
              "name": "whenMobile",
              "options": {
                "outputs": [
                  "true",
                  "false"
                ]
              },
              "duration": 0,
              "isAsync": false,
              "isExecuting": false,
              "hasExecuted": false,
              "path": [
                0,
                "outputs",
                "true",
                4
              ],
              "outputs": {
                "true": [
                  {
                    "name": "addons.set(\"state:/header.showMainMenu\", false)",
                    "options": {},
                    "duration": 0,
                    "isAsync": false,
                    "isExecuting": false,
                    "hasExecuted": false,
                    "path": [
                      0,
                      "outputs",
                      "true",
                      4,
                      "outputs",
                      "true",
                      0
                    ],
                    "outputs": null,
                    "actionIndex": 8
                  }
                ],
                "false": []
              },
              "actionIndex": 7
            }
          ],
          "false": [
            [
              {
                "name": "signIn",
                "options": {},
                "duration": 0,
                "isAsync": true,
                "isExecuting": false,
                "hasExecuted": true,
                "path": [
                  0,
                  "outputs",
                  "false",
                  0,
                  0
                ],
                "outputs": {
                  "success": [
                    {
                      "name": "setUser",
                      "options": {},
                      "duration": 0,
                      "isAsync": false,
                      "isExecuting": false,
                      "hasExecuted": true,
                      "path": [
                        0,
                        "outputs",
                        "false",
                        0,
                        0,
                        "outputs",
                        "success",
                        0
                      ],
                      "outputs": null,
                      "actionIndex": 10,
                      "serviceCalls": [],
                      "input": {
                        "user": {
                          "uid": "C2DnzNJrJRbXYd8dJLCawlr2e4h1",
                          "isAnonymous": true,
                          "providerData": [],
                          "displayName": null,
                          "email": null,
                          "emailVerified": false,
                          "photoURL": null
                        }
                      },
                      "mutations": [
                        {
                          "name": "set",
                          "path": [
                            "app",
                            "user"
                          ],
                          "args": [
                            {
                              "uid": "C2DnzNJrJRbXYd8dJLCawlr2e4h1",
                              "isAnonymous": true,
                              "providerData": [],
                              "displayName": null,
                              "email": null,
                              "emailVerified": false,
                              "photoURL": null
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "addons.set(\"state:/app.isAuthenticating\", false)",
                      "options": {},
                      "duration": 0,
                      "isAsync": false,
                      "isExecuting": false,
                      "hasExecuted": true,
                      "path": [
                        0,
                        "outputs",
                        "false",
                        0,
                        0,
                        "outputs",
                        "success",
                        1
                      ],
                      "outputs": null,
                      "actionIndex": 11,
                      "serviceCalls": [],
                      "input": {
                        "user": {
                          "uid": "C2DnzNJrJRbXYd8dJLCawlr2e4h1",
                          "isAnonymous": true,
                          "providerData": [],
                          "displayName": null,
                          "email": null,
                          "emailVerified": false,
                          "photoURL": null
                        }
                      },
                      "mutations": [
                        {
                          "name": "set",
                          "path": [
                            "app",
                            "isAuthenticating"
                          ],
                          "args": [
                            false
                          ]
                        }
                      ]
                    },
                    {
                      "name": "addons.set(\"state:/app.currentPage\", \"inspirasjon\")",
                      "options": {},
                      "duration": 0,
                      "isAsync": false,
                      "isExecuting": false,
                      "hasExecuted": true,
                      "path": [
                        0,
                        "outputs",
                        "false",
                        0,
                        0,
                        "outputs",
                        "success",
                        2
                      ],
                      "outputs": null,
                      "actionIndex": 1,
                      "serviceCalls": [],
                      "input": {
                        "user": {
                          "uid": "C2DnzNJrJRbXYd8dJLCawlr2e4h1",
                          "isAnonymous": true,
                          "providerData": [],
                          "displayName": null,
                          "email": null,
                          "emailVerified": false,
                          "photoURL": null
                        }
                      },
                      "mutations": [
                        {
                          "name": "set",
                          "path": [
                            "app",
                            "currentPage"
                          ],
                          "args": [
                            "inspirasjon"
                          ]
                        }
                      ]
                    },
                    {
                      "name": "addons.set(\"state:/header.isNotificationLoading\", true)",
                      "options": {},
                      "duration": 3,
                      "isAsync": false,
                      "isExecuting": false,
                      "hasExecuted": true,
                      "path": [
                        0,
                        "outputs",
                        "false",
                        0,
                        0,
                        "outputs",
                        "success",
                        3
                      ],
                      "outputs": null,
                      "actionIndex": 2,
                      "serviceCalls": [],
                      "input": {
                        "user": {
                          "uid": "C2DnzNJrJRbXYd8dJLCawlr2e4h1",
                          "isAnonymous": true,
                          "providerData": [],
                          "displayName": null,
                          "email": null,
                          "emailVerified": false,
                          "photoURL": null
                        }
                      },
                      "mutations": [
                        {
                          "name": "set",
                          "path": [
                            "header",
                            "isNotificationLoading"
                          ],
                          "args": [
                            true
                          ]
                        }
                      ]
                    },
                    [
                      {
                        "name": "http.get (/notifications)",
                        "options": {},
                        "duration": 0,
                        "isAsync": true,
                        "isExecuting": false,
                        "hasExecuted": true,
                        "path": [
                          0,
                          "outputs",
                          "false",
                          0,
                          0,
                          "outputs",
                          "success",
                          4,
                          0
                        ],
                        "outputs": {
                          "success": [
                            {
                              "name": "setNotifications",
                              "options": {},
                              "duration": 0,
                              "isAsync": false,
                              "isExecuting": false,
                              "hasExecuted": false,
                              "path": [
                                0,
                                "outputs",
                                "false",
                                0,
                                0,
                                "outputs",
                                "success",
                                4,
                                0,
                                "outputs",
                                "success",
                                0
                              ],
                              "outputs": null,
                              "actionIndex": 4
                            }
                          ],
                          "error": [
                            {
                              "name": "addons.copy(\"input:/result\", \"state:/header.notificationError\")",
                              "options": {},
                              "duration": 3,
                              "isAsync": false,
                              "isExecuting": false,
                              "hasExecuted": true,
                              "path": [
                                0,
                                "outputs",
                                "false",
                                0,
                                0,
                                "outputs",
                                "success",
                                4,
                                0,
                                "outputs",
                                "error",
                                0
                              ],
                              "outputs": null,
                              "actionIndex": 5,
                              "serviceCalls": [],
                              "input": {
                                "user": {
                                  "uid": "C2DnzNJrJRbXYd8dJLCawlr2e4h1",
                                  "isAnonymous": true,
                                  "providerData": [],
                                  "displayName": null,
                                  "email": null,
                                  "emailVerified": false,
                                  "photoURL": null
                                },
                                "status": 404,
                                "result": "Cannot GET /api/notifications\n"
                              },
                              "mutations": [
                                {
                                  "name": "set",
                                  "path": [
                                    "header",
                                    "notificationError"
                                  ],
                                  "args": [
                                    "Cannot GET /api/notifications\n"
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        "actionIndex": 3,
                        "serviceCalls": [
                          {
                            "name": "http",
                            "method": "get",
                            "args": [
                              "/notifications"
                            ]
                          }
                        ],
                        "input": {
                          "user": {
                            "uid": "C2DnzNJrJRbXYd8dJLCawlr2e4h1",
                            "isAnonymous": true,
                            "providerData": [],
                            "displayName": null,
                            "email": null,
                            "emailVerified": false,
                            "photoURL": null
                          }
                        },
                        "mutations": [],
                        "signals": [
                          {
                            "name": "app.userLoggedIn",
                            "start": 1468226313073,
                            "isExecuting": false,
                            "isPrevented": false,
                            "branches": [
                              {
                                "name": "addons.set(\"state:/header.showMainMenu\", true)",
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
                                    "name": "set",
                                    "path": [
                                      "header",
                                      "showMainMenu"
                                    ],
                                    "args": [
                                      true
                                    ]
                                  }
                                ]
                              },
                              {
                                "name": "shouldShowInternetExplorerModal",
                                "options": {
                                  "outputs": [
                                    "true",
                                    "false"
                                  ]
                                },
                                "duration": 2,
                                "isAsync": false,
                                "isExecuting": false,
                                "hasExecuted": true,
                                "path": [
                                  1
                                ],
                                "outputs": {
                                  "true": [
                                    {
                                      "name": "addons.set(\"state:/app.showInternetExplorerModal\", true)",
                                      "options": {},
                                      "duration": 0,
                                      "isAsync": false,
                                      "isExecuting": false,
                                      "hasExecuted": false,
                                      "path": [
                                        1,
                                        "outputs",
                                        "true",
                                        0
                                      ],
                                      "outputs": null,
                                      "actionIndex": 2
                                    }
                                  ],
                                  "false": [
                                    {
                                      "name": "addons.set(\"state:/app.showInternetExplorerModal\", false)",
                                      "options": {},
                                      "duration": 2,
                                      "isAsync": false,
                                      "isExecuting": false,
                                      "hasExecuted": true,
                                      "path": [
                                        1,
                                        "outputs",
                                        "false",
                                        0
                                      ],
                                      "outputs": null,
                                      "actionIndex": 3,
                                      "serviceCalls": [],
                                      "input": {},
                                      "mutations": [
                                        {
                                          "name": "set",
                                          "path": [
                                            "app",
                                            "showInternetExplorerModal"
                                          ],
                                          "args": [
                                            false
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                "actionIndex": 1,
                                "serviceCalls": [],
                                "input": {},
                                "mutations": [],
                                "output": {},
                                "outputPath": "false"
                              }
                            ],
                            "duration": 0,
                            "signalStoreRef": "0e749985-73a8-4537-8250-ea9222aca59f",
                            "payload": {}
                          }
                        ],
                        "output": {
                          "status": 404,
                          "result": "Cannot GET /api/notifications\n"
                        },
                        "outputPath": "error"
                      }
                    ],
                    {
                      "name": "addons.set(\"state:/header.isNotificationLoading\", false)",
                      "options": {},
                      "duration": 0,
                      "isAsync": false,
                      "isExecuting": false,
                      "hasExecuted": true,
                      "path": [
                        0,
                        "outputs",
                        "false",
                        0,
                        0,
                        "outputs",
                        "success",
                        5
                      ],
                      "outputs": null,
                      "actionIndex": 6,
                      "serviceCalls": [],
                      "input": {
                        "user": {
                          "uid": "C2DnzNJrJRbXYd8dJLCawlr2e4h1",
                          "isAnonymous": true,
                          "providerData": [],
                          "displayName": null,
                          "email": null,
                          "emailVerified": false,
                          "photoURL": null
                        },
                        "status": 404,
                        "result": "Cannot GET /api/notifications\n"
                      },
                      "mutations": [
                        {
                          "name": "set",
                          "path": [
                            "header",
                            "isNotificationLoading"
                          ],
                          "args": [
                            false
                          ]
                        }
                      ]
                    },
                    {
                      "name": "whenMobile",
                      "options": {
                        "outputs": [
                          "true",
                          "false"
                        ]
                      },
                      "duration": 1,
                      "isAsync": false,
                      "isExecuting": false,
                      "hasExecuted": true,
                      "path": [
                        0,
                        "outputs",
                        "false",
                        0,
                        0,
                        "outputs",
                        "success",
                        6
                      ],
                      "outputs": {
                        "true": [
                          {
                            "name": "addons.set(\"state:/header.showMainMenu\", false)",
                            "options": {},
                            "duration": 0,
                            "isAsync": false,
                            "isExecuting": false,
                            "hasExecuted": false,
                            "path": [
                              0,
                              "outputs",
                              "false",
                              0,
                              0,
                              "outputs",
                              "success",
                              6,
                              "outputs",
                              "true",
                              0
                            ],
                            "outputs": null,
                            "actionIndex": 8
                          }
                        ],
                        "false": []
                      },
                      "actionIndex": 7,
                      "serviceCalls": [],
                      "input": {
                        "user": {
                          "uid": "C2DnzNJrJRbXYd8dJLCawlr2e4h1",
                          "isAnonymous": true,
                          "providerData": [],
                          "displayName": null,
                          "email": null,
                          "emailVerified": false,
                          "photoURL": null
                        },
                        "status": 404,
                        "result": "Cannot GET /api/notifications\n"
                      },
                      "mutations": [],
                      "output": {},
                      "outputPath": "false"
                    }
                  ],
                  "error": [
                    {
                      "name": "addons.set(\"state:/app.isAuthenticating\", false)",
                      "options": {},
                      "duration": 0,
                      "isAsync": false,
                      "isExecuting": false,
                      "hasExecuted": false,
                      "path": [
                        0,
                        "outputs",
                        "false",
                        0,
                        0,
                        "outputs",
                        "error",
                        0
                      ],
                      "outputs": null,
                      "actionIndex": 12
                    }
                  ]
                },
                "actionIndex": 9,
                "serviceCalls": [
                  {
                    "name": "firebase",
                    "method": "signInAnonymously",
                    "args": []
                  }
                ],
                "input": {},
                "mutations": [],
                "signals": [
                  {
                    "name": "useragent.moduleRegistered",
                    "start": 1468226312702,
                    "isExecuting": false,
                    "isPrevented": false,
                    "branches": [
                      {
                        "name": "detectFeatures",
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
                            "name": "set",
                            "path": [
                              "useragent",
                              "feature"
                            ],
                            "args": [
                              {
                                "isMobile": false
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "parseUserAgent",
                        "options": {},
                        "duration": 0,
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
                              "useragent",
                              "browser"
                            ],
                            "args": [
                              {
                                "name": "Chrome",
                                "version": "51.0.2704.103",
                                "major": "51"
                              }
                            ]
                          },
                          {
                            "name": "set",
                            "path": [
                              "useragent",
                              "device"
                            ],
                            "args": [
                              {}
                            ]
                          },
                          {
                            "name": "set",
                            "path": [
                              "useragent",
                              "os"
                            ],
                            "args": [
                              {
                                "name": "Mac OS",
                                "version": "10.11.5"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "setMedia",
                        "options": {},
                        "duration": 0,
                        "isAsync": false,
                        "isExecuting": false,
                        "hasExecuted": true,
                        "path": [
                          2
                        ],
                        "outputs": null,
                        "actionIndex": 2,
                        "serviceCalls": [],
                        "input": {},
                        "mutations": [
                          {
                            "name": "set",
                            "path": [
                              "useragent",
                              "media"
                            ],
                            "args": [
                              {}
                            ]
                          }
                        ]
                      },
                      {
                        "name": "setWindow",
                        "options": {},
                        "duration": 11,
                        "isAsync": false,
                        "isExecuting": false,
                        "hasExecuted": true,
                        "path": [
                          3
                        ],
                        "outputs": null,
                        "actionIndex": 3,
                        "serviceCalls": [],
                        "input": {},
                        "mutations": [
                          {
                            "name": "set",
                            "path": [
                              "useragent",
                              "window"
                            ],
                            "args": [
                              {
                                "orientation": "landscape",
                                "height": 537,
                                "width": 1440
                              }
                            ]
                          }
                        ]
                      }
                    ],
                    "duration": 0,
                    "signalStoreRef": "7f86948c-dd4e-4c3f-8bc1-9e06de9d26aa",
                    "payload": {}
                  }
                ],
                "output": {
                  "user": {
                    "uid": "C2DnzNJrJRbXYd8dJLCawlr2e4h1",
                    "isAnonymous": true,
                    "providerData": [],
                    "displayName": null,
                    "email": null,
                    "emailVerified": false,
                    "photoURL": null
                  }
                },
                "outputPath": "success"
              }
            ]
          ]
        },
        "actionIndex": 0,
        "serviceCalls": [],
        "input": {},
        "mutations": [],
        "output": {},
        "outputPath": "false"
      }
    ],
    "duration": 0,
    "signalStoreRef": "325b749e-6221-433a-b782-f79b7abd4fd3",
    "isRouted": true,
    "payload": {
      "user": {
        "uid": "C2DnzNJrJRbXYd8dJLCawlr2e4h1",
        "isAnonymous": true,
        "providerData": [],
        "displayName": null,
        "email": null,
        "emailVerified": false,
        "photoURL": null
      },
      "status": 404,
      "result": "Cannot GET /api/notifications\n"
    }
  },
  {
    "name": "newsFeed.mounted",
    "start": 1468226313315,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "listenForPosts",
        "options": {},
        "duration": 11,
        "isAsync": false,
        "isExecuting": false,
        "hasExecuted": true,
        "path": [
          0
        ],
        "outputs": null,
        "actionIndex": 0,
        "serviceCalls": [
          {
            "name": "firebase",
            "method": "onChildAdded",
            "args": [
              "posts",
              "newsFeed.newPostAdded",
              {
                "limitToFirst": 10,
                "orderByChild": "datetime"
              }
            ]
          }
        ],
        "mutations": []
      }
    ],
    "duration": 0,
    "signalStoreRef": "d298d35b-058e-43ee-aa3d-225651e209f0"
  },
  {
    "name": "newsFeed.postCommentTimedOut",
    "start": 1468226318319,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "rotatePostComments",
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
        "mutations": []
      }
    ],
    "duration": 0,
    "signalStoreRef": "0b7d9dd5-6db2-4ce9-81ea-5a9d7683a560"
  },
  {
    "name": "newsFeed.postCommentTimedOut",
    "start": 1468226323319,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "rotatePostComments",
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
        "mutations": []
      }
    ],
    "duration": 0,
    "signalStoreRef": "e797f6e2-3b89-49ea-b58e-aec7fec46f63"
  },
  {
    "name": "newsFeed.postCommentTimedOut",
    "start": 1468226328319,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "rotatePostComments",
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
        "mutations": []
      }
    ],
    "duration": 0,
    "signalStoreRef": "71f23187-fddb-4b6a-92d4-284b63af5583"
  },
  {
    "name": "newsFeed.postCommentTimedOut",
    "start": 1468226333316,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "rotatePostComments",
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
        "mutations": []
      }
    ],
    "duration": 0,
    "signalStoreRef": "94fe787f-57ce-4cbe-8b76-12f1dbae49b1"
  },
  {
    "name": "newsFeed.postCommentTimedOut",
    "start": 1468226338318,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "rotatePostComments",
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
        "mutations": []
      }
    ],
    "duration": 0,
    "signalStoreRef": "921dfcc3-972c-4df4-afe2-42506ff7e7ae"
  },
  {
    "name": "newsFeed.postCommentTimedOut",
    "start": 1468226343317,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "rotatePostComments",
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
        "mutations": []
      }
    ],
    "duration": 0,
    "signalStoreRef": "ee947173-5802-4334-953b-91d2668b1b40"
  },
  {
    "name": "newsFeed.postCommentTimedOut",
    "start": 1468226348317,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "rotatePostComments",
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
        "mutations": []
      }
    ],
    "duration": 0,
    "signalStoreRef": "46182408-26b9-4f3a-93ab-ee988362de62"
  },
  {
    "name": "newsFeed.postCommentTimedOut",
    "start": 1468226353314,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "rotatePostComments",
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
        "mutations": []
      }
    ],
    "duration": 0,
    "signalStoreRef": "3d311763-9c92-45bb-8909-8e474f7d97c0"
  },
  {
    "name": "newsFeed.postCommentTimedOut",
    "start": 1468226358318,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "rotatePostComments",
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
        "mutations": []
      }
    ],
    "duration": 0,
    "signalStoreRef": "6e052e1f-d853-40cd-ba3f-8cabb99a950d"
  },
  {
    "name": "newsFeed.postCommentTimedOut",
    "start": 1468226363315,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "rotatePostComments",
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
        "mutations": []
      }
    ],
    "duration": 0,
    "signalStoreRef": "e0d16c02-3263-486d-8e1d-4acb044749f4"
  },
  {
    "name": "newsFeed.postCommentTimedOut",
    "start": 1468226368316,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "rotatePostComments",
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
        "serviceCalls": [],
        "mutations": []
      }
    ],
    "duration": 0,
    "signalStoreRef": "a1af9140-1d32-41f2-822f-e7cd50d26f0f"
  },
  {
    "name": "newsFeed.postCommentTimedOut",
    "start": 1468226373317,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "rotatePostComments",
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
        "mutations": []
      }
    ],
    "duration": 0,
    "signalStoreRef": "b1ac8996-b810-488a-8d52-5c8d4fb2baed"
  },
  {
    "name": "newsFeed.postCommentTimedOut",
    "start": 1468226378315,
    "isExecuting": false,
    "isPrevented": false,
    "branches": [
      {
        "name": "rotatePostComments",
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
        "mutations": []
      }
    ],
    "duration": 0,
    "signalStoreRef": "190e3340-299e-4616-9dbc-9b525a4b7b2a"
  }
]
  }
}
