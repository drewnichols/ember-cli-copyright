import Ember from 'ember';
import {copyright} from 'ember-cli-copyright/helpers/copyright';

export function initialize(/* container, application */) {
  var registerHelper;

  if (Ember.HTMLBars) {
    registerHelper = function (helperName, fn) {
      Ember.HTMLBars._registerHelper(helperName, Ember.HTMLBars.makeBoundHelper(fn));
    };
  } else {
    registerHelper = Ember.Handlebars.helper;
  }

  registerHelper('copyright', copyright);
}

export default {
  name: 'copyright',
  initialize: initialize
};
