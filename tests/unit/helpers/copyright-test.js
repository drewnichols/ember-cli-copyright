import { copyright } from '../../../helpers/copyright';
import { module, test } from 'qunit';

module('Unit | Helper | copyright');

test('it displays a copyright symbol with current year by default', function(assert) {
  assert.equal(copyright(""), "&copy; " + currentYear());
});

test('it displays a copyright symbol with current year and company name', function(assert) {
  assert.equal(copyright("company name"), "&copy; " + currentYear() + " company name");
});

function currentYear() {
  return new Date().getFullYear();
}