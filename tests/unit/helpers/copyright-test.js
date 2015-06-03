import { copyright } from '../../../helpers/copyright';
import { module, test } from 'qunit';

module('Unit | Helper | copyright');

test('it displays a copyright symbol with current year by default', function(assert) {
  assert.equal(copyright(), "&copy; " + currentYear());
});

test('it does not display current year when currentYear=false', function(assert) {
  assert.equal(copyright(null, {currentYear:false}), "&copy;");
});

function currentYear() {
  return new Date().getFullYear();
}