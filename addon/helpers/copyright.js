import Ember from 'ember';

export function copyright(value/*, options*/) {
  if (Ember.isBlank(value)) {
    value = "";
  } else {
    value = " " + value;
  }

  return "&copy; " + new Date().getFullYear() + value;
}