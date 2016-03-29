import Ember from 'ember';

export function copyright(value) {
  if (Ember.isArray(value)) {
    value = value[0];
  }

  if (Ember.isBlank(value)) {
    value = "";
  } else {
    value = " " + value;
  }

  return "&copy; " + new Date().getFullYear() + value;
}

export default Ember.Helper.helper(copyright);