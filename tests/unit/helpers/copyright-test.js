import { copyright } from '../../../helpers/copyright';
import { module, test } from 'qunit';

module('Unit | Helper | copyright');

test('it displays a copyright symbol with current year by default', function(assert) {
  var expected = "&copy; " + currentYear();
  assert.equal(copyright(""), expected);
});

test('it displays a copyright symbol with current year and company name', function(assert) {
  let expected = "&copy; " + currentYear() + " company name";
  assert.equal(copyright("company name"), expected);
});

function currentYear() {
  return new Date().getFullYear();
}