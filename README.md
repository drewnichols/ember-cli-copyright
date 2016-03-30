# ember-cli-copyright [![Build Status](https://travis-ci.org/drewnichols/ember-cli-copyright.svg)](https://travis-ci.org/drewnichols/ember-cli-copyright)

ember-cli-copyright is a revolutionary ember-cli addon allowing you to never update the copyright year on your ember cli applications footer again.

## Support

Version 2.4.0 supports Ember 1.13 through 2.4.

## Installation

The best way to install is to use the ember-cli install command like this. 
```
ember install ember-cli-copyright
```
or if for some reason that doesn't work 
```
ember install:addon ember-cli-copyright
```
or if you're really old school
```
npm install ember-cli-copyright --save-dev
```

None of those work? 

```
you're on your own 
```

## Usage

In your application's footer add the following

```
{{{copyright "My Company"}}}
```

This will produce the copyright symbol with the current date and company name (&copy; 1999 My Company) required in all web application footers by our bosses. 

why? i don't know.
