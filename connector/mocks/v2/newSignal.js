module.exports = {
	"type": "signals",
	"app": "4321",
	"version": "v2",
	"data": {
		"signals": [{
			"name": "app.footer.allTodosClicked",
			"start": 1453574393026,
			"isSync": true,
			"isRouted": true,
			"isExecuting": true,
			"isPrevented": false,
			"branches": [{
				"name": "unsetFilter",
				"input": {},
				"duration": 4,
				"mutations": [{
					"name": "set",
					"path": ["app", "footer", "filter"],
					"args": ["all"]
				}],
				"isAsync": true,
				"outputPath": null,
				"isExecuting": false,
				"hasExecuted": true,
				"path": [0],
				"outputs": null,
				"actionIndex": 0
			}],
			"options": {
				"isSync": true,
				"isRouted": true
			},
			"duration": 0,
			"input": {}
		}]
	}
}
