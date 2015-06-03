import Ember from 'ember';
import {copyright} from 'ember-cli-copyright/helpers/copyright';

export function initialize(/* container, application */) {
  Ember.Handlebars.helper('copyright', copyright);
}

export default {
  name: 'copyright',
  initialize: initialize
};
