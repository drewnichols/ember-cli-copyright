import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'dummy/tests/helpers/start-app';

var application;

module('Acceptance | rendering correctly', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /', function(assert) {
  assert.expect(2);
  visit('/');

  andThen(function() {
    assert.equal(find('span.param').text(),"'© " + currentYear() + " My Company'");
    assert.equal(find('span.no-param').text(),"'© " + currentYear() + " '");
  });
});

function currentYear() {
  return new Date().getFullYear();
}