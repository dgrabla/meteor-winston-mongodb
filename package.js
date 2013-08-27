Package.describe({
  summary: 'Exposes winston.transports.MongoDB (https://github.com/indexzero/winston-mongodb)'
});

Npm.depends({
		"winston": "0.7.2",
    "winston-mongodb": "0.4.0"
});

Package.on_use(function (api, where) {
  api.add_files('winston-mongodb.js', 'server');
	if (api.export) {
		api.export("Winston");
  }
});
