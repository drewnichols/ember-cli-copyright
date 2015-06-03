import Ember from 'ember';

export function copyright() {
  return "&copy; " + new Date().getFullYear();
}

export default Ember.HTMLBars.makeBoundHelper(copyright);
