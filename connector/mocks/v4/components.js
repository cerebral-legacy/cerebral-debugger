module.exports = {
  "type": "components",
  "app": "1234",
  "data": {
    "map": {
      'app.foo': ['App', 'Items'],
      'app.users.0': ['User', 'App']
    },
    "render": {
      start: Date.now(),
      duration: 4,
      changes: {
        'app': {
          'foo': true
        }
      },
      components: ['App', 'Items']
    }
  }
}
