/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  var options = {
    css : 'jquery.localLanding.css',
    languages: {
      es: {
        url: 'http://www.arcadia.edu',
        text: 'Spanish Landing page',
        src: 'http://unbounce.com/photos/spanish-flag1.gif'
      }
    }
  };

  module('jQuery.localLanding in english');
  test('is english', 1, function() {
    $.localLanding(options);
    equal($('#localLanding').length, 0, 'should do nothing');
  });

  module('jQuery.localLanding in spanish', {
    setup: function() {
      $.lang = 'es';
    }
  });

  test('is spanish', 1, function() {
    $.localLanding(options);
    equal($('#localLanding').attr('href'), 'http://www.arcadia.edu', 'should add spanish landing link to arcadia.edu');
  });

}(jQuery));
