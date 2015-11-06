Package.describe({
  name: 'panter:keypress',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'React to keypress - reactivly',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('coffeescript', 'client');
  api.use('jquery', 'client');
  api.use(['reactive-dict'], 'client');
  api.versionsFrom('1.1.0.3');
  api.addFiles('keypress.coffee', 'client');
  api.export("keypress");
});


Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jquery');
  api.use('panter:keypress');
  api.addFiles('keypress-tests.js', 'client');
});
