export default [
  {
    "name": "app.appMounted",
    "start": 1458907331613,
    "isRouted": false,
    "isExecuting": false,
    "isPrevented": false,
    "isRecorded": false,
    "branches": [
      [
        {
          "name": "loadForClient",
          "input": {},
          "output": {
            "result": {
              "client": {
                "name": "Test Customer",
                "favicon": "http://testhost.se/media?id=435123&conversation=5eaf61aec2b76bf4fb6a08b222b167ee",
                "url": "localhost:3000"
              }
            }
          },
          "duration": 0,
          "mutations": [],
          "serviceCalls": [
            {
              "name": "Http",
              "method": "post",
              "args": [
                "/api/load"
              ]
            }
          ],
          "isAsync": true,
          "outputPath": "success",
          "isExecuting": false,
          "hasExecuted": true,
          "path": [
            0,
            0
          ],
          "outputs": {
            "success": [
              {
                "name": "setTitle",
                "input": {
                  "result": {
                    "client": {
                      "name": "Test Customer",
                      "favicon": "http://testhost.se/media?id=435123&conversation=5eaf61aec2b76bf4fb6a08b222b167ee",
                      "url": "localhost:3000"
                    }
                  }
                },
                "output": {},
                "duration": 0,
                "mutations": [],
                "serviceCalls": [],
                "isAsync": false,
                "outputPath": null,
                "isExecuting": false,
                "hasExecuted": true,
                "path": [
                  0,
                  0,
                  "outputs",
                  "success",
                  0
                ],
                "outputs": null,
                "actionIndex": 1
              },
              {
                "name": "setFavicon",
                "input": {
                  "result": {
                    "client": {
                      "name": "Test Customer",
                      "favicon": "http://testhost.se/media?id=435123&conversation=5eaf61aec2b76bf4fb6a08b222b167ee",
                      "url": "localhost:3000"
                    }
                  }
                },
                "output": {},
                "duration": 0,
                "mutations": [],
                "serviceCalls": [],
                "isAsync": false,
                "outputPath": null,
                "isExecuting": false,
                "hasExecuted": true,
                "path": [
                  0,
                  0,
                  "outputs",
                  "success",
                  1
                ],
                "outputs": null,
                "actionIndex": 2
              },
              {
                "name": "getPredefinedData",
                "input": {
                  "result": {
                    "client": {
                      "name": "Test Customer",
                      "favicon": "http://testhost.se/media?id=435123&conversation=5eaf61aec2b76bf4fb6a08b222b167ee",
                      "url": "localhost:3000"
                    }
                  }
                },
                "output": {},
                "duration": 0,
                "mutations": [
                  {
                    "name": "set",
                    "path": [
                      "client",
                      "busPredefined",
                      "normal",
                      "username"
                    ],
                    "args": [
                      {
                        "type": "normal",
                        "field": "username",
                        "hidden": false,
                        "value": "Test Customer"
                      }
                    ]
                  },
                  {
                    "name": "set",
                    "path": [
                      "client",
                      "busPredefined",
                      "aggregations",
                      "Customtype"
                    ],
                    "args": [
                      {
                        "type": "aggregations",
                        "key": "Customtype",
                        "hidden": false,
                        "condition": "1"
                      }
                    ]
                  },
                  {
                    "name": "set",
                    "path": [
                      "client",
                      "busPredefined",
                      "aggregations",
                      "Country"
                    ],
                    "args": [
                      {
                        "type": "aggregations",
                        "key": "Country",
                        "hidden": false,
                        "value": "NO"
                      }
                    ]
                  }
                ],
                "serviceCalls": [],
                "isAsync": false,
                "outputPath": null,
                "isExecuting": false,
                "hasExecuted": true,
                "path": [
                  0,
                  0,
                  "outputs",
                  "success",
                  2
                ],
                "outputs": null,
                "actionIndex": 3
              },
              {
                "name": "prepareRegistrationForms",
                "input": {
                  "result": {
                    "client": {
                      "name": "Test Customer",
                      "favicon": "http://testhost.se/media?id=435123&conversation=5eaf61aec2b76bf4fb6a08b222b167ee",
                      "url": "localhost:3000"
                    }
                  }
                },
                "output": {},
                "duration": 0,
                "mutations": [
                  {
                    "name": "set",
                    "path": [
                      "client",
                      "registrating",
                      "current"
                    ],
                    "args": [
                      {
                        "login": {
                          "username": {
                            "value": "wicket.programmer@gmail.com",
                            "isRequired": true,
                            "defaultValue": "wicket.programmer@gmail.com",
                            "validations": null,
                            "isValid": true,
                            "errorMessages": [],
                            "errorMessage": null,
                            "isValue": [
                              "isValue"
                            ],
                            "hasValue": true,
                            "isTouched": true
                          },
                          "password": {
                            "value": "cedarpoint",
                            "isRequired": true,
                            "type": "password",
                            "defaultValue": "cedarpoint",
                            "validations": null,
                            "isValid": true,
                            "errorMessages": [],
                            "errorMessage": null,
                            "isValue": [
                              "isValue"
                            ],
                            "hasValue": true,
                            "isTouched": true
                          }
                        },
                        "common": {
                          "locale": {
                            "value": [
                              {
                                "key": "sv",
                                "value": "sv",
                                "index": 0
                              }
                            ],
                            "isRequired": true,
                            "options": [
                              {
                                "key": "sv",
                                "value": "sv",
                                "index": 0,
                                "selected": true
                              },
                              {
                                "key": "en",
                                "value": "en",
                                "index": 1,
                                "selected": false
                              }
                            ],
                            "hidden": false,
                            "filteredOptions": null,
                            "localeAware": true,
                            "defaultValue": [
                              {
                                "key": "sv",
                                "value": "sv",
                                "index": 0
                              }
                            ],
                            "validations": null,
                            "isValid": true,
                            "errorMessages": [],
                            "errorMessage": null,
                            "isValue": [
                              "isValue"
                            ],
                            "hasValue": true,
                            "isTouched": true
                          },
                          "email": {
                            "value": "",
                            "isRequired": true,
                            "validations": [
                              "isEmail"
                            ],
                            "errorMessages": [
                              {
                                "key": "errors.email"
                              }
                            ],
                            "defaultValue": "",
                            "isValid": true,
                            "errorMessage": null,
                            "isValue": [
                              "isValue"
                            ],
                            "hasValue": false,
                            "isTouched": false
                          },
                          "username": {
                            "value": "Test Customer",
                            "isRequired": true,
                            "defaultValue": "Test Customer",
                            "validations": null,
                            "isValid": true,
                            "errorMessages": [],
                            "errorMessage": null,
                            "isValue": [
                              "isValue"
                            ],
                            "hasValue": true,
                            "isTouched": true
                          },
                          "password": {
                            "value": "",
                            "isRequired": true,
                            "type": "password",
                            "hidden": false,
                            "defaultValue": "",
                            "validations": null,
                            "isValid": true,
                            "errorMessages": [],
                            "errorMessage": null,
                            "isValue": [
                              "isValue"
                            ],
                            "hasValue": false,
                            "isTouched": false
                          },
                          "firstname": {
                            "value": "",
                            "isRequired": true,
                            "defaultValue": "",
                            "validations": null,
                            "isValid": true,
                            "errorMessages": [],
                            "errorMessage": null,
                            "isValue": [
                              "isValue"
                            ],
                            "hasValue": false,
                            "isTouched": false
                          },
                          "lastname": {
                            "value": "",
                            "isRequired": true,
                            "defaultValue": "",
                            "validations": null,
                            "isValid": true,
                            "errorMessages": [],
                            "errorMessage": null,
                            "isValue": [
                              "isValue"
                            ],
                            "hasValue": false,
                            "isTouched": false
                          }
                        },
                        "invoice": {
                          "company": {
                            "value": "",
                            "identifier": "company",
                            "isMultiple": false,
                            "options": null,
                            "validations": [
                              "minLength:1"
                            ],
                            "errorMessages": [],
                            "isRequired": true,
                            "hidden": false,
                            "viesValidation": false,
                            "validateAgainst": null,
                            "defaultValue": "",
                            "isValid": true,
                            "errorMessage": null,
                            "isValue": [
                              "isValue"
                            ],
                            "hasValue": false,
                            "isTouched": false
                          },
                          "address": {
                            "value": "",
                            "identifier": "address",
                            "isMultiple": false,
                            "options": null,
                            "validations": [
                              "minLength:1"
                            ],
                            "errorMessages": [],
                            "isRequired": true,
                            "hidden": false,
                            "viesValidation": false,
                            "validateAgainst": null,
                            "defaultValue": "",
                            "isValid": true,
                            "errorMessage": null,
                            "isValue": [
                              "isValue"
                            ],
                            "hasValue": false,
                            "isTouched": false
                          },
                          "zip": {
                            "value": "",
                            "identifier": "zip",
                            "isMultiple": false,
                            "options": null,
                            "validations": [
                              "minLength:1"
                            ],
                            "errorMessages": [],
                            "isRequired": true,
                            "hidden": false,
                            "viesValidation": false,
                            "validateAgainst": null,
                            "defaultValue": "",
                            "isValid": true,
                            "errorMessage": null,
                            "isValue": [
                              "isValue"
                            ],
                            "hasValue": false,
                            "isTouched": false
                          },
                          "country": {
                            "value": "",
                            "identifier": "country",
                            "isMultiple": false,
                            "options": null,
                            "validations": [
                              "minLength:0"
                            ],
                            "errorMessages": [],
                            "isRequired": false,
                            "hidden": false,
                            "viesValidation": false,
                            "validateAgainst": null,
                            "dependents": [
                              [
                                "..",
                                "vat"
                              ]
                            ],
                            "defaultValue": "",
                            "isValid": true,
                            "errorMessage": null,
                            "isValue": [
                              "isValue"
                            ],
                            "hasValue": false,
                            "isTouched": false
                          },
                          "city": {
                            "value": "",
                            "identifier": "city",
                            "isMultiple": false,
                            "options": null,
                            "validations": [
                              "minLength:1"
                            ],
                            "errorMessages": [],
                            "isRequired": true,
                            "hidden": false,
                            "viesValidation": false,
                            "validateAgainst": null,
                            "defaultValue": "",
                            "isValid": true,
                            "errorMessage": null,
                            "isValue": [
                              "isValue"
                            ],
                            "hasValue": false,
                            "isTouched": false
                          },
                          "phone": {
                            "value": "",
                            "identifier": "phone",
                            "isMultiple": false,
                            "options": null,
                            "validations": [
                              "minLength:1"
                            ],
                            "errorMessages": [],
                            "isRequired": true,
                            "hidden": false,
                            "viesValidation": false,
                            "validateAgainst": null,
                            "defaultValue": "",
                            "isValid": true,
                            "errorMessage": null,
                            "isValue": [
                              "isValue"
                            ],
                            "hasValue": false,
                            "isTouched": false
                          },
                          "vat": {
                            "value": "",
                            "identifier": "vat",
                            "isMultiple": false,
                            "options": null,
                            "validations": [
                              "minLength:0",
                              "noWhitespace"
                            ],
                            "errorMessages": [
                              {
                                "key": ""
                              },
                              {
                                "key": "errors.whitespace"
                              }
                            ],
                            "isRequired": false,
                            "hidden": false,
                            "viesValidation": true,
                            "validateAgainst": "country",
                            "defaultValue": "",
                            "isValid": true,
                            "errorMessage": null,
                            "isValue": [
                              "isValue"
                            ],
                            "hasValue": false,
                            "isTouched": false
                          },
                          "branch": {
                            "value": [],
                            "identifier": "branch",
                            "isMultiple": false,
                            "options": [
                              {
                                "key": "Shop-in-shop",
                                "value": "Shop-in-shop",
                                "index": 0,
                                "selected": false
                              },
                              {
                                "key": "Agent",
                                "value": "Agent",
                                "index": 1,
                                "selected": false
                              },
                              {
                                "key": "Supplier",
                                "value": "Supplier",
                                "index": 2,
                                "selected": false
                              },
                              {
                                "key": "Ad Agency",
                                "value": "Ad Agency",
                                "index": 3,
                                "selected": false
                              },
                              {
                                "key": "Other",
                                "value": "Other",
                                "index": 4,
                                "selected": false
                              }
                            ],
                            "validations": [
                              "minLength:1"
                            ],
                            "errorMessages": [],
                            "isRequired": true,
                            "hidden": false,
                            "viesValidation": false,
                            "validateAgainst": null,
                            "defaultValue": [],
                            "isValid": false,
                            "isValue": [
                              "isValue"
                            ],
                            "hasValue": false,
                            "isTouched": false
                          }
                        },
                        "delivery": {
                          "company": {
                            "value": "",
                            "identifier": "company",
                            "isMultiple": false,
                            "options": null,
                            "validations": [
                              "minLength:1"
                            ],
                            "errorMessages": [],
                            "isRequired": true,
                            "hidden": false,
                            "viesValidation": false,
                            "validateAgainst": null,
                            "defaultValue": "",
                            "isValid": true,
                            "errorMessage": null,
                            "isValue": [
                              "isValue"
                            ],
                            "hasValue": false,
                            "isTouched": false
                          },
                          "address": {
                            "value": "",
                            "identifier": "address",
                            "isMultiple": false,
                            "options": null,
                            "validations": [
                              "minLength:1"
                            ],
                            "errorMessages": [],
                            "isRequired": true,
                            "hidden": false,
                            "viesValidation": false,
                            "validateAgainst": null,
                            "defaultValue": "",
                            "isValid": true,
                            "errorMessage": null,
                            "isValue": [
                              "isValue"
                            ],
                            "hasValue": false,
                            "isTouched": false
                          },
                          "zip": {
                            "value": "",
                            "identifier": "zip",
                            "isMultiple": false,
                            "options": null,
                            "validations": [
                              "minLength:1"
                            ],
                            "errorMessages": [],
                            "isRequired": true,
                            "hidden": false,
                            "viesValidation": false,
                            "validateAgainst": null,
                            "defaultValue": "",
                            "isValid": true,
                            "errorMessage": null,
                            "isValue": [
                              "isValue"
                            ],
                            "hasValue": false,
                            "isTouched": false
                          },
                          "country": {
                            "value": "",
                            "identifier": "country",
                            "isMultiple": false,
                            "options": null,
                            "validations": [
                              "minLength:0"
                            ],
                            "errorMessages": [],
                            "isRequired": false,
                            "hidden": false,
                            "viesValidation": false,
                            "validateAgainst": null,
                            "dependents": [
                              [
                                "..",
                                "vat"
                              ]
                            ],
                            "defaultValue": "",
                            "isValid": true,
                            "errorMessage": null,
                            "isValue": [
                              "isValue"
                            ],
                            "hasValue": false,
                            "isTouched": false
                          },
                          "city": {
                            "value": "",
                            "identifier": "city",
                            "isMultiple": false,
                            "options": null,
                            "validations": [
                              "minLength:1"
                            ],
                            "errorMessages": [],
                            "isRequired": true,
                            "hidden": false,
                            "viesValidation": false,
                            "validateAgainst": null,
                            "defaultValue": "",
                            "isValid": true,
                            "errorMessage": null,
                            "isValue": [
                              "isValue"
                            ],
                            "hasValue": false,
                            "isTouched": false
                          },
                          "phone": {
                            "value": "",
                            "identifier": "phone",
                            "isMultiple": false,
                            "options": null,
                            "validations": [
                              "minLength:1"
                            ],
                            "errorMessages": [],
                            "isRequired": true,
                            "hidden": false,
                            "viesValidation": false,
                            "validateAgainst": null,
                            "defaultValue": "",
                            "isValid": true,
                            "errorMessage": null,
                            "isValue": [
                              "isValue"
                            ],
                            "hasValue": false,
                            "isTouched": false
                          },
                          "vat": {
                            "value": "",
                            "identifier": "vat",
                            "isMultiple": false,
                            "options": null,
                            "validations": [
                              "minLength:0",
                              "noWhitespace"
                            ],
                            "errorMessages": [
                              {
                                "key": ""
                              },
                              {
                                "key": "errors.whitespace"
                              }
                            ],
                            "isRequired": false,
                            "hidden": false,
                            "viesValidation": true,
                            "validateAgainst": "country",
                            "defaultValue": "",
                            "isValid": true,
                            "errorMessage": null,
                            "isValue": [
                              "isValue"
                            ],
                            "hasValue": false,
                            "isTouched": false
                          },
                          "branch": {
                            "value": [],
                            "identifier": "branch",
                            "isMultiple": false,
                            "options": [
                              {
                                "key": "Shop-in-shop",
                                "value": "Shop-in-shop",
                                "index": 0,
                                "selected": false
                              },
                              {
                                "key": "Agent",
                                "value": "Agent",
                                "index": 1,
                                "selected": false
                              },
                              {
                                "key": "Supplier",
                                "value": "Supplier",
                                "index": 2,
                                "selected": false
                              },
                              {
                                "key": "Ad Agency",
                                "value": "Ad Agency",
                                "index": 3,
                                "selected": false
                              },
                              {
                                "key": "Other",
                                "value": "Other",
                                "index": 4,
                                "selected": false
                              }
                            ],
                            "validations": [
                              "minLength:1"
                            ],
                            "errorMessages": [],
                            "isRequired": true,
                            "hidden": false,
                            "viesValidation": false,
                            "validateAgainst": null,
                            "defaultValue": [],
                            "isValid": false,
                            "isValue": [
                              "isValue"
                            ],
                            "hasValue": false,
                            "isTouched": false
                          }
                        }
                      }
                    ]
                  }
                ],
                "serviceCalls": [],
                "isAsync": false,
                "outputPath": null,
                "isExecuting": false,
                "hasExecuted": true,
                "path": [
                  0,
                  0,
                  "outputs",
                  "success",
                  3
                ],
                "outputs": null,
                "actionIndex": 4
              },
              {
                "name": "setLocale",
                "input": {
                  "result": {
                    "client": {
                      "name": "Test Customer",
                      "favicon": "http://testhost.se/media?id=435123&conversation=5eaf61aec2b76bf4fb6a08b222b167ee",
                      "url": "localhost:3000"
                    }
                  }
                },
                "output": {},
                "duration": 24,
                "mutations": [],
                "serviceCalls": [],
                "isAsync": false,
                "outputPath": null,
                "isExecuting": false,
                "hasExecuted": true,
                "path": [
                  0,
                  0,
                  "outputs",
                  "success",
                  4
                ],
                "outputs": null,
                "actionIndex": 5
              }
            ]
          },
          "actionIndex": 0,
          "signals": [
            {
              "name": "login.setLogin",
              "start": 1458907331693,
              "isSync": true,
              "isRouted": true,
              "isExecuting": false,
              "isPrevented": false,
              "isRecorded": false,
              "branches": [
                {
                  "name": "addons.set(\"state:/client.currentPage\", \"login\")",
                  "input": {},
                  "output": {},
                  "duration": 5,
                  "mutations": [
                    {
                      "name": "set",
                      "path": [
                        "client",
                        "currentPage"
                      ],
                      "args": [
                        "login"
                      ]
                    }
                  ],
                  "serviceCalls": [],
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
              "options": {
                "isRouted": true
              },
              "duration": 0,
              "input": {}
            }
          ]
        }
      ],
      {
        "name": "addons.set(\"state:/app.loaded\", true)",
        "input": {
          "result": {
            "client": {
              "name": "Test Customer",
              "favicon": "http://testhost.se/media?id=435123&conversation=5eaf61aec2b76bf4fb6a08b222b167ee",
              "url": "localhost:3000"
            }
          }
        },
        "output": {},
        "duration": 1,
        "mutations": [
          {
            "name": "set",
            "path": [
              "app",
              "loaded"
            ],
            "args": [
              true
            ]
          }
        ],
        "serviceCalls": [],
        "isAsync": false,
        "outputPath": null,
        "isExecuting": false,
        "hasExecuted": true,
        "path": [
          1
        ],
        "outputs": null,
        "actionIndex": 6
      }
    ],
    "options": {},
    "duration": 0
  },
  {
    "name": "client.focusField",
    "start": 1458907357990,
    "isRouted": false,
    "isExecuting": false,
    "isPrevented": false,
    "isRecorded": false,
    "branches": [
      {
        "name": "focusField",
        "input": {
          "path": [
            "client",
            "registrating",
            "current",
            "login",
            "password"
          ],
          "focus": true,
          "shouldBlur": false
        },
        "output": {},
        "duration": 4,
        "mutations": [
          {
            "name": "merge",
            "path": [
              "client",
              "registrating",
              "current",
              "login",
              "username"
            ],
            "args": [
              {
                "hasFocus": false
              }
            ]
          },
          {
            "name": "merge",
            "path": [
              "client",
              "registrating",
              "current",
              "login",
              "password"
            ],
            "args": [
              {
                "hasFocus": false
              }
            ]
          },
          {
            "name": "merge",
            "path": [
              "client",
              "registrating",
              "current",
              "login",
              "password"
            ],
            "args": [
              {
                "hasFocus": true
              }
            ]
          }
        ],
        "serviceCalls": [],
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
    "options": {},
    "duration": 0,
    "input": {
      "path": [
        "client",
        "registrating",
        "current",
        "login",
        "password"
      ],
      "focus": true,
      "shouldBlur": false
    }
  },
  {
    "name": "forms.fieldChanged",
    "start": 1458907359621,
    "isSync": true,
    "isRouted": false,
    "isExecuting": false,
    "isPrevented": false,
    "isRecorded": false,
    "branches": [
      {
        "name": "touchField",
        "input": {
          "field": [
            "client",
            "registrating",
            "current",
            "login",
            "password"
          ],
          "value": "t",
          "touched": true
        },
        "output": {},
        "duration": 0,
        "mutations": [
          {
            "name": "set",
            "path": [
              "client",
              "registrating",
              "current",
              "login",
              "password",
              "isTouched"
            ],
            "args": [
              true
            ]
          }
        ],
        "serviceCalls": [],
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
        "name": "updateValue",
        "input": {
          "field": [
            "client",
            "registrating",
            "current",
            "login",
            "password"
          ],
          "value": "t",
          "touched": true
        },
        "output": {},
        "duration": 0,
        "mutations": [
          {
            "name": "set",
            "path": [
              "client",
              "registrating",
              "current",
              "login",
              "password",
              "value"
            ],
            "args": [
              "t"
            ]
          }
        ],
        "serviceCalls": [],
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
      {
        "name": "hasValue",
        "input": {
          "field": [
            "client",
            "registrating",
            "current",
            "login",
            "password"
          ],
          "value": "t",
          "touched": true
        },
        "output": {},
        "duration": 0,
        "mutations": [
          {
            "name": "set",
            "path": [
              "client",
              "registrating",
              "current",
              "login",
              "password",
              "hasValue"
            ],
            "args": [
              true
            ]
          }
        ],
        "serviceCalls": [],
        "isAsync": false,
        "outputPath": null,
        "isExecuting": false,
        "hasExecuted": true,
        "path": [
          2
        ],
        "outputs": null,
        "actionIndex": 2
      },
      {
        "name": "validateRequired",
        "input": {
          "field": [
            "client",
            "registrating",
            "current",
            "login",
            "password"
          ],
          "value": "t",
          "touched": true
        },
        "output": {},
        "duration": 0,
        "mutations": [
          {
            "name": "merge",
            "path": [
              "client",
              "registrating",
              "current",
              "login",
              "password"
            ],
            "args": [
              {
                "isValid": true,
                "errorMessage": null
              }
            ]
          }
        ],
        "serviceCalls": [],
        "isAsync": false,
        "outputPath": null,
        "isExecuting": false,
        "hasExecuted": true,
        "path": [
          3
        ],
        "outputs": null,
        "actionIndex": 3
      },
      {
        "name": "shouldValidate",
        "input": {
          "field": [
            "client",
            "registrating",
            "current",
            "login",
            "password"
          ],
          "value": "t",
          "touched": true
        },
        "output": {},
        "duration": 5,
        "mutations": [],
        "serviceCalls": [],
        "isAsync": false,
        "outputPath": "no",
        "isExecuting": false,
        "hasExecuted": true,
        "path": [
          4
        ],
        "outputs": {
          "yes": [
            {
              "name": "validate",
              "input": {},
              "output": null,
              "duration": 0,
              "mutations": [],
              "serviceCalls": [],
              "isAsync": false,
              "outputPath": null,
              "isExecuting": false,
              "hasExecuted": false,
              "path": [
                4,
                "outputs",
                "yes",
                0
              ],
              "outputs": null,
              "actionIndex": 5
            }
          ],
          "no": []
        },
        "actionIndex": 4
      }
    ],
    "options": {},
    "duration": 0,
    "input": {
      "field": [
        "client",
        "registrating",
        "current",
        "login",
        "password"
      ],
      "value": "t",
      "touched": true
    }
  },
  {
    "name": "forms.fieldChanged",
    "start": 1458907359811,
    "isSync": true,
    "isRouted": false,
    "isExecuting": false,
    "isPrevented": false,
    "isRecorded": false,
    "branches": [
      {
        "name": "touchField",
        "input": {
          "field": [
            "client",
            "registrating",
            "current",
            "login",
            "password"
          ],
          "value": "te",
          "touched": true
        },
        "output": {},
        "duration": 0,
        "mutations": [
          {
            "name": "set",
            "path": [
              "client",
              "registrating",
              "current",
              "login",
              "password",
              "isTouched"
            ],
            "args": [
              true
            ]
          }
        ],
        "serviceCalls": [],
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
        "name": "updateValue",
        "input": {
          "field": [
            "client",
            "registrating",
            "current",
            "login",
            "password"
          ],
          "value": "te",
          "touched": true
        },
        "output": {},
        "duration": 0,
        "mutations": [
          {
            "name": "set",
            "path": [
              "client",
              "registrating",
              "current",
              "login",
              "password",
              "value"
            ],
            "args": [
              "te"
            ]
          }
        ],
        "serviceCalls": [],
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
      {
        "name": "hasValue",
        "input": {
          "field": [
            "client",
            "registrating",
            "current",
            "login",
            "password"
          ],
          "value": "te",
          "touched": true
        },
        "output": {},
        "duration": 0,
        "mutations": [
          {
            "name": "set",
            "path": [
              "client",
              "registrating",
              "current",
              "login",
              "password",
              "hasValue"
            ],
            "args": [
              true
            ]
          }
        ],
        "serviceCalls": [],
        "isAsync": false,
        "outputPath": null,
        "isExecuting": false,
        "hasExecuted": true,
        "path": [
          2
        ],
        "outputs": null,
        "actionIndex": 2
      },
      {
        "name": "validateRequired",
        "input": {
          "field": [
            "client",
            "registrating",
            "current",
            "login",
            "password"
          ],
          "value": "te",
          "touched": true
        },
        "output": {},
        "duration": 0,
        "mutations": [
          {
            "name": "merge",
            "path": [
              "client",
              "registrating",
              "current",
              "login",
              "password"
            ],
            "args": [
              {
                "isValid": true,
                "errorMessage": null
              }
            ]
          }
        ],
        "serviceCalls": [],
        "isAsync": false,
        "outputPath": null,
        "isExecuting": false,
        "hasExecuted": true,
        "path": [
          3
        ],
        "outputs": null,
        "actionIndex": 3
      },
      {
        "name": "shouldValidate",
        "input": {
          "field": [
            "client",
            "registrating",
            "current",
            "login",
            "password"
          ],
          "value": "te",
          "touched": true
        },
        "output": {},
        "duration": 7,
        "mutations": [],
        "serviceCalls": [],
        "isAsync": false,
        "outputPath": "no",
        "isExecuting": false,
        "hasExecuted": true,
        "path": [
          4
        ],
        "outputs": {
          "yes": [
            {
              "name": "validate",
              "input": {},
              "output": null,
              "duration": 0,
              "mutations": [],
              "serviceCalls": [],
              "isAsync": false,
              "outputPath": null,
              "isExecuting": false,
              "hasExecuted": false,
              "path": [
                4,
                "outputs",
                "yes",
                0
              ],
              "outputs": null,
              "actionIndex": 5
            }
          ],
          "no": []
        },
        "actionIndex": 4
      }
    ],
    "options": {},
    "duration": 0,
    "input": {
      "field": [
        "client",
        "registrating",
        "current",
        "login",
        "password"
      ],
      "value": "te",
      "touched": true
    }
  },
  {
    "name": "forms.fieldChanged",
    "start": 1458907360018,
    "isSync": true,
    "isRouted": false,
    "isExecuting": false,
    "isPrevented": false,
    "isRecorded": false,
    "branches": [
      {
        "name": "touchField",
        "input": {
          "field": [
            "client",
            "registrating",
            "current",
            "login",
            "password"
          ],
          "value": "tes",
          "touched": true
        },
        "output": {},
        "duration": 0,
        "mutations": [
          {
            "name": "set",
            "path": [
              "client",
              "registrating",
              "current",
              "login",
              "password",
              "isTouched"
            ],
            "args": [
              true
            ]
          }
        ],
        "serviceCalls": [],
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
        "name": "updateValue",
        "input": {
          "field": [
            "client",
            "registrating",
            "current",
            "login",
            "password"
          ],
          "value": "tes",
          "touched": true
        },
        "output": {},
        "duration": 0,
        "mutations": [
          {
            "name": "set",
            "path": [
              "client",
              "registrating",
              "current",
              "login",
              "password",
              "value"
            ],
            "args": [
              "tes"
            ]
          }
        ],
        "serviceCalls": [],
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
      {
        "name": "hasValue",
        "input": {
          "field": [
            "client",
            "registrating",
            "current",
            "login",
            "password"
          ],
          "value": "tes",
          "touched": true
        },
        "output": {},
        "duration": 0,
        "mutations": [
          {
            "name": "set",
            "path": [
              "client",
              "registrating",
              "current",
              "login",
              "password",
              "hasValue"
            ],
            "args": [
              true
            ]
          }
        ],
        "serviceCalls": [],
        "isAsync": false,
        "outputPath": null,
        "isExecuting": false,
        "hasExecuted": true,
        "path": [
          2
        ],
        "outputs": null,
        "actionIndex": 2
      },
      {
        "name": "validateRequired",
        "input": {
          "field": [
            "client",
            "registrating",
            "current",
            "login",
            "password"
          ],
          "value": "tes",
          "touched": true
        },
        "output": {},
        "duration": 0,
        "mutations": [
          {
            "name": "merge",
            "path": [
              "client",
              "registrating",
              "current",
              "login",
              "password"
            ],
            "args": [
              {
                "isValid": true,
                "errorMessage": null
              }
            ]
          }
        ],
        "serviceCalls": [],
        "isAsync": false,
        "outputPath": null,
        "isExecuting": false,
        "hasExecuted": true,
        "path": [
          3
        ],
        "outputs": null,
        "actionIndex": 3
      },
      {
        "name": "shouldValidate",
        "input": {
          "field": [
            "client",
            "registrating",
            "current",
            "login",
            "password"
          ],
          "value": "tes",
          "touched": true
        },
        "output": {},
        "duration": 8,
        "mutations": [],
        "serviceCalls": [],
        "isAsync": false,
        "outputPath": "no",
        "isExecuting": false,
        "hasExecuted": true,
        "path": [
          4
        ],
        "outputs": {
          "yes": [
            {
              "name": "validate",
              "input": {},
              "output": null,
              "duration": 0,
              "mutations": [],
              "serviceCalls": [],
              "isAsync": false,
              "outputPath": null,
              "isExecuting": false,
              "hasExecuted": false,
              "path": [
                4,
                "outputs",
                "yes",
                0
              ],
              "outputs": null,
              "actionIndex": 5
            }
          ],
          "no": []
        },
        "actionIndex": 4
      }
    ],
    "options": {},
    "duration": 0,
    "input": {
      "field": [
        "client",
        "registrating",
        "current",
        "login",
        "password"
      ],
      "value": "tes",
      "touched": true
    }
  },
  {
    "name": "forms.fieldChanged",
    "start": 1458907360204,
    "isSync": true,
    "isRouted": false,
    "isExecuting": false,
    "isPrevented": false,
    "isRecorded": false,
    "branches": [
      {
        "name": "touchField",
        "input": {
          "field": [
            "client",
            "registrating",
            "current",
            "login",
            "password"
          ],
          "value": "test",
          "touched": true
        },
        "output": {},
        "duration": 0,
        "mutations": [
          {
            "name": "set",
            "path": [
              "client",
              "registrating",
              "current",
              "login",
              "password",
              "isTouched"
            ],
            "args": [
              true
            ]
          }
        ],
        "serviceCalls": [],
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
        "name": "updateValue",
        "input": {
          "field": [
            "client",
            "registrating",
            "current",
            "login",
            "password"
          ],
          "value": "test",
          "touched": true
        },
        "output": {},
        "duration": 0,
        "mutations": [
          {
            "name": "set",
            "path": [
              "client",
              "registrating",
              "current",
              "login",
              "password",
              "value"
            ],
            "args": [
              "test"
            ]
          }
        ],
        "serviceCalls": [],
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
      {
        "name": "hasValue",
        "input": {
          "field": [
            "client",
            "registrating",
            "current",
            "login",
            "password"
          ],
          "value": "test",
          "touched": true
        },
        "output": {},
        "duration": 0,
        "mutations": [
          {
            "name": "set",
            "path": [
              "client",
              "registrating",
              "current",
              "login",
              "password",
              "hasValue"
            ],
            "args": [
              true
            ]
          }
        ],
        "serviceCalls": [],
        "isAsync": false,
        "outputPath": null,
        "isExecuting": false,
        "hasExecuted": true,
        "path": [
          2
        ],
        "outputs": null,
        "actionIndex": 2
      },
      {
        "name": "validateRequired",
        "input": {
          "field": [
            "client",
            "registrating",
            "current",
            "login",
            "password"
          ],
          "value": "test",
          "touched": true
        },
        "output": {},
        "duration": 0,
        "mutations": [
          {
            "name": "merge",
            "path": [
              "client",
              "registrating",
              "current",
              "login",
              "password"
            ],
            "args": [
              {
                "isValid": true,
                "errorMessage": null
              }
            ]
          }
        ],
        "serviceCalls": [],
        "isAsync": false,
        "outputPath": null,
        "isExecuting": false,
        "hasExecuted": true,
        "path": [
          3
        ],
        "outputs": null,
        "actionIndex": 3
      },
      {
        "name": "shouldValidate",
        "input": {
          "field": [
            "client",
            "registrating",
            "current",
            "login",
            "password"
          ],
          "value": "test",
          "touched": true
        },
        "output": {},
        "duration": 6,
        "mutations": [],
        "serviceCalls": [],
        "isAsync": false,
        "outputPath": "no",
        "isExecuting": false,
        "hasExecuted": true,
        "path": [
          4
        ],
        "outputs": {
          "yes": [
            {
              "name": "validate",
              "input": {},
              "output": null,
              "duration": 0,
              "mutations": [],
              "serviceCalls": [],
              "isAsync": false,
              "outputPath": null,
              "isExecuting": false,
              "hasExecuted": false,
              "path": [
                4,
                "outputs",
                "yes",
                0
              ],
              "outputs": null,
              "actionIndex": 5
            }
          ],
          "no": []
        },
        "actionIndex": 4
      }
    ],
    "options": {},
    "duration": 0,
    "input": {
      "field": [
        "client",
        "registrating",
        "current",
        "login",
        "password"
      ],
      "value": "test",
      "touched": true
    }
  },
  {
    "name": "client.focusField",
    "start": 1458907361225,
    "isRouted": false,
    "isExecuting": false,
    "isPrevented": false,
    "isRecorded": false,
    "branches": [
      {
        "name": "focusField",
        "input": {
          "focus": false
        },
        "output": {},
        "duration": 2,
        "mutations": [
          {
            "name": "merge",
            "path": [
              "client",
              "registrating",
              "current",
              "login",
              "username"
            ],
            "args": [
              {
                "hasFocus": false
              }
            ]
          },
          {
            "name": "merge",
            "path": [
              "client",
              "registrating",
              "current",
              "login",
              "password"
            ],
            "args": [
              {
                "hasFocus": false
              }
            ]
          }
        ],
        "serviceCalls": [],
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
    "options": {},
    "duration": 0,
    "input": {
      "focus": false
    }
  },
  {
    "name": "login.onSignIn",
    "start": 1458907361300,
    "isRouted": false,
    "isExecuting": false,
    "isPrevented": false,
    "isRecorded": false,
    "branches": [
      [
        {
          "name": "sendSignInInfo",
          "input": {},
          "output": {
            "result": {
              "firstname": "Mathias",
              "lastname": "Nilsson",
              "email": "wicket.programmer@gmail.com"
            }
          },
          "duration": 0,
          "mutations": [],
          "serviceCalls": [
            {
              "name": "Http",
              "method": "post",
              "args": [
                "/api/signin",
                {
                  "username": "wicket.programmer@gmail.com",
                  "password": "test"
                }
              ]
            }
          ],
          "isAsync": true,
          "outputPath": "success",
          "isExecuting": false,
          "hasExecuted": true,
          "path": [
            0,
            0
          ],
          "outputs": {
            "error": [],
            "success": [
              {
                "name": "",
                "input": {
                  "result": {
                    "firstname": "Mathias",
                    "lastname": "Nilsson",
                    "email": "wicket.programmer@gmail.com"
                  }
                },
                "output": {},
                "duration": 4,
                "mutations": [
                  {
                    "name": "set",
                    "path": [
                      "user"
                    ],
                    "args": [
                      {
                        "firstname": "Mathias",
                        "lastname": "Nilsson",
                        "email": "wicket.programmer@gmail.com"
                      }
                    ]
                  }
                ],
                "serviceCalls": [],
                "isAsync": false,
                "outputPath": null,
                "isExecuting": false,
                "hasExecuted": true,
                "path": [
                  0,
                  0,
                  "outputs",
                  "success",
                  0
                ],
                "outputs": null,
                "actionIndex": 1
              }
            ]
          },
          "actionIndex": 0,
          "signals": [
            {
              "name": "client.focusField",
              "start": 1458907361304,
              "isRouted": false,
              "isExecuting": false,
              "isPrevented": false,
              "isRecorded": false,
              "branches": [
                {
                  "name": "focusField",
                  "input": {
                    "focus": false
                  },
                  "output": {},
                  "duration": 2,
                  "mutations": [
                    {
                      "name": "merge",
                      "path": [
                        "client",
                        "registrating",
                        "current",
                        "login",
                        "username"
                      ],
                      "args": [
                        {
                          "hasFocus": false
                        }
                      ]
                    },
                    {
                      "name": "merge",
                      "path": [
                        "client",
                        "registrating",
                        "current",
                        "login",
                        "password"
                      ],
                      "args": [
                        {
                          "hasFocus": false
                        }
                      ]
                    }
                  ],
                  "serviceCalls": [],
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
              "options": {},
              "duration": 0,
              "input": {
                "focus": false
              }
            }
          ]
        }
      ]
    ],
    "options": {},
    "duration": 0
  }
]
