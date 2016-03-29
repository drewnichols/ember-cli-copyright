import Ember from 'ember';

var copyright = function(value) {
  if (Ember.isBlank(value)) {
    value = "";
  } else {
    value = " " + value;
  }

  return "&copy; " + new Date().getFullYear() + value;
}

export default Ember.Helper.helper(copyright);