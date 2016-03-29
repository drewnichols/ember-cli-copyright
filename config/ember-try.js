module.exports = {
  scenarios: [
    {
      name: 'Ember-2.4.0',
      dependencies: {
        'ember': '2.4.0'
      }
    },
    {
      name: 'Ember-2.3.0',
      dependencies: {
        'ember': '2.3.0'
      }
    },
    {
      name: 'Ember-2.2.0',
      dependencies: {
        'ember': '2.2.0'
      }
    },
    {
      name: 'Ember-2.1.0',
      dependencies: {
        'ember': '2.1.0'
      }
    },
    {
      name: 'Ember-2.0.0',
      dependencies: {
        'ember': '2.0.0'
      }
    },
    {
      name: 'Ember-1.13.2',
      dependencies: {
        'ember': '1.13.2'
      }
    },
    {
      name: 'Ember-1.12.1',
      dependencies: {
        'ember': '1.12.1'
      }
    },
    {
      name: 'Ember-1.11.1',
      dependencies: {
        'ember': '1.11.1'
      }
    },
    {
      name: 'ember-release',
      dependencies: {
        'ember': 'components/ember#release'
      },
      resolutions: {
        'ember': 'release'
      }
    },
    {
      name: 'ember-beta',
      dependencies: {
        'ember': 'components/ember#beta'
      },
      resolutions: {
        'ember': 'beta'
      }
    },
    {
      name: 'ember-canary',
      dependencies: {
        'ember': 'components/ember#canary'
      },
      resolutions: {
        'ember': 'canary'
      }
    }
  ]
};
