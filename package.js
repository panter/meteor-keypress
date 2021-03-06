Package.describe({
  name: 'panter:keypress',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'React to keypress - reactivly',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/panter/meteor-keypress',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
});

Package.onUse(function(api) {
  api.use(['modules', 'ecmascript', 'reactive-dict'], 'client');
  api.versionsFrom('1.5');
  api.export('Keypress', ['client']);
  api.addFiles('keypress.js', 'client');
});

Package.onTest(function(api) {
  api.use(['modules', 'ecmascript', 'tinytest']);
  api.use('jquery');
  api.use('panter:keypress');
  api.addFiles('keypress-tests.js', 'client');
});
