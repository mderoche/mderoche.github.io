'use strict';

angular.module('validiciousSiteApp').controller('RulesCtrl', function ($scope, $sce) {
    
  $scope.rules = [{
    name: 'min-length',
    description: 'Checks that the context is at least N characters long.',
    expects: 'String',
    args: [{
      name: 'len',
      type: 'Integer',
      description: 'Length of characters'
    }]
  }, {
    name: 'max-length',
    description: 'Checks that the context is at most N characters long.',
    expects: 'String',
    args: [{
      name: 'len',
      type: 'Integer',
      description: 'Length of characters'
    }]
  }, {
    name: 'between-lengths',
    description: 'Checks that the context is between N and M characters long.',
    expects: 'String',
    args: [{
      name: 'min',
      type: 'Integer',
      description: 'Minimum number of characters the context should be'
    }, {
      name: 'max',
      type: 'Integer',
      description: 'Maximum number of characters the context should be'
    }]
  }, {
    name: 'only-alpha',
    description: 'Checks that the context has only letters.',
    expects: 'String',
    args: []
  }, {
    name: 'only-numeric',
    description: 'Checks that the context has only numbers.',
    expects: 'String/Number',
    args: []
  }, {
    name: 'only-special',
    description: 'Checks that the context has only special characters.',
    expects: 'String',
    args: []
  }, {
    name: 'only-uppercase',
    description: 'Checks that the context has only uppercase characters.',
    expects: 'String',
    args: []
  }, {
    name: 'only-lowercase',
    description: 'Checks that the context has only lowercase characters.',
    expects: 'String',
    args: []
  }, {
    name: 'has-alpha',
    description: 'Checks that the context has at least one letter.',
    expects: 'String',
    args: []
  }, {
    name: 'has-numeric',
    description: 'Checks that the context has at least one number.',
    expects: 'String/Number',
    args: []
  }, {
    name: 'has-special',
    description: 'Checks that the context has at least one special character.',
    expects: 'String',
    args: []
  }, {
    name: 'has-uppercase',
    description: 'Checks that the context has at least one uppercase character.',
    expects: 'String',
    args: []
  }, {
    name: 'has-lowercase',
    description: 'Checks that the context has at least one lowercase character.',
    expects: 'String',
    args: []
  }, {
    name: 'no-alpha',
    description: 'Ensures that the context has no letters.',
    expects: 'String/Number',
    args: []
  }, {
    name: 'no-numeric',
    description: 'Ensures that the context has no numbers.',
    expects: 'String',
    args: []
  }, {
    name: 'no-special',
    description: 'Ensures that the context has no special characters.',
    expects: 'String',
    args: []
  }, {
    name: 'no-uppercase',
    description: 'Ensures that the context has no uppercase letters.',
    expects: 'String',
    args: []
  }, {
    name: 'no-lowercase',
    description: 'Ensures that the context has no lowercase letters.',
    expects: 'String',
    args: []
  }, {
    name: 'equal-to',
    description: 'Checks if the context is equal to the specified argument.',
    expects: 'Any',
    args: [{
      name: 'context',
      type: 'Any',
      description: 'Context to test for equality'
    }, {
      name: 'strict',
      type: 'Boolean',
      description: 'Whether or not to use a strict comparison'
    }]
  }, {
    name: 'contains',
    description: 'Check if the context contains the given argument.',
    expects: 'String/Array',
    args: [{
      name: 'find',
      type: 'Any',
      description: 'What to find in the context'
    }]
  }, {
    name: 'starts-with',
    description: 'Check that the context starts with the given argument.',
    expects: 'String',
    args: [{
      name: 'find',
      type: 'Any',
      description: 'What to find in the context'
    }]
  }, {
    name: 'ends-with',
    description: 'Check that the context ends with the given argument.',
    expects: 'String',
    args: [{
      name: 'find',
      type: 'Any',
      description: 'What to find in the context'
    }]
  }, {
    name: 'greater-than',
    description: 'Check that the context is greater than the given argument.',
    expects: 'Number',
    args: [{
      name: 'limit',
      type: 'Any',
      description: 'Number to compare against the context'
    }]
  }, {
    name: 'less-than',
    description: 'Check that the context is less than the given argument.',
    expects: 'Number',
    args: [{
      name: 'limit',
      type: 'Any',
      description: 'Number to compare against the context'
    }]
  }, {
    name: 'odd',
    description: 'Check that the context is an odd number.',
    expects: 'Number',
    args: []
  }, {
    name: 'even',
    description: 'Check that the context is an even number (zero is not even).',
    expects: 'Number',
    args: []
  }, {
    name: 'prime',
    description: 'Check that the context is an prime number.',
    expects: 'Number',
    args: []
  }, {
    name: 'fibonacci',
    description: 'Check that the context is a fibonacci number.',
    expects: 'Number',
    args: []
  }, {
    name: 'multiple-of',
    description: 'Check that the context is a multiple of the specified number.',
    expects: 'Number',
    args: [{
      name: 'multipleOf',
      type: 'Number',
      description: 'Number that the context should be a multiple of'
    }]
  }, {
    name: 'email',
    description: 'Checks that the context is a valid e-mail address.',
    expects: 'String',
    args: []
  }, {
    name: 'credit-card',
    description: 'Checks that the context is a valid credit card number.',
    expects: 'String',
    args: [{
      name: 'type',
      type: 'String',
      description: 'Type of credit card to check for.  Possible values are: <samp>all, visa, mastercard, amex, dinersclub, discover, jcb</samp>'
    }]
  }, {
    name: 'regex',
    description: 'Checks that the context passes a provided regular expression.',
    expects: 'String/Number',
    args: [{
      name: 'regex',
      type: 'String',
      description: 'Regular expression to apply to the context'
    }, {
      name: 'flags',
      type: 'String',
      description: 'Flags to use with the regular expression execution (e.g. "g", "gi")'
    }]
  }, {
    name: 'fnc',
    description: 'Runs a synchronous function on the context and ensures that the return value is positive.',
    expects: 'Any',
    args: [{
      name: 'fnc',
      type: 'Function(context)',
      description: 'Function to run against the context'
    }]
  }, {
    name: 'fnc-callback',
    description: 'Runs a given function on the context with a callback as a parameter.  The given function should execute the callback function when finished processing.',
    expects: 'Any',
    payload: 'The payload parameter from the callback function',
    args: [{
      name: 'fnc',
      type: 'Function(context,callback(result,payload))',
      description: 'Function to run against the context'
    }],
    examples: [{
      name: 'Example',
      page: 'views/rule-examples/fnc-callback.html'
    }]
  }, {
    name: 'fnc-promise',
    description: 'Runs a given function on the context and returns a jQuery promise.  This promise is resolved or rejected depending on the result of the validation.',
    expects: 'Any',
    args: [{
      name: 'fnc',
      type: 'Function(context)',
      description: 'Function to run against the context'
    }],
    examples: [{
      name: 'Example',
      page: 'views/rule-examples/fnc-promise.html'
    }]
  }, {
    name: 'integer',
    description: 'Checks that the context is an finite integer between -9007199254740992 and 9007199254740992.',
    expects: 'Number',
    args: []
  }, {
    name: 'float',
    description: 'Checks that the context is a float.',
    expects: 'Number',
    args: []
  }, {
    name: 'json',
    description: 'Checks that the context is a valid JSON string.',
    expects: 'String',
    args: []
  }, {
    name: 'url',
    description: 'Checks that the context is a valid URL.',
    expects: 'String',
    args: []
  }, {
    name: 'positive',
    description: 'Checks that the context is a positive number.',
    expects: 'Number',
    args: []
  }, {
    name: 'negative',
    description: 'Checks that the context is a negative number.',
    expects: 'Number',
    args: []
  }, {
    name: 'currency',
    description: 'Checks that the context is in a currency format.',
    expects: 'String/Number',
    args: []
  }, {
    name: 'zipcode',
    description: 'Checks that the context is a zip code.',
    expects: 'String',
    args: []
  }, {
    name: 'phone',
    description: 'Checks that the context is a phone number.',
    expects: 'String',
    args: []
  }, {
    name: 'ssn',
    description: 'Checks that the context is a social security number.',
    expects: 'String',
    args: []
  }];

  $scope.rules.map(function (rule) {
    rule.description = $sce.trustAsHtml(rule.description);
    rule.args.map(function (arg) {
      arg.description = $sce.trustAsHtml(arg.description);
      return arg;
    });
    return rule;
  });

});
