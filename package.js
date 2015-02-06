Package.describe({
  summary: 'Exposes winston.transports.MongoDB (https://github.com/indexzero/winston-mongodb)',
  version: "0.0.2",
  name: "dgrabla:meteor-winston-mongodb",
  git: "https://github.com/dgrabla/meteor-winston-mongodb"
});

Package.onUse(function (api) {
  api.versionsFrom('0.1.0');
  api.add_files('winston-mongodb.js', 'server');
  if (api.export) {
    api.export("MongoDB", 'server');
  }
});

Package.onTest(function (api) {
  // Sets up a dependency on this package
  api.use('dgrabla:meteor-winston-mongodb');
  // Allows you to use the 'tinytest' framework
  api.use('tinytest@1.0.0');
  // Specify the source code for the package tests
  api.addFiles('winston-mongodb.js', 'server');
});

Npm.depends({
  "winston": "0.9.0",
  "winston-mongodb": "0.5.3"
});