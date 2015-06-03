import Ember from 'ember';

export function copyright(params, options) {
  var currentYear = true; 

  if (options && options.currentYear === false) {
    currentYear = false;
  }

  if (currentYear) {
    return "&copy; " + new Date().getFullYear();
  } else {
    return "&copy;";
  }
}

export default Ember.HTMLBars.makeBoundHelper(copyright);
