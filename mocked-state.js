var MockedState = {
  "willKeepState": false,
	"disableDebugger": false,
	"currentSignalIndex": 13,
	"isExecutingAsync": false,
	"isRemembering": false,
	"computedPaths": [],
	"signals": [{
		"name": "course.courseOpened",
		"start": 1452156342768,
		"isSync": true,
		"isExecuting": false,
		"branches": [
			[{
				"name": "createSessionId",
				"input": {
					"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
					"sceneIndex": "0"
				},
				"output": {
					"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246"
				},
				"duration": 0,
				"mutations": [],
				"isAsync": true,
				"outputPath": "success",
				"isExecuting": false,
				"hasExecuted": true,
				"path": [0, 0],
				"outputs": {
					"success": [{
							"name": "setSessionId",
							"input": {
								"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
								"sceneIndex": "0",
								"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246"
							},
							"duration": 1,
							"mutations": [{
								"name": "set",
								"path": ["session", "sessionId"],
								"args": ["bcc9350d-113c-4f75-951b-205f39a31246"]
							}],
							"isAsync": false,
							"outputPath": null,
							"isExecuting": false,
							"hasExecuted": true,
							"path": [0, 0, "outputs", "success", 0],
							"outputs": null,
							"actionIndex": 1
						},
						[{
							"name": "trackData",
							"input": {
								"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
								"sceneIndex": "0",
								"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246"
							},
							"duration": 0,
							"mutations": [],
							"isAsync": true,
							"outputPath": "success",
							"isExecuting": false,
							"hasExecuted": true,
							"path": [0, 0, "outputs", "success", 1, 0],
							"outputs": {
								"success": [],
								"error": []
							},
							"actionIndex": 2
						}], {
							"name": "condition (isLoggedIn)",
							"input": {
								"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
								"sceneIndex": "0",
								"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246"
							},
							"duration": 0,
							"mutations": [],
							"isAsync": false,
							"outputPath": "false",
							"isExecuting": false,
							"hasExecuted": true,
							"path": [0, 0, "outputs", "success", 2],
							"outputs": {
								"true": [{
										"name": "setPage",
										"input": {},
										"output": null,
										"duration": 0,
										"mutations": [],
										"isAsync": false,
										"outputPath": null,
										"isExecuting": false,
										"hasExecuted": false,
										"path": [0, 0, "outputs", "success", 2, "outputs", "true", 0],
										"outputs": null,
										"actionIndex": 4
									}, {
										"name": "isSameCourse",
										"input": {},
										"output": null,
										"duration": 0,
										"mutations": [],
										"isAsync": false,
										"outputPath": null,
										"isExecuting": false,
										"hasExecuted": false,
										"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1],
										"outputs": {
											"true": [{
													"name": "showSnackbar",
													"input": {},
													"output": null,
													"duration": 0,
													"mutations": [],
													"isAsync": false,
													"outputPath": null,
													"isExecuting": false,
													"hasExecuted": false,
													"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 0],
													"outputs": null,
													"actionIndex": 6
												}, {
													"name": "SET showScenesList",
													"input": {},
													"output": null,
													"duration": 0,
													"mutations": [],
													"isAsync": false,
													"outputPath": null,
													"isExecuting": false,
													"hasExecuted": false,
													"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 1],
													"outputs": null,
													"actionIndex": 7
												},
												[{
													"name": "loadScene",
													"input": {},
													"output": null,
													"duration": 0,
													"mutations": [],
													"isAsync": true,
													"outputPath": null,
													"isExecuting": false,
													"hasExecuted": false,
													"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 2, 0],
													"outputs": null,
													"actionIndex": 8
												}], {
													"name": "sceneDidLoad",
													"input": {},
													"output": null,
													"duration": 0,
													"mutations": [],
													"isAsync": false,
													"outputPath": null,
													"isExecuting": false,
													"hasExecuted": false,
													"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 3],
													"outputs": {
														"true": [{
																"name": "setScene",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 3, "outputs", "true", 0],
																"outputs": null,
																"actionIndex": 10
															}, {
																"name": "setAssignmentPoints",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 3, "outputs", "true", 1],
																"outputs": null,
																"actionIndex": 11
															}, {
																"name": "setSandboxSnapshot",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 3, "outputs", "true", 2],
																"outputs": null,
																"actionIndex": 12
															}, {
																"name": "setPreviewUrl",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 3, "outputs", "true", 3],
																"outputs": null,
																"actionIndex": 13
															}, {
																"name": "SET isLoadingPreview",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 3, "outputs", "true", 4],
																"outputs": null,
																"actionIndex": 14
															},
															[{
																"name": "saveSandbox",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": true,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 3, "outputs", "true", 5, 0],
																"outputs": {
																	"success": [{
																		"name": "SET isLoadingPreview",
																		"input": {},
																		"output": null,
																		"duration": 0,
																		"mutations": [],
																		"isAsync": false,
																		"outputPath": null,
																		"isExecuting": false,
																		"hasExecuted": false,
																		"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 3, "outputs", "true", 5, 0, "outputs", "success", 0],
																		"outputs": null,
																		"actionIndex": 16
																	}],
																	"error": [{
																		"name": "showSnackbar",
																		"input": {},
																		"output": null,
																		"duration": 0,
																		"mutations": [],
																		"isAsync": false,
																		"outputPath": null,
																		"isExecuting": false,
																		"hasExecuted": false,
																		"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 3, "outputs", "true", 5, 0, "outputs", "error", 0],
																		"outputs": null,
																		"actionIndex": 17
																	}]
																},
																"actionIndex": 15
															}], {
																"name": "showSnackbar",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 3, "outputs", "true", 6],
																"outputs": null,
																"actionIndex": 18
															}
														],
														"false": [{
															"name": "showSnackbar",
															"input": {},
															"output": null,
															"duration": 0,
															"mutations": [],
															"isAsync": false,
															"outputPath": null,
															"isExecuting": false,
															"hasExecuted": false,
															"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 3, "outputs", "false", 0],
															"outputs": null,
															"actionIndex": 19
														}]
													},
													"actionIndex": 9
												}
											],
											"false": [{
													"name": "setDefaultCourseState",
													"input": {},
													"output": null,
													"duration": 0,
													"mutations": [],
													"isAsync": false,
													"outputPath": null,
													"isExecuting": false,
													"hasExecuted": false,
													"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 0],
													"outputs": null,
													"actionIndex": 20
												}, {
													"name": "setLoadingCourse",
													"input": {},
													"output": null,
													"duration": 0,
													"mutations": [],
													"isAsync": false,
													"outputPath": null,
													"isExecuting": false,
													"hasExecuted": false,
													"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 1],
													"outputs": null,
													"actionIndex": 21
												}, {
													"name": "SET isLoading",
													"input": {},
													"output": null,
													"duration": 0,
													"mutations": [],
													"isAsync": false,
													"outputPath": null,
													"isExecuting": false,
													"hasExecuted": false,
													"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 2],
													"outputs": null,
													"actionIndex": 22
												},
												[{
													"name": "loadCourse",
													"input": {},
													"output": null,
													"duration": 0,
													"mutations": [],
													"isAsync": true,
													"outputPath": null,
													"isExecuting": false,
													"hasExecuted": false,
													"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 3, 0],
													"outputs": null,
													"actionIndex": 23
												}, {
													"name": "loadScene",
													"input": {},
													"output": null,
													"duration": 0,
													"mutations": [],
													"isAsync": true,
													"outputPath": null,
													"isExecuting": false,
													"hasExecuted": false,
													"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 3, 1],
													"outputs": null,
													"actionIndex": 8
												}], {
													"name": "courseAndSceneDidLoad",
													"input": {},
													"output": null,
													"duration": 0,
													"mutations": [],
													"isAsync": false,
													"outputPath": null,
													"isExecuting": false,
													"hasExecuted": false,
													"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 4],
													"outputs": {
														"true": [{
																"name": "setCourse",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 4, "outputs", "true", 0],
																"outputs": null,
																"actionIndex": 25
															}, {
																"name": "setScene",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 4, "outputs", "true", 1],
																"outputs": null,
																"actionIndex": 10
															}, {
																"name": "setAssignmentPoints",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 4, "outputs", "true", 2],
																"outputs": null,
																"actionIndex": 11
															}, {
																"name": "setSandboxSnapshot",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 4, "outputs", "true", 3],
																"outputs": null,
																"actionIndex": 12
															}, {
																"name": "setPreviewUrl",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 4, "outputs", "true", 4],
																"outputs": null,
																"actionIndex": 13
															}, {
																"name": "SET isLoadingPreview",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 4, "outputs", "true", 5],
																"outputs": null,
																"actionIndex": 14
															},
															[{
																"name": "saveSandbox",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": true,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 4, "outputs", "true", 6, 0],
																"outputs": {
																	"success": [{
																		"name": "SET isLoadingPreview",
																		"input": {},
																		"output": null,
																		"duration": 0,
																		"mutations": [],
																		"isAsync": false,
																		"outputPath": null,
																		"isExecuting": false,
																		"hasExecuted": false,
																		"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 4, "outputs", "true", 6, 0, "outputs", "success", 0],
																		"outputs": null,
																		"actionIndex": 16
																	}],
																	"error": [{
																		"name": "showSnackbar",
																		"input": {},
																		"output": null,
																		"duration": 0,
																		"mutations": [],
																		"isAsync": false,
																		"outputPath": null,
																		"isExecuting": false,
																		"hasExecuted": false,
																		"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 4, "outputs", "true", 6, 0, "outputs", "error", 0],
																		"outputs": null,
																		"actionIndex": 17
																	}]
																},
																"actionIndex": 15
															}], {
																"name": "setLoadedCourse",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 4, "outputs", "true", 7],
																"outputs": null,
																"actionIndex": 26
															}
														],
														"false": [{
															"name": "showSnackbar",
															"input": {},
															"output": null,
															"duration": 0,
															"mutations": [],
															"isAsync": false,
															"outputPath": null,
															"isExecuting": false,
															"hasExecuted": false,
															"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 4, "outputs", "false", 0],
															"outputs": null,
															"actionIndex": 27
														}]
													},
													"actionIndex": 24
												}
											]
										},
										"actionIndex": 5
									},
									[{
										"name": "loadDescriptions",
										"input": {},
										"output": null,
										"duration": 0,
										"mutations": [],
										"isAsync": true,
										"outputPath": null,
										"isExecuting": false,
										"hasExecuted": false,
										"path": [0, 0, "outputs", "success", 2, "outputs", "true", 2, 0],
										"outputs": {
											"success": [{
												"name": "setDescriptions",
												"input": {},
												"output": null,
												"duration": 0,
												"mutations": [],
												"isAsync": false,
												"outputPath": null,
												"isExecuting": false,
												"hasExecuted": false,
												"path": [0, 0, "outputs", "success", 2, "outputs", "true", 2, 0, "outputs", "success", 0],
												"outputs": null,
												"actionIndex": 29
											}],
											"error": [{
												"name": "showSnackbar",
												"input": {},
												"output": null,
												"duration": 0,
												"mutations": [],
												"isAsync": false,
												"outputPath": null,
												"isExecuting": false,
												"hasExecuted": false,
												"path": [0, 0, "outputs", "success", 2, "outputs", "true", 2, 0, "outputs", "error", 0],
												"outputs": null,
												"actionIndex": 30
											}]
										},
										"actionIndex": 28
									}]
								],
								"false": [{
										"name": "showSnackbar",
										"input": {
											"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
											"sceneIndex": "0",
											"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246"
										},
										"duration": 0,
										"mutations": [{
											"name": "merge",
											"path": ["snackbar"],
											"args": [{
												"text": "Henter litt informasjon...",
												"show": true,
												"persist": false
											}]
										}],
										"isAsync": false,
										"outputPath": null,
										"isExecuting": false,
										"hasExecuted": true,
										"path": [0, 0, "outputs", "success", 2, "outputs", "false", 0],
										"outputs": null,
										"actionIndex": 31
									}, {
										"name": "SET isLoading",
										"input": {
											"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
											"sceneIndex": "0",
											"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246"
										},
										"duration": 1,
										"mutations": [{
											"name": "set",
											"path": ["user", "isLoading"],
											"args": [true]
										}],
										"isAsync": false,
										"outputPath": null,
										"isExecuting": false,
										"hasExecuted": true,
										"path": [0, 0, "outputs", "success", 2, "outputs", "false", 1],
										"outputs": null,
										"actionIndex": 32
									},
									[{
										"name": "get (/API/user)",
										"input": {
											"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
											"sceneIndex": "0",
											"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246"
										},
										"output": {
											"user": {
												"id": "christianalfoni@gmail.com",
												"isAdmin": true,
												"completedAssignments": {}
											}
										},
										"duration": 0,
										"mutations": [],
										"isAsync": true,
										"outputPath": "success",
										"isExecuting": false,
										"hasExecuted": true,
										"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0],
										"outputs": {
											"success": [{
													"name": "setUser",
													"input": {
														"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
														"sceneIndex": "0",
														"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246",
														"user": {
															"id": "christianalfoni@gmail.com",
															"isAdmin": true,
															"completedAssignments": {}
														}
													},
													"duration": 0,
													"mutations": [{
														"name": "merge",
														"path": ["user"],
														"args": [{
															"id": "christianalfoni@gmail.com",
															"isAdmin": true,
															"completedAssignments": {},
															"isLoggedIn": true,
															"isLoading": false
														}]
													}],
													"isAsync": false,
													"outputPath": null,
													"isExecuting": false,
													"hasExecuted": true,
													"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 0],
													"outputs": null,
													"actionIndex": 34
												}, {
													"name": "setPage",
													"input": {
														"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
														"sceneIndex": "0",
														"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246",
														"user": {
															"id": "christianalfoni@gmail.com",
															"isAdmin": true,
															"completedAssignments": {}
														}
													},
													"duration": 0,
													"mutations": [{
														"name": "set",
														"path": ["currentPage"],
														"args": ["course"]
													}],
													"isAsync": false,
													"outputPath": null,
													"isExecuting": false,
													"hasExecuted": true,
													"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 1],
													"outputs": null,
													"actionIndex": 4
												}, {
													"name": "isSameCourse",
													"input": {
														"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
														"sceneIndex": "0",
														"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246",
														"user": {
															"id": "christianalfoni@gmail.com",
															"isAdmin": true,
															"completedAssignments": {}
														}
													},
													"duration": 1,
													"mutations": [],
													"isAsync": false,
													"outputPath": "false",
													"isExecuting": false,
													"hasExecuted": true,
													"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2],
													"outputs": {
														"true": [{
																"name": "showSnackbar",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 0],
																"outputs": null,
																"actionIndex": 6
															}, {
																"name": "SET showScenesList",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 1],
																"outputs": null,
																"actionIndex": 7
															},
															[{
																"name": "loadScene",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": true,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 2, 0],
																"outputs": null,
																"actionIndex": 8
															}], {
																"name": "sceneDidLoad",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 3],
																"outputs": {
																	"true": [{
																			"name": "setScene",
																			"input": {},
																			"output": null,
																			"duration": 0,
																			"mutations": [],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": false,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 3, "outputs", "true", 0],
																			"outputs": null,
																			"actionIndex": 10
																		}, {
																			"name": "setAssignmentPoints",
																			"input": {},
																			"output": null,
																			"duration": 0,
																			"mutations": [],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": false,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 3, "outputs", "true", 1],
																			"outputs": null,
																			"actionIndex": 11
																		}, {
																			"name": "setSandboxSnapshot",
																			"input": {},
																			"output": null,
																			"duration": 0,
																			"mutations": [],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": false,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 3, "outputs", "true", 2],
																			"outputs": null,
																			"actionIndex": 12
																		}, {
																			"name": "setPreviewUrl",
																			"input": {},
																			"output": null,
																			"duration": 0,
																			"mutations": [],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": false,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 3, "outputs", "true", 3],
																			"outputs": null,
																			"actionIndex": 13
																		}, {
																			"name": "SET isLoadingPreview",
																			"input": {},
																			"output": null,
																			"duration": 0,
																			"mutations": [],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": false,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 3, "outputs", "true", 4],
																			"outputs": null,
																			"actionIndex": 14
																		},
																		[{
																			"name": "saveSandbox",
																			"input": {},
																			"output": null,
																			"duration": 0,
																			"mutations": [],
																			"isAsync": true,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": false,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 3, "outputs", "true", 5, 0],
																			"outputs": {
																				"success": [{
																					"name": "SET isLoadingPreview",
																					"input": {},
																					"output": null,
																					"duration": 0,
																					"mutations": [],
																					"isAsync": false,
																					"outputPath": null,
																					"isExecuting": false,
																					"hasExecuted": false,
																					"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 3, "outputs", "true", 5, 0, "outputs", "success", 0],
																					"outputs": null,
																					"actionIndex": 16
																				}],
																				"error": [{
																					"name": "showSnackbar",
																					"input": {},
																					"output": null,
																					"duration": 0,
																					"mutations": [],
																					"isAsync": false,
																					"outputPath": null,
																					"isExecuting": false,
																					"hasExecuted": false,
																					"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 3, "outputs", "true", 5, 0, "outputs", "error", 0],
																					"outputs": null,
																					"actionIndex": 17
																				}]
																			},
																			"actionIndex": 15
																		}], {
																			"name": "showSnackbar",
																			"input": {},
																			"output": null,
																			"duration": 0,
																			"mutations": [],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": false,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 3, "outputs", "true", 6],
																			"outputs": null,
																			"actionIndex": 18
																		}
																	],
																	"false": [{
																		"name": "showSnackbar",
																		"input": {},
																		"output": null,
																		"duration": 0,
																		"mutations": [],
																		"isAsync": false,
																		"outputPath": null,
																		"isExecuting": false,
																		"hasExecuted": false,
																		"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 3, "outputs", "false", 0],
																		"outputs": null,
																		"actionIndex": 19
																	}]
																},
																"actionIndex": 9
															}
														],
														"false": [{
																"name": "setDefaultCourseState",
																"input": {
																	"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																	"sceneIndex": "0",
																	"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246",
																	"user": {
																		"id": "christianalfoni@gmail.com",
																		"isAdmin": true,
																		"completedAssignments": {}
																	}
																},
																"duration": 0,
																"mutations": [{
																	"name": "merge",
																	"path": ["course"],
																	"args": [{
																		"name": "",
																		"isLoading": false,
																		"authorId": "christianalfoni@gmail.com",
																		"showPreview": true,
																		"showConsole": false,
																		"showEditAssignment": false,
																		"showAssignment": false,
																		"showConfigureScenes": false,
																		"showScenesList": false,
																		"showFolder": false,
																		"showAddFileInput": false,
																		"currentSceneIndex": 0,
																		"sandboxSnapshot": null,
																		"recorder": {
																			"isPlaying": false,
																			"isUploading": false,
																			"isRecording": false,
																			"hasRecorded": false
																		},
																		"scenes": []
																	}]
																}],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": true,
																"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 0],
																"outputs": null,
																"actionIndex": 20
															}, {
																"name": "setLoadingCourse",
																"input": {
																	"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																	"sceneIndex": "0",
																	"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246",
																	"user": {
																		"id": "christianalfoni@gmail.com",
																		"isAdmin": true,
																		"completedAssignments": {}
																	}
																},
																"duration": 0,
																"mutations": [{
																	"name": "merge",
																	"path": ["snackbar"],
																	"args": [{
																		"text": "Laster kurs...",
																		"show": true
																	}]
																}],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": true,
																"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 1],
																"outputs": null,
																"actionIndex": 21
															}, {
																"name": "SET isLoading",
																"input": {
																	"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																	"sceneIndex": "0",
																	"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246",
																	"user": {
																		"id": "christianalfoni@gmail.com",
																		"isAdmin": true,
																		"completedAssignments": {}
																	}
																},
																"duration": 2,
																"mutations": [{
																	"name": "set",
																	"path": ["course", "isLoading"],
																	"args": [true]
																}],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": true,
																"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 2],
																"outputs": null,
																"actionIndex": 22
															},
															[{
																"name": "loadCourse",
																"input": {
																	"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																	"sceneIndex": "0",
																	"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246",
																	"user": {
																		"id": "christianalfoni@gmail.com",
																		"isAdmin": true,
																		"completedAssignments": {}
																	}
																},
																"output": {
																	"course": {
																		"_id": "565edcfbd40082328ef02b7c",
																		"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																		"created": 1449057531702,
																		"name": "Demo",
																		"authorId": "christianalfoni@gmail.com",
																		"scenes": [{
																			"name": "Scene 1",
																			"currentFileIndex": 0,
																			"assignments": [{
																				"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																				"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																				"completed": false
																			}, {
																				"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																				"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																				"completed": false
																			}],
																			"recording": {
																				"initialState": {
																					"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																					"name": "Demo",
																					"mousePosition": {
																						"x": 71,
																						"y": 32
																					},
																					"isLoading": false,
																					"currentAssignmentStatus": {
																						"isLoading": false,
																						"result": null
																					},
																					"assignmentPoints": [],
																					"isLoadingMedia": false,
																					"authorId": "christianalfoni@gmail.com",
																					"showPreview": true,
																					"showConsole": false,
																					"showEditAssignment": false,
																					"showAssignment": false,
																					"showConfigureScenes": false,
																					"showScenesList": false,
																					"showFolder": false,
																					"showAddFileInput": false,
																					"currentSceneIndex": "0",
																					"currentAssignmentIndex": 0,
																					"sandboxSnapshot": [{
																						"name": "index.html",
																						"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																					}],
																					"newSceneName": "",
																					"newFileName": "",
																					"codeSelection": {
																						"anchor": {
																							"line": 8,
																							"ch": 7
																						},
																						"head": {
																							"line": 8,
																							"ch": 7
																						}
																					},
																					"scenes": [{
																						"name": "Scene 1",
																						"currentFileIndex": 0,
																						"files": [{
																							"name": "index.html",
																							"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																						}],
																						"assignments": [{
																							"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																							"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																							"completed": false
																						}, {
																							"description": "I denne oppgaven skal du lage et DIV element med teksten: \"Hvordan går det?\"",
																							"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																							"completed": false
																						}],
																						"recording": true,
																						"sandboxFiles": [{
																							"name": "index.html",
																							"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																						}]
																					}, {
																						"assignments": [{
																							"description": "",
																							"code": ""
																						}],
																						"name": "Scene 2"
																					}],
																					"scenesList": [{
																						"name": "Scene 1",
																						"assignmentsCount": 2
																					}, {
																						"name": "Scene 2",
																						"assignmentsCount": 1
																					}],
																					"recorder": {
																						"isPlaying": false,
																						"isUploading": false,
																						"isRecording": false,
																						"hasRecorded": false
																					},
																					"_id": "565edcfbd40082328ef02b7c",
																					"created": 1449057531702,
																					"previewUrl": "https://sandbox.kodeboksen.dev:3000?id=1452093444124",
																					"isLoadingPreview": false
																				},
																				"start": 1452093447151,
																				"signals": [{
																					"name": "snackbarTimedOut",
																					"input": {},
																					"start": 1452093447293,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.pauseClicked",
																					"input": {
																						"seek": 3103.783
																					},
																					"start": 1452093450078,
																					"asyncActionPaths": ["0.0"],
																					"asyncActionResults": [{
																						"outputPath": "success"
																					}]
																				}, {
																					"name": "course.appClicked",
																					"input": {
																						"mousePositionX": 23,
																						"mousePositionY": 31
																					},
																					"start": 1452093450079,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 0,
																							"ch": 0
																						},
																						"head": {
																							"line": 0,
																							"ch": 0
																						}
																					},
																					"start": 1452093450115,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 8,
																							"ch": 7
																						},
																						"head": {
																							"line": 8,
																							"ch": 7
																						}
																					},
																					"start": 1452093450117,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 28,
																							"xRel": 1
																						},
																						"head": {
																							"line": 6,
																							"ch": 28,
																							"xRel": 1
																						}
																					},
																					"start": 1452093453661,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.appClicked",
																					"input": {
																						"mousePositionX": 660,
																						"mousePositionY": 227
																					},
																					"start": 1452093453734,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 28,
																							"xRel": 1
																						},
																						"to": {
																							"line": 6,
																							"ch": 28,
																							"xRel": 1
																						},
																						"text": [" "]
																					},
																					"start": 1452093454471,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 29
																						},
																						"head": {
																							"line": 6,
																							"ch": 29
																						}
																					},
																					"start": 1452093454483,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 29
																						},
																						"to": {
																							"line": 6,
																							"ch": 29
																						},
																						"text": ["h"]
																					},
																					"start": 1452093454651,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 30
																						},
																						"head": {
																							"line": 6,
																							"ch": 30
																						}
																					},
																					"start": 1452093454656,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 30
																						},
																						"to": {
																							"line": 6,
																							"ch": 30
																						},
																						"text": ["e"]
																					},
																					"start": 1452093454712,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 31
																						},
																						"head": {
																							"line": 6,
																							"ch": 31
																						}
																					},
																					"start": 1452093454718,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 31
																						},
																						"to": {
																							"line": 6,
																							"ch": 31
																						},
																						"text": [" "]
																					},
																					"start": 1452093454856,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 32
																						},
																						"head": {
																							"line": 6,
																							"ch": 32
																						}
																					},
																					"start": 1452093454866,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 32
																						},
																						"to": {
																							"line": 6,
																							"ch": 32
																						},
																						"text": ["h"]
																					},
																					"start": 1452093455046,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 33
																						},
																						"head": {
																							"line": 6,
																							"ch": 33
																						}
																					},
																					"start": 1452093455050,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 33
																						},
																						"to": {
																							"line": 6,
																							"ch": 33
																						},
																						"text": ["e"]
																					},
																					"start": 1452093455096,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 34
																						},
																						"head": {
																							"line": 6,
																							"ch": 34
																						}
																					},
																					"start": 1452093455102,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 34
																						},
																						"to": {
																							"line": 6,
																							"ch": 34
																						},
																						"text": ["h"]
																					},
																					"start": 1452093455250,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 35
																						},
																						"head": {
																							"line": 6,
																							"ch": 35
																						}
																					},
																					"start": 1452093455255,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 35
																						},
																						"to": {
																							"line": 6,
																							"ch": 35
																						},
																						"text": [" "]
																					},
																					"start": 1452093455275,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 36
																						},
																						"head": {
																							"line": 6,
																							"ch": 36
																						}
																					},
																					"start": 1452093455279,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 36
																						},
																						"to": {
																							"line": 6,
																							"ch": 36
																						},
																						"text": ["h"]
																					},
																					"start": 1452093455483,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 37
																						},
																						"head": {
																							"line": 6,
																							"ch": 37
																						}
																					},
																					"start": 1452093455487,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 37
																						},
																						"to": {
																							"line": 6,
																							"ch": 37
																						},
																						"text": ["e"]
																					},
																					"start": 1452093455554,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 38
																						},
																						"head": {
																							"line": 6,
																							"ch": 38
																						}
																					},
																					"start": 1452093455558,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 38
																						},
																						"to": {
																							"line": 6,
																							"ch": 38
																						},
																						"text": [" "]
																					},
																					"start": 1452093456506,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 39
																						},
																						"head": {
																							"line": 6,
																							"ch": 39
																						}
																					},
																					"start": 1452093456510,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 39
																						},
																						"to": {
																							"line": 6,
																							"ch": 39
																						},
																						"text": ["h"]
																					},
																					"start": 1452093456623,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 40
																						},
																						"head": {
																							"line": 6,
																							"ch": 40
																						}
																					},
																					"start": 1452093456629,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 40
																						},
																						"to": {
																							"line": 6,
																							"ch": 40
																						},
																						"text": ["e"]
																					},
																					"start": 1452093456658,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 41
																						},
																						"head": {
																							"line": 6,
																							"ch": 41
																						}
																					},
																					"start": 1452093456662,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 41
																						},
																						"to": {
																							"line": 6,
																							"ch": 41
																						},
																						"text": ["h"]
																					},
																					"start": 1452093456815,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 42
																						},
																						"head": {
																							"line": 6,
																							"ch": 42
																						}
																					},
																					"start": 1452093456819,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 42
																						},
																						"to": {
																							"line": 6,
																							"ch": 42
																						},
																						"text": ["e"]
																					},
																					"start": 1452093456891,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 43
																						},
																						"head": {
																							"line": 6,
																							"ch": 43
																						}
																					},
																					"start": 1452093456896,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 43
																						},
																						"to": {
																							"line": 6,
																							"ch": 43
																						},
																						"text": [" "]
																					},
																					"start": 1452093456923,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 44
																						},
																						"head": {
																							"line": 6,
																							"ch": 44
																						}
																					},
																					"start": 1452093456928,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 44
																						},
																						"to": {
																							"line": 6,
																							"ch": 44
																						},
																						"text": ["h"]
																					},
																					"start": 1452093457234,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 45
																						},
																						"head": {
																							"line": 6,
																							"ch": 45
																						}
																					},
																					"start": 1452093457238,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 45
																						},
																						"to": {
																							"line": 6,
																							"ch": 45
																						},
																						"text": ["e"]
																					},
																					"start": 1452093457326,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 46
																						},
																						"head": {
																							"line": 6,
																							"ch": 46
																						}
																					},
																					"start": 1452093457332,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.saveShortcutPressed",
																					"start": 1452093457755,
																					"asyncActionPaths": ["0.0", "1.outputs.true.3.0"],
																					"asyncActionResults": [{
																						"outputPath": "success"
																					}, {
																						"outputPath": "success"
																					}]
																				}, {
																					"name": "course.stopClicked",
																					"input": {
																						"seek": 13050.378
																					},
																					"start": 1452093460010,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}],
																				"path": ["course"],
																				"end": 1452093460011,
																				"duration": 12860
																			}
																		}, {
																			"assignments": [{
																				"description": "",
																				"code": ""
																			}],
																			"name": "Scene 2"
																		}]
																	}
																},
																"duration": 0,
																"mutations": [],
																"isAsync": true,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": true,
																"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 3, 0],
																"outputs": null,
																"actionIndex": 23
															}, {
																"name": "loadScene",
																"input": {
																	"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																	"sceneIndex": "0",
																	"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246",
																	"user": {
																		"id": "christianalfoni@gmail.com",
																		"isAdmin": true,
																		"completedAssignments": {}
																	}
																},
																"output": {
																	"scene": {
																		"name": "Scene 1",
																		"currentFileIndex": 0,
																		"files": [{
																			"name": "index.html",
																			"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																		}],
																		"assignments": [{
																			"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																			"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																			"completed": false
																		}, {
																			"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																			"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																			"completed": false
																		}],
																		"recording": true,
																		"duration": 12860
																	}
																},
																"duration": 0,
																"mutations": [],
																"isAsync": true,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": true,
																"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 3, 1],
																"outputs": null,
																"actionIndex": 8
															}], {
																"name": "courseAndSceneDidLoad",
																"input": {
																	"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																	"sceneIndex": "0",
																	"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246",
																	"user": {
																		"id": "christianalfoni@gmail.com",
																		"isAdmin": true,
																		"completedAssignments": {}
																	},
																	"scene": {
																		"name": "Scene 1",
																		"currentFileIndex": 0,
																		"files": [{
																			"name": "index.html",
																			"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																		}],
																		"assignments": [{
																			"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																			"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																			"completed": false
																		}, {
																			"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																			"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																			"completed": false
																		}],
																		"recording": true,
																		"duration": 12860
																	},
																	"course": {
																		"_id": "565edcfbd40082328ef02b7c",
																		"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																		"created": 1449057531702,
																		"name": "Demo",
																		"authorId": "christianalfoni@gmail.com",
																		"scenes": [{
																			"name": "Scene 1",
																			"currentFileIndex": 0,
																			"assignments": [{
																				"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																				"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																				"completed": false
																			}, {
																				"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																				"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																				"completed": false
																			}],
																			"recording": {
																				"initialState": {
																					"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																					"name": "Demo",
																					"mousePosition": {
																						"x": 71,
																						"y": 32
																					},
																					"isLoading": false,
																					"currentAssignmentStatus": {
																						"isLoading": false,
																						"result": null
																					},
																					"assignmentPoints": [],
																					"isLoadingMedia": false,
																					"authorId": "christianalfoni@gmail.com",
																					"showPreview": true,
																					"showConsole": false,
																					"showEditAssignment": false,
																					"showAssignment": false,
																					"showConfigureScenes": false,
																					"showScenesList": false,
																					"showFolder": false,
																					"showAddFileInput": false,
																					"currentSceneIndex": "0",
																					"currentAssignmentIndex": 0,
																					"sandboxSnapshot": [{
																						"name": "index.html",
																						"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																					}],
																					"newSceneName": "",
																					"newFileName": "",
																					"codeSelection": {
																						"anchor": {
																							"line": 8,
																							"ch": 7
																						},
																						"head": {
																							"line": 8,
																							"ch": 7
																						}
																					},
																					"scenes": [{
																						"name": "Scene 1",
																						"currentFileIndex": 0,
																						"files": [{
																							"name": "index.html",
																							"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																						}],
																						"assignments": [{
																							"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																							"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																							"completed": false
																						}, {
																							"description": "I denne oppgaven skal du lage et DIV element med teksten: \"Hvordan går det?\"",
																							"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																							"completed": false
																						}],
																						"recording": true,
																						"sandboxFiles": [{
																							"name": "index.html",
																							"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																						}]
																					}, {
																						"assignments": [{
																							"description": "",
																							"code": ""
																						}],
																						"name": "Scene 2"
																					}],
																					"scenesList": [{
																						"name": "Scene 1",
																						"assignmentsCount": 2
																					}, {
																						"name": "Scene 2",
																						"assignmentsCount": 1
																					}],
																					"recorder": {
																						"isPlaying": false,
																						"isUploading": false,
																						"isRecording": false,
																						"hasRecorded": false
																					},
																					"_id": "565edcfbd40082328ef02b7c",
																					"created": 1449057531702,
																					"previewUrl": "https://sandbox.kodeboksen.dev:3000?id=1452093444124",
																					"isLoadingPreview": false
																				},
																				"start": 1452093447151,
																				"signals": [{
																					"name": "snackbarTimedOut",
																					"input": {},
																					"start": 1452093447293,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.pauseClicked",
																					"input": {
																						"seek": 3103.783
																					},
																					"start": 1452093450078,
																					"asyncActionPaths": ["0.0"],
																					"asyncActionResults": [{
																						"outputPath": "success"
																					}]
																				}, {
																					"name": "course.appClicked",
																					"input": {
																						"mousePositionX": 23,
																						"mousePositionY": 31
																					},
																					"start": 1452093450079,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 0,
																							"ch": 0
																						},
																						"head": {
																							"line": 0,
																							"ch": 0
																						}
																					},
																					"start": 1452093450115,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 8,
																							"ch": 7
																						},
																						"head": {
																							"line": 8,
																							"ch": 7
																						}
																					},
																					"start": 1452093450117,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 28,
																							"xRel": 1
																						},
																						"head": {
																							"line": 6,
																							"ch": 28,
																							"xRel": 1
																						}
																					},
																					"start": 1452093453661,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.appClicked",
																					"input": {
																						"mousePositionX": 660,
																						"mousePositionY": 227
																					},
																					"start": 1452093453734,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 28,
																							"xRel": 1
																						},
																						"to": {
																							"line": 6,
																							"ch": 28,
																							"xRel": 1
																						},
																						"text": [" "]
																					},
																					"start": 1452093454471,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 29
																						},
																						"head": {
																							"line": 6,
																							"ch": 29
																						}
																					},
																					"start": 1452093454483,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 29
																						},
																						"to": {
																							"line": 6,
																							"ch": 29
																						},
																						"text": ["h"]
																					},
																					"start": 1452093454651,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 30
																						},
																						"head": {
																							"line": 6,
																							"ch": 30
																						}
																					},
																					"start": 1452093454656,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 30
																						},
																						"to": {
																							"line": 6,
																							"ch": 30
																						},
																						"text": ["e"]
																					},
																					"start": 1452093454712,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 31
																						},
																						"head": {
																							"line": 6,
																							"ch": 31
																						}
																					},
																					"start": 1452093454718,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 31
																						},
																						"to": {
																							"line": 6,
																							"ch": 31
																						},
																						"text": [" "]
																					},
																					"start": 1452093454856,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 32
																						},
																						"head": {
																							"line": 6,
																							"ch": 32
																						}
																					},
																					"start": 1452093454866,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 32
																						},
																						"to": {
																							"line": 6,
																							"ch": 32
																						},
																						"text": ["h"]
																					},
																					"start": 1452093455046,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 33
																						},
																						"head": {
																							"line": 6,
																							"ch": 33
																						}
																					},
																					"start": 1452093455050,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 33
																						},
																						"to": {
																							"line": 6,
																							"ch": 33
																						},
																						"text": ["e"]
																					},
																					"start": 1452093455096,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 34
																						},
																						"head": {
																							"line": 6,
																							"ch": 34
																						}
																					},
																					"start": 1452093455102,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 34
																						},
																						"to": {
																							"line": 6,
																							"ch": 34
																						},
																						"text": ["h"]
																					},
																					"start": 1452093455250,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 35
																						},
																						"head": {
																							"line": 6,
																							"ch": 35
																						}
																					},
																					"start": 1452093455255,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 35
																						},
																						"to": {
																							"line": 6,
																							"ch": 35
																						},
																						"text": [" "]
																					},
																					"start": 1452093455275,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 36
																						},
																						"head": {
																							"line": 6,
																							"ch": 36
																						}
																					},
																					"start": 1452093455279,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 36
																						},
																						"to": {
																							"line": 6,
																							"ch": 36
																						},
																						"text": ["h"]
																					},
																					"start": 1452093455483,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 37
																						},
																						"head": {
																							"line": 6,
																							"ch": 37
																						}
																					},
																					"start": 1452093455487,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 37
																						},
																						"to": {
																							"line": 6,
																							"ch": 37
																						},
																						"text": ["e"]
																					},
																					"start": 1452093455554,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 38
																						},
																						"head": {
																							"line": 6,
																							"ch": 38
																						}
																					},
																					"start": 1452093455558,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 38
																						},
																						"to": {
																							"line": 6,
																							"ch": 38
																						},
																						"text": [" "]
																					},
																					"start": 1452093456506,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 39
																						},
																						"head": {
																							"line": 6,
																							"ch": 39
																						}
																					},
																					"start": 1452093456510,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 39
																						},
																						"to": {
																							"line": 6,
																							"ch": 39
																						},
																						"text": ["h"]
																					},
																					"start": 1452093456623,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 40
																						},
																						"head": {
																							"line": 6,
																							"ch": 40
																						}
																					},
																					"start": 1452093456629,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 40
																						},
																						"to": {
																							"line": 6,
																							"ch": 40
																						},
																						"text": ["e"]
																					},
																					"start": 1452093456658,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 41
																						},
																						"head": {
																							"line": 6,
																							"ch": 41
																						}
																					},
																					"start": 1452093456662,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 41
																						},
																						"to": {
																							"line": 6,
																							"ch": 41
																						},
																						"text": ["h"]
																					},
																					"start": 1452093456815,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 42
																						},
																						"head": {
																							"line": 6,
																							"ch": 42
																						}
																					},
																					"start": 1452093456819,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 42
																						},
																						"to": {
																							"line": 6,
																							"ch": 42
																						},
																						"text": ["e"]
																					},
																					"start": 1452093456891,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 43
																						},
																						"head": {
																							"line": 6,
																							"ch": 43
																						}
																					},
																					"start": 1452093456896,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 43
																						},
																						"to": {
																							"line": 6,
																							"ch": 43
																						},
																						"text": [" "]
																					},
																					"start": 1452093456923,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 44
																						},
																						"head": {
																							"line": 6,
																							"ch": 44
																						}
																					},
																					"start": 1452093456928,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 44
																						},
																						"to": {
																							"line": 6,
																							"ch": 44
																						},
																						"text": ["h"]
																					},
																					"start": 1452093457234,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 45
																						},
																						"head": {
																							"line": 6,
																							"ch": 45
																						}
																					},
																					"start": 1452093457238,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeChanged",
																					"input": {
																						"from": {
																							"line": 6,
																							"ch": 45
																						},
																						"to": {
																							"line": 6,
																							"ch": 45
																						},
																						"text": ["e"]
																					},
																					"start": 1452093457326,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.codeCursorChanged",
																					"input": {
																						"anchor": {
																							"line": 6,
																							"ch": 46
																						},
																						"head": {
																							"line": 6,
																							"ch": 46
																						}
																					},
																					"start": 1452093457332,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}, {
																					"name": "course.saveShortcutPressed",
																					"start": 1452093457755,
																					"asyncActionPaths": ["0.0", "1.outputs.true.3.0"],
																					"asyncActionResults": [{
																						"outputPath": "success"
																					}, {
																						"outputPath": "success"
																					}]
																				}, {
																					"name": "course.stopClicked",
																					"input": {
																						"seek": 13050.378
																					},
																					"start": 1452093460010,
																					"asyncActionPaths": [],
																					"asyncActionResults": []
																				}],
																				"path": ["course"],
																				"end": 1452093460011,
																				"duration": 12860
																			}
																		}, {
																			"assignments": [{
																				"description": "",
																				"code": ""
																			}],
																			"name": "Scene 2"
																		}]
																	}
																},
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": "true",
																"isExecuting": false,
																"hasExecuted": true,
																"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 4],
																"outputs": {
																	"true": [{
																			"name": "setCourse",
																			"input": {
																				"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																				"sceneIndex": "0",
																				"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246",
																				"user": {
																					"id": "christianalfoni@gmail.com",
																					"isAdmin": true,
																					"completedAssignments": {}
																				},
																				"scene": {
																					"name": "Scene 1",
																					"currentFileIndex": 0,
																					"files": [{
																						"name": "index.html",
																						"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																					}],
																					"assignments": [{
																						"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																						"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																						"completed": false
																					}, {
																						"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																						"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																						"completed": false
																					}],
																					"recording": true,
																					"duration": 12860
																				},
																				"course": {
																					"_id": "565edcfbd40082328ef02b7c",
																					"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																					"created": 1449057531702,
																					"name": "Demo",
																					"authorId": "christianalfoni@gmail.com",
																					"scenes": [{
																						"name": "Scene 1",
																						"currentFileIndex": 0,
																						"assignments": [{
																							"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																							"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																							"completed": false
																						}, {
																							"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																							"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																							"completed": false
																						}],
																						"recording": {
																							"initialState": {
																								"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																								"name": "Demo",
																								"mousePosition": {
																									"x": 71,
																									"y": 32
																								},
																								"isLoading": false,
																								"currentAssignmentStatus": {
																									"isLoading": false,
																									"result": null
																								},
																								"assignmentPoints": [],
																								"isLoadingMedia": false,
																								"authorId": "christianalfoni@gmail.com",
																								"showPreview": true,
																								"showConsole": false,
																								"showEditAssignment": false,
																								"showAssignment": false,
																								"showConfigureScenes": false,
																								"showScenesList": false,
																								"showFolder": false,
																								"showAddFileInput": false,
																								"currentSceneIndex": "0",
																								"currentAssignmentIndex": 0,
																								"sandboxSnapshot": [{
																									"name": "index.html",
																									"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																								}],
																								"newSceneName": "",
																								"newFileName": "",
																								"codeSelection": {
																									"anchor": {
																										"line": 8,
																										"ch": 7
																									},
																									"head": {
																										"line": 8,
																										"ch": 7
																									}
																								},
																								"scenes": [{
																									"name": "Scene 1",
																									"currentFileIndex": 0,
																									"files": [{
																										"name": "index.html",
																										"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																									}],
																									"assignments": [{
																										"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																										"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																										"completed": false
																									}, {
																										"description": "I denne oppgaven skal du lage et DIV element med teksten: \"Hvordan går det?\"",
																										"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																										"completed": false
																									}],
																									"recording": true,
																									"sandboxFiles": [{
																										"name": "index.html",
																										"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																									}]
																								}, {
																									"assignments": [{
																										"description": "",
																										"code": ""
																									}],
																									"name": "Scene 2"
																								}],
																								"scenesList": [{
																									"name": "Scene 1",
																									"assignmentsCount": 2
																								}, {
																									"name": "Scene 2",
																									"assignmentsCount": 1
																								}],
																								"recorder": {
																									"isPlaying": false,
																									"isUploading": false,
																									"isRecording": false,
																									"hasRecorded": false
																								},
																								"_id": "565edcfbd40082328ef02b7c",
																								"created": 1449057531702,
																								"previewUrl": "https://sandbox.kodeboksen.dev:3000?id=1452093444124",
																								"isLoadingPreview": false
																							},
																							"start": 1452093447151,
																							"signals": [{
																								"name": "snackbarTimedOut",
																								"input": {},
																								"start": 1452093447293,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.pauseClicked",
																								"input": {
																									"seek": 3103.783
																								},
																								"start": 1452093450078,
																								"asyncActionPaths": ["0.0"],
																								"asyncActionResults": [{
																									"outputPath": "success"
																								}]
																							}, {
																								"name": "course.appClicked",
																								"input": {
																									"mousePositionX": 23,
																									"mousePositionY": 31
																								},
																								"start": 1452093450079,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 0,
																										"ch": 0
																									},
																									"head": {
																										"line": 0,
																										"ch": 0
																									}
																								},
																								"start": 1452093450115,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 8,
																										"ch": 7
																									},
																									"head": {
																										"line": 8,
																										"ch": 7
																									}
																								},
																								"start": 1452093450117,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"head": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									}
																								},
																								"start": 1452093453661,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.appClicked",
																								"input": {
																									"mousePositionX": 660,
																									"mousePositionY": 227
																								},
																								"start": 1452093453734,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"to": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"text": [" "]
																								},
																								"start": 1452093454471,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 29
																									},
																									"head": {
																										"line": 6,
																										"ch": 29
																									}
																								},
																								"start": 1452093454483,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 29
																									},
																									"to": {
																										"line": 6,
																										"ch": 29
																									},
																									"text": ["h"]
																								},
																								"start": 1452093454651,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 30
																									},
																									"head": {
																										"line": 6,
																										"ch": 30
																									}
																								},
																								"start": 1452093454656,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 30
																									},
																									"to": {
																										"line": 6,
																										"ch": 30
																									},
																									"text": ["e"]
																								},
																								"start": 1452093454712,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 31
																									},
																									"head": {
																										"line": 6,
																										"ch": 31
																									}
																								},
																								"start": 1452093454718,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 31
																									},
																									"to": {
																										"line": 6,
																										"ch": 31
																									},
																									"text": [" "]
																								},
																								"start": 1452093454856,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 32
																									},
																									"head": {
																										"line": 6,
																										"ch": 32
																									}
																								},
																								"start": 1452093454866,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 32
																									},
																									"to": {
																										"line": 6,
																										"ch": 32
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455046,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 33
																									},
																									"head": {
																										"line": 6,
																										"ch": 33
																									}
																								},
																								"start": 1452093455050,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 33
																									},
																									"to": {
																										"line": 6,
																										"ch": 33
																									},
																									"text": ["e"]
																								},
																								"start": 1452093455096,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 34
																									},
																									"head": {
																										"line": 6,
																										"ch": 34
																									}
																								},
																								"start": 1452093455102,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 34
																									},
																									"to": {
																										"line": 6,
																										"ch": 34
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455250,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 35
																									},
																									"head": {
																										"line": 6,
																										"ch": 35
																									}
																								},
																								"start": 1452093455255,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 35
																									},
																									"to": {
																										"line": 6,
																										"ch": 35
																									},
																									"text": [" "]
																								},
																								"start": 1452093455275,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 36
																									},
																									"head": {
																										"line": 6,
																										"ch": 36
																									}
																								},
																								"start": 1452093455279,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 36
																									},
																									"to": {
																										"line": 6,
																										"ch": 36
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455483,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 37
																									},
																									"head": {
																										"line": 6,
																										"ch": 37
																									}
																								},
																								"start": 1452093455487,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 37
																									},
																									"to": {
																										"line": 6,
																										"ch": 37
																									},
																									"text": ["e"]
																								},
																								"start": 1452093455554,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 38
																									},
																									"head": {
																										"line": 6,
																										"ch": 38
																									}
																								},
																								"start": 1452093455558,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 38
																									},
																									"to": {
																										"line": 6,
																										"ch": 38
																									},
																									"text": [" "]
																								},
																								"start": 1452093456506,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 39
																									},
																									"head": {
																										"line": 6,
																										"ch": 39
																									}
																								},
																								"start": 1452093456510,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 39
																									},
																									"to": {
																										"line": 6,
																										"ch": 39
																									},
																									"text": ["h"]
																								},
																								"start": 1452093456623,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 40
																									},
																									"head": {
																										"line": 6,
																										"ch": 40
																									}
																								},
																								"start": 1452093456629,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 40
																									},
																									"to": {
																										"line": 6,
																										"ch": 40
																									},
																									"text": ["e"]
																								},
																								"start": 1452093456658,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 41
																									},
																									"head": {
																										"line": 6,
																										"ch": 41
																									}
																								},
																								"start": 1452093456662,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 41
																									},
																									"to": {
																										"line": 6,
																										"ch": 41
																									},
																									"text": ["h"]
																								},
																								"start": 1452093456815,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 42
																									},
																									"head": {
																										"line": 6,
																										"ch": 42
																									}
																								},
																								"start": 1452093456819,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 42
																									},
																									"to": {
																										"line": 6,
																										"ch": 42
																									},
																									"text": ["e"]
																								},
																								"start": 1452093456891,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 43
																									},
																									"head": {
																										"line": 6,
																										"ch": 43
																									}
																								},
																								"start": 1452093456896,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 43
																									},
																									"to": {
																										"line": 6,
																										"ch": 43
																									},
																									"text": [" "]
																								},
																								"start": 1452093456923,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 44
																									},
																									"head": {
																										"line": 6,
																										"ch": 44
																									}
																								},
																								"start": 1452093456928,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 44
																									},
																									"to": {
																										"line": 6,
																										"ch": 44
																									},
																									"text": ["h"]
																								},
																								"start": 1452093457234,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 45
																									},
																									"head": {
																										"line": 6,
																										"ch": 45
																									}
																								},
																								"start": 1452093457238,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 45
																									},
																									"to": {
																										"line": 6,
																										"ch": 45
																									},
																									"text": ["e"]
																								},
																								"start": 1452093457326,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 46
																									},
																									"head": {
																										"line": 6,
																										"ch": 46
																									}
																								},
																								"start": 1452093457332,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.saveShortcutPressed",
																								"start": 1452093457755,
																								"asyncActionPaths": ["0.0", "1.outputs.true.3.0"],
																								"asyncActionResults": [{
																									"outputPath": "success"
																								}, {
																									"outputPath": "success"
																								}]
																							}, {
																								"name": "course.stopClicked",
																								"input": {
																									"seek": 13050.378
																								},
																								"start": 1452093460010,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}],
																							"path": ["course"],
																							"end": 1452093460011,
																							"duration": 12860
																						}
																					}, {
																						"assignments": [{
																							"description": "",
																							"code": ""
																						}],
																						"name": "Scene 2"
																					}]
																				}
																			},
																			"duration": 0,
																			"mutations": [{
																				"name": "merge",
																				"path": ["course"],
																				"args": [{
																					"_id": "565edcfbd40082328ef02b7c",
																					"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																					"created": 1449057531702,
																					"name": "Demo",
																					"authorId": "christianalfoni@gmail.com",
																					"scenes": [{
																						"name": "Scene 1",
																						"currentFileIndex": 0,
																						"assignments": [{
																							"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																							"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																							"completed": false
																						}, {
																							"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																							"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																							"completed": false
																						}],
																						"recording": {
																							"initialState": {
																								"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																								"name": "Demo",
																								"mousePosition": {
																									"x": 71,
																									"y": 32
																								},
																								"isLoading": false,
																								"currentAssignmentStatus": {
																									"isLoading": false,
																									"result": null
																								},
																								"assignmentPoints": [],
																								"isLoadingMedia": false,
																								"authorId": "christianalfoni@gmail.com",
																								"showPreview": true,
																								"showConsole": false,
																								"showEditAssignment": false,
																								"showAssignment": false,
																								"showConfigureScenes": false,
																								"showScenesList": false,
																								"showFolder": false,
																								"showAddFileInput": false,
																								"currentSceneIndex": "0",
																								"currentAssignmentIndex": 0,
																								"sandboxSnapshot": [{
																									"name": "index.html",
																									"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																								}],
																								"newSceneName": "",
																								"newFileName": "",
																								"codeSelection": {
																									"anchor": {
																										"line": 8,
																										"ch": 7
																									},
																									"head": {
																										"line": 8,
																										"ch": 7
																									}
																								},
																								"scenes": [{
																									"name": "Scene 1",
																									"currentFileIndex": 0,
																									"files": [{
																										"name": "index.html",
																										"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																									}],
																									"assignments": [{
																										"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																										"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																										"completed": false
																									}, {
																										"description": "I denne oppgaven skal du lage et DIV element med teksten: \"Hvordan går det?\"",
																										"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																										"completed": false
																									}],
																									"recording": true,
																									"sandboxFiles": [{
																										"name": "index.html",
																										"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																									}]
																								}, {
																									"assignments": [{
																										"description": "",
																										"code": ""
																									}],
																									"name": "Scene 2"
																								}],
																								"scenesList": [{
																									"name": "Scene 1",
																									"assignmentsCount": 2
																								}, {
																									"name": "Scene 2",
																									"assignmentsCount": 1
																								}],
																								"recorder": {
																									"isPlaying": false,
																									"isUploading": false,
																									"isRecording": false,
																									"hasRecorded": false
																								},
																								"_id": "565edcfbd40082328ef02b7c",
																								"created": 1449057531702,
																								"previewUrl": "https://sandbox.kodeboksen.dev:3000?id=1452093444124",
																								"isLoadingPreview": false
																							},
																							"start": 1452093447151,
																							"signals": [{
																								"name": "snackbarTimedOut",
																								"input": {},
																								"start": 1452093447293,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.pauseClicked",
																								"input": {
																									"seek": 3103.783
																								},
																								"start": 1452093450078,
																								"asyncActionPaths": ["0.0"],
																								"asyncActionResults": [{
																									"outputPath": "success"
																								}]
																							}, {
																								"name": "course.appClicked",
																								"input": {
																									"mousePositionX": 23,
																									"mousePositionY": 31
																								},
																								"start": 1452093450079,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 0,
																										"ch": 0
																									},
																									"head": {
																										"line": 0,
																										"ch": 0
																									}
																								},
																								"start": 1452093450115,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 8,
																										"ch": 7
																									},
																									"head": {
																										"line": 8,
																										"ch": 7
																									}
																								},
																								"start": 1452093450117,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"head": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									}
																								},
																								"start": 1452093453661,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.appClicked",
																								"input": {
																									"mousePositionX": 660,
																									"mousePositionY": 227
																								},
																								"start": 1452093453734,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"to": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"text": [" "]
																								},
																								"start": 1452093454471,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 29
																									},
																									"head": {
																										"line": 6,
																										"ch": 29
																									}
																								},
																								"start": 1452093454483,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 29
																									},
																									"to": {
																										"line": 6,
																										"ch": 29
																									},
																									"text": ["h"]
																								},
																								"start": 1452093454651,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 30
																									},
																									"head": {
																										"line": 6,
																										"ch": 30
																									}
																								},
																								"start": 1452093454656,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 30
																									},
																									"to": {
																										"line": 6,
																										"ch": 30
																									},
																									"text": ["e"]
																								},
																								"start": 1452093454712,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 31
																									},
																									"head": {
																										"line": 6,
																										"ch": 31
																									}
																								},
																								"start": 1452093454718,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 31
																									},
																									"to": {
																										"line": 6,
																										"ch": 31
																									},
																									"text": [" "]
																								},
																								"start": 1452093454856,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 32
																									},
																									"head": {
																										"line": 6,
																										"ch": 32
																									}
																								},
																								"start": 1452093454866,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 32
																									},
																									"to": {
																										"line": 6,
																										"ch": 32
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455046,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 33
																									},
																									"head": {
																										"line": 6,
																										"ch": 33
																									}
																								},
																								"start": 1452093455050,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 33
																									},
																									"to": {
																										"line": 6,
																										"ch": 33
																									},
																									"text": ["e"]
																								},
																								"start": 1452093455096,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 34
																									},
																									"head": {
																										"line": 6,
																										"ch": 34
																									}
																								},
																								"start": 1452093455102,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 34
																									},
																									"to": {
																										"line": 6,
																										"ch": 34
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455250,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 35
																									},
																									"head": {
																										"line": 6,
																										"ch": 35
																									}
																								},
																								"start": 1452093455255,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 35
																									},
																									"to": {
																										"line": 6,
																										"ch": 35
																									},
																									"text": [" "]
																								},
																								"start": 1452093455275,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 36
																									},
																									"head": {
																										"line": 6,
																										"ch": 36
																									}
																								},
																								"start": 1452093455279,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 36
																									},
																									"to": {
																										"line": 6,
																										"ch": 36
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455483,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 37
																									},
																									"head": {
																										"line": 6,
																										"ch": 37
																									}
																								},
																								"start": 1452093455487,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 37
																									},
																									"to": {
																										"line": 6,
																										"ch": 37
																									},
																									"text": ["e"]
																								},
																								"start": 1452093455554,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 38
																									},
																									"head": {
																										"line": 6,
																										"ch": 38
																									}
																								},
																								"start": 1452093455558,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 38
																									},
																									"to": {
																										"line": 6,
																										"ch": 38
																									},
																									"text": [" "]
																								},
																								"start": 1452093456506,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 39
																									},
																									"head": {
																										"line": 6,
																										"ch": 39
																									}
																								},
																								"start": 1452093456510,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 39
																									},
																									"to": {
																										"line": 6,
																										"ch": 39
																									},
																									"text": ["h"]
																								},
																								"start": 1452093456623,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 40
																									},
																									"head": {
																										"line": 6,
																										"ch": 40
																									}
																								},
																								"start": 1452093456629,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 40
																									},
																									"to": {
																										"line": 6,
																										"ch": 40
																									},
																									"text": ["e"]
																								},
																								"start": 1452093456658,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 41
																									},
																									"head": {
																										"line": 6,
																										"ch": 41
																									}
																								},
																								"start": 1452093456662,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 41
																									},
																									"to": {
																										"line": 6,
																										"ch": 41
																									},
																									"text": ["h"]
																								},
																								"start": 1452093456815,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 42
																									},
																									"head": {
																										"line": 6,
																										"ch": 42
																									}
																								},
																								"start": 1452093456819,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 42
																									},
																									"to": {
																										"line": 6,
																										"ch": 42
																									},
																									"text": ["e"]
																								},
																								"start": 1452093456891,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 43
																									},
																									"head": {
																										"line": 6,
																										"ch": 43
																									}
																								},
																								"start": 1452093456896,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 43
																									},
																									"to": {
																										"line": 6,
																										"ch": 43
																									},
																									"text": [" "]
																								},
																								"start": 1452093456923,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 44
																									},
																									"head": {
																										"line": 6,
																										"ch": 44
																									}
																								},
																								"start": 1452093456928,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 44
																									},
																									"to": {
																										"line": 6,
																										"ch": 44
																									},
																									"text": ["h"]
																								},
																								"start": 1452093457234,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 45
																									},
																									"head": {
																										"line": 6,
																										"ch": 45
																									}
																								},
																								"start": 1452093457238,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 45
																									},
																									"to": {
																										"line": 6,
																										"ch": 45
																									},
																									"text": ["e"]
																								},
																								"start": 1452093457326,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 46
																									},
																									"head": {
																										"line": 6,
																										"ch": 46
																									}
																								},
																								"start": 1452093457332,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.saveShortcutPressed",
																								"start": 1452093457755,
																								"asyncActionPaths": ["0.0", "1.outputs.true.3.0"],
																								"asyncActionResults": [{
																									"outputPath": "success"
																								}, {
																									"outputPath": "success"
																								}]
																							}, {
																								"name": "course.stopClicked",
																								"input": {
																									"seek": 13050.378
																								},
																								"start": 1452093460010,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}],
																							"path": ["course"],
																							"end": 1452093460011,
																							"duration": 12860
																						}
																					}, {
																						"assignments": [{
																							"description": "",
																							"code": ""
																						}],
																						"name": "Scene 2"
																					}]
																				}]
																			}, {
																				"name": "set",
																				"path": ["course", "scenesList"],
																				"args": [
																					[{
																						"name": "Scene 1",
																						"assignmentsCount": 2
																					}, {
																						"name": "Scene 2",
																						"assignmentsCount": 1
																					}]
																				]
																			}],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": true,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 4, "outputs", "true", 0],
																			"outputs": null,
																			"actionIndex": 25
																		}, {
																			"name": "setScene",
																			"input": {
																				"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																				"sceneIndex": "0",
																				"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246",
																				"user": {
																					"id": "christianalfoni@gmail.com",
																					"isAdmin": true,
																					"completedAssignments": {}
																				},
																				"scene": {
																					"name": "Scene 1",
																					"currentFileIndex": 0,
																					"files": [{
																						"name": "index.html",
																						"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																					}],
																					"assignments": [{
																						"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																						"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																						"completed": false
																					}, {
																						"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																						"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																						"completed": false
																					}],
																					"recording": true,
																					"duration": 12860
																				},
																				"course": {
																					"_id": "565edcfbd40082328ef02b7c",
																					"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																					"created": 1449057531702,
																					"name": "Demo",
																					"authorId": "christianalfoni@gmail.com",
																					"scenes": [{
																						"name": "Scene 1",
																						"currentFileIndex": 0,
																						"assignments": [{
																							"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																							"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																							"completed": false
																						}, {
																							"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																							"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																							"completed": false
																						}],
																						"recording": {
																							"initialState": {
																								"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																								"name": "Demo",
																								"mousePosition": {
																									"x": 71,
																									"y": 32
																								},
																								"isLoading": false,
																								"currentAssignmentStatus": {
																									"isLoading": false,
																									"result": null
																								},
																								"assignmentPoints": [],
																								"isLoadingMedia": false,
																								"authorId": "christianalfoni@gmail.com",
																								"showPreview": true,
																								"showConsole": false,
																								"showEditAssignment": false,
																								"showAssignment": false,
																								"showConfigureScenes": false,
																								"showScenesList": false,
																								"showFolder": false,
																								"showAddFileInput": false,
																								"currentSceneIndex": "0",
																								"currentAssignmentIndex": 0,
																								"sandboxSnapshot": [{
																									"name": "index.html",
																									"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																								}],
																								"newSceneName": "",
																								"newFileName": "",
																								"codeSelection": {
																									"anchor": {
																										"line": 8,
																										"ch": 7
																									},
																									"head": {
																										"line": 8,
																										"ch": 7
																									}
																								},
																								"scenes": [{
																									"name": "Scene 1",
																									"currentFileIndex": 0,
																									"files": [{
																										"name": "index.html",
																										"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																									}],
																									"assignments": [{
																										"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																										"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																										"completed": false
																									}, {
																										"description": "I denne oppgaven skal du lage et DIV element med teksten: \"Hvordan går det?\"",
																										"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																										"completed": false
																									}],
																									"recording": true,
																									"sandboxFiles": [{
																										"name": "index.html",
																										"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																									}]
																								}, {
																									"assignments": [{
																										"description": "",
																										"code": ""
																									}],
																									"name": "Scene 2"
																								}],
																								"scenesList": [{
																									"name": "Scene 1",
																									"assignmentsCount": 2
																								}, {
																									"name": "Scene 2",
																									"assignmentsCount": 1
																								}],
																								"recorder": {
																									"isPlaying": false,
																									"isUploading": false,
																									"isRecording": false,
																									"hasRecorded": false
																								},
																								"_id": "565edcfbd40082328ef02b7c",
																								"created": 1449057531702,
																								"previewUrl": "https://sandbox.kodeboksen.dev:3000?id=1452093444124",
																								"isLoadingPreview": false
																							},
																							"start": 1452093447151,
																							"signals": [{
																								"name": "snackbarTimedOut",
																								"input": {},
																								"start": 1452093447293,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.pauseClicked",
																								"input": {
																									"seek": 3103.783
																								},
																								"start": 1452093450078,
																								"asyncActionPaths": ["0.0"],
																								"asyncActionResults": [{
																									"outputPath": "success"
																								}]
																							}, {
																								"name": "course.appClicked",
																								"input": {
																									"mousePositionX": 23,
																									"mousePositionY": 31
																								},
																								"start": 1452093450079,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 0,
																										"ch": 0
																									},
																									"head": {
																										"line": 0,
																										"ch": 0
																									}
																								},
																								"start": 1452093450115,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 8,
																										"ch": 7
																									},
																									"head": {
																										"line": 8,
																										"ch": 7
																									}
																								},
																								"start": 1452093450117,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"head": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									}
																								},
																								"start": 1452093453661,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.appClicked",
																								"input": {
																									"mousePositionX": 660,
																									"mousePositionY": 227
																								},
																								"start": 1452093453734,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"to": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"text": [" "]
																								},
																								"start": 1452093454471,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 29
																									},
																									"head": {
																										"line": 6,
																										"ch": 29
																									}
																								},
																								"start": 1452093454483,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 29
																									},
																									"to": {
																										"line": 6,
																										"ch": 29
																									},
																									"text": ["h"]
																								},
																								"start": 1452093454651,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 30
																									},
																									"head": {
																										"line": 6,
																										"ch": 30
																									}
																								},
																								"start": 1452093454656,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 30
																									},
																									"to": {
																										"line": 6,
																										"ch": 30
																									},
																									"text": ["e"]
																								},
																								"start": 1452093454712,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 31
																									},
																									"head": {
																										"line": 6,
																										"ch": 31
																									}
																								},
																								"start": 1452093454718,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 31
																									},
																									"to": {
																										"line": 6,
																										"ch": 31
																									},
																									"text": [" "]
																								},
																								"start": 1452093454856,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 32
																									},
																									"head": {
																										"line": 6,
																										"ch": 32
																									}
																								},
																								"start": 1452093454866,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 32
																									},
																									"to": {
																										"line": 6,
																										"ch": 32
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455046,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 33
																									},
																									"head": {
																										"line": 6,
																										"ch": 33
																									}
																								},
																								"start": 1452093455050,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 33
																									},
																									"to": {
																										"line": 6,
																										"ch": 33
																									},
																									"text": ["e"]
																								},
																								"start": 1452093455096,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 34
																									},
																									"head": {
																										"line": 6,
																										"ch": 34
																									}
																								},
																								"start": 1452093455102,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 34
																									},
																									"to": {
																										"line": 6,
																										"ch": 34
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455250,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 35
																									},
																									"head": {
																										"line": 6,
																										"ch": 35
																									}
																								},
																								"start": 1452093455255,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 35
																									},
																									"to": {
																										"line": 6,
																										"ch": 35
																									},
																									"text": [" "]
																								},
																								"start": 1452093455275,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 36
																									},
																									"head": {
																										"line": 6,
																										"ch": 36
																									}
																								},
																								"start": 1452093455279,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 36
																									},
																									"to": {
																										"line": 6,
																										"ch": 36
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455483,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 37
																									},
																									"head": {
																										"line": 6,
																										"ch": 37
																									}
																								},
																								"start": 1452093455487,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 37
																									},
																									"to": {
																										"line": 6,
																										"ch": 37
																									},
																									"text": ["e"]
																								},
																								"start": 1452093455554,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 38
																									},
																									"head": {
																										"line": 6,
																										"ch": 38
																									}
																								},
																								"start": 1452093455558,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 38
																									},
																									"to": {
																										"line": 6,
																										"ch": 38
																									},
																									"text": [" "]
																								},
																								"start": 1452093456506,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 39
																									},
																									"head": {
																										"line": 6,
																										"ch": 39
																									}
																								},
																								"start": 1452093456510,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 39
																									},
																									"to": {
																										"line": 6,
																										"ch": 39
																									},
																									"text": ["h"]
																								},
																								"start": 1452093456623,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 40
																									},
																									"head": {
																										"line": 6,
																										"ch": 40
																									}
																								},
																								"start": 1452093456629,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 40
																									},
																									"to": {
																										"line": 6,
																										"ch": 40
																									},
																									"text": ["e"]
																								},
																								"start": 1452093456658,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 41
																									},
																									"head": {
																										"line": 6,
																										"ch": 41
																									}
																								},
																								"start": 1452093456662,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 41
																									},
																									"to": {
																										"line": 6,
																										"ch": 41
																									},
																									"text": ["h"]
																								},
																								"start": 1452093456815,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 42
																									},
																									"head": {
																										"line": 6,
																										"ch": 42
																									}
																								},
																								"start": 1452093456819,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 42
																									},
																									"to": {
																										"line": 6,
																										"ch": 42
																									},
																									"text": ["e"]
																								},
																								"start": 1452093456891,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 43
																									},
																									"head": {
																										"line": 6,
																										"ch": 43
																									}
																								},
																								"start": 1452093456896,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 43
																									},
																									"to": {
																										"line": 6,
																										"ch": 43
																									},
																									"text": [" "]
																								},
																								"start": 1452093456923,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 44
																									},
																									"head": {
																										"line": 6,
																										"ch": 44
																									}
																								},
																								"start": 1452093456928,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 44
																									},
																									"to": {
																										"line": 6,
																										"ch": 44
																									},
																									"text": ["h"]
																								},
																								"start": 1452093457234,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 45
																									},
																									"head": {
																										"line": 6,
																										"ch": 45
																									}
																								},
																								"start": 1452093457238,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 45
																									},
																									"to": {
																										"line": 6,
																										"ch": 45
																									},
																									"text": ["e"]
																								},
																								"start": 1452093457326,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 46
																									},
																									"head": {
																										"line": 6,
																										"ch": 46
																									}
																								},
																								"start": 1452093457332,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.saveShortcutPressed",
																								"start": 1452093457755,
																								"asyncActionPaths": ["0.0", "1.outputs.true.3.0"],
																								"asyncActionResults": [{
																									"outputPath": "success"
																								}, {
																									"outputPath": "success"
																								}]
																							}, {
																								"name": "course.stopClicked",
																								"input": {
																									"seek": 13050.378
																								},
																								"start": 1452093460010,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}],
																							"path": ["course"],
																							"end": 1452093460011,
																							"duration": 12860
																						}
																					}, {
																						"assignments": [{
																							"description": "",
																							"code": ""
																						}],
																						"name": "Scene 2"
																					}]
																				}
																			},
																			"duration": 0,
																			"mutations": [{
																				"name": "set",
																				"path": ["course", "scenes", "0"],
																				"args": [{
																					"name": "Scene 1",
																					"currentFileIndex": 0,
																					"files": [{
																						"name": "index.html",
																						"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																					}],
																					"assignments": [{
																						"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																						"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																						"completed": false
																					}, {
																						"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																						"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																						"completed": false
																					}],
																					"recording": true,
																					"duration": 12860
																				}]
																			}, {
																				"name": "set",
																				"path": ["course", "scenes", "0", "sandboxFiles"],
																				"args": [
																					[{
																						"name": "index.html",
																						"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																					}]
																				]
																			}, {
																				"name": "set",
																				"path": ["course", "scenes", "0", "currentFileIndex"],
																				"args": [0]
																			}, {
																				"name": "set",
																				"path": ["user", "assignmentsSolved"],
																				"args": [
																					[true]
																				]
																			}, {
																				"name": "set",
																				"path": ["course", "currentSceneIndex"],
																				"args": ["0"]
																			}],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": true,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 4, "outputs", "true", 1],
																			"outputs": null,
																			"actionIndex": 10
																		}, {
																			"name": "setAssignmentPoints",
																			"input": {
																				"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																				"sceneIndex": "0",
																				"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246",
																				"user": {
																					"id": "christianalfoni@gmail.com",
																					"isAdmin": true,
																					"completedAssignments": {}
																				},
																				"scene": {
																					"name": "Scene 1",
																					"currentFileIndex": 0,
																					"files": [{
																						"name": "index.html",
																						"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																					}],
																					"assignments": [{
																						"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																						"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																						"completed": false
																					}, {
																						"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																						"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																						"completed": false
																					}],
																					"recording": true,
																					"duration": 12860
																				},
																				"course": {
																					"_id": "565edcfbd40082328ef02b7c",
																					"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																					"created": 1449057531702,
																					"name": "Demo",
																					"authorId": "christianalfoni@gmail.com",
																					"scenes": [{
																						"name": "Scene 1",
																						"currentFileIndex": 0,
																						"assignments": [{
																							"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																							"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																							"completed": false
																						}, {
																							"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																							"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																							"completed": false
																						}],
																						"recording": {
																							"initialState": {
																								"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																								"name": "Demo",
																								"mousePosition": {
																									"x": 71,
																									"y": 32
																								},
																								"isLoading": false,
																								"currentAssignmentStatus": {
																									"isLoading": false,
																									"result": null
																								},
																								"assignmentPoints": [],
																								"isLoadingMedia": false,
																								"authorId": "christianalfoni@gmail.com",
																								"showPreview": true,
																								"showConsole": false,
																								"showEditAssignment": false,
																								"showAssignment": false,
																								"showConfigureScenes": false,
																								"showScenesList": false,
																								"showFolder": false,
																								"showAddFileInput": false,
																								"currentSceneIndex": "0",
																								"currentAssignmentIndex": 0,
																								"sandboxSnapshot": [{
																									"name": "index.html",
																									"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																								}],
																								"newSceneName": "",
																								"newFileName": "",
																								"codeSelection": {
																									"anchor": {
																										"line": 8,
																										"ch": 7
																									},
																									"head": {
																										"line": 8,
																										"ch": 7
																									}
																								},
																								"scenes": [{
																									"name": "Scene 1",
																									"currentFileIndex": 0,
																									"files": [{
																										"name": "index.html",
																										"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																									}],
																									"assignments": [{
																										"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																										"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																										"completed": false
																									}, {
																										"description": "I denne oppgaven skal du lage et DIV element med teksten: \"Hvordan går det?\"",
																										"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																										"completed": false
																									}],
																									"recording": true,
																									"sandboxFiles": [{
																										"name": "index.html",
																										"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																									}]
																								}, {
																									"assignments": [{
																										"description": "",
																										"code": ""
																									}],
																									"name": "Scene 2"
																								}],
																								"scenesList": [{
																									"name": "Scene 1",
																									"assignmentsCount": 2
																								}, {
																									"name": "Scene 2",
																									"assignmentsCount": 1
																								}],
																								"recorder": {
																									"isPlaying": false,
																									"isUploading": false,
																									"isRecording": false,
																									"hasRecorded": false
																								},
																								"_id": "565edcfbd40082328ef02b7c",
																								"created": 1449057531702,
																								"previewUrl": "https://sandbox.kodeboksen.dev:3000?id=1452093444124",
																								"isLoadingPreview": false
																							},
																							"start": 1452093447151,
																							"signals": [{
																								"name": "snackbarTimedOut",
																								"input": {},
																								"start": 1452093447293,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.pauseClicked",
																								"input": {
																									"seek": 3103.783
																								},
																								"start": 1452093450078,
																								"asyncActionPaths": ["0.0"],
																								"asyncActionResults": [{
																									"outputPath": "success"
																								}]
																							}, {
																								"name": "course.appClicked",
																								"input": {
																									"mousePositionX": 23,
																									"mousePositionY": 31
																								},
																								"start": 1452093450079,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 0,
																										"ch": 0
																									},
																									"head": {
																										"line": 0,
																										"ch": 0
																									}
																								},
																								"start": 1452093450115,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 8,
																										"ch": 7
																									},
																									"head": {
																										"line": 8,
																										"ch": 7
																									}
																								},
																								"start": 1452093450117,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"head": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									}
																								},
																								"start": 1452093453661,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.appClicked",
																								"input": {
																									"mousePositionX": 660,
																									"mousePositionY": 227
																								},
																								"start": 1452093453734,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"to": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"text": [" "]
																								},
																								"start": 1452093454471,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 29
																									},
																									"head": {
																										"line": 6,
																										"ch": 29
																									}
																								},
																								"start": 1452093454483,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 29
																									},
																									"to": {
																										"line": 6,
																										"ch": 29
																									},
																									"text": ["h"]
																								},
																								"start": 1452093454651,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 30
																									},
																									"head": {
																										"line": 6,
																										"ch": 30
																									}
																								},
																								"start": 1452093454656,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 30
																									},
																									"to": {
																										"line": 6,
																										"ch": 30
																									},
																									"text": ["e"]
																								},
																								"start": 1452093454712,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 31
																									},
																									"head": {
																										"line": 6,
																										"ch": 31
																									}
																								},
																								"start": 1452093454718,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 31
																									},
																									"to": {
																										"line": 6,
																										"ch": 31
																									},
																									"text": [" "]
																								},
																								"start": 1452093454856,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 32
																									},
																									"head": {
																										"line": 6,
																										"ch": 32
																									}
																								},
																								"start": 1452093454866,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 32
																									},
																									"to": {
																										"line": 6,
																										"ch": 32
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455046,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 33
																									},
																									"head": {
																										"line": 6,
																										"ch": 33
																									}
																								},
																								"start": 1452093455050,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 33
																									},
																									"to": {
																										"line": 6,
																										"ch": 33
																									},
																									"text": ["e"]
																								},
																								"start": 1452093455096,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 34
																									},
																									"head": {
																										"line": 6,
																										"ch": 34
																									}
																								},
																								"start": 1452093455102,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 34
																									},
																									"to": {
																										"line": 6,
																										"ch": 34
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455250,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 35
																									},
																									"head": {
																										"line": 6,
																										"ch": 35
																									}
																								},
																								"start": 1452093455255,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 35
																									},
																									"to": {
																										"line": 6,
																										"ch": 35
																									},
																									"text": [" "]
																								},
																								"start": 1452093455275,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 36
																									},
																									"head": {
																										"line": 6,
																										"ch": 36
																									}
																								},
																								"start": 1452093455279,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 36
																									},
																									"to": {
																										"line": 6,
																										"ch": 36
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455483,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 37
																									},
																									"head": {
																										"line": 6,
																										"ch": 37
																									}
																								},
																								"start": 1452093455487,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 37
																									},
																									"to": {
																										"line": 6,
																										"ch": 37
																									},
																									"text": ["e"]
																								},
																								"start": 1452093455554,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 38
																									},
																									"head": {
																										"line": 6,
																										"ch": 38
																									}
																								},
																								"start": 1452093455558,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 38
																									},
																									"to": {
																										"line": 6,
																										"ch": 38
																									},
																									"text": [" "]
																								},
																								"start": 1452093456506,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 39
																									},
																									"head": {
																										"line": 6,
																										"ch": 39
																									}
																								},
																								"start": 1452093456510,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 39
																									},
																									"to": {
																										"line": 6,
																										"ch": 39
																									},
																									"text": ["h"]
																								},
																								"start": 1452093456623,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 40
																									},
																									"head": {
																										"line": 6,
																										"ch": 40
																									}
																								},
																								"start": 1452093456629,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 40
																									},
																									"to": {
																										"line": 6,
																										"ch": 40
																									},
																									"text": ["e"]
																								},
																								"start": 1452093456658,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 41
																									},
																									"head": {
																										"line": 6,
																										"ch": 41
																									}
																								},
																								"start": 1452093456662,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 41
																									},
																									"to": {
																										"line": 6,
																										"ch": 41
																									},
																									"text": ["h"]
																								},
																								"start": 1452093456815,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 42
																									},
																									"head": {
																										"line": 6,
																										"ch": 42
																									}
																								},
																								"start": 1452093456819,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 42
																									},
																									"to": {
																										"line": 6,
																										"ch": 42
																									},
																									"text": ["e"]
																								},
																								"start": 1452093456891,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 43
																									},
																									"head": {
																										"line": 6,
																										"ch": 43
																									}
																								},
																								"start": 1452093456896,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 43
																									},
																									"to": {
																										"line": 6,
																										"ch": 43
																									},
																									"text": [" "]
																								},
																								"start": 1452093456923,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 44
																									},
																									"head": {
																										"line": 6,
																										"ch": 44
																									}
																								},
																								"start": 1452093456928,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 44
																									},
																									"to": {
																										"line": 6,
																										"ch": 44
																									},
																									"text": ["h"]
																								},
																								"start": 1452093457234,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 45
																									},
																									"head": {
																										"line": 6,
																										"ch": 45
																									}
																								},
																								"start": 1452093457238,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 45
																									},
																									"to": {
																										"line": 6,
																										"ch": 45
																									},
																									"text": ["e"]
																								},
																								"start": 1452093457326,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 46
																									},
																									"head": {
																										"line": 6,
																										"ch": 46
																									}
																								},
																								"start": 1452093457332,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.saveShortcutPressed",
																								"start": 1452093457755,
																								"asyncActionPaths": ["0.0", "1.outputs.true.3.0"],
																								"asyncActionResults": [{
																									"outputPath": "success"
																								}, {
																									"outputPath": "success"
																								}]
																							}, {
																								"name": "course.stopClicked",
																								"input": {
																									"seek": 13050.378
																								},
																								"start": 1452093460010,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}],
																							"path": ["course"],
																							"end": 1452093460011,
																							"duration": 12860
																						}
																					}, {
																						"assignments": [{
																							"description": "",
																							"code": ""
																						}],
																						"name": "Scene 2"
																					}]
																				}
																			},
																			"duration": 0,
																			"mutations": [{
																				"name": "set",
																				"path": ["course", "assignmentPoints"],
																				"args": [
																					[2927]
																				]
																			}],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": true,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 4, "outputs", "true", 2],
																			"outputs": null,
																			"actionIndex": 11
																		}, {
																			"name": "setSandboxSnapshot",
																			"input": {
																				"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																				"sceneIndex": "0",
																				"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246",
																				"user": {
																					"id": "christianalfoni@gmail.com",
																					"isAdmin": true,
																					"completedAssignments": {}
																				},
																				"scene": {
																					"name": "Scene 1",
																					"currentFileIndex": 0,
																					"files": [{
																						"name": "index.html",
																						"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																					}],
																					"assignments": [{
																						"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																						"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																						"completed": false
																					}, {
																						"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																						"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																						"completed": false
																					}],
																					"recording": true,
																					"duration": 12860
																				},
																				"course": {
																					"_id": "565edcfbd40082328ef02b7c",
																					"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																					"created": 1449057531702,
																					"name": "Demo",
																					"authorId": "christianalfoni@gmail.com",
																					"scenes": [{
																						"name": "Scene 1",
																						"currentFileIndex": 0,
																						"assignments": [{
																							"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																							"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																							"completed": false
																						}, {
																							"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																							"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																							"completed": false
																						}],
																						"recording": {
																							"initialState": {
																								"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																								"name": "Demo",
																								"mousePosition": {
																									"x": 71,
																									"y": 32
																								},
																								"isLoading": false,
																								"currentAssignmentStatus": {
																									"isLoading": false,
																									"result": null
																								},
																								"assignmentPoints": [],
																								"isLoadingMedia": false,
																								"authorId": "christianalfoni@gmail.com",
																								"showPreview": true,
																								"showConsole": false,
																								"showEditAssignment": false,
																								"showAssignment": false,
																								"showConfigureScenes": false,
																								"showScenesList": false,
																								"showFolder": false,
																								"showAddFileInput": false,
																								"currentSceneIndex": "0",
																								"currentAssignmentIndex": 0,
																								"sandboxSnapshot": [{
																									"name": "index.html",
																									"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																								}],
																								"newSceneName": "",
																								"newFileName": "",
																								"codeSelection": {
																									"anchor": {
																										"line": 8,
																										"ch": 7
																									},
																									"head": {
																										"line": 8,
																										"ch": 7
																									}
																								},
																								"scenes": [{
																									"name": "Scene 1",
																									"currentFileIndex": 0,
																									"files": [{
																										"name": "index.html",
																										"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																									}],
																									"assignments": [{
																										"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																										"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																										"completed": false
																									}, {
																										"description": "I denne oppgaven skal du lage et DIV element med teksten: \"Hvordan går det?\"",
																										"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																										"completed": false
																									}],
																									"recording": true,
																									"sandboxFiles": [{
																										"name": "index.html",
																										"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																									}]
																								}, {
																									"assignments": [{
																										"description": "",
																										"code": ""
																									}],
																									"name": "Scene 2"
																								}],
																								"scenesList": [{
																									"name": "Scene 1",
																									"assignmentsCount": 2
																								}, {
																									"name": "Scene 2",
																									"assignmentsCount": 1
																								}],
																								"recorder": {
																									"isPlaying": false,
																									"isUploading": false,
																									"isRecording": false,
																									"hasRecorded": false
																								},
																								"_id": "565edcfbd40082328ef02b7c",
																								"created": 1449057531702,
																								"previewUrl": "https://sandbox.kodeboksen.dev:3000?id=1452093444124",
																								"isLoadingPreview": false
																							},
																							"start": 1452093447151,
																							"signals": [{
																								"name": "snackbarTimedOut",
																								"input": {},
																								"start": 1452093447293,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.pauseClicked",
																								"input": {
																									"seek": 3103.783
																								},
																								"start": 1452093450078,
																								"asyncActionPaths": ["0.0"],
																								"asyncActionResults": [{
																									"outputPath": "success"
																								}]
																							}, {
																								"name": "course.appClicked",
																								"input": {
																									"mousePositionX": 23,
																									"mousePositionY": 31
																								},
																								"start": 1452093450079,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 0,
																										"ch": 0
																									},
																									"head": {
																										"line": 0,
																										"ch": 0
																									}
																								},
																								"start": 1452093450115,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 8,
																										"ch": 7
																									},
																									"head": {
																										"line": 8,
																										"ch": 7
																									}
																								},
																								"start": 1452093450117,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"head": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									}
																								},
																								"start": 1452093453661,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.appClicked",
																								"input": {
																									"mousePositionX": 660,
																									"mousePositionY": 227
																								},
																								"start": 1452093453734,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"to": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"text": [" "]
																								},
																								"start": 1452093454471,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 29
																									},
																									"head": {
																										"line": 6,
																										"ch": 29
																									}
																								},
																								"start": 1452093454483,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 29
																									},
																									"to": {
																										"line": 6,
																										"ch": 29
																									},
																									"text": ["h"]
																								},
																								"start": 1452093454651,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 30
																									},
																									"head": {
																										"line": 6,
																										"ch": 30
																									}
																								},
																								"start": 1452093454656,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 30
																									},
																									"to": {
																										"line": 6,
																										"ch": 30
																									},
																									"text": ["e"]
																								},
																								"start": 1452093454712,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 31
																									},
																									"head": {
																										"line": 6,
																										"ch": 31
																									}
																								},
																								"start": 1452093454718,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 31
																									},
																									"to": {
																										"line": 6,
																										"ch": 31
																									},
																									"text": [" "]
																								},
																								"start": 1452093454856,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 32
																									},
																									"head": {
																										"line": 6,
																										"ch": 32
																									}
																								},
																								"start": 1452093454866,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 32
																									},
																									"to": {
																										"line": 6,
																										"ch": 32
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455046,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 33
																									},
																									"head": {
																										"line": 6,
																										"ch": 33
																									}
																								},
																								"start": 1452093455050,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 33
																									},
																									"to": {
																										"line": 6,
																										"ch": 33
																									},
																									"text": ["e"]
																								},
																								"start": 1452093455096,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 34
																									},
																									"head": {
																										"line": 6,
																										"ch": 34
																									}
																								},
																								"start": 1452093455102,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 34
																									},
																									"to": {
																										"line": 6,
																										"ch": 34
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455250,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 35
																									},
																									"head": {
																										"line": 6,
																										"ch": 35
																									}
																								},
																								"start": 1452093455255,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 35
																									},
																									"to": {
																										"line": 6,
																										"ch": 35
																									},
																									"text": [" "]
																								},
																								"start": 1452093455275,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 36
																									},
																									"head": {
																										"line": 6,
																										"ch": 36
																									}
																								},
																								"start": 1452093455279,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 36
																									},
																									"to": {
																										"line": 6,
																										"ch": 36
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455483,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 37
																									},
																									"head": {
																										"line": 6,
																										"ch": 37
																									}
																								},
																								"start": 1452093455487,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 37
																									},
																									"to": {
																										"line": 6,
																										"ch": 37
																									},
																									"text": ["e"]
																								},
																								"start": 1452093455554,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 38
																									},
																									"head": {
																										"line": 6,
																										"ch": 38
																									}
																								},
																								"start": 1452093455558,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 38
																									},
																									"to": {
																										"line": 6,
																										"ch": 38
																									},
																									"text": [" "]
																								},
																								"start": 1452093456506,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 39
																									},
																									"head": {
																										"line": 6,
																										"ch": 39
																									}
																								},
																								"start": 1452093456510,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 39
																									},
																									"to": {
																										"line": 6,
																										"ch": 39
																									},
																									"text": ["h"]
																								},
																								"start": 1452093456623,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 40
																									},
																									"head": {
																										"line": 6,
																										"ch": 40
																									}
																								},
																								"start": 1452093456629,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 40
																									},
																									"to": {
																										"line": 6,
																										"ch": 40
																									},
																									"text": ["e"]
																								},
																								"start": 1452093456658,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 41
																									},
																									"head": {
																										"line": 6,
																										"ch": 41
																									}
																								},
																								"start": 1452093456662,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 41
																									},
																									"to": {
																										"line": 6,
																										"ch": 41
																									},
																									"text": ["h"]
																								},
																								"start": 1452093456815,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 42
																									},
																									"head": {
																										"line": 6,
																										"ch": 42
																									}
																								},
																								"start": 1452093456819,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 42
																									},
																									"to": {
																										"line": 6,
																										"ch": 42
																									},
																									"text": ["e"]
																								},
																								"start": 1452093456891,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 43
																									},
																									"head": {
																										"line": 6,
																										"ch": 43
																									}
																								},
																								"start": 1452093456896,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 43
																									},
																									"to": {
																										"line": 6,
																										"ch": 43
																									},
																									"text": [" "]
																								},
																								"start": 1452093456923,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 44
																									},
																									"head": {
																										"line": 6,
																										"ch": 44
																									}
																								},
																								"start": 1452093456928,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 44
																									},
																									"to": {
																										"line": 6,
																										"ch": 44
																									},
																									"text": ["h"]
																								},
																								"start": 1452093457234,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 45
																									},
																									"head": {
																										"line": 6,
																										"ch": 45
																									}
																								},
																								"start": 1452093457238,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 45
																									},
																									"to": {
																										"line": 6,
																										"ch": 45
																									},
																									"text": ["e"]
																								},
																								"start": 1452093457326,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 46
																									},
																									"head": {
																										"line": 6,
																										"ch": 46
																									}
																								},
																								"start": 1452093457332,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.saveShortcutPressed",
																								"start": 1452093457755,
																								"asyncActionPaths": ["0.0", "1.outputs.true.3.0"],
																								"asyncActionResults": [{
																									"outputPath": "success"
																								}, {
																									"outputPath": "success"
																								}]
																							}, {
																								"name": "course.stopClicked",
																								"input": {
																									"seek": 13050.378
																								},
																								"start": 1452093460010,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}],
																							"path": ["course"],
																							"end": 1452093460011,
																							"duration": 12860
																						}
																					}, {
																						"assignments": [{
																							"description": "",
																							"code": ""
																						}],
																						"name": "Scene 2"
																					}]
																				}
																			},
																			"duration": 0,
																			"mutations": [{
																				"name": "set",
																				"path": ["course", "sandboxSnapshot"],
																				"args": [
																					[{
																						"name": "index.html",
																						"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																					}]
																				]
																			}],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": true,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 4, "outputs", "true", 3],
																			"outputs": null,
																			"actionIndex": 12
																		}, {
																			"name": "setPreviewUrl",
																			"input": {
																				"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																				"sceneIndex": "0",
																				"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246",
																				"user": {
																					"id": "christianalfoni@gmail.com",
																					"isAdmin": true,
																					"completedAssignments": {}
																				},
																				"scene": {
																					"name": "Scene 1",
																					"currentFileIndex": 0,
																					"files": [{
																						"name": "index.html",
																						"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																					}],
																					"assignments": [{
																						"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																						"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																						"completed": false
																					}, {
																						"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																						"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																						"completed": false
																					}],
																					"recording": true,
																					"duration": 12860
																				},
																				"course": {
																					"_id": "565edcfbd40082328ef02b7c",
																					"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																					"created": 1449057531702,
																					"name": "Demo",
																					"authorId": "christianalfoni@gmail.com",
																					"scenes": [{
																						"name": "Scene 1",
																						"currentFileIndex": 0,
																						"assignments": [{
																							"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																							"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																							"completed": false
																						}, {
																							"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																							"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																							"completed": false
																						}],
																						"recording": {
																							"initialState": {
																								"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																								"name": "Demo",
																								"mousePosition": {
																									"x": 71,
																									"y": 32
																								},
																								"isLoading": false,
																								"currentAssignmentStatus": {
																									"isLoading": false,
																									"result": null
																								},
																								"assignmentPoints": [],
																								"isLoadingMedia": false,
																								"authorId": "christianalfoni@gmail.com",
																								"showPreview": true,
																								"showConsole": false,
																								"showEditAssignment": false,
																								"showAssignment": false,
																								"showConfigureScenes": false,
																								"showScenesList": false,
																								"showFolder": false,
																								"showAddFileInput": false,
																								"currentSceneIndex": "0",
																								"currentAssignmentIndex": 0,
																								"sandboxSnapshot": [{
																									"name": "index.html",
																									"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																								}],
																								"newSceneName": "",
																								"newFileName": "",
																								"codeSelection": {
																									"anchor": {
																										"line": 8,
																										"ch": 7
																									},
																									"head": {
																										"line": 8,
																										"ch": 7
																									}
																								},
																								"scenes": [{
																									"name": "Scene 1",
																									"currentFileIndex": 0,
																									"files": [{
																										"name": "index.html",
																										"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																									}],
																									"assignments": [{
																										"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																										"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																										"completed": false
																									}, {
																										"description": "I denne oppgaven skal du lage et DIV element med teksten: \"Hvordan går det?\"",
																										"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																										"completed": false
																									}],
																									"recording": true,
																									"sandboxFiles": [{
																										"name": "index.html",
																										"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																									}]
																								}, {
																									"assignments": [{
																										"description": "",
																										"code": ""
																									}],
																									"name": "Scene 2"
																								}],
																								"scenesList": [{
																									"name": "Scene 1",
																									"assignmentsCount": 2
																								}, {
																									"name": "Scene 2",
																									"assignmentsCount": 1
																								}],
																								"recorder": {
																									"isPlaying": false,
																									"isUploading": false,
																									"isRecording": false,
																									"hasRecorded": false
																								},
																								"_id": "565edcfbd40082328ef02b7c",
																								"created": 1449057531702,
																								"previewUrl": "https://sandbox.kodeboksen.dev:3000?id=1452093444124",
																								"isLoadingPreview": false
																							},
																							"start": 1452093447151,
																							"signals": [{
																								"name": "snackbarTimedOut",
																								"input": {},
																								"start": 1452093447293,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.pauseClicked",
																								"input": {
																									"seek": 3103.783
																								},
																								"start": 1452093450078,
																								"asyncActionPaths": ["0.0"],
																								"asyncActionResults": [{
																									"outputPath": "success"
																								}]
																							}, {
																								"name": "course.appClicked",
																								"input": {
																									"mousePositionX": 23,
																									"mousePositionY": 31
																								},
																								"start": 1452093450079,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 0,
																										"ch": 0
																									},
																									"head": {
																										"line": 0,
																										"ch": 0
																									}
																								},
																								"start": 1452093450115,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 8,
																										"ch": 7
																									},
																									"head": {
																										"line": 8,
																										"ch": 7
																									}
																								},
																								"start": 1452093450117,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"head": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									}
																								},
																								"start": 1452093453661,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.appClicked",
																								"input": {
																									"mousePositionX": 660,
																									"mousePositionY": 227
																								},
																								"start": 1452093453734,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"to": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"text": [" "]
																								},
																								"start": 1452093454471,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 29
																									},
																									"head": {
																										"line": 6,
																										"ch": 29
																									}
																								},
																								"start": 1452093454483,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 29
																									},
																									"to": {
																										"line": 6,
																										"ch": 29
																									},
																									"text": ["h"]
																								},
																								"start": 1452093454651,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 30
																									},
																									"head": {
																										"line": 6,
																										"ch": 30
																									}
																								},
																								"start": 1452093454656,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 30
																									},
																									"to": {
																										"line": 6,
																										"ch": 30
																									},
																									"text": ["e"]
																								},
																								"start": 1452093454712,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 31
																									},
																									"head": {
																										"line": 6,
																										"ch": 31
																									}
																								},
																								"start": 1452093454718,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 31
																									},
																									"to": {
																										"line": 6,
																										"ch": 31
																									},
																									"text": [" "]
																								},
																								"start": 1452093454856,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 32
																									},
																									"head": {
																										"line": 6,
																										"ch": 32
																									}
																								},
																								"start": 1452093454866,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 32
																									},
																									"to": {
																										"line": 6,
																										"ch": 32
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455046,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 33
																									},
																									"head": {
																										"line": 6,
																										"ch": 33
																									}
																								},
																								"start": 1452093455050,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 33
																									},
																									"to": {
																										"line": 6,
																										"ch": 33
																									},
																									"text": ["e"]
																								},
																								"start": 1452093455096,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 34
																									},
																									"head": {
																										"line": 6,
																										"ch": 34
																									}
																								},
																								"start": 1452093455102,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 34
																									},
																									"to": {
																										"line": 6,
																										"ch": 34
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455250,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 35
																									},
																									"head": {
																										"line": 6,
																										"ch": 35
																									}
																								},
																								"start": 1452093455255,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 35
																									},
																									"to": {
																										"line": 6,
																										"ch": 35
																									},
																									"text": [" "]
																								},
																								"start": 1452093455275,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 36
																									},
																									"head": {
																										"line": 6,
																										"ch": 36
																									}
																								},
																								"start": 1452093455279,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 36
																									},
																									"to": {
																										"line": 6,
																										"ch": 36
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455483,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 37
																									},
																									"head": {
																										"line": 6,
																										"ch": 37
																									}
																								},
																								"start": 1452093455487,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 37
																									},
																									"to": {
																										"line": 6,
																										"ch": 37
																									},
																									"text": ["e"]
																								},
																								"start": 1452093455554,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 38
																									},
																									"head": {
																										"line": 6,
																										"ch": 38
																									}
																								},
																								"start": 1452093455558,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 38
																									},
																									"to": {
																										"line": 6,
																										"ch": 38
																									},
																									"text": [" "]
																								},
																								"start": 1452093456506,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 39
																									},
																									"head": {
																										"line": 6,
																										"ch": 39
																									}
																								},
																								"start": 1452093456510,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 39
																									},
																									"to": {
																										"line": 6,
																										"ch": 39
																									},
																									"text": ["h"]
																								},
																								"start": 1452093456623,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 40
																									},
																									"head": {
																										"line": 6,
																										"ch": 40
																									}
																								},
																								"start": 1452093456629,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 40
																									},
																									"to": {
																										"line": 6,
																										"ch": 40
																									},
																									"text": ["e"]
																								},
																								"start": 1452093456658,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 41
																									},
																									"head": {
																										"line": 6,
																										"ch": 41
																									}
																								},
																								"start": 1452093456662,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 41
																									},
																									"to": {
																										"line": 6,
																										"ch": 41
																									},
																									"text": ["h"]
																								},
																								"start": 1452093456815,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 42
																									},
																									"head": {
																										"line": 6,
																										"ch": 42
																									}
																								},
																								"start": 1452093456819,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 42
																									},
																									"to": {
																										"line": 6,
																										"ch": 42
																									},
																									"text": ["e"]
																								},
																								"start": 1452093456891,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 43
																									},
																									"head": {
																										"line": 6,
																										"ch": 43
																									}
																								},
																								"start": 1452093456896,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 43
																									},
																									"to": {
																										"line": 6,
																										"ch": 43
																									},
																									"text": [" "]
																								},
																								"start": 1452093456923,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 44
																									},
																									"head": {
																										"line": 6,
																										"ch": 44
																									}
																								},
																								"start": 1452093456928,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 44
																									},
																									"to": {
																										"line": 6,
																										"ch": 44
																									},
																									"text": ["h"]
																								},
																								"start": 1452093457234,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 45
																									},
																									"head": {
																										"line": 6,
																										"ch": 45
																									}
																								},
																								"start": 1452093457238,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 45
																									},
																									"to": {
																										"line": 6,
																										"ch": 45
																									},
																									"text": ["e"]
																								},
																								"start": 1452093457326,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 46
																									},
																									"head": {
																										"line": 6,
																										"ch": 46
																									}
																								},
																								"start": 1452093457332,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.saveShortcutPressed",
																								"start": 1452093457755,
																								"asyncActionPaths": ["0.0", "1.outputs.true.3.0"],
																								"asyncActionResults": [{
																									"outputPath": "success"
																								}, {
																									"outputPath": "success"
																								}]
																							}, {
																								"name": "course.stopClicked",
																								"input": {
																									"seek": 13050.378
																								},
																								"start": 1452093460010,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}],
																							"path": ["course"],
																							"end": 1452093460011,
																							"duration": 12860
																						}
																					}, {
																						"assignments": [{
																							"description": "",
																							"code": ""
																						}],
																						"name": "Scene 2"
																					}]
																				}
																			},
																			"output": {
																				"requestId": "1452156342953"
																			},
																			"duration": 0,
																			"mutations": [{
																				"name": "set",
																				"path": ["course", "previewUrl"],
																				"args": ["https://sandbox.kodeboksen.dev:3000?id=1452156342953"]
																			}],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": true,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 4, "outputs", "true", 4],
																			"outputs": null,
																			"actionIndex": 13
																		}, {
																			"name": "SET isLoadingPreview",
																			"input": {
																				"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																				"sceneIndex": "0",
																				"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246",
																				"user": {
																					"id": "christianalfoni@gmail.com",
																					"isAdmin": true,
																					"completedAssignments": {}
																				},
																				"scene": {
																					"name": "Scene 1",
																					"currentFileIndex": 0,
																					"files": [{
																						"name": "index.html",
																						"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																					}],
																					"assignments": [{
																						"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																						"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																						"completed": false
																					}, {
																						"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																						"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																						"completed": false
																					}],
																					"recording": true,
																					"duration": 12860
																				},
																				"course": {
																					"_id": "565edcfbd40082328ef02b7c",
																					"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																					"created": 1449057531702,
																					"name": "Demo",
																					"authorId": "christianalfoni@gmail.com",
																					"scenes": [{
																						"name": "Scene 1",
																						"currentFileIndex": 0,
																						"assignments": [{
																							"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																							"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																							"completed": false
																						}, {
																							"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																							"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																							"completed": false
																						}],
																						"recording": {
																							"initialState": {
																								"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																								"name": "Demo",
																								"mousePosition": {
																									"x": 71,
																									"y": 32
																								},
																								"isLoading": false,
																								"currentAssignmentStatus": {
																									"isLoading": false,
																									"result": null
																								},
																								"assignmentPoints": [],
																								"isLoadingMedia": false,
																								"authorId": "christianalfoni@gmail.com",
																								"showPreview": true,
																								"showConsole": false,
																								"showEditAssignment": false,
																								"showAssignment": false,
																								"showConfigureScenes": false,
																								"showScenesList": false,
																								"showFolder": false,
																								"showAddFileInput": false,
																								"currentSceneIndex": "0",
																								"currentAssignmentIndex": 0,
																								"sandboxSnapshot": [{
																									"name": "index.html",
																									"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																								}],
																								"newSceneName": "",
																								"newFileName": "",
																								"codeSelection": {
																									"anchor": {
																										"line": 8,
																										"ch": 7
																									},
																									"head": {
																										"line": 8,
																										"ch": 7
																									}
																								},
																								"scenes": [{
																									"name": "Scene 1",
																									"currentFileIndex": 0,
																									"files": [{
																										"name": "index.html",
																										"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																									}],
																									"assignments": [{
																										"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																										"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																										"completed": false
																									}, {
																										"description": "I denne oppgaven skal du lage et DIV element med teksten: \"Hvordan går det?\"",
																										"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																										"completed": false
																									}],
																									"recording": true,
																									"sandboxFiles": [{
																										"name": "index.html",
																										"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																									}]
																								}, {
																									"assignments": [{
																										"description": "",
																										"code": ""
																									}],
																									"name": "Scene 2"
																								}],
																								"scenesList": [{
																									"name": "Scene 1",
																									"assignmentsCount": 2
																								}, {
																									"name": "Scene 2",
																									"assignmentsCount": 1
																								}],
																								"recorder": {
																									"isPlaying": false,
																									"isUploading": false,
																									"isRecording": false,
																									"hasRecorded": false
																								},
																								"_id": "565edcfbd40082328ef02b7c",
																								"created": 1449057531702,
																								"previewUrl": "https://sandbox.kodeboksen.dev:3000?id=1452093444124",
																								"isLoadingPreview": false
																							},
																							"start": 1452093447151,
																							"signals": [{
																								"name": "snackbarTimedOut",
																								"input": {},
																								"start": 1452093447293,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.pauseClicked",
																								"input": {
																									"seek": 3103.783
																								},
																								"start": 1452093450078,
																								"asyncActionPaths": ["0.0"],
																								"asyncActionResults": [{
																									"outputPath": "success"
																								}]
																							}, {
																								"name": "course.appClicked",
																								"input": {
																									"mousePositionX": 23,
																									"mousePositionY": 31
																								},
																								"start": 1452093450079,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 0,
																										"ch": 0
																									},
																									"head": {
																										"line": 0,
																										"ch": 0
																									}
																								},
																								"start": 1452093450115,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 8,
																										"ch": 7
																									},
																									"head": {
																										"line": 8,
																										"ch": 7
																									}
																								},
																								"start": 1452093450117,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"head": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									}
																								},
																								"start": 1452093453661,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.appClicked",
																								"input": {
																									"mousePositionX": 660,
																									"mousePositionY": 227
																								},
																								"start": 1452093453734,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"to": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"text": [" "]
																								},
																								"start": 1452093454471,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 29
																									},
																									"head": {
																										"line": 6,
																										"ch": 29
																									}
																								},
																								"start": 1452093454483,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 29
																									},
																									"to": {
																										"line": 6,
																										"ch": 29
																									},
																									"text": ["h"]
																								},
																								"start": 1452093454651,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 30
																									},
																									"head": {
																										"line": 6,
																										"ch": 30
																									}
																								},
																								"start": 1452093454656,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 30
																									},
																									"to": {
																										"line": 6,
																										"ch": 30
																									},
																									"text": ["e"]
																								},
																								"start": 1452093454712,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 31
																									},
																									"head": {
																										"line": 6,
																										"ch": 31
																									}
																								},
																								"start": 1452093454718,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 31
																									},
																									"to": {
																										"line": 6,
																										"ch": 31
																									},
																									"text": [" "]
																								},
																								"start": 1452093454856,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 32
																									},
																									"head": {
																										"line": 6,
																										"ch": 32
																									}
																								},
																								"start": 1452093454866,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 32
																									},
																									"to": {
																										"line": 6,
																										"ch": 32
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455046,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 33
																									},
																									"head": {
																										"line": 6,
																										"ch": 33
																									}
																								},
																								"start": 1452093455050,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 33
																									},
																									"to": {
																										"line": 6,
																										"ch": 33
																									},
																									"text": ["e"]
																								},
																								"start": 1452093455096,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 34
																									},
																									"head": {
																										"line": 6,
																										"ch": 34
																									}
																								},
																								"start": 1452093455102,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 34
																									},
																									"to": {
																										"line": 6,
																										"ch": 34
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455250,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 35
																									},
																									"head": {
																										"line": 6,
																										"ch": 35
																									}
																								},
																								"start": 1452093455255,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 35
																									},
																									"to": {
																										"line": 6,
																										"ch": 35
																									},
																									"text": [" "]
																								},
																								"start": 1452093455275,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 36
																									},
																									"head": {
																										"line": 6,
																										"ch": 36
																									}
																								},
																								"start": 1452093455279,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 36
																									},
																									"to": {
																										"line": 6,
																										"ch": 36
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455483,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 37
																									},
																									"head": {
																										"line": 6,
																										"ch": 37
																									}
																								},
																								"start": 1452093455487,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 37
																									},
																									"to": {
																										"line": 6,
																										"ch": 37
																									},
																									"text": ["e"]
																								},
																								"start": 1452093455554,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 38
																									},
																									"head": {
																										"line": 6,
																										"ch": 38
																									}
																								},
																								"start": 1452093455558,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 38
																									},
																									"to": {
																										"line": 6,
																										"ch": 38
																									},
																									"text": [" "]
																								},
																								"start": 1452093456506,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 39
																									},
																									"head": {
																										"line": 6,
																										"ch": 39
																									}
																								},
																								"start": 1452093456510,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 39
																									},
																									"to": {
																										"line": 6,
																										"ch": 39
																									},
																									"text": ["h"]
																								},
																								"start": 1452093456623,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 40
																									},
																									"head": {
																										"line": 6,
																										"ch": 40
																									}
																								},
																								"start": 1452093456629,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 40
																									},
																									"to": {
																										"line": 6,
																										"ch": 40
																									},
																									"text": ["e"]
																								},
																								"start": 1452093456658,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 41
																									},
																									"head": {
																										"line": 6,
																										"ch": 41
																									}
																								},
																								"start": 1452093456662,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 41
																									},
																									"to": {
																										"line": 6,
																										"ch": 41
																									},
																									"text": ["h"]
																								},
																								"start": 1452093456815,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 42
																									},
																									"head": {
																										"line": 6,
																										"ch": 42
																									}
																								},
																								"start": 1452093456819,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 42
																									},
																									"to": {
																										"line": 6,
																										"ch": 42
																									},
																									"text": ["e"]
																								},
																								"start": 1452093456891,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 43
																									},
																									"head": {
																										"line": 6,
																										"ch": 43
																									}
																								},
																								"start": 1452093456896,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 43
																									},
																									"to": {
																										"line": 6,
																										"ch": 43
																									},
																									"text": [" "]
																								},
																								"start": 1452093456923,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 44
																									},
																									"head": {
																										"line": 6,
																										"ch": 44
																									}
																								},
																								"start": 1452093456928,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 44
																									},
																									"to": {
																										"line": 6,
																										"ch": 44
																									},
																									"text": ["h"]
																								},
																								"start": 1452093457234,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 45
																									},
																									"head": {
																										"line": 6,
																										"ch": 45
																									}
																								},
																								"start": 1452093457238,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 45
																									},
																									"to": {
																										"line": 6,
																										"ch": 45
																									},
																									"text": ["e"]
																								},
																								"start": 1452093457326,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 46
																									},
																									"head": {
																										"line": 6,
																										"ch": 46
																									}
																								},
																								"start": 1452093457332,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.saveShortcutPressed",
																								"start": 1452093457755,
																								"asyncActionPaths": ["0.0", "1.outputs.true.3.0"],
																								"asyncActionResults": [{
																									"outputPath": "success"
																								}, {
																									"outputPath": "success"
																								}]
																							}, {
																								"name": "course.stopClicked",
																								"input": {
																									"seek": 13050.378
																								},
																								"start": 1452093460010,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}],
																							"path": ["course"],
																							"end": 1452093460011,
																							"duration": 12860
																						}
																					}, {
																						"assignments": [{
																							"description": "",
																							"code": ""
																						}],
																						"name": "Scene 2"
																					}]
																				},
																				"requestId": "1452156342953"
																			},
																			"duration": 9,
																			"mutations": [{
																				"name": "set",
																				"path": ["course", "isLoadingPreview"],
																				"args": [true]
																			}],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": true,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 4, "outputs", "true", 5],
																			"outputs": null,
																			"actionIndex": 14
																		},
																		[{
																			"name": "saveSandbox",
																			"input": {
																				"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																				"sceneIndex": "0",
																				"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246",
																				"user": {
																					"id": "christianalfoni@gmail.com",
																					"isAdmin": true,
																					"completedAssignments": {}
																				},
																				"scene": {
																					"name": "Scene 1",
																					"currentFileIndex": 0,
																					"files": [{
																						"name": "index.html",
																						"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																					}],
																					"assignments": [{
																						"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																						"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																						"completed": false
																					}, {
																						"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																						"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																						"completed": false
																					}],
																					"recording": true,
																					"duration": 12860
																				},
																				"course": {
																					"_id": "565edcfbd40082328ef02b7c",
																					"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																					"created": 1449057531702,
																					"name": "Demo",
																					"authorId": "christianalfoni@gmail.com",
																					"scenes": [{
																						"name": "Scene 1",
																						"currentFileIndex": 0,
																						"assignments": [{
																							"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																							"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																							"completed": false
																						}, {
																							"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																							"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																							"completed": false
																						}],
																						"recording": {
																							"initialState": {
																								"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																								"name": "Demo",
																								"mousePosition": {
																									"x": 71,
																									"y": 32
																								},
																								"isLoading": false,
																								"currentAssignmentStatus": {
																									"isLoading": false,
																									"result": null
																								},
																								"assignmentPoints": [],
																								"isLoadingMedia": false,
																								"authorId": "christianalfoni@gmail.com",
																								"showPreview": true,
																								"showConsole": false,
																								"showEditAssignment": false,
																								"showAssignment": false,
																								"showConfigureScenes": false,
																								"showScenesList": false,
																								"showFolder": false,
																								"showAddFileInput": false,
																								"currentSceneIndex": "0",
																								"currentAssignmentIndex": 0,
																								"sandboxSnapshot": [{
																									"name": "index.html",
																									"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																								}],
																								"newSceneName": "",
																								"newFileName": "",
																								"codeSelection": {
																									"anchor": {
																										"line": 8,
																										"ch": 7
																									},
																									"head": {
																										"line": 8,
																										"ch": 7
																									}
																								},
																								"scenes": [{
																									"name": "Scene 1",
																									"currentFileIndex": 0,
																									"files": [{
																										"name": "index.html",
																										"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																									}],
																									"assignments": [{
																										"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																										"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																										"completed": false
																									}, {
																										"description": "I denne oppgaven skal du lage et DIV element med teksten: \"Hvordan går det?\"",
																										"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																										"completed": false
																									}],
																									"recording": true,
																									"sandboxFiles": [{
																										"name": "index.html",
																										"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																									}]
																								}, {
																									"assignments": [{
																										"description": "",
																										"code": ""
																									}],
																									"name": "Scene 2"
																								}],
																								"scenesList": [{
																									"name": "Scene 1",
																									"assignmentsCount": 2
																								}, {
																									"name": "Scene 2",
																									"assignmentsCount": 1
																								}],
																								"recorder": {
																									"isPlaying": false,
																									"isUploading": false,
																									"isRecording": false,
																									"hasRecorded": false
																								},
																								"_id": "565edcfbd40082328ef02b7c",
																								"created": 1449057531702,
																								"previewUrl": "https://sandbox.kodeboksen.dev:3000?id=1452093444124",
																								"isLoadingPreview": false
																							},
																							"start": 1452093447151,
																							"signals": [{
																								"name": "snackbarTimedOut",
																								"input": {},
																								"start": 1452093447293,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.pauseClicked",
																								"input": {
																									"seek": 3103.783
																								},
																								"start": 1452093450078,
																								"asyncActionPaths": ["0.0"],
																								"asyncActionResults": [{
																									"outputPath": "success"
																								}]
																							}, {
																								"name": "course.appClicked",
																								"input": {
																									"mousePositionX": 23,
																									"mousePositionY": 31
																								},
																								"start": 1452093450079,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 0,
																										"ch": 0
																									},
																									"head": {
																										"line": 0,
																										"ch": 0
																									}
																								},
																								"start": 1452093450115,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 8,
																										"ch": 7
																									},
																									"head": {
																										"line": 8,
																										"ch": 7
																									}
																								},
																								"start": 1452093450117,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"head": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									}
																								},
																								"start": 1452093453661,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.appClicked",
																								"input": {
																									"mousePositionX": 660,
																									"mousePositionY": 227
																								},
																								"start": 1452093453734,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"to": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"text": [" "]
																								},
																								"start": 1452093454471,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 29
																									},
																									"head": {
																										"line": 6,
																										"ch": 29
																									}
																								},
																								"start": 1452093454483,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 29
																									},
																									"to": {
																										"line": 6,
																										"ch": 29
																									},
																									"text": ["h"]
																								},
																								"start": 1452093454651,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 30
																									},
																									"head": {
																										"line": 6,
																										"ch": 30
																									}
																								},
																								"start": 1452093454656,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 30
																									},
																									"to": {
																										"line": 6,
																										"ch": 30
																									},
																									"text": ["e"]
																								},
																								"start": 1452093454712,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 31
																									},
																									"head": {
																										"line": 6,
																										"ch": 31
																									}
																								},
																								"start": 1452093454718,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 31
																									},
																									"to": {
																										"line": 6,
																										"ch": 31
																									},
																									"text": [" "]
																								},
																								"start": 1452093454856,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 32
																									},
																									"head": {
																										"line": 6,
																										"ch": 32
																									}
																								},
																								"start": 1452093454866,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 32
																									},
																									"to": {
																										"line": 6,
																										"ch": 32
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455046,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 33
																									},
																									"head": {
																										"line": 6,
																										"ch": 33
																									}
																								},
																								"start": 1452093455050,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 33
																									},
																									"to": {
																										"line": 6,
																										"ch": 33
																									},
																									"text": ["e"]
																								},
																								"start": 1452093455096,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 34
																									},
																									"head": {
																										"line": 6,
																										"ch": 34
																									}
																								},
																								"start": 1452093455102,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 34
																									},
																									"to": {
																										"line": 6,
																										"ch": 34
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455250,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 35
																									},
																									"head": {
																										"line": 6,
																										"ch": 35
																									}
																								},
																								"start": 1452093455255,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 35
																									},
																									"to": {
																										"line": 6,
																										"ch": 35
																									},
																									"text": [" "]
																								},
																								"start": 1452093455275,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 36
																									},
																									"head": {
																										"line": 6,
																										"ch": 36
																									}
																								},
																								"start": 1452093455279,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 36
																									},
																									"to": {
																										"line": 6,
																										"ch": 36
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455483,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 37
																									},
																									"head": {
																										"line": 6,
																										"ch": 37
																									}
																								},
																								"start": 1452093455487,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 37
																									},
																									"to": {
																										"line": 6,
																										"ch": 37
																									},
																									"text": ["e"]
																								},
																								"start": 1452093455554,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 38
																									},
																									"head": {
																										"line": 6,
																										"ch": 38
																									}
																								},
																								"start": 1452093455558,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 38
																									},
																									"to": {
																										"line": 6,
																										"ch": 38
																									},
																									"text": [" "]
																								},
																								"start": 1452093456506,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 39
																									},
																									"head": {
																										"line": 6,
																										"ch": 39
																									}
																								},
																								"start": 1452093456510,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 39
																									},
																									"to": {
																										"line": 6,
																										"ch": 39
																									},
																									"text": ["h"]
																								},
																								"start": 1452093456623,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 40
																									},
																									"head": {
																										"line": 6,
																										"ch": 40
																									}
																								},
																								"start": 1452093456629,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 40
																									},
																									"to": {
																										"line": 6,
																										"ch": 40
																									},
																									"text": ["e"]
																								},
																								"start": 1452093456658,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 41
																									},
																									"head": {
																										"line": 6,
																										"ch": 41
																									}
																								},
																								"start": 1452093456662,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 41
																									},
																									"to": {
																										"line": 6,
																										"ch": 41
																									},
																									"text": ["h"]
																								},
																								"start": 1452093456815,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 42
																									},
																									"head": {
																										"line": 6,
																										"ch": 42
																									}
																								},
																								"start": 1452093456819,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 42
																									},
																									"to": {
																										"line": 6,
																										"ch": 42
																									},
																									"text": ["e"]
																								},
																								"start": 1452093456891,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 43
																									},
																									"head": {
																										"line": 6,
																										"ch": 43
																									}
																								},
																								"start": 1452093456896,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 43
																									},
																									"to": {
																										"line": 6,
																										"ch": 43
																									},
																									"text": [" "]
																								},
																								"start": 1452093456923,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 44
																									},
																									"head": {
																										"line": 6,
																										"ch": 44
																									}
																								},
																								"start": 1452093456928,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 44
																									},
																									"to": {
																										"line": 6,
																										"ch": 44
																									},
																									"text": ["h"]
																								},
																								"start": 1452093457234,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 45
																									},
																									"head": {
																										"line": 6,
																										"ch": 45
																									}
																								},
																								"start": 1452093457238,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 45
																									},
																									"to": {
																										"line": 6,
																										"ch": 45
																									},
																									"text": ["e"]
																								},
																								"start": 1452093457326,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 46
																									},
																									"head": {
																										"line": 6,
																										"ch": 46
																									}
																								},
																								"start": 1452093457332,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.saveShortcutPressed",
																								"start": 1452093457755,
																								"asyncActionPaths": ["0.0", "1.outputs.true.3.0"],
																								"asyncActionResults": [{
																									"outputPath": "success"
																								}, {
																									"outputPath": "success"
																								}]
																							}, {
																								"name": "course.stopClicked",
																								"input": {
																									"seek": 13050.378
																								},
																								"start": 1452093460010,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}],
																							"path": ["course"],
																							"end": 1452093460011,
																							"duration": 12860
																						}
																					}, {
																						"assignments": [{
																							"description": "",
																							"code": ""
																						}],
																						"name": "Scene 2"
																					}]
																				},
																				"requestId": "1452156342953"
																			},
																			"duration": 0,
																			"mutations": [],
																			"isAsync": true,
																			"outputPath": "success",
																			"isExecuting": false,
																			"hasExecuted": true,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 4, "outputs", "true", 6, 0],
																			"outputs": {
																				"success": [{
																					"name": "SET isLoadingPreview",
																					"input": {
																						"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																						"sceneIndex": "0",
																						"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246",
																						"user": {
																							"id": "christianalfoni@gmail.com",
																							"isAdmin": true,
																							"completedAssignments": {}
																						},
																						"scene": {
																							"name": "Scene 1",
																							"currentFileIndex": 0,
																							"files": [{
																								"name": "index.html",
																								"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																							}],
																							"assignments": [{
																								"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																								"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																								"completed": false
																							}, {
																								"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																								"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																								"completed": false
																							}],
																							"recording": true,
																							"duration": 12860
																						},
																						"course": {
																							"_id": "565edcfbd40082328ef02b7c",
																							"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																							"created": 1449057531702,
																							"name": "Demo",
																							"authorId": "christianalfoni@gmail.com",
																							"scenes": [{
																								"name": "Scene 1",
																								"currentFileIndex": 0,
																								"assignments": [{
																									"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																									"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																									"completed": false
																								}, {
																									"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																									"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																									"completed": false
																								}],
																								"recording": {
																									"initialState": {
																										"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																										"name": "Demo",
																										"mousePosition": {
																											"x": 71,
																											"y": 32
																										},
																										"isLoading": false,
																										"currentAssignmentStatus": {
																											"isLoading": false,
																											"result": null
																										},
																										"assignmentPoints": [],
																										"isLoadingMedia": false,
																										"authorId": "christianalfoni@gmail.com",
																										"showPreview": true,
																										"showConsole": false,
																										"showEditAssignment": false,
																										"showAssignment": false,
																										"showConfigureScenes": false,
																										"showScenesList": false,
																										"showFolder": false,
																										"showAddFileInput": false,
																										"currentSceneIndex": "0",
																										"currentAssignmentIndex": 0,
																										"sandboxSnapshot": [{
																											"name": "index.html",
																											"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																										}],
																										"newSceneName": "",
																										"newFileName": "",
																										"codeSelection": {
																											"anchor": {
																												"line": 8,
																												"ch": 7
																											},
																											"head": {
																												"line": 8,
																												"ch": 7
																											}
																										},
																										"scenes": [{
																											"name": "Scene 1",
																											"currentFileIndex": 0,
																											"files": [{
																												"name": "index.html",
																												"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																											}],
																											"assignments": [{
																												"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																												"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																												"completed": false
																											}, {
																												"description": "I denne oppgaven skal du lage et DIV element med teksten: \"Hvordan går det?\"",
																												"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																												"completed": false
																											}],
																											"recording": true,
																											"sandboxFiles": [{
																												"name": "index.html",
																												"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																											}]
																										}, {
																											"assignments": [{
																												"description": "",
																												"code": ""
																											}],
																											"name": "Scene 2"
																										}],
																										"scenesList": [{
																											"name": "Scene 1",
																											"assignmentsCount": 2
																										}, {
																											"name": "Scene 2",
																											"assignmentsCount": 1
																										}],
																										"recorder": {
																											"isPlaying": false,
																											"isUploading": false,
																											"isRecording": false,
																											"hasRecorded": false
																										},
																										"_id": "565edcfbd40082328ef02b7c",
																										"created": 1449057531702,
																										"previewUrl": "https://sandbox.kodeboksen.dev:3000?id=1452093444124",
																										"isLoadingPreview": false
																									},
																									"start": 1452093447151,
																									"signals": [{
																										"name": "snackbarTimedOut",
																										"input": {},
																										"start": 1452093447293,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.pauseClicked",
																										"input": {
																											"seek": 3103.783
																										},
																										"start": 1452093450078,
																										"asyncActionPaths": ["0.0"],
																										"asyncActionResults": [{
																											"outputPath": "success"
																										}]
																									}, {
																										"name": "course.appClicked",
																										"input": {
																											"mousePositionX": 23,
																											"mousePositionY": 31
																										},
																										"start": 1452093450079,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeCursorChanged",
																										"input": {
																											"anchor": {
																												"line": 0,
																												"ch": 0
																											},
																											"head": {
																												"line": 0,
																												"ch": 0
																											}
																										},
																										"start": 1452093450115,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeCursorChanged",
																										"input": {
																											"anchor": {
																												"line": 8,
																												"ch": 7
																											},
																											"head": {
																												"line": 8,
																												"ch": 7
																											}
																										},
																										"start": 1452093450117,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeCursorChanged",
																										"input": {
																											"anchor": {
																												"line": 6,
																												"ch": 28,
																												"xRel": 1
																											},
																											"head": {
																												"line": 6,
																												"ch": 28,
																												"xRel": 1
																											}
																										},
																										"start": 1452093453661,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.appClicked",
																										"input": {
																											"mousePositionX": 660,
																											"mousePositionY": 227
																										},
																										"start": 1452093453734,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeChanged",
																										"input": {
																											"from": {
																												"line": 6,
																												"ch": 28,
																												"xRel": 1
																											},
																											"to": {
																												"line": 6,
																												"ch": 28,
																												"xRel": 1
																											},
																											"text": [" "]
																										},
																										"start": 1452093454471,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeCursorChanged",
																										"input": {
																											"anchor": {
																												"line": 6,
																												"ch": 29
																											},
																											"head": {
																												"line": 6,
																												"ch": 29
																											}
																										},
																										"start": 1452093454483,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeChanged",
																										"input": {
																											"from": {
																												"line": 6,
																												"ch": 29
																											},
																											"to": {
																												"line": 6,
																												"ch": 29
																											},
																											"text": ["h"]
																										},
																										"start": 1452093454651,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeCursorChanged",
																										"input": {
																											"anchor": {
																												"line": 6,
																												"ch": 30
																											},
																											"head": {
																												"line": 6,
																												"ch": 30
																											}
																										},
																										"start": 1452093454656,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeChanged",
																										"input": {
																											"from": {
																												"line": 6,
																												"ch": 30
																											},
																											"to": {
																												"line": 6,
																												"ch": 30
																											},
																											"text": ["e"]
																										},
																										"start": 1452093454712,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeCursorChanged",
																										"input": {
																											"anchor": {
																												"line": 6,
																												"ch": 31
																											},
																											"head": {
																												"line": 6,
																												"ch": 31
																											}
																										},
																										"start": 1452093454718,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeChanged",
																										"input": {
																											"from": {
																												"line": 6,
																												"ch": 31
																											},
																											"to": {
																												"line": 6,
																												"ch": 31
																											},
																											"text": [" "]
																										},
																										"start": 1452093454856,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeCursorChanged",
																										"input": {
																											"anchor": {
																												"line": 6,
																												"ch": 32
																											},
																											"head": {
																												"line": 6,
																												"ch": 32
																											}
																										},
																										"start": 1452093454866,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeChanged",
																										"input": {
																											"from": {
																												"line": 6,
																												"ch": 32
																											},
																											"to": {
																												"line": 6,
																												"ch": 32
																											},
																											"text": ["h"]
																										},
																										"start": 1452093455046,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeCursorChanged",
																										"input": {
																											"anchor": {
																												"line": 6,
																												"ch": 33
																											},
																											"head": {
																												"line": 6,
																												"ch": 33
																											}
																										},
																										"start": 1452093455050,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeChanged",
																										"input": {
																											"from": {
																												"line": 6,
																												"ch": 33
																											},
																											"to": {
																												"line": 6,
																												"ch": 33
																											},
																											"text": ["e"]
																										},
																										"start": 1452093455096,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeCursorChanged",
																										"input": {
																											"anchor": {
																												"line": 6,
																												"ch": 34
																											},
																											"head": {
																												"line": 6,
																												"ch": 34
																											}
																										},
																										"start": 1452093455102,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeChanged",
																										"input": {
																											"from": {
																												"line": 6,
																												"ch": 34
																											},
																											"to": {
																												"line": 6,
																												"ch": 34
																											},
																											"text": ["h"]
																										},
																										"start": 1452093455250,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeCursorChanged",
																										"input": {
																											"anchor": {
																												"line": 6,
																												"ch": 35
																											},
																											"head": {
																												"line": 6,
																												"ch": 35
																											}
																										},
																										"start": 1452093455255,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeChanged",
																										"input": {
																											"from": {
																												"line": 6,
																												"ch": 35
																											},
																											"to": {
																												"line": 6,
																												"ch": 35
																											},
																											"text": [" "]
																										},
																										"start": 1452093455275,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeCursorChanged",
																										"input": {
																											"anchor": {
																												"line": 6,
																												"ch": 36
																											},
																											"head": {
																												"line": 6,
																												"ch": 36
																											}
																										},
																										"start": 1452093455279,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeChanged",
																										"input": {
																											"from": {
																												"line": 6,
																												"ch": 36
																											},
																											"to": {
																												"line": 6,
																												"ch": 36
																											},
																											"text": ["h"]
																										},
																										"start": 1452093455483,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeCursorChanged",
																										"input": {
																											"anchor": {
																												"line": 6,
																												"ch": 37
																											},
																											"head": {
																												"line": 6,
																												"ch": 37
																											}
																										},
																										"start": 1452093455487,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeChanged",
																										"input": {
																											"from": {
																												"line": 6,
																												"ch": 37
																											},
																											"to": {
																												"line": 6,
																												"ch": 37
																											},
																											"text": ["e"]
																										},
																										"start": 1452093455554,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeCursorChanged",
																										"input": {
																											"anchor": {
																												"line": 6,
																												"ch": 38
																											},
																											"head": {
																												"line": 6,
																												"ch": 38
																											}
																										},
																										"start": 1452093455558,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeChanged",
																										"input": {
																											"from": {
																												"line": 6,
																												"ch": 38
																											},
																											"to": {
																												"line": 6,
																												"ch": 38
																											},
																											"text": [" "]
																										},
																										"start": 1452093456506,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeCursorChanged",
																										"input": {
																											"anchor": {
																												"line": 6,
																												"ch": 39
																											},
																											"head": {
																												"line": 6,
																												"ch": 39
																											}
																										},
																										"start": 1452093456510,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeChanged",
																										"input": {
																											"from": {
																												"line": 6,
																												"ch": 39
																											},
																											"to": {
																												"line": 6,
																												"ch": 39
																											},
																											"text": ["h"]
																										},
																										"start": 1452093456623,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeCursorChanged",
																										"input": {
																											"anchor": {
																												"line": 6,
																												"ch": 40
																											},
																											"head": {
																												"line": 6,
																												"ch": 40
																											}
																										},
																										"start": 1452093456629,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeChanged",
																										"input": {
																											"from": {
																												"line": 6,
																												"ch": 40
																											},
																											"to": {
																												"line": 6,
																												"ch": 40
																											},
																											"text": ["e"]
																										},
																										"start": 1452093456658,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeCursorChanged",
																										"input": {
																											"anchor": {
																												"line": 6,
																												"ch": 41
																											},
																											"head": {
																												"line": 6,
																												"ch": 41
																											}
																										},
																										"start": 1452093456662,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeChanged",
																										"input": {
																											"from": {
																												"line": 6,
																												"ch": 41
																											},
																											"to": {
																												"line": 6,
																												"ch": 41
																											},
																											"text": ["h"]
																										},
																										"start": 1452093456815,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeCursorChanged",
																										"input": {
																											"anchor": {
																												"line": 6,
																												"ch": 42
																											},
																											"head": {
																												"line": 6,
																												"ch": 42
																											}
																										},
																										"start": 1452093456819,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeChanged",
																										"input": {
																											"from": {
																												"line": 6,
																												"ch": 42
																											},
																											"to": {
																												"line": 6,
																												"ch": 42
																											},
																											"text": ["e"]
																										},
																										"start": 1452093456891,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeCursorChanged",
																										"input": {
																											"anchor": {
																												"line": 6,
																												"ch": 43
																											},
																											"head": {
																												"line": 6,
																												"ch": 43
																											}
																										},
																										"start": 1452093456896,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeChanged",
																										"input": {
																											"from": {
																												"line": 6,
																												"ch": 43
																											},
																											"to": {
																												"line": 6,
																												"ch": 43
																											},
																											"text": [" "]
																										},
																										"start": 1452093456923,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeCursorChanged",
																										"input": {
																											"anchor": {
																												"line": 6,
																												"ch": 44
																											},
																											"head": {
																												"line": 6,
																												"ch": 44
																											}
																										},
																										"start": 1452093456928,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeChanged",
																										"input": {
																											"from": {
																												"line": 6,
																												"ch": 44
																											},
																											"to": {
																												"line": 6,
																												"ch": 44
																											},
																											"text": ["h"]
																										},
																										"start": 1452093457234,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeCursorChanged",
																										"input": {
																											"anchor": {
																												"line": 6,
																												"ch": 45
																											},
																											"head": {
																												"line": 6,
																												"ch": 45
																											}
																										},
																										"start": 1452093457238,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeChanged",
																										"input": {
																											"from": {
																												"line": 6,
																												"ch": 45
																											},
																											"to": {
																												"line": 6,
																												"ch": 45
																											},
																											"text": ["e"]
																										},
																										"start": 1452093457326,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.codeCursorChanged",
																										"input": {
																											"anchor": {
																												"line": 6,
																												"ch": 46
																											},
																											"head": {
																												"line": 6,
																												"ch": 46
																											}
																										},
																										"start": 1452093457332,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}, {
																										"name": "course.saveShortcutPressed",
																										"start": 1452093457755,
																										"asyncActionPaths": ["0.0", "1.outputs.true.3.0"],
																										"asyncActionResults": [{
																											"outputPath": "success"
																										}, {
																											"outputPath": "success"
																										}]
																									}, {
																										"name": "course.stopClicked",
																										"input": {
																											"seek": 13050.378
																										},
																										"start": 1452093460010,
																										"asyncActionPaths": [],
																										"asyncActionResults": []
																									}],
																									"path": ["course"],
																									"end": 1452093460011,
																									"duration": 12860
																								}
																							}, {
																								"assignments": [{
																									"description": "",
																									"code": ""
																								}],
																								"name": "Scene 2"
																							}]
																						},
																						"requestId": "1452156342953"
																					},
																					"duration": 1,
																					"mutations": [{
																						"name": "set",
																						"path": ["course", "isLoadingPreview"],
																						"args": [false]
																					}],
																					"isAsync": false,
																					"outputPath": null,
																					"isExecuting": false,
																					"hasExecuted": true,
																					"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 4, "outputs", "true", 6, 0, "outputs", "success", 0],
																					"outputs": null,
																					"actionIndex": 16
																				}],
																				"error": [{
																					"name": "showSnackbar",
																					"input": {},
																					"output": null,
																					"duration": 0,
																					"mutations": [],
																					"isAsync": false,
																					"outputPath": null,
																					"isExecuting": false,
																					"hasExecuted": false,
																					"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 4, "outputs", "true", 6, 0, "outputs", "error", 0],
																					"outputs": null,
																					"actionIndex": 17
																				}]
																			},
																			"actionIndex": 15
																		}], {
																			"name": "setLoadedCourse",
																			"input": {
																				"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																				"sceneIndex": "0",
																				"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246",
																				"user": {
																					"id": "christianalfoni@gmail.com",
																					"isAdmin": true,
																					"completedAssignments": {}
																				},
																				"scene": {
																					"name": "Scene 1",
																					"currentFileIndex": 0,
																					"files": [{
																						"name": "index.html",
																						"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																					}],
																					"assignments": [{
																						"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																						"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																						"completed": false
																					}, {
																						"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																						"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																						"completed": false
																					}],
																					"recording": true,
																					"duration": 12860
																				},
																				"course": {
																					"_id": "565edcfbd40082328ef02b7c",
																					"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																					"created": 1449057531702,
																					"name": "Demo",
																					"authorId": "christianalfoni@gmail.com",
																					"scenes": [{
																						"name": "Scene 1",
																						"currentFileIndex": 0,
																						"assignments": [{
																							"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																							"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																							"completed": false
																						}, {
																							"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																							"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																							"completed": false
																						}],
																						"recording": {
																							"initialState": {
																								"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																								"name": "Demo",
																								"mousePosition": {
																									"x": 71,
																									"y": 32
																								},
																								"isLoading": false,
																								"currentAssignmentStatus": {
																									"isLoading": false,
																									"result": null
																								},
																								"assignmentPoints": [],
																								"isLoadingMedia": false,
																								"authorId": "christianalfoni@gmail.com",
																								"showPreview": true,
																								"showConsole": false,
																								"showEditAssignment": false,
																								"showAssignment": false,
																								"showConfigureScenes": false,
																								"showScenesList": false,
																								"showFolder": false,
																								"showAddFileInput": false,
																								"currentSceneIndex": "0",
																								"currentAssignmentIndex": 0,
																								"sandboxSnapshot": [{
																									"name": "index.html",
																									"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																								}],
																								"newSceneName": "",
																								"newFileName": "",
																								"codeSelection": {
																									"anchor": {
																										"line": 8,
																										"ch": 7
																									},
																									"head": {
																										"line": 8,
																										"ch": 7
																									}
																								},
																								"scenes": [{
																									"name": "Scene 1",
																									"currentFileIndex": 0,
																									"files": [{
																										"name": "index.html",
																										"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																									}],
																									"assignments": [{
																										"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																										"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																										"completed": false
																									}, {
																										"description": "I denne oppgaven skal du lage et DIV element med teksten: \"Hvordan går det?\"",
																										"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																										"completed": false
																									}],
																									"recording": true,
																									"sandboxFiles": [{
																										"name": "index.html",
																										"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																									}]
																								}, {
																									"assignments": [{
																										"description": "",
																										"code": ""
																									}],
																									"name": "Scene 2"
																								}],
																								"scenesList": [{
																									"name": "Scene 1",
																									"assignmentsCount": 2
																								}, {
																									"name": "Scene 2",
																									"assignmentsCount": 1
																								}],
																								"recorder": {
																									"isPlaying": false,
																									"isUploading": false,
																									"isRecording": false,
																									"hasRecorded": false
																								},
																								"_id": "565edcfbd40082328ef02b7c",
																								"created": 1449057531702,
																								"previewUrl": "https://sandbox.kodeboksen.dev:3000?id=1452093444124",
																								"isLoadingPreview": false
																							},
																							"start": 1452093447151,
																							"signals": [{
																								"name": "snackbarTimedOut",
																								"input": {},
																								"start": 1452093447293,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.pauseClicked",
																								"input": {
																									"seek": 3103.783
																								},
																								"start": 1452093450078,
																								"asyncActionPaths": ["0.0"],
																								"asyncActionResults": [{
																									"outputPath": "success"
																								}]
																							}, {
																								"name": "course.appClicked",
																								"input": {
																									"mousePositionX": 23,
																									"mousePositionY": 31
																								},
																								"start": 1452093450079,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 0,
																										"ch": 0
																									},
																									"head": {
																										"line": 0,
																										"ch": 0
																									}
																								},
																								"start": 1452093450115,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 8,
																										"ch": 7
																									},
																									"head": {
																										"line": 8,
																										"ch": 7
																									}
																								},
																								"start": 1452093450117,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"head": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									}
																								},
																								"start": 1452093453661,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.appClicked",
																								"input": {
																									"mousePositionX": 660,
																									"mousePositionY": 227
																								},
																								"start": 1452093453734,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"to": {
																										"line": 6,
																										"ch": 28,
																										"xRel": 1
																									},
																									"text": [" "]
																								},
																								"start": 1452093454471,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 29
																									},
																									"head": {
																										"line": 6,
																										"ch": 29
																									}
																								},
																								"start": 1452093454483,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 29
																									},
																									"to": {
																										"line": 6,
																										"ch": 29
																									},
																									"text": ["h"]
																								},
																								"start": 1452093454651,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 30
																									},
																									"head": {
																										"line": 6,
																										"ch": 30
																									}
																								},
																								"start": 1452093454656,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 30
																									},
																									"to": {
																										"line": 6,
																										"ch": 30
																									},
																									"text": ["e"]
																								},
																								"start": 1452093454712,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 31
																									},
																									"head": {
																										"line": 6,
																										"ch": 31
																									}
																								},
																								"start": 1452093454718,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 31
																									},
																									"to": {
																										"line": 6,
																										"ch": 31
																									},
																									"text": [" "]
																								},
																								"start": 1452093454856,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 32
																									},
																									"head": {
																										"line": 6,
																										"ch": 32
																									}
																								},
																								"start": 1452093454866,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 32
																									},
																									"to": {
																										"line": 6,
																										"ch": 32
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455046,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 33
																									},
																									"head": {
																										"line": 6,
																										"ch": 33
																									}
																								},
																								"start": 1452093455050,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 33
																									},
																									"to": {
																										"line": 6,
																										"ch": 33
																									},
																									"text": ["e"]
																								},
																								"start": 1452093455096,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 34
																									},
																									"head": {
																										"line": 6,
																										"ch": 34
																									}
																								},
																								"start": 1452093455102,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 34
																									},
																									"to": {
																										"line": 6,
																										"ch": 34
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455250,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 35
																									},
																									"head": {
																										"line": 6,
																										"ch": 35
																									}
																								},
																								"start": 1452093455255,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 35
																									},
																									"to": {
																										"line": 6,
																										"ch": 35
																									},
																									"text": [" "]
																								},
																								"start": 1452093455275,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 36
																									},
																									"head": {
																										"line": 6,
																										"ch": 36
																									}
																								},
																								"start": 1452093455279,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 36
																									},
																									"to": {
																										"line": 6,
																										"ch": 36
																									},
																									"text": ["h"]
																								},
																								"start": 1452093455483,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 37
																									},
																									"head": {
																										"line": 6,
																										"ch": 37
																									}
																								},
																								"start": 1452093455487,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 37
																									},
																									"to": {
																										"line": 6,
																										"ch": 37
																									},
																									"text": ["e"]
																								},
																								"start": 1452093455554,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 38
																									},
																									"head": {
																										"line": 6,
																										"ch": 38
																									}
																								},
																								"start": 1452093455558,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 38
																									},
																									"to": {
																										"line": 6,
																										"ch": 38
																									},
																									"text": [" "]
																								},
																								"start": 1452093456506,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 39
																									},
																									"head": {
																										"line": 6,
																										"ch": 39
																									}
																								},
																								"start": 1452093456510,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 39
																									},
																									"to": {
																										"line": 6,
																										"ch": 39
																									},
																									"text": ["h"]
																								},
																								"start": 1452093456623,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 40
																									},
																									"head": {
																										"line": 6,
																										"ch": 40
																									}
																								},
																								"start": 1452093456629,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 40
																									},
																									"to": {
																										"line": 6,
																										"ch": 40
																									},
																									"text": ["e"]
																								},
																								"start": 1452093456658,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 41
																									},
																									"head": {
																										"line": 6,
																										"ch": 41
																									}
																								},
																								"start": 1452093456662,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 41
																									},
																									"to": {
																										"line": 6,
																										"ch": 41
																									},
																									"text": ["h"]
																								},
																								"start": 1452093456815,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 42
																									},
																									"head": {
																										"line": 6,
																										"ch": 42
																									}
																								},
																								"start": 1452093456819,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 42
																									},
																									"to": {
																										"line": 6,
																										"ch": 42
																									},
																									"text": ["e"]
																								},
																								"start": 1452093456891,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 43
																									},
																									"head": {
																										"line": 6,
																										"ch": 43
																									}
																								},
																								"start": 1452093456896,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 43
																									},
																									"to": {
																										"line": 6,
																										"ch": 43
																									},
																									"text": [" "]
																								},
																								"start": 1452093456923,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 44
																									},
																									"head": {
																										"line": 6,
																										"ch": 44
																									}
																								},
																								"start": 1452093456928,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 44
																									},
																									"to": {
																										"line": 6,
																										"ch": 44
																									},
																									"text": ["h"]
																								},
																								"start": 1452093457234,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 45
																									},
																									"head": {
																										"line": 6,
																										"ch": 45
																									}
																								},
																								"start": 1452093457238,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeChanged",
																								"input": {
																									"from": {
																										"line": 6,
																										"ch": 45
																									},
																									"to": {
																										"line": 6,
																										"ch": 45
																									},
																									"text": ["e"]
																								},
																								"start": 1452093457326,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.codeCursorChanged",
																								"input": {
																									"anchor": {
																										"line": 6,
																										"ch": 46
																									},
																									"head": {
																										"line": 6,
																										"ch": 46
																									}
																								},
																								"start": 1452093457332,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}, {
																								"name": "course.saveShortcutPressed",
																								"start": 1452093457755,
																								"asyncActionPaths": ["0.0", "1.outputs.true.3.0"],
																								"asyncActionResults": [{
																									"outputPath": "success"
																								}, {
																									"outputPath": "success"
																								}]
																							}, {
																								"name": "course.stopClicked",
																								"input": {
																									"seek": 13050.378
																								},
																								"start": 1452093460010,
																								"asyncActionPaths": [],
																								"asyncActionResults": []
																							}],
																							"path": ["course"],
																							"end": 1452093460011,
																							"duration": 12860
																						}
																					}, {
																						"assignments": [{
																							"description": "",
																							"code": ""
																						}],
																						"name": "Scene 2"
																					}]
																				},
																				"requestId": "1452156342953"
																			},
																			"duration": 1,
																			"mutations": [{
																				"name": "set",
																				"path": ["course", "isLoading"],
																				"args": [false]
																			}, {
																				"name": "merge",
																				"path": ["snackbar"],
																				"args": [{
																					"text": "Laster video og lyd...",
																					"show": true,
																					"persist": true
																				}]
																			}, {
																				"name": "set",
																				"path": ["course", "isLoadingMedia"],
																				"args": [true]
																			}],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": true,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 4, "outputs", "true", 7],
																			"outputs": null,
																			"actionIndex": 26
																		}
																	],
																	"false": [{
																		"name": "showSnackbar",
																		"input": {},
																		"output": null,
																		"duration": 0,
																		"mutations": [],
																		"isAsync": false,
																		"outputPath": null,
																		"isExecuting": false,
																		"hasExecuted": false,
																		"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 4, "outputs", "false", 0],
																		"outputs": null,
																		"actionIndex": 27
																	}]
																},
																"actionIndex": 24
															}
														]
													},
													"actionIndex": 5
												},
												[{
													"name": "loadDescriptions",
													"input": {
														"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
														"sceneIndex": "0",
														"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246",
														"user": {
															"id": "christianalfoni@gmail.com",
															"isAdmin": true,
															"completedAssignments": {}
														},
														"scene": {
															"name": "Scene 1",
															"currentFileIndex": 0,
															"files": [{
																"name": "index.html",
																"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
															}],
															"assignments": [{
																"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																"completed": false
															}, {
																"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																"completed": false
															}],
															"recording": true,
															"duration": 12860
														},
														"course": {
															"_id": "565edcfbd40082328ef02b7c",
															"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
															"created": 1449057531702,
															"name": "Demo",
															"authorId": "christianalfoni@gmail.com",
															"scenes": [{
																"name": "Scene 1",
																"currentFileIndex": 0,
																"assignments": [{
																	"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																	"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																	"completed": false
																}, {
																	"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																	"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																	"completed": false
																}],
																"recording": {
																	"initialState": {
																		"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																		"name": "Demo",
																		"mousePosition": {
																			"x": 71,
																			"y": 32
																		},
																		"isLoading": false,
																		"currentAssignmentStatus": {
																			"isLoading": false,
																			"result": null
																		},
																		"assignmentPoints": [],
																		"isLoadingMedia": false,
																		"authorId": "christianalfoni@gmail.com",
																		"showPreview": true,
																		"showConsole": false,
																		"showEditAssignment": false,
																		"showAssignment": false,
																		"showConfigureScenes": false,
																		"showScenesList": false,
																		"showFolder": false,
																		"showAddFileInput": false,
																		"currentSceneIndex": "0",
																		"currentAssignmentIndex": 0,
																		"sandboxSnapshot": [{
																			"name": "index.html",
																			"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																		}],
																		"newSceneName": "",
																		"newFileName": "",
																		"codeSelection": {
																			"anchor": {
																				"line": 8,
																				"ch": 7
																			},
																			"head": {
																				"line": 8,
																				"ch": 7
																			}
																		},
																		"scenes": [{
																			"name": "Scene 1",
																			"currentFileIndex": 0,
																			"files": [{
																				"name": "index.html",
																				"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																			}],
																			"assignments": [{
																				"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																				"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																				"completed": false
																			}, {
																				"description": "I denne oppgaven skal du lage et DIV element med teksten: \"Hvordan går det?\"",
																				"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																				"completed": false
																			}],
																			"recording": true,
																			"sandboxFiles": [{
																				"name": "index.html",
																				"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																			}]
																		}, {
																			"assignments": [{
																				"description": "",
																				"code": ""
																			}],
																			"name": "Scene 2"
																		}],
																		"scenesList": [{
																			"name": "Scene 1",
																			"assignmentsCount": 2
																		}, {
																			"name": "Scene 2",
																			"assignmentsCount": 1
																		}],
																		"recorder": {
																			"isPlaying": false,
																			"isUploading": false,
																			"isRecording": false,
																			"hasRecorded": false
																		},
																		"_id": "565edcfbd40082328ef02b7c",
																		"created": 1449057531702,
																		"previewUrl": "https://sandbox.kodeboksen.dev:3000?id=1452093444124",
																		"isLoadingPreview": false
																	},
																	"start": 1452093447151,
																	"signals": [{
																		"name": "snackbarTimedOut",
																		"input": {},
																		"start": 1452093447293,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.pauseClicked",
																		"input": {
																			"seek": 3103.783
																		},
																		"start": 1452093450078,
																		"asyncActionPaths": ["0.0"],
																		"asyncActionResults": [{
																			"outputPath": "success"
																		}]
																	}, {
																		"name": "course.appClicked",
																		"input": {
																			"mousePositionX": 23,
																			"mousePositionY": 31
																		},
																		"start": 1452093450079,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeCursorChanged",
																		"input": {
																			"anchor": {
																				"line": 0,
																				"ch": 0
																			},
																			"head": {
																				"line": 0,
																				"ch": 0
																			}
																		},
																		"start": 1452093450115,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeCursorChanged",
																		"input": {
																			"anchor": {
																				"line": 8,
																				"ch": 7
																			},
																			"head": {
																				"line": 8,
																				"ch": 7
																			}
																		},
																		"start": 1452093450117,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeCursorChanged",
																		"input": {
																			"anchor": {
																				"line": 6,
																				"ch": 28,
																				"xRel": 1
																			},
																			"head": {
																				"line": 6,
																				"ch": 28,
																				"xRel": 1
																			}
																		},
																		"start": 1452093453661,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.appClicked",
																		"input": {
																			"mousePositionX": 660,
																			"mousePositionY": 227
																		},
																		"start": 1452093453734,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeChanged",
																		"input": {
																			"from": {
																				"line": 6,
																				"ch": 28,
																				"xRel": 1
																			},
																			"to": {
																				"line": 6,
																				"ch": 28,
																				"xRel": 1
																			},
																			"text": [" "]
																		},
																		"start": 1452093454471,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeCursorChanged",
																		"input": {
																			"anchor": {
																				"line": 6,
																				"ch": 29
																			},
																			"head": {
																				"line": 6,
																				"ch": 29
																			}
																		},
																		"start": 1452093454483,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeChanged",
																		"input": {
																			"from": {
																				"line": 6,
																				"ch": 29
																			},
																			"to": {
																				"line": 6,
																				"ch": 29
																			},
																			"text": ["h"]
																		},
																		"start": 1452093454651,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeCursorChanged",
																		"input": {
																			"anchor": {
																				"line": 6,
																				"ch": 30
																			},
																			"head": {
																				"line": 6,
																				"ch": 30
																			}
																		},
																		"start": 1452093454656,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeChanged",
																		"input": {
																			"from": {
																				"line": 6,
																				"ch": 30
																			},
																			"to": {
																				"line": 6,
																				"ch": 30
																			},
																			"text": ["e"]
																		},
																		"start": 1452093454712,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeCursorChanged",
																		"input": {
																			"anchor": {
																				"line": 6,
																				"ch": 31
																			},
																			"head": {
																				"line": 6,
																				"ch": 31
																			}
																		},
																		"start": 1452093454718,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeChanged",
																		"input": {
																			"from": {
																				"line": 6,
																				"ch": 31
																			},
																			"to": {
																				"line": 6,
																				"ch": 31
																			},
																			"text": [" "]
																		},
																		"start": 1452093454856,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeCursorChanged",
																		"input": {
																			"anchor": {
																				"line": 6,
																				"ch": 32
																			},
																			"head": {
																				"line": 6,
																				"ch": 32
																			}
																		},
																		"start": 1452093454866,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeChanged",
																		"input": {
																			"from": {
																				"line": 6,
																				"ch": 32
																			},
																			"to": {
																				"line": 6,
																				"ch": 32
																			},
																			"text": ["h"]
																		},
																		"start": 1452093455046,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeCursorChanged",
																		"input": {
																			"anchor": {
																				"line": 6,
																				"ch": 33
																			},
																			"head": {
																				"line": 6,
																				"ch": 33
																			}
																		},
																		"start": 1452093455050,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeChanged",
																		"input": {
																			"from": {
																				"line": 6,
																				"ch": 33
																			},
																			"to": {
																				"line": 6,
																				"ch": 33
																			},
																			"text": ["e"]
																		},
																		"start": 1452093455096,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeCursorChanged",
																		"input": {
																			"anchor": {
																				"line": 6,
																				"ch": 34
																			},
																			"head": {
																				"line": 6,
																				"ch": 34
																			}
																		},
																		"start": 1452093455102,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeChanged",
																		"input": {
																			"from": {
																				"line": 6,
																				"ch": 34
																			},
																			"to": {
																				"line": 6,
																				"ch": 34
																			},
																			"text": ["h"]
																		},
																		"start": 1452093455250,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeCursorChanged",
																		"input": {
																			"anchor": {
																				"line": 6,
																				"ch": 35
																			},
																			"head": {
																				"line": 6,
																				"ch": 35
																			}
																		},
																		"start": 1452093455255,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeChanged",
																		"input": {
																			"from": {
																				"line": 6,
																				"ch": 35
																			},
																			"to": {
																				"line": 6,
																				"ch": 35
																			},
																			"text": [" "]
																		},
																		"start": 1452093455275,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeCursorChanged",
																		"input": {
																			"anchor": {
																				"line": 6,
																				"ch": 36
																			},
																			"head": {
																				"line": 6,
																				"ch": 36
																			}
																		},
																		"start": 1452093455279,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeChanged",
																		"input": {
																			"from": {
																				"line": 6,
																				"ch": 36
																			},
																			"to": {
																				"line": 6,
																				"ch": 36
																			},
																			"text": ["h"]
																		},
																		"start": 1452093455483,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeCursorChanged",
																		"input": {
																			"anchor": {
																				"line": 6,
																				"ch": 37
																			},
																			"head": {
																				"line": 6,
																				"ch": 37
																			}
																		},
																		"start": 1452093455487,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeChanged",
																		"input": {
																			"from": {
																				"line": 6,
																				"ch": 37
																			},
																			"to": {
																				"line": 6,
																				"ch": 37
																			},
																			"text": ["e"]
																		},
																		"start": 1452093455554,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeCursorChanged",
																		"input": {
																			"anchor": {
																				"line": 6,
																				"ch": 38
																			},
																			"head": {
																				"line": 6,
																				"ch": 38
																			}
																		},
																		"start": 1452093455558,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeChanged",
																		"input": {
																			"from": {
																				"line": 6,
																				"ch": 38
																			},
																			"to": {
																				"line": 6,
																				"ch": 38
																			},
																			"text": [" "]
																		},
																		"start": 1452093456506,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeCursorChanged",
																		"input": {
																			"anchor": {
																				"line": 6,
																				"ch": 39
																			},
																			"head": {
																				"line": 6,
																				"ch": 39
																			}
																		},
																		"start": 1452093456510,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeChanged",
																		"input": {
																			"from": {
																				"line": 6,
																				"ch": 39
																			},
																			"to": {
																				"line": 6,
																				"ch": 39
																			},
																			"text": ["h"]
																		},
																		"start": 1452093456623,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeCursorChanged",
																		"input": {
																			"anchor": {
																				"line": 6,
																				"ch": 40
																			},
																			"head": {
																				"line": 6,
																				"ch": 40
																			}
																		},
																		"start": 1452093456629,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeChanged",
																		"input": {
																			"from": {
																				"line": 6,
																				"ch": 40
																			},
																			"to": {
																				"line": 6,
																				"ch": 40
																			},
																			"text": ["e"]
																		},
																		"start": 1452093456658,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeCursorChanged",
																		"input": {
																			"anchor": {
																				"line": 6,
																				"ch": 41
																			},
																			"head": {
																				"line": 6,
																				"ch": 41
																			}
																		},
																		"start": 1452093456662,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeChanged",
																		"input": {
																			"from": {
																				"line": 6,
																				"ch": 41
																			},
																			"to": {
																				"line": 6,
																				"ch": 41
																			},
																			"text": ["h"]
																		},
																		"start": 1452093456815,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeCursorChanged",
																		"input": {
																			"anchor": {
																				"line": 6,
																				"ch": 42
																			},
																			"head": {
																				"line": 6,
																				"ch": 42
																			}
																		},
																		"start": 1452093456819,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeChanged",
																		"input": {
																			"from": {
																				"line": 6,
																				"ch": 42
																			},
																			"to": {
																				"line": 6,
																				"ch": 42
																			},
																			"text": ["e"]
																		},
																		"start": 1452093456891,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeCursorChanged",
																		"input": {
																			"anchor": {
																				"line": 6,
																				"ch": 43
																			},
																			"head": {
																				"line": 6,
																				"ch": 43
																			}
																		},
																		"start": 1452093456896,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeChanged",
																		"input": {
																			"from": {
																				"line": 6,
																				"ch": 43
																			},
																			"to": {
																				"line": 6,
																				"ch": 43
																			},
																			"text": [" "]
																		},
																		"start": 1452093456923,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeCursorChanged",
																		"input": {
																			"anchor": {
																				"line": 6,
																				"ch": 44
																			},
																			"head": {
																				"line": 6,
																				"ch": 44
																			}
																		},
																		"start": 1452093456928,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeChanged",
																		"input": {
																			"from": {
																				"line": 6,
																				"ch": 44
																			},
																			"to": {
																				"line": 6,
																				"ch": 44
																			},
																			"text": ["h"]
																		},
																		"start": 1452093457234,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeCursorChanged",
																		"input": {
																			"anchor": {
																				"line": 6,
																				"ch": 45
																			},
																			"head": {
																				"line": 6,
																				"ch": 45
																			}
																		},
																		"start": 1452093457238,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeChanged",
																		"input": {
																			"from": {
																				"line": 6,
																				"ch": 45
																			},
																			"to": {
																				"line": 6,
																				"ch": 45
																			},
																			"text": ["e"]
																		},
																		"start": 1452093457326,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.codeCursorChanged",
																		"input": {
																			"anchor": {
																				"line": 6,
																				"ch": 46
																			},
																			"head": {
																				"line": 6,
																				"ch": 46
																			}
																		},
																		"start": 1452093457332,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}, {
																		"name": "course.saveShortcutPressed",
																		"start": 1452093457755,
																		"asyncActionPaths": ["0.0", "1.outputs.true.3.0"],
																		"asyncActionResults": [{
																			"outputPath": "success"
																		}, {
																			"outputPath": "success"
																		}]
																	}, {
																		"name": "course.stopClicked",
																		"input": {
																			"seek": 13050.378
																		},
																		"start": 1452093460010,
																		"asyncActionPaths": [],
																		"asyncActionResults": []
																	}],
																	"path": ["course"],
																	"end": 1452093460011,
																	"duration": 12860
																}
															}, {
																"assignments": [{
																	"description": "",
																	"code": ""
																}],
																"name": "Scene 2"
															}]
														},
														"requestId": "1452156342953"
													},
													"output": {
														"descriptions": [{
															"_id": "568d3eb63949145ef8bc2265",
															"tagName": "DIV",
															"created": 1452097206584,
															"description": "En liten test",
															"exampleType": "HTML",
															"example": "<div>hey</div>"
														}]
													},
													"duration": 0,
													"mutations": [],
													"isAsync": true,
													"outputPath": "success",
													"isExecuting": false,
													"hasExecuted": true,
													"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 3, 0],
													"outputs": {
														"success": [{
															"name": "setDescriptions",
															"input": {
																"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																"sceneIndex": "0",
																"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246",
																"user": {
																	"id": "christianalfoni@gmail.com",
																	"isAdmin": true,
																	"completedAssignments": {}
																},
																"scene": {
																	"name": "Scene 1",
																	"currentFileIndex": 0,
																	"files": [{
																		"name": "index.html",
																		"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																	}],
																	"assignments": [{
																		"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																		"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																		"completed": false
																	}, {
																		"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																		"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																		"completed": false
																	}],
																	"recording": true,
																	"duration": 12860
																},
																"course": {
																	"_id": "565edcfbd40082328ef02b7c",
																	"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																	"created": 1449057531702,
																	"name": "Demo",
																	"authorId": "christianalfoni@gmail.com",
																	"scenes": [{
																		"name": "Scene 1",
																		"currentFileIndex": 0,
																		"assignments": [{
																			"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																			"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																			"completed": false
																		}, {
																			"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
																			"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																			"completed": false
																		}],
																		"recording": {
																			"initialState": {
																				"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																				"name": "Demo",
																				"mousePosition": {
																					"x": 71,
																					"y": 32
																				},
																				"isLoading": false,
																				"currentAssignmentStatus": {
																					"isLoading": false,
																					"result": null
																				},
																				"assignmentPoints": [],
																				"isLoadingMedia": false,
																				"authorId": "christianalfoni@gmail.com",
																				"showPreview": true,
																				"showConsole": false,
																				"showEditAssignment": false,
																				"showAssignment": false,
																				"showConfigureScenes": false,
																				"showScenesList": false,
																				"showFolder": false,
																				"showAddFileInput": false,
																				"currentSceneIndex": "0",
																				"currentAssignmentIndex": 0,
																				"sandboxSnapshot": [{
																					"name": "index.html",
																					"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																				}],
																				"newSceneName": "",
																				"newFileName": "",
																				"codeSelection": {
																					"anchor": {
																						"line": 8,
																						"ch": 7
																					},
																					"head": {
																						"line": 8,
																						"ch": 7
																					}
																				},
																				"scenes": [{
																					"name": "Scene 1",
																					"currentFileIndex": 0,
																					"files": [{
																						"name": "index.html",
																						"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																					}],
																					"assignments": [{
																						"description": "Skriv teksten: \"Hei Kodeboksen!\"",
																						"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
																						"completed": false
																					}, {
																						"description": "I denne oppgaven skal du lage et DIV element med teksten: \"Hvordan går det?\"",
																						"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
																						"completed": false
																					}],
																					"recording": true,
																					"sandboxFiles": [{
																						"name": "index.html",
																						"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
																					}]
																				}, {
																					"assignments": [{
																						"description": "",
																						"code": ""
																					}],
																					"name": "Scene 2"
																				}],
																				"scenesList": [{
																					"name": "Scene 1",
																					"assignmentsCount": 2
																				}, {
																					"name": "Scene 2",
																					"assignmentsCount": 1
																				}],
																				"recorder": {
																					"isPlaying": false,
																					"isUploading": false,
																					"isRecording": false,
																					"hasRecorded": false
																				},
																				"_id": "565edcfbd40082328ef02b7c",
																				"created": 1449057531702,
																				"previewUrl": "https://sandbox.kodeboksen.dev:3000?id=1452093444124",
																				"isLoadingPreview": false
																			},
																			"start": 1452093447151,
																			"signals": [{
																				"name": "snackbarTimedOut",
																				"input": {},
																				"start": 1452093447293,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.pauseClicked",
																				"input": {
																					"seek": 3103.783
																				},
																				"start": 1452093450078,
																				"asyncActionPaths": ["0.0"],
																				"asyncActionResults": [{
																					"outputPath": "success"
																				}]
																			}, {
																				"name": "course.appClicked",
																				"input": {
																					"mousePositionX": 23,
																					"mousePositionY": 31
																				},
																				"start": 1452093450079,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeCursorChanged",
																				"input": {
																					"anchor": {
																						"line": 0,
																						"ch": 0
																					},
																					"head": {
																						"line": 0,
																						"ch": 0
																					}
																				},
																				"start": 1452093450115,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeCursorChanged",
																				"input": {
																					"anchor": {
																						"line": 8,
																						"ch": 7
																					},
																					"head": {
																						"line": 8,
																						"ch": 7
																					}
																				},
																				"start": 1452093450117,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeCursorChanged",
																				"input": {
																					"anchor": {
																						"line": 6,
																						"ch": 28,
																						"xRel": 1
																					},
																					"head": {
																						"line": 6,
																						"ch": 28,
																						"xRel": 1
																					}
																				},
																				"start": 1452093453661,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.appClicked",
																				"input": {
																					"mousePositionX": 660,
																					"mousePositionY": 227
																				},
																				"start": 1452093453734,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeChanged",
																				"input": {
																					"from": {
																						"line": 6,
																						"ch": 28,
																						"xRel": 1
																					},
																					"to": {
																						"line": 6,
																						"ch": 28,
																						"xRel": 1
																					},
																					"text": [" "]
																				},
																				"start": 1452093454471,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeCursorChanged",
																				"input": {
																					"anchor": {
																						"line": 6,
																						"ch": 29
																					},
																					"head": {
																						"line": 6,
																						"ch": 29
																					}
																				},
																				"start": 1452093454483,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeChanged",
																				"input": {
																					"from": {
																						"line": 6,
																						"ch": 29
																					},
																					"to": {
																						"line": 6,
																						"ch": 29
																					},
																					"text": ["h"]
																				},
																				"start": 1452093454651,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeCursorChanged",
																				"input": {
																					"anchor": {
																						"line": 6,
																						"ch": 30
																					},
																					"head": {
																						"line": 6,
																						"ch": 30
																					}
																				},
																				"start": 1452093454656,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeChanged",
																				"input": {
																					"from": {
																						"line": 6,
																						"ch": 30
																					},
																					"to": {
																						"line": 6,
																						"ch": 30
																					},
																					"text": ["e"]
																				},
																				"start": 1452093454712,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeCursorChanged",
																				"input": {
																					"anchor": {
																						"line": 6,
																						"ch": 31
																					},
																					"head": {
																						"line": 6,
																						"ch": 31
																					}
																				},
																				"start": 1452093454718,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeChanged",
																				"input": {
																					"from": {
																						"line": 6,
																						"ch": 31
																					},
																					"to": {
																						"line": 6,
																						"ch": 31
																					},
																					"text": [" "]
																				},
																				"start": 1452093454856,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeCursorChanged",
																				"input": {
																					"anchor": {
																						"line": 6,
																						"ch": 32
																					},
																					"head": {
																						"line": 6,
																						"ch": 32
																					}
																				},
																				"start": 1452093454866,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeChanged",
																				"input": {
																					"from": {
																						"line": 6,
																						"ch": 32
																					},
																					"to": {
																						"line": 6,
																						"ch": 32
																					},
																					"text": ["h"]
																				},
																				"start": 1452093455046,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeCursorChanged",
																				"input": {
																					"anchor": {
																						"line": 6,
																						"ch": 33
																					},
																					"head": {
																						"line": 6,
																						"ch": 33
																					}
																				},
																				"start": 1452093455050,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeChanged",
																				"input": {
																					"from": {
																						"line": 6,
																						"ch": 33
																					},
																					"to": {
																						"line": 6,
																						"ch": 33
																					},
																					"text": ["e"]
																				},
																				"start": 1452093455096,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeCursorChanged",
																				"input": {
																					"anchor": {
																						"line": 6,
																						"ch": 34
																					},
																					"head": {
																						"line": 6,
																						"ch": 34
																					}
																				},
																				"start": 1452093455102,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeChanged",
																				"input": {
																					"from": {
																						"line": 6,
																						"ch": 34
																					},
																					"to": {
																						"line": 6,
																						"ch": 34
																					},
																					"text": ["h"]
																				},
																				"start": 1452093455250,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeCursorChanged",
																				"input": {
																					"anchor": {
																						"line": 6,
																						"ch": 35
																					},
																					"head": {
																						"line": 6,
																						"ch": 35
																					}
																				},
																				"start": 1452093455255,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeChanged",
																				"input": {
																					"from": {
																						"line": 6,
																						"ch": 35
																					},
																					"to": {
																						"line": 6,
																						"ch": 35
																					},
																					"text": [" "]
																				},
																				"start": 1452093455275,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeCursorChanged",
																				"input": {
																					"anchor": {
																						"line": 6,
																						"ch": 36
																					},
																					"head": {
																						"line": 6,
																						"ch": 36
																					}
																				},
																				"start": 1452093455279,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeChanged",
																				"input": {
																					"from": {
																						"line": 6,
																						"ch": 36
																					},
																					"to": {
																						"line": 6,
																						"ch": 36
																					},
																					"text": ["h"]
																				},
																				"start": 1452093455483,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeCursorChanged",
																				"input": {
																					"anchor": {
																						"line": 6,
																						"ch": 37
																					},
																					"head": {
																						"line": 6,
																						"ch": 37
																					}
																				},
																				"start": 1452093455487,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeChanged",
																				"input": {
																					"from": {
																						"line": 6,
																						"ch": 37
																					},
																					"to": {
																						"line": 6,
																						"ch": 37
																					},
																					"text": ["e"]
																				},
																				"start": 1452093455554,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeCursorChanged",
																				"input": {
																					"anchor": {
																						"line": 6,
																						"ch": 38
																					},
																					"head": {
																						"line": 6,
																						"ch": 38
																					}
																				},
																				"start": 1452093455558,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeChanged",
																				"input": {
																					"from": {
																						"line": 6,
																						"ch": 38
																					},
																					"to": {
																						"line": 6,
																						"ch": 38
																					},
																					"text": [" "]
																				},
																				"start": 1452093456506,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeCursorChanged",
																				"input": {
																					"anchor": {
																						"line": 6,
																						"ch": 39
																					},
																					"head": {
																						"line": 6,
																						"ch": 39
																					}
																				},
																				"start": 1452093456510,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeChanged",
																				"input": {
																					"from": {
																						"line": 6,
																						"ch": 39
																					},
																					"to": {
																						"line": 6,
																						"ch": 39
																					},
																					"text": ["h"]
																				},
																				"start": 1452093456623,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeCursorChanged",
																				"input": {
																					"anchor": {
																						"line": 6,
																						"ch": 40
																					},
																					"head": {
																						"line": 6,
																						"ch": 40
																					}
																				},
																				"start": 1452093456629,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeChanged",
																				"input": {
																					"from": {
																						"line": 6,
																						"ch": 40
																					},
																					"to": {
																						"line": 6,
																						"ch": 40
																					},
																					"text": ["e"]
																				},
																				"start": 1452093456658,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeCursorChanged",
																				"input": {
																					"anchor": {
																						"line": 6,
																						"ch": 41
																					},
																					"head": {
																						"line": 6,
																						"ch": 41
																					}
																				},
																				"start": 1452093456662,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeChanged",
																				"input": {
																					"from": {
																						"line": 6,
																						"ch": 41
																					},
																					"to": {
																						"line": 6,
																						"ch": 41
																					},
																					"text": ["h"]
																				},
																				"start": 1452093456815,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeCursorChanged",
																				"input": {
																					"anchor": {
																						"line": 6,
																						"ch": 42
																					},
																					"head": {
																						"line": 6,
																						"ch": 42
																					}
																				},
																				"start": 1452093456819,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeChanged",
																				"input": {
																					"from": {
																						"line": 6,
																						"ch": 42
																					},
																					"to": {
																						"line": 6,
																						"ch": 42
																					},
																					"text": ["e"]
																				},
																				"start": 1452093456891,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeCursorChanged",
																				"input": {
																					"anchor": {
																						"line": 6,
																						"ch": 43
																					},
																					"head": {
																						"line": 6,
																						"ch": 43
																					}
																				},
																				"start": 1452093456896,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeChanged",
																				"input": {
																					"from": {
																						"line": 6,
																						"ch": 43
																					},
																					"to": {
																						"line": 6,
																						"ch": 43
																					},
																					"text": [" "]
																				},
																				"start": 1452093456923,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeCursorChanged",
																				"input": {
																					"anchor": {
																						"line": 6,
																						"ch": 44
																					},
																					"head": {
																						"line": 6,
																						"ch": 44
																					}
																				},
																				"start": 1452093456928,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeChanged",
																				"input": {
																					"from": {
																						"line": 6,
																						"ch": 44
																					},
																					"to": {
																						"line": 6,
																						"ch": 44
																					},
																					"text": ["h"]
																				},
																				"start": 1452093457234,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeCursorChanged",
																				"input": {
																					"anchor": {
																						"line": 6,
																						"ch": 45
																					},
																					"head": {
																						"line": 6,
																						"ch": 45
																					}
																				},
																				"start": 1452093457238,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeChanged",
																				"input": {
																					"from": {
																						"line": 6,
																						"ch": 45
																					},
																					"to": {
																						"line": 6,
																						"ch": 45
																					},
																					"text": ["e"]
																				},
																				"start": 1452093457326,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.codeCursorChanged",
																				"input": {
																					"anchor": {
																						"line": 6,
																						"ch": 46
																					},
																					"head": {
																						"line": 6,
																						"ch": 46
																					}
																				},
																				"start": 1452093457332,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}, {
																				"name": "course.saveShortcutPressed",
																				"start": 1452093457755,
																				"asyncActionPaths": ["0.0", "1.outputs.true.3.0"],
																				"asyncActionResults": [{
																					"outputPath": "success"
																				}, {
																					"outputPath": "success"
																				}]
																			}, {
																				"name": "course.stopClicked",
																				"input": {
																					"seek": 13050.378
																				},
																				"start": 1452093460010,
																				"asyncActionPaths": [],
																				"asyncActionResults": []
																			}],
																			"path": ["course"],
																			"end": 1452093460011,
																			"duration": 12860
																		}
																	}, {
																		"assignments": [{
																			"description": "",
																			"code": ""
																		}],
																		"name": "Scene 2"
																	}]
																},
																"requestId": "1452156342953",
																"descriptions": [{
																	"_id": "568d3eb63949145ef8bc2265",
																	"tagName": "DIV",
																	"created": 1452097206584,
																	"description": "En liten test",
																	"exampleType": "HTML",
																	"example": "<div>hey</div>"
																}]
															},
															"duration": 1,
															"mutations": [{
																"name": "set",
																"path": ["course", "descriptions"],
																"args": [
																	[{
																		"_id": "568d3eb63949145ef8bc2265",
																		"tagName": "DIV",
																		"created": 1452097206584,
																		"description": "En liten test",
																		"exampleType": "HTML",
																		"example": "<div>hey</div>"
																	}]
																]
															}],
															"isAsync": false,
															"outputPath": null,
															"isExecuting": false,
															"hasExecuted": true,
															"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 3, 0, "outputs", "success", 0],
															"outputs": null,
															"actionIndex": 29
														}],
														"error": [{
															"name": "showSnackbar",
															"input": {},
															"output": null,
															"duration": 0,
															"mutations": [],
															"isAsync": false,
															"outputPath": null,
															"isExecuting": false,
															"hasExecuted": false,
															"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 3, 0, "outputs", "error", 0],
															"outputs": null,
															"actionIndex": 30
														}]
													},
													"actionIndex": 28
												}]
											],
											"error": [{
												"name": "SET isLoading",
												"input": {},
												"output": null,
												"duration": 0,
												"mutations": [],
												"isAsync": false,
												"outputPath": null,
												"isExecuting": false,
												"hasExecuted": false,
												"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "error", 0],
												"outputs": null,
												"actionIndex": 35
											}, {
												"name": "showSnackbar",
												"input": {},
												"output": null,
												"duration": 0,
												"mutations": [],
												"isAsync": false,
												"outputPath": null,
												"isExecuting": false,
												"hasExecuted": false,
												"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "error", 1],
												"outputs": null,
												"actionIndex": 36
											}, {
												"name": "redirect (/)",
												"input": {},
												"output": null,
												"duration": 0,
												"mutations": [],
												"isAsync": false,
												"outputPath": null,
												"isExecuting": false,
												"hasExecuted": false,
												"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "error", 2],
												"outputs": null,
												"actionIndex": 37
											}]
										},
										"actionIndex": 33
									}]
								]
							},
							"actionIndex": 3
						}
					],
					"error": [{
						"name": "showSnackbar",
						"input": {},
						"output": null,
						"duration": 0,
						"mutations": [],
						"isAsync": false,
						"outputPath": null,
						"isExecuting": false,
						"hasExecuted": false,
						"path": [0, 0, "outputs", "error", 0],
						"outputs": null,
						"actionIndex": 38
					}]
				},
				"actionIndex": 0
			}]
		],
		"duration": 0,
		"input": {
			"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
			"sceneIndex": "0",
			"sessionId": "bcc9350d-113c-4f75-951b-205f39a31246",
			"user": {
				"id": "christianalfoni@gmail.com",
				"isAdmin": true,
				"completedAssignments": {}
			},
			"scene": {
				"name": "Scene 1",
				"currentFileIndex": 0,
				"files": [{
					"name": "index.html",
					"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
				}],
				"assignments": [{
					"description": "Skriv teksten: \"Hei Kodeboksen!\"",
					"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
					"completed": false
				}, {
					"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
					"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
					"completed": false
				}],
				"recording": true,
				"duration": 12860
			},
			"course": {
				"_id": "565edcfbd40082328ef02b7c",
				"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
				"created": 1449057531702,
				"name": "Demo",
				"authorId": "christianalfoni@gmail.com",
				"scenes": [{
					"name": "Scene 1",
					"currentFileIndex": 0,
					"assignments": [{
						"description": "Skriv teksten: \"Hei Kodeboksen!\"",
						"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
						"completed": false
					}, {
						"description": "I denne oppgaven skal du lage et ${DIV} element med teksten: \"Hvordan går det?\"",
						"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
						"completed": false
					}],
					"recording": {
						"initialState": {
							"id": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
							"name": "Demo",
							"mousePosition": {
								"x": 71,
								"y": 32
							},
							"isLoading": false,
							"currentAssignmentStatus": {
								"isLoading": false,
								"result": null
							},
							"assignmentPoints": [],
							"isLoadingMedia": false,
							"authorId": "christianalfoni@gmail.com",
							"showPreview": true,
							"showConsole": false,
							"showEditAssignment": false,
							"showAssignment": false,
							"showConfigureScenes": false,
							"showScenesList": false,
							"showFolder": false,
							"showAddFileInput": false,
							"currentSceneIndex": "0",
							"currentAssignmentIndex": 0,
							"sandboxSnapshot": [{
								"name": "index.html",
								"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
							}],
							"newSceneName": "",
							"newFileName": "",
							"codeSelection": {
								"anchor": {
									"line": 8,
									"ch": 7
								},
								"head": {
									"line": 8,
									"ch": 7
								}
							},
							"scenes": [{
								"name": "Scene 1",
								"currentFileIndex": 0,
								"files": [{
									"name": "index.html",
									"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
								}],
								"assignments": [{
									"description": "Skriv teksten: \"Hei Kodeboksen!\"",
									"code": "if (!document.body.innerText.length) {\n return 'Jeg finner ikke noe tekst'; \n}\n\nif (document.body.innerText.toLowerCase() !== 'hei kodeboksen!') {\n return 'Du skrev teksten \"' + document.body.innerText + '\", men det er ikke riktig'; \n}\n\nreturn true;",
									"completed": false
								}, {
									"description": "I denne oppgaven skal du lage et DIV element med teksten: \"Hvordan går det?\"",
									"code": "if (!document.querySelector('div')) {\n return 'Jeg finner ikke et DIV element'; \n}\n\nif (!document.querySelector('div').innerText.length) {\n return 'Du har skrevet teksten \"' + document.querySelector('div').innerText + '\", men dette er ikke riktig'; \n}\n\nreturn true;",
									"completed": false
								}],
								"recording": true,
								"sandboxFiles": [{
									"name": "index.html",
									"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <h1>Hei Kodeboksen!</h1>\n  </body>\n</html>"
								}]
							}, {
								"assignments": [{
									"description": "",
									"code": ""
								}],
								"name": "Scene 2"
							}],
							"scenesList": [{
								"name": "Scene 1",
								"assignmentsCount": 2
							}, {
								"name": "Scene 2",
								"assignmentsCount": 1
							}],
							"recorder": {
								"isPlaying": false,
								"isUploading": false,
								"isRecording": false,
								"hasRecorded": false
							},
							"_id": "565edcfbd40082328ef02b7c",
							"created": 1449057531702,
							"previewUrl": "https://sandbox.kodeboksen.dev:3000?id=1452093444124",
							"isLoadingPreview": false
						},
						"start": 1452093447151,
						"signals": [{
							"name": "snackbarTimedOut",
							"input": {},
							"start": 1452093447293,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.pauseClicked",
							"input": {
								"seek": 3103.783
							},
							"start": 1452093450078,
							"asyncActionPaths": ["0.0"],
							"asyncActionResults": [{
								"outputPath": "success"
							}]
						}, {
							"name": "course.appClicked",
							"input": {
								"mousePositionX": 23,
								"mousePositionY": 31
							},
							"start": 1452093450079,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeCursorChanged",
							"input": {
								"anchor": {
									"line": 0,
									"ch": 0
								},
								"head": {
									"line": 0,
									"ch": 0
								}
							},
							"start": 1452093450115,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeCursorChanged",
							"input": {
								"anchor": {
									"line": 8,
									"ch": 7
								},
								"head": {
									"line": 8,
									"ch": 7
								}
							},
							"start": 1452093450117,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeCursorChanged",
							"input": {
								"anchor": {
									"line": 6,
									"ch": 28,
									"xRel": 1
								},
								"head": {
									"line": 6,
									"ch": 28,
									"xRel": 1
								}
							},
							"start": 1452093453661,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.appClicked",
							"input": {
								"mousePositionX": 660,
								"mousePositionY": 227
							},
							"start": 1452093453734,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeChanged",
							"input": {
								"from": {
									"line": 6,
									"ch": 28,
									"xRel": 1
								},
								"to": {
									"line": 6,
									"ch": 28,
									"xRel": 1
								},
								"text": [" "]
							},
							"start": 1452093454471,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeCursorChanged",
							"input": {
								"anchor": {
									"line": 6,
									"ch": 29
								},
								"head": {
									"line": 6,
									"ch": 29
								}
							},
							"start": 1452093454483,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeChanged",
							"input": {
								"from": {
									"line": 6,
									"ch": 29
								},
								"to": {
									"line": 6,
									"ch": 29
								},
								"text": ["h"]
							},
							"start": 1452093454651,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeCursorChanged",
							"input": {
								"anchor": {
									"line": 6,
									"ch": 30
								},
								"head": {
									"line": 6,
									"ch": 30
								}
							},
							"start": 1452093454656,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeChanged",
							"input": {
								"from": {
									"line": 6,
									"ch": 30
								},
								"to": {
									"line": 6,
									"ch": 30
								},
								"text": ["e"]
							},
							"start": 1452093454712,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeCursorChanged",
							"input": {
								"anchor": {
									"line": 6,
									"ch": 31
								},
								"head": {
									"line": 6,
									"ch": 31
								}
							},
							"start": 1452093454718,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeChanged",
							"input": {
								"from": {
									"line": 6,
									"ch": 31
								},
								"to": {
									"line": 6,
									"ch": 31
								},
								"text": [" "]
							},
							"start": 1452093454856,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeCursorChanged",
							"input": {
								"anchor": {
									"line": 6,
									"ch": 32
								},
								"head": {
									"line": 6,
									"ch": 32
								}
							},
							"start": 1452093454866,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeChanged",
							"input": {
								"from": {
									"line": 6,
									"ch": 32
								},
								"to": {
									"line": 6,
									"ch": 32
								},
								"text": ["h"]
							},
							"start": 1452093455046,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeCursorChanged",
							"input": {
								"anchor": {
									"line": 6,
									"ch": 33
								},
								"head": {
									"line": 6,
									"ch": 33
								}
							},
							"start": 1452093455050,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeChanged",
							"input": {
								"from": {
									"line": 6,
									"ch": 33
								},
								"to": {
									"line": 6,
									"ch": 33
								},
								"text": ["e"]
							},
							"start": 1452093455096,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeCursorChanged",
							"input": {
								"anchor": {
									"line": 6,
									"ch": 34
								},
								"head": {
									"line": 6,
									"ch": 34
								}
							},
							"start": 1452093455102,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeChanged",
							"input": {
								"from": {
									"line": 6,
									"ch": 34
								},
								"to": {
									"line": 6,
									"ch": 34
								},
								"text": ["h"]
							},
							"start": 1452093455250,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeCursorChanged",
							"input": {
								"anchor": {
									"line": 6,
									"ch": 35
								},
								"head": {
									"line": 6,
									"ch": 35
								}
							},
							"start": 1452093455255,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeChanged",
							"input": {
								"from": {
									"line": 6,
									"ch": 35
								},
								"to": {
									"line": 6,
									"ch": 35
								},
								"text": [" "]
							},
							"start": 1452093455275,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeCursorChanged",
							"input": {
								"anchor": {
									"line": 6,
									"ch": 36
								},
								"head": {
									"line": 6,
									"ch": 36
								}
							},
							"start": 1452093455279,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeChanged",
							"input": {
								"from": {
									"line": 6,
									"ch": 36
								},
								"to": {
									"line": 6,
									"ch": 36
								},
								"text": ["h"]
							},
							"start": 1452093455483,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeCursorChanged",
							"input": {
								"anchor": {
									"line": 6,
									"ch": 37
								},
								"head": {
									"line": 6,
									"ch": 37
								}
							},
							"start": 1452093455487,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeChanged",
							"input": {
								"from": {
									"line": 6,
									"ch": 37
								},
								"to": {
									"line": 6,
									"ch": 37
								},
								"text": ["e"]
							},
							"start": 1452093455554,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeCursorChanged",
							"input": {
								"anchor": {
									"line": 6,
									"ch": 38
								},
								"head": {
									"line": 6,
									"ch": 38
								}
							},
							"start": 1452093455558,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeChanged",
							"input": {
								"from": {
									"line": 6,
									"ch": 38
								},
								"to": {
									"line": 6,
									"ch": 38
								},
								"text": [" "]
							},
							"start": 1452093456506,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeCursorChanged",
							"input": {
								"anchor": {
									"line": 6,
									"ch": 39
								},
								"head": {
									"line": 6,
									"ch": 39
								}
							},
							"start": 1452093456510,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeChanged",
							"input": {
								"from": {
									"line": 6,
									"ch": 39
								},
								"to": {
									"line": 6,
									"ch": 39
								},
								"text": ["h"]
							},
							"start": 1452093456623,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeCursorChanged",
							"input": {
								"anchor": {
									"line": 6,
									"ch": 40
								},
								"head": {
									"line": 6,
									"ch": 40
								}
							},
							"start": 1452093456629,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeChanged",
							"input": {
								"from": {
									"line": 6,
									"ch": 40
								},
								"to": {
									"line": 6,
									"ch": 40
								},
								"text": ["e"]
							},
							"start": 1452093456658,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeCursorChanged",
							"input": {
								"anchor": {
									"line": 6,
									"ch": 41
								},
								"head": {
									"line": 6,
									"ch": 41
								}
							},
							"start": 1452093456662,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeChanged",
							"input": {
								"from": {
									"line": 6,
									"ch": 41
								},
								"to": {
									"line": 6,
									"ch": 41
								},
								"text": ["h"]
							},
							"start": 1452093456815,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeCursorChanged",
							"input": {
								"anchor": {
									"line": 6,
									"ch": 42
								},
								"head": {
									"line": 6,
									"ch": 42
								}
							},
							"start": 1452093456819,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeChanged",
							"input": {
								"from": {
									"line": 6,
									"ch": 42
								},
								"to": {
									"line": 6,
									"ch": 42
								},
								"text": ["e"]
							},
							"start": 1452093456891,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeCursorChanged",
							"input": {
								"anchor": {
									"line": 6,
									"ch": 43
								},
								"head": {
									"line": 6,
									"ch": 43
								}
							},
							"start": 1452093456896,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeChanged",
							"input": {
								"from": {
									"line": 6,
									"ch": 43
								},
								"to": {
									"line": 6,
									"ch": 43
								},
								"text": [" "]
							},
							"start": 1452093456923,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeCursorChanged",
							"input": {
								"anchor": {
									"line": 6,
									"ch": 44
								},
								"head": {
									"line": 6,
									"ch": 44
								}
							},
							"start": 1452093456928,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeChanged",
							"input": {
								"from": {
									"line": 6,
									"ch": 44
								},
								"to": {
									"line": 6,
									"ch": 44
								},
								"text": ["h"]
							},
							"start": 1452093457234,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeCursorChanged",
							"input": {
								"anchor": {
									"line": 6,
									"ch": 45
								},
								"head": {
									"line": 6,
									"ch": 45
								}
							},
							"start": 1452093457238,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeChanged",
							"input": {
								"from": {
									"line": 6,
									"ch": 45
								},
								"to": {
									"line": 6,
									"ch": 45
								},
								"text": ["e"]
							},
							"start": 1452093457326,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.codeCursorChanged",
							"input": {
								"anchor": {
									"line": 6,
									"ch": 46
								},
								"head": {
									"line": 6,
									"ch": 46
								}
							},
							"start": 1452093457332,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}, {
							"name": "course.saveShortcutPressed",
							"start": 1452093457755,
							"asyncActionPaths": ["0.0", "1.outputs.true.3.0"],
							"asyncActionResults": [{
								"outputPath": "success"
							}, {
								"outputPath": "success"
							}]
						}, {
							"name": "course.stopClicked",
							"input": {
								"seek": 13050.378
							},
							"start": 1452093460010,
							"asyncActionPaths": [],
							"asyncActionResults": []
						}],
						"path": ["course"],
						"end": 1452093460011,
						"duration": 12860
					}
				}, {
					"assignments": [{
						"description": "",
						"code": ""
					}],
					"name": "Scene 2"
				}]
			},
			"requestId": "1452156342953",
			"descriptions": [{
				"_id": "568d3eb63949145ef8bc2265",
				"tagName": "DIV",
				"created": 1452097206584,
				"description": "En liten test",
				"exampleType": "HTML",
				"example": "<div>hey</div>"
			}]
		}
	}, {
		"name": "course.mediaLoaded",
		"start": 1452156343129,
		"isExecuting": false,
		"branches": [
			[{
				"name": "trackData",
				"input": {
					"seek": 0
				},
				"duration": 0,
				"mutations": [],
				"isAsync": true,
				"outputPath": "success",
				"isExecuting": false,
				"hasExecuted": true,
				"path": [0, 0],
				"outputs": {
					"success": [],
					"error": []
				},
				"actionIndex": 0
			}], {
				"name": "mediaLoaded",
				"input": {
					"seek": 0
				},
				"duration": 0,
				"mutations": [{
					"name": "merge",
					"path": ["snackbar"],
					"args": [{
						"text": "Video og lyd lastet!",
						"show": true,
						"persist": false
					}]
				}, {
					"name": "set",
					"path": ["course", "isLoadingMedia"],
					"args": [false]
				}],
				"isAsync": false,
				"outputPath": null,
				"isExecuting": false,
				"hasExecuted": true,
				"path": [1],
				"outputs": null,
				"actionIndex": 1
			}, {
				"name": "setCurrentSeek",
				"input": {
					"seek": 0
				},
				"duration": 1,
				"mutations": [{
					"name": "set",
					"path": ["recorder", "currentSeek"],
					"args": [
						[0, 1452156343142]
					]
				}],
				"isAsync": false,
				"outputPath": null,
				"isExecuting": false,
				"hasExecuted": true,
				"path": [2],
				"outputs": null,
				"actionIndex": 2
			}
		],
		"duration": 0,
		"input": {
			"seek": 0
		}
	}, {
		"name": "course.codeCursorChanged",
		"start": 1452156343169,
		"isExecuting": false,
		"branches": [{
			"name": "setCodeSelection",
			"input": {
				"anchor": {
					"line": 0,
					"ch": 0
				},
				"head": {
					"line": 0,
					"ch": 0
				}
			},
			"duration": 0,
			"mutations": [{
				"name": "set",
				"path": ["course", "codeSelection"],
				"args": [{
					"anchor": {
						"line": 0,
						"ch": 0
					},
					"head": {
						"line": 0,
						"ch": 0
					}
				}]
			}],
			"isAsync": false,
			"outputPath": null,
			"isExecuting": false,
			"hasExecuted": true,
			"path": [0],
			"outputs": null,
			"actionIndex": 0
		}],
		"duration": 0,
		"input": {
			"anchor": {
				"line": 0,
				"ch": 0
			},
			"head": {
				"line": 0,
				"ch": 0
			}
		}
	}, {
		"name": "course.codeCursorChanged",
		"start": 1452156343172,
		"isExecuting": false,
		"branches": [{
			"name": "setCodeSelection",
			"input": {
				"anchor": {
					"line": 8,
					"ch": 7
				},
				"head": {
					"line": 8,
					"ch": 7
				}
			},
			"duration": 1,
			"mutations": [{
				"name": "set",
				"path": ["course", "codeSelection"],
				"args": [{
					"anchor": {
						"line": 8,
						"ch": 7
					},
					"head": {
						"line": 8,
						"ch": 7
					}
				}]
			}],
			"isAsync": false,
			"outputPath": null,
			"isExecuting": false,
			"hasExecuted": true,
			"path": [0],
			"outputs": null,
			"actionIndex": 0
		}],
		"duration": 0,
		"input": {
			"anchor": {
				"line": 8,
				"ch": 7
			},
			"head": {
				"line": 8,
				"ch": 7
			}
		}
	}, {
		"name": "course.videoStartedBuffering",
		"start": 1452156343662,
		"isExecuting": false,
		"branches": [
			[{
				"name": "trackData",
				"input": {},
				"duration": 0,
				"mutations": [],
				"isAsync": true,
				"outputPath": "success",
				"isExecuting": false,
				"hasExecuted": true,
				"path": [0, 0],
				"outputs": {
					"success": [],
					"error": []
				},
				"actionIndex": 0
			}], {
				"name": "pausePlaying",
				"input": {},
				"duration": 0,
				"mutations": [{
					"name": "merge",
					"path": ["recorder"],
					"args": [{
						"isRecording": false,
						"isPlaying": false,
						"hasRecorded": false
					}]
				}],
				"isAsync": false,
				"outputPath": null,
				"isExecuting": false,
				"hasExecuted": true,
				"path": [1],
				"outputs": null,
				"actionIndex": 1
			}, {
				"name": "SET isBuffering",
				"input": {},
				"duration": 0,
				"mutations": [{
					"name": "set",
					"path": ["recorder", "isBuffering"],
					"args": [true]
				}],
				"isAsync": false,
				"outputPath": null,
				"isExecuting": false,
				"hasExecuted": true,
				"path": [2],
				"outputs": null,
				"actionIndex": 2
			}, {
				"name": "showSnackbar",
				"input": {},
				"duration": 1,
				"mutations": [{
					"name": "merge",
					"path": ["snackbar"],
					"args": [{
						"text": "Laster video...",
						"show": true,
						"persist": true
					}]
				}],
				"isAsync": false,
				"outputPath": null,
				"isExecuting": false,
				"hasExecuted": true,
				"path": [3],
				"outputs": null,
				"actionIndex": 3
			}
		],
		"duration": 0,
		"input": {}
	}, {
		"name": "course.videoBuffered",
		"start": 1452156344163,
		"isExecuting": false,
		"branches": [
			[{
				"name": "trackData",
				"input": {
					"continuePlaying": false
				},
				"duration": 0,
				"mutations": [],
				"isAsync": true,
				"outputPath": "success",
				"isExecuting": false,
				"hasExecuted": true,
				"path": [0, 0],
				"outputs": {
					"success": [],
					"error": []
				},
				"actionIndex": 0
			}], {
				"name": "showSnackbar",
				"input": {
					"continuePlaying": false
				},
				"duration": 0,
				"mutations": [{
					"name": "merge",
					"path": ["snackbar"],
					"args": [{
						"text": "Video lastet!",
						"show": true,
						"persist": false
					}]
				}],
				"isAsync": false,
				"outputPath": null,
				"isExecuting": false,
				"hasExecuted": true,
				"path": [1],
				"outputs": null,
				"actionIndex": 1
			}, {
				"name": "SET isBuffering",
				"input": {
					"continuePlaying": false
				},
				"duration": 0,
				"mutations": [{
					"name": "set",
					"path": ["recorder", "isBuffering"],
					"args": [false]
				}],
				"isAsync": false,
				"outputPath": null,
				"isExecuting": false,
				"hasExecuted": true,
				"path": [2],
				"outputs": null,
				"actionIndex": 2
			}, {
				"name": "shouldContinuePlaying",
				"input": {
					"continuePlaying": false
				},
				"duration": 1,
				"mutations": [],
				"isAsync": false,
				"outputPath": "false",
				"isExecuting": false,
				"hasExecuted": true,
				"path": [3],
				"outputs": {
					"true": [{
						"name": "seekRecording",
						"input": {},
						"output": null,
						"duration": 0,
						"mutations": [],
						"isAsync": false,
						"outputPath": null,
						"isExecuting": false,
						"hasExecuted": false,
						"path": [3, "outputs", "true", 0],
						"outputs": null,
						"actionIndex": 4
					}, {
						"name": "playRecording",
						"input": {},
						"output": null,
						"duration": 0,
						"mutations": [],
						"isAsync": false,
						"outputPath": null,
						"isExecuting": false,
						"hasExecuted": false,
						"path": [3, "outputs", "true", 1],
						"outputs": null,
						"actionIndex": 5
					}],
					"false": []
				},
				"actionIndex": 3
			}
		],
		"duration": 0,
		"input": {
			"continuePlaying": false
		}
	}, {
		"name": "snackbarTimedOut",
		"start": 1452156346182,
		"isExecuting": false,
		"branches": [{
			"name": "hideSnackbar",
			"input": {},
			"duration": 1,
			"mutations": [{
				"name": "merge",
				"path": ["snackbar"],
				"args": [{
					"text": "",
					"show": false
				}]
			}],
			"isAsync": false,
			"outputPath": null,
			"isExecuting": false,
			"hasExecuted": true,
			"path": [0],
			"outputs": null,
			"actionIndex": 0
		}],
		"duration": 0,
		"input": {}
	}, {
		"name": "course.buttonPopoverClicked",
		"start": 1452156382265,
		"isExecuting": false,
		"branches": [{
			"name": "setMousePosition",
			"input": {
				"mousePositionX": 332,
				"mousePositionY": 21
			},
			"duration": 2,
			"mutations": [{
				"name": "set",
				"path": ["course", "mousePosition"],
				"args": [{
					"x": 332,
					"y": 21
				}]
			}],
			"isAsync": false,
			"outputPath": null,
			"isExecuting": false,
			"hasExecuted": true,
			"path": [0],
			"outputs": null,
			"actionIndex": 0
		}],
		"duration": 0,
		"input": {
			"mousePositionX": 332,
			"mousePositionY": 21
		}
	}, {
		"name": "course.listSceneNameClicked",
		"start": 1452156382270,
		"isExecuting": false,
		"branches": [
			[{
				"name": "trackData",
				"input": {
					"sceneIndex": 1
				},
				"duration": 0,
				"mutations": [],
				"isAsync": true,
				"outputPath": "success",
				"isExecuting": false,
				"hasExecuted": true,
				"path": [0, 0],
				"outputs": {
					"success": [],
					"error": []
				},
				"actionIndex": 0
			}], {
				"name": "redirectToScene",
				"input": {
					"sceneIndex": 1
				},
				"duration": 5,
				"mutations": [],
				"isAsync": false,
				"outputPath": null,
				"isExecuting": false,
				"hasExecuted": true,
				"path": [1],
				"outputs": null,
				"actionIndex": 1
			}
		],
		"duration": 0,
		"input": {
			"sceneIndex": 1
		}
	}, {
		"name": "course.courseOpened",
		"start": 1452156382282,
		"isSync": true,
		"isExecuting": false,
		"branches": [
			[{
				"name": "createSessionId",
				"input": {
					"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
					"sceneIndex": "1"
				},
				"output": {
					"sessionId": "d30abb79-00a2-463b-97c4-c7af0a6a3d26"
				},
				"duration": 0,
				"mutations": [],
				"isAsync": true,
				"outputPath": "success",
				"isExecuting": false,
				"hasExecuted": true,
				"path": [0, 0],
				"outputs": {
					"success": [{
							"name": "setSessionId",
							"input": {
								"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
								"sceneIndex": "1",
								"sessionId": "d30abb79-00a2-463b-97c4-c7af0a6a3d26"
							},
							"duration": 0,
							"mutations": [{
								"name": "set",
								"path": ["session", "sessionId"],
								"args": ["d30abb79-00a2-463b-97c4-c7af0a6a3d26"]
							}],
							"isAsync": false,
							"outputPath": null,
							"isExecuting": false,
							"hasExecuted": true,
							"path": [0, 0, "outputs", "success", 0],
							"outputs": null,
							"actionIndex": 1
						},
						[{
							"name": "trackData",
							"input": {
								"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
								"sceneIndex": "1",
								"sessionId": "d30abb79-00a2-463b-97c4-c7af0a6a3d26"
							},
							"duration": 0,
							"mutations": [],
							"isAsync": true,
							"outputPath": "success",
							"isExecuting": false,
							"hasExecuted": true,
							"path": [0, 0, "outputs", "success", 1, 0],
							"outputs": {
								"success": [],
								"error": []
							},
							"actionIndex": 2
						}], {
							"name": "condition (isLoggedIn)",
							"input": {
								"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
								"sceneIndex": "1",
								"sessionId": "d30abb79-00a2-463b-97c4-c7af0a6a3d26"
							},
							"duration": 0,
							"mutations": [],
							"isAsync": false,
							"outputPath": "true",
							"isExecuting": false,
							"hasExecuted": true,
							"path": [0, 0, "outputs", "success", 2],
							"outputs": {
								"true": [{
										"name": "setPage",
										"input": {
											"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
											"sceneIndex": "1",
											"sessionId": "d30abb79-00a2-463b-97c4-c7af0a6a3d26"
										},
										"duration": 0,
										"mutations": [{
											"name": "set",
											"path": ["currentPage"],
											"args": ["course"]
										}],
										"isAsync": false,
										"outputPath": null,
										"isExecuting": false,
										"hasExecuted": true,
										"path": [0, 0, "outputs", "success", 2, "outputs", "true", 0],
										"outputs": null,
										"actionIndex": 4
									}, {
										"name": "isSameCourse",
										"input": {
											"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
											"sceneIndex": "1",
											"sessionId": "d30abb79-00a2-463b-97c4-c7af0a6a3d26"
										},
										"duration": 0,
										"mutations": [],
										"isAsync": false,
										"outputPath": "true",
										"isExecuting": false,
										"hasExecuted": true,
										"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1],
										"outputs": {
											"true": [{
													"name": "showSnackbar",
													"input": {
														"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
														"sceneIndex": "1",
														"sessionId": "d30abb79-00a2-463b-97c4-c7af0a6a3d26"
													},
													"duration": 0,
													"mutations": [{
														"name": "merge",
														"path": ["snackbar"],
														"args": [{
															"text": "Laster scene...",
															"show": true,
															"persist": false
														}]
													}],
													"isAsync": false,
													"outputPath": null,
													"isExecuting": false,
													"hasExecuted": true,
													"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 0],
													"outputs": null,
													"actionIndex": 6
												}, {
													"name": "SET showScenesList",
													"input": {
														"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
														"sceneIndex": "1",
														"sessionId": "d30abb79-00a2-463b-97c4-c7af0a6a3d26"
													},
													"duration": 1,
													"mutations": [{
														"name": "set",
														"path": ["course", "showScenesList"],
														"args": [false]
													}],
													"isAsync": false,
													"outputPath": null,
													"isExecuting": false,
													"hasExecuted": true,
													"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 1],
													"outputs": null,
													"actionIndex": 7
												},
												[{
													"name": "loadScene",
													"input": {
														"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
														"sceneIndex": "1",
														"sessionId": "d30abb79-00a2-463b-97c4-c7af0a6a3d26"
													},
													"output": {
														"scene": {
															"files": [{
																"name": "index.html",
																"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n\n  </body>\n</html>"
															}],
															"assignments": [{
																"description": "",
																"code": ""
															}],
															"name": "Scene 2",
															"recording": false
														}
													},
													"duration": 0,
													"mutations": [],
													"isAsync": true,
													"outputPath": null,
													"isExecuting": false,
													"hasExecuted": true,
													"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 2, 0],
													"outputs": null,
													"actionIndex": 8
												}], {
													"name": "sceneDidLoad",
													"input": {
														"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
														"sceneIndex": "1",
														"sessionId": "d30abb79-00a2-463b-97c4-c7af0a6a3d26",
														"scene": {
															"files": [{
																"name": "index.html",
																"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n\n  </body>\n</html>"
															}],
															"assignments": [{
																"description": "",
																"code": ""
															}],
															"name": "Scene 2",
															"recording": false
														}
													},
													"duration": 0,
													"mutations": [],
													"isAsync": false,
													"outputPath": "true",
													"isExecuting": false,
													"hasExecuted": true,
													"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 3],
													"outputs": {
														"true": [{
																"name": "setScene",
																"input": {
																	"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																	"sceneIndex": "1",
																	"sessionId": "d30abb79-00a2-463b-97c4-c7af0a6a3d26",
																	"scene": {
																		"files": [{
																			"name": "index.html",
																			"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n\n  </body>\n</html>"
																		}],
																		"assignments": [{
																			"description": "",
																			"code": ""
																		}],
																		"name": "Scene 2",
																		"recording": false
																	}
																},
																"duration": 0,
																"mutations": [{
																	"name": "set",
																	"path": ["course", "scenes", "1"],
																	"args": [{
																		"files": [{
																			"name": "index.html",
																			"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n\n  </body>\n</html>"
																		}],
																		"assignments": [{
																			"description": "",
																			"code": ""
																		}],
																		"name": "Scene 2",
																		"recording": false
																	}]
																}, {
																	"name": "set",
																	"path": ["course", "scenes", "1", "sandboxFiles"],
																	"args": [
																		[{
																			"name": "index.html",
																			"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n\n  </body>\n</html>"
																		}]
																	]
																}, {
																	"name": "set",
																	"path": ["course", "scenes", "1", "currentFileIndex"],
																	"args": [0]
																}, {
																	"name": "set",
																	"path": ["course", "currentSceneIndex"],
																	"args": ["1"]
																}],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": true,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 3, "outputs", "true", 0],
																"outputs": null,
																"actionIndex": 10
															}, {
																"name": "setAssignmentPoints",
																"input": {
																	"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																	"sceneIndex": "1",
																	"sessionId": "d30abb79-00a2-463b-97c4-c7af0a6a3d26",
																	"scene": {
																		"files": [{
																			"name": "index.html",
																			"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n\n  </body>\n</html>"
																		}],
																		"assignments": [{
																			"description": "",
																			"code": ""
																		}],
																		"name": "Scene 2",
																		"recording": false
																	}
																},
																"duration": 0,
																"mutations": [{
																	"name": "set",
																	"path": ["course", "assignmentPoints"],
																	"args": [
																		[]
																	]
																}],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": true,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 3, "outputs", "true", 1],
																"outputs": null,
																"actionIndex": 11
															}, {
																"name": "setSandboxSnapshot",
																"input": {
																	"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																	"sceneIndex": "1",
																	"sessionId": "d30abb79-00a2-463b-97c4-c7af0a6a3d26",
																	"scene": {
																		"files": [{
																			"name": "index.html",
																			"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n\n  </body>\n</html>"
																		}],
																		"assignments": [{
																			"description": "",
																			"code": ""
																		}],
																		"name": "Scene 2",
																		"recording": false
																	}
																},
																"duration": 0,
																"mutations": [{
																	"name": "set",
																	"path": ["course", "sandboxSnapshot"],
																	"args": [
																		[{
																			"name": "index.html",
																			"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n\n  </body>\n</html>"
																		}]
																	]
																}],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": true,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 3, "outputs", "true", 2],
																"outputs": null,
																"actionIndex": 12
															}, {
																"name": "setPreviewUrl",
																"input": {
																	"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																	"sceneIndex": "1",
																	"sessionId": "d30abb79-00a2-463b-97c4-c7af0a6a3d26",
																	"scene": {
																		"files": [{
																			"name": "index.html",
																			"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n\n  </body>\n</html>"
																		}],
																		"assignments": [{
																			"description": "",
																			"code": ""
																		}],
																		"name": "Scene 2",
																		"recording": false
																	}
																},
																"output": {
																	"requestId": "1452156382304"
																},
																"duration": 0,
																"mutations": [{
																	"name": "set",
																	"path": ["course", "previewUrl"],
																	"args": ["https://sandbox.kodeboksen.dev:3000?id=1452156382304"]
																}],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": true,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 3, "outputs", "true", 3],
																"outputs": null,
																"actionIndex": 13
															}, {
																"name": "SET isLoadingPreview",
																"input": {
																	"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																	"sceneIndex": "1",
																	"sessionId": "d30abb79-00a2-463b-97c4-c7af0a6a3d26",
																	"scene": {
																		"files": [{
																			"name": "index.html",
																			"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n\n  </body>\n</html>"
																		}],
																		"assignments": [{
																			"description": "",
																			"code": ""
																		}],
																		"name": "Scene 2",
																		"recording": false
																	},
																	"requestId": "1452156382304"
																},
																"duration": 1,
																"mutations": [{
																	"name": "set",
																	"path": ["course", "isLoadingPreview"],
																	"args": [true]
																}],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": true,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 3, "outputs", "true", 4],
																"outputs": null,
																"actionIndex": 14
															},
															[{
																"name": "saveSandbox",
																"input": {
																	"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																	"sceneIndex": "1",
																	"sessionId": "d30abb79-00a2-463b-97c4-c7af0a6a3d26",
																	"scene": {
																		"files": [{
																			"name": "index.html",
																			"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n\n  </body>\n</html>"
																		}],
																		"assignments": [{
																			"description": "",
																			"code": ""
																		}],
																		"name": "Scene 2",
																		"recording": false
																	},
																	"requestId": "1452156382304"
																},
																"duration": 0,
																"mutations": [],
																"isAsync": true,
																"outputPath": "success",
																"isExecuting": false,
																"hasExecuted": true,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 3, "outputs", "true", 5, 0],
																"outputs": {
																	"success": [{
																		"name": "SET isLoadingPreview",
																		"input": {
																			"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																			"sceneIndex": "1",
																			"sessionId": "d30abb79-00a2-463b-97c4-c7af0a6a3d26",
																			"scene": {
																				"files": [{
																					"name": "index.html",
																					"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n\n  </body>\n</html>"
																				}],
																				"assignments": [{
																					"description": "",
																					"code": ""
																				}],
																				"name": "Scene 2",
																				"recording": false
																			},
																			"requestId": "1452156382304"
																		},
																		"duration": 1,
																		"mutations": [{
																			"name": "set",
																			"path": ["course", "isLoadingPreview"],
																			"args": [false]
																		}],
																		"isAsync": false,
																		"outputPath": null,
																		"isExecuting": false,
																		"hasExecuted": true,
																		"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 3, "outputs", "true", 5, 0, "outputs", "success", 0],
																		"outputs": null,
																		"actionIndex": 16
																	}],
																	"error": [{
																		"name": "showSnackbar",
																		"input": {},
																		"output": null,
																		"duration": 0,
																		"mutations": [],
																		"isAsync": false,
																		"outputPath": null,
																		"isExecuting": false,
																		"hasExecuted": false,
																		"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 3, "outputs", "true", 5, 0, "outputs", "error", 0],
																		"outputs": null,
																		"actionIndex": 17
																	}]
																},
																"actionIndex": 15
															}], {
																"name": "showSnackbar",
																"input": {
																	"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
																	"sceneIndex": "1",
																	"sessionId": "d30abb79-00a2-463b-97c4-c7af0a6a3d26",
																	"scene": {
																		"files": [{
																			"name": "index.html",
																			"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n\n  </body>\n</html>"
																		}],
																		"assignments": [{
																			"description": "",
																			"code": ""
																		}],
																		"name": "Scene 2",
																		"recording": false
																	},
																	"requestId": "1452156382304"
																},
																"duration": 0,
																"mutations": [{
																	"name": "merge",
																	"path": ["snackbar"],
																	"args": [{
																		"text": "Scenen er lastet",
																		"show": true,
																		"persist": false
																	}]
																}],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": true,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 3, "outputs", "true", 6],
																"outputs": null,
																"actionIndex": 18
															}
														],
														"false": [{
															"name": "showSnackbar",
															"input": {},
															"output": null,
															"duration": 0,
															"mutations": [],
															"isAsync": false,
															"outputPath": null,
															"isExecuting": false,
															"hasExecuted": false,
															"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "true", 3, "outputs", "false", 0],
															"outputs": null,
															"actionIndex": 19
														}]
													},
													"actionIndex": 9
												}
											],
											"false": [{
													"name": "setDefaultCourseState",
													"input": {},
													"output": null,
													"duration": 0,
													"mutations": [],
													"isAsync": false,
													"outputPath": null,
													"isExecuting": false,
													"hasExecuted": false,
													"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 0],
													"outputs": null,
													"actionIndex": 20
												}, {
													"name": "setLoadingCourse",
													"input": {},
													"output": null,
													"duration": 0,
													"mutations": [],
													"isAsync": false,
													"outputPath": null,
													"isExecuting": false,
													"hasExecuted": false,
													"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 1],
													"outputs": null,
													"actionIndex": 21
												}, {
													"name": "SET isLoading",
													"input": {},
													"output": null,
													"duration": 0,
													"mutations": [],
													"isAsync": false,
													"outputPath": null,
													"isExecuting": false,
													"hasExecuted": false,
													"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 2],
													"outputs": null,
													"actionIndex": 22
												},
												[{
													"name": "loadCourse",
													"input": {},
													"output": null,
													"duration": 0,
													"mutations": [],
													"isAsync": true,
													"outputPath": null,
													"isExecuting": false,
													"hasExecuted": false,
													"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 3, 0],
													"outputs": null,
													"actionIndex": 23
												}, {
													"name": "loadScene",
													"input": {},
													"output": null,
													"duration": 0,
													"mutations": [],
													"isAsync": true,
													"outputPath": null,
													"isExecuting": false,
													"hasExecuted": false,
													"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 3, 1],
													"outputs": null,
													"actionIndex": 8
												}], {
													"name": "courseAndSceneDidLoad",
													"input": {},
													"output": null,
													"duration": 0,
													"mutations": [],
													"isAsync": false,
													"outputPath": null,
													"isExecuting": false,
													"hasExecuted": false,
													"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 4],
													"outputs": {
														"true": [{
																"name": "setCourse",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 4, "outputs", "true", 0],
																"outputs": null,
																"actionIndex": 25
															}, {
																"name": "setScene",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 4, "outputs", "true", 1],
																"outputs": null,
																"actionIndex": 10
															}, {
																"name": "setAssignmentPoints",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 4, "outputs", "true", 2],
																"outputs": null,
																"actionIndex": 11
															}, {
																"name": "setSandboxSnapshot",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 4, "outputs", "true", 3],
																"outputs": null,
																"actionIndex": 12
															}, {
																"name": "setPreviewUrl",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 4, "outputs", "true", 4],
																"outputs": null,
																"actionIndex": 13
															}, {
																"name": "SET isLoadingPreview",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 4, "outputs", "true", 5],
																"outputs": null,
																"actionIndex": 14
															},
															[{
																"name": "saveSandbox",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": true,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 4, "outputs", "true", 6, 0],
																"outputs": {
																	"success": [{
																		"name": "SET isLoadingPreview",
																		"input": {},
																		"output": null,
																		"duration": 0,
																		"mutations": [],
																		"isAsync": false,
																		"outputPath": null,
																		"isExecuting": false,
																		"hasExecuted": false,
																		"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 4, "outputs", "true", 6, 0, "outputs", "success", 0],
																		"outputs": null,
																		"actionIndex": 16
																	}],
																	"error": [{
																		"name": "showSnackbar",
																		"input": {},
																		"output": null,
																		"duration": 0,
																		"mutations": [],
																		"isAsync": false,
																		"outputPath": null,
																		"isExecuting": false,
																		"hasExecuted": false,
																		"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 4, "outputs", "true", 6, 0, "outputs", "error", 0],
																		"outputs": null,
																		"actionIndex": 17
																	}]
																},
																"actionIndex": 15
															}], {
																"name": "setLoadedCourse",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 4, "outputs", "true", 7],
																"outputs": null,
																"actionIndex": 26
															}
														],
														"false": [{
															"name": "showSnackbar",
															"input": {},
															"output": null,
															"duration": 0,
															"mutations": [],
															"isAsync": false,
															"outputPath": null,
															"isExecuting": false,
															"hasExecuted": false,
															"path": [0, 0, "outputs", "success", 2, "outputs", "true", 1, "outputs", "false", 4, "outputs", "false", 0],
															"outputs": null,
															"actionIndex": 27
														}]
													},
													"actionIndex": 24
												}
											]
										},
										"actionIndex": 5
									},
									[{
										"name": "loadDescriptions",
										"input": {
											"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
											"sceneIndex": "1",
											"sessionId": "d30abb79-00a2-463b-97c4-c7af0a6a3d26",
											"scene": {
												"files": [{
													"name": "index.html",
													"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n\n  </body>\n</html>"
												}],
												"assignments": [{
													"description": "",
													"code": ""
												}],
												"name": "Scene 2",
												"recording": false
											},
											"requestId": "1452156382304"
										},
										"output": {
											"descriptions": [{
												"_id": "568d3eb63949145ef8bc2265",
												"tagName": "DIV",
												"created": 1452097206584,
												"description": "En liten test",
												"exampleType": "HTML",
												"example": "<div>hey</div>"
											}]
										},
										"duration": 0,
										"mutations": [],
										"isAsync": true,
										"outputPath": "success",
										"isExecuting": false,
										"hasExecuted": true,
										"path": [0, 0, "outputs", "success", 2, "outputs", "true", 2, 0],
										"outputs": {
											"success": [{
												"name": "setDescriptions",
												"input": {
													"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
													"sceneIndex": "1",
													"sessionId": "d30abb79-00a2-463b-97c4-c7af0a6a3d26",
													"scene": {
														"files": [{
															"name": "index.html",
															"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n\n  </body>\n</html>"
														}],
														"assignments": [{
															"description": "",
															"code": ""
														}],
														"name": "Scene 2",
														"recording": false
													},
													"requestId": "1452156382304",
													"descriptions": [{
														"_id": "568d3eb63949145ef8bc2265",
														"tagName": "DIV",
														"created": 1452097206584,
														"description": "En liten test",
														"exampleType": "HTML",
														"example": "<div>hey</div>"
													}]
												},
												"duration": 0,
												"mutations": [{
													"name": "set",
													"path": ["course", "descriptions"],
													"args": [
														[{
															"_id": "568d3eb63949145ef8bc2265",
															"tagName": "DIV",
															"created": 1452097206584,
															"description": "En liten test",
															"exampleType": "HTML",
															"example": "<div>hey</div>"
														}]
													]
												}],
												"isAsync": false,
												"outputPath": null,
												"isExecuting": false,
												"hasExecuted": true,
												"path": [0, 0, "outputs", "success", 2, "outputs", "true", 2, 0, "outputs", "success", 0],
												"outputs": null,
												"actionIndex": 29
											}],
											"error": [{
												"name": "showSnackbar",
												"input": {},
												"output": null,
												"duration": 0,
												"mutations": [],
												"isAsync": false,
												"outputPath": null,
												"isExecuting": false,
												"hasExecuted": false,
												"path": [0, 0, "outputs", "success", 2, "outputs", "true", 2, 0, "outputs", "error", 0],
												"outputs": null,
												"actionIndex": 30
											}]
										},
										"actionIndex": 28
									}]
								],
								"false": [{
										"name": "showSnackbar",
										"input": {},
										"output": null,
										"duration": 0,
										"mutations": [],
										"isAsync": false,
										"outputPath": null,
										"isExecuting": false,
										"hasExecuted": false,
										"path": [0, 0, "outputs", "success", 2, "outputs", "false", 0],
										"outputs": null,
										"actionIndex": 31
									}, {
										"name": "SET isLoading",
										"input": {},
										"output": null,
										"duration": 0,
										"mutations": [],
										"isAsync": false,
										"outputPath": null,
										"isExecuting": false,
										"hasExecuted": false,
										"path": [0, 0, "outputs", "success", 2, "outputs", "false", 1],
										"outputs": null,
										"actionIndex": 32
									},
									[{
										"name": "get (/API/user)",
										"input": {},
										"output": null,
										"duration": 0,
										"mutations": [],
										"isAsync": true,
										"outputPath": null,
										"isExecuting": false,
										"hasExecuted": false,
										"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0],
										"outputs": {
											"success": [{
													"name": "setUser",
													"input": {},
													"output": null,
													"duration": 0,
													"mutations": [],
													"isAsync": false,
													"outputPath": null,
													"isExecuting": false,
													"hasExecuted": false,
													"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 0],
													"outputs": null,
													"actionIndex": 34
												}, {
													"name": "setPage",
													"input": {},
													"output": null,
													"duration": 0,
													"mutations": [],
													"isAsync": false,
													"outputPath": null,
													"isExecuting": false,
													"hasExecuted": false,
													"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 1],
													"outputs": null,
													"actionIndex": 4
												}, {
													"name": "isSameCourse",
													"input": {},
													"output": null,
													"duration": 0,
													"mutations": [],
													"isAsync": false,
													"outputPath": null,
													"isExecuting": false,
													"hasExecuted": false,
													"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2],
													"outputs": {
														"true": [{
																"name": "showSnackbar",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 0],
																"outputs": null,
																"actionIndex": 6
															}, {
																"name": "SET showScenesList",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 1],
																"outputs": null,
																"actionIndex": 7
															},
															[{
																"name": "loadScene",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": true,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 2, 0],
																"outputs": null,
																"actionIndex": 8
															}], {
																"name": "sceneDidLoad",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 3],
																"outputs": {
																	"true": [{
																			"name": "setScene",
																			"input": {},
																			"output": null,
																			"duration": 0,
																			"mutations": [],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": false,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 3, "outputs", "true", 0],
																			"outputs": null,
																			"actionIndex": 10
																		}, {
																			"name": "setAssignmentPoints",
																			"input": {},
																			"output": null,
																			"duration": 0,
																			"mutations": [],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": false,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 3, "outputs", "true", 1],
																			"outputs": null,
																			"actionIndex": 11
																		}, {
																			"name": "setSandboxSnapshot",
																			"input": {},
																			"output": null,
																			"duration": 0,
																			"mutations": [],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": false,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 3, "outputs", "true", 2],
																			"outputs": null,
																			"actionIndex": 12
																		}, {
																			"name": "setPreviewUrl",
																			"input": {},
																			"output": null,
																			"duration": 0,
																			"mutations": [],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": false,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 3, "outputs", "true", 3],
																			"outputs": null,
																			"actionIndex": 13
																		}, {
																			"name": "SET isLoadingPreview",
																			"input": {},
																			"output": null,
																			"duration": 0,
																			"mutations": [],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": false,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 3, "outputs", "true", 4],
																			"outputs": null,
																			"actionIndex": 14
																		},
																		[{
																			"name": "saveSandbox",
																			"input": {},
																			"output": null,
																			"duration": 0,
																			"mutations": [],
																			"isAsync": true,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": false,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 3, "outputs", "true", 5, 0],
																			"outputs": {
																				"success": [{
																					"name": "SET isLoadingPreview",
																					"input": {},
																					"output": null,
																					"duration": 0,
																					"mutations": [],
																					"isAsync": false,
																					"outputPath": null,
																					"isExecuting": false,
																					"hasExecuted": false,
																					"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 3, "outputs", "true", 5, 0, "outputs", "success", 0],
																					"outputs": null,
																					"actionIndex": 16
																				}],
																				"error": [{
																					"name": "showSnackbar",
																					"input": {},
																					"output": null,
																					"duration": 0,
																					"mutations": [],
																					"isAsync": false,
																					"outputPath": null,
																					"isExecuting": false,
																					"hasExecuted": false,
																					"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 3, "outputs", "true", 5, 0, "outputs", "error", 0],
																					"outputs": null,
																					"actionIndex": 17
																				}]
																			},
																			"actionIndex": 15
																		}], {
																			"name": "showSnackbar",
																			"input": {},
																			"output": null,
																			"duration": 0,
																			"mutations": [],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": false,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 3, "outputs", "true", 6],
																			"outputs": null,
																			"actionIndex": 18
																		}
																	],
																	"false": [{
																		"name": "showSnackbar",
																		"input": {},
																		"output": null,
																		"duration": 0,
																		"mutations": [],
																		"isAsync": false,
																		"outputPath": null,
																		"isExecuting": false,
																		"hasExecuted": false,
																		"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "true", 3, "outputs", "false", 0],
																		"outputs": null,
																		"actionIndex": 19
																	}]
																},
																"actionIndex": 9
															}
														],
														"false": [{
																"name": "setDefaultCourseState",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 0],
																"outputs": null,
																"actionIndex": 20
															}, {
																"name": "setLoadingCourse",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 1],
																"outputs": null,
																"actionIndex": 21
															}, {
																"name": "SET isLoading",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 2],
																"outputs": null,
																"actionIndex": 22
															},
															[{
																"name": "loadCourse",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": true,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 3, 0],
																"outputs": null,
																"actionIndex": 23
															}, {
																"name": "loadScene",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": true,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 3, 1],
																"outputs": null,
																"actionIndex": 8
															}], {
																"name": "courseAndSceneDidLoad",
																"input": {},
																"output": null,
																"duration": 0,
																"mutations": [],
																"isAsync": false,
																"outputPath": null,
																"isExecuting": false,
																"hasExecuted": false,
																"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 4],
																"outputs": {
																	"true": [{
																			"name": "setCourse",
																			"input": {},
																			"output": null,
																			"duration": 0,
																			"mutations": [],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": false,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 4, "outputs", "true", 0],
																			"outputs": null,
																			"actionIndex": 25
																		}, {
																			"name": "setScene",
																			"input": {},
																			"output": null,
																			"duration": 0,
																			"mutations": [],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": false,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 4, "outputs", "true", 1],
																			"outputs": null,
																			"actionIndex": 10
																		}, {
																			"name": "setAssignmentPoints",
																			"input": {},
																			"output": null,
																			"duration": 0,
																			"mutations": [],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": false,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 4, "outputs", "true", 2],
																			"outputs": null,
																			"actionIndex": 11
																		}, {
																			"name": "setSandboxSnapshot",
																			"input": {},
																			"output": null,
																			"duration": 0,
																			"mutations": [],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": false,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 4, "outputs", "true", 3],
																			"outputs": null,
																			"actionIndex": 12
																		}, {
																			"name": "setPreviewUrl",
																			"input": {},
																			"output": null,
																			"duration": 0,
																			"mutations": [],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": false,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 4, "outputs", "true", 4],
																			"outputs": null,
																			"actionIndex": 13
																		}, {
																			"name": "SET isLoadingPreview",
																			"input": {},
																			"output": null,
																			"duration": 0,
																			"mutations": [],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": false,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 4, "outputs", "true", 5],
																			"outputs": null,
																			"actionIndex": 14
																		},
																		[{
																			"name": "saveSandbox",
																			"input": {},
																			"output": null,
																			"duration": 0,
																			"mutations": [],
																			"isAsync": true,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": false,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 4, "outputs", "true", 6, 0],
																			"outputs": {
																				"success": [{
																					"name": "SET isLoadingPreview",
																					"input": {},
																					"output": null,
																					"duration": 0,
																					"mutations": [],
																					"isAsync": false,
																					"outputPath": null,
																					"isExecuting": false,
																					"hasExecuted": false,
																					"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 4, "outputs", "true", 6, 0, "outputs", "success", 0],
																					"outputs": null,
																					"actionIndex": 16
																				}],
																				"error": [{
																					"name": "showSnackbar",
																					"input": {},
																					"output": null,
																					"duration": 0,
																					"mutations": [],
																					"isAsync": false,
																					"outputPath": null,
																					"isExecuting": false,
																					"hasExecuted": false,
																					"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 4, "outputs", "true", 6, 0, "outputs", "error", 0],
																					"outputs": null,
																					"actionIndex": 17
																				}]
																			},
																			"actionIndex": 15
																		}], {
																			"name": "setLoadedCourse",
																			"input": {},
																			"output": null,
																			"duration": 0,
																			"mutations": [],
																			"isAsync": false,
																			"outputPath": null,
																			"isExecuting": false,
																			"hasExecuted": false,
																			"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 4, "outputs", "true", 7],
																			"outputs": null,
																			"actionIndex": 26
																		}
																	],
																	"false": [{
																		"name": "showSnackbar",
																		"input": {},
																		"output": null,
																		"duration": 0,
																		"mutations": [],
																		"isAsync": false,
																		"outputPath": null,
																		"isExecuting": false,
																		"hasExecuted": false,
																		"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 2, "outputs", "false", 4, "outputs", "false", 0],
																		"outputs": null,
																		"actionIndex": 27
																	}]
																},
																"actionIndex": 24
															}
														]
													},
													"actionIndex": 5
												},
												[{
													"name": "loadDescriptions",
													"input": {},
													"output": null,
													"duration": 0,
													"mutations": [],
													"isAsync": true,
													"outputPath": null,
													"isExecuting": false,
													"hasExecuted": false,
													"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 3, 0],
													"outputs": {
														"success": [{
															"name": "setDescriptions",
															"input": {},
															"output": null,
															"duration": 0,
															"mutations": [],
															"isAsync": false,
															"outputPath": null,
															"isExecuting": false,
															"hasExecuted": false,
															"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 3, 0, "outputs", "success", 0],
															"outputs": null,
															"actionIndex": 29
														}],
														"error": [{
															"name": "showSnackbar",
															"input": {},
															"output": null,
															"duration": 0,
															"mutations": [],
															"isAsync": false,
															"outputPath": null,
															"isExecuting": false,
															"hasExecuted": false,
															"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "success", 3, 0, "outputs", "error", 0],
															"outputs": null,
															"actionIndex": 30
														}]
													},
													"actionIndex": 28
												}]
											],
											"error": [{
												"name": "SET isLoading",
												"input": {},
												"output": null,
												"duration": 0,
												"mutations": [],
												"isAsync": false,
												"outputPath": null,
												"isExecuting": false,
												"hasExecuted": false,
												"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "error", 0],
												"outputs": null,
												"actionIndex": 35
											}, {
												"name": "showSnackbar",
												"input": {},
												"output": null,
												"duration": 0,
												"mutations": [],
												"isAsync": false,
												"outputPath": null,
												"isExecuting": false,
												"hasExecuted": false,
												"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "error", 1],
												"outputs": null,
												"actionIndex": 36
											}, {
												"name": "redirect (/)",
												"input": {},
												"output": null,
												"duration": 0,
												"mutations": [],
												"isAsync": false,
												"outputPath": null,
												"isExecuting": false,
												"hasExecuted": false,
												"path": [0, 0, "outputs", "success", 2, "outputs", "false", 2, 0, "outputs", "error", 2],
												"outputs": null,
												"actionIndex": 37
											}]
										},
										"actionIndex": 33
									}]
								]
							},
							"actionIndex": 3
						}
					],
					"error": [{
						"name": "showSnackbar",
						"input": {},
						"output": null,
						"duration": 0,
						"mutations": [],
						"isAsync": false,
						"outputPath": null,
						"isExecuting": false,
						"hasExecuted": false,
						"path": [0, 0, "outputs", "error", 0],
						"outputs": null,
						"actionIndex": 38
					}]
				},
				"actionIndex": 0
			}]
		],
		"duration": 0,
		"input": {
			"courseId": "7875a8ff-7735-460a-9320-aa3df4f5fafd",
			"sceneIndex": "1",
			"sessionId": "d30abb79-00a2-463b-97c4-c7af0a6a3d26",
			"scene": {
				"files": [{
					"name": "index.html",
					"code": "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n\n  </body>\n</html>"
				}],
				"assignments": [{
					"description": "",
					"code": ""
				}],
				"name": "Scene 2",
				"recording": false
			},
			"requestId": "1452156382304",
			"descriptions": [{
				"_id": "568d3eb63949145ef8bc2265",
				"tagName": "DIV",
				"created": 1452097206584,
				"description": "En liten test",
				"exampleType": "HTML",
				"example": "<div>hey</div>"
			}]
		}
	}, {
		"name": "course.assignmentCodeChanged",
		"start": 1452156382329,
		"isExecuting": false,
		"branches": [{
			"name": "updateAssignmentCode",
			"input": {
				"code": ""
			},
			"duration": 0,
			"mutations": [{
				"name": "set",
				"path": ["course", "scenes", "1", "assignments", 0, "code"],
				"args": [""]
			}],
			"isAsync": false,
			"outputPath": null,
			"isExecuting": false,
			"hasExecuted": true,
			"path": [0],
			"outputs": null,
			"actionIndex": 0
		}],
		"duration": 0,
		"input": {
			"code": ""
		}
	}, {
		"name": "course.codeCursorChanged",
		"start": 1452156382331,
		"isExecuting": false,
		"branches": [{
			"name": "setCodeSelection",
			"input": {
				"anchor": {
					"line": 0,
					"ch": 0
				},
				"head": {
					"line": 0,
					"ch": 0
				}
			},
			"duration": 1,
			"mutations": [{
				"name": "set",
				"path": ["course", "codeSelection"],
				"args": [{
					"anchor": {
						"line": 0,
						"ch": 0
					},
					"head": {
						"line": 0,
						"ch": 0
					}
				}]
			}],
			"isAsync": false,
			"outputPath": null,
			"isExecuting": false,
			"hasExecuted": true,
			"path": [0],
			"outputs": null,
			"actionIndex": 0
		}],
		"duration": 0,
		"input": {
			"anchor": {
				"line": 0,
				"ch": 0
			},
			"head": {
				"line": 0,
				"ch": 0
			}
		}
	}, {
		"name": "course.codeCursorChanged",
		"start": 1452156382333,
		"isExecuting": false,
		"branches": [{
			"name": "setCodeSelection",
			"input": {
				"anchor": {
					"line": 8,
					"ch": 7
				},
				"head": {
					"line": 8,
					"ch": 7
				}
			},
			"duration": 0,
			"mutations": [{
				"name": "set",
				"path": ["course", "codeSelection"],
				"args": [{
					"anchor": {
						"line": 8,
						"ch": 7
					},
					"head": {
						"line": 8,
						"ch": 7
					}
				}]
			}],
			"isAsync": false,
			"outputPath": null,
			"isExecuting": false,
			"hasExecuted": true,
			"path": [0],
			"outputs": null,
			"actionIndex": 0
		}],
		"duration": 0,
		"input": {
			"anchor": {
				"line": 8,
				"ch": 7
			},
			"head": {
				"line": 8,
				"ch": 7
			}
		}
	}, {
		"name": "snackbarTimedOut",
		"start": 1452156384351,
		"isExecuting": false,
		"branches": [{
			"name": "hideSnackbar",
			"input": {},
			"duration": 1,
			"mutations": [{
				"name": "merge",
				"path": ["snackbar"],
				"args": [{
					"text": "",
					"show": false
				}]
			}],
			"isAsync": false,
			"outputPath": null,
			"isExecuting": false,
			"hasExecuted": true,
			"path": [0],
			"outputs": null,
			"actionIndex": 0
		}],
		"duration": 0,
		"input": {}
	}]
};
