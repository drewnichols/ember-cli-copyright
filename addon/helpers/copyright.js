import Ember from 'ember';

export function copyright(value/*, options*/) {
  if (Ember.isBlank(value)) {
    value = " " + value;
  } else {
    value = "";
  }

  return "&copy; " + new Date().getFullYear() + value;
}