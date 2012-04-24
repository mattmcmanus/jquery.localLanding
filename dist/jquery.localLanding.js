/*! Localized Landing Pages - v0.1.0 - 2012-04-24
* https://github.com/matt/jquery.localLanding
* Copyright (c) 2012 Matt McManus; Licensed MIT, GPL */

/*
options = {
  css : '',
  languages: {
    es: {
      url: '',
      text: '',
      src: ''
    },
    ar: {
      url: '',
      text: '',
      src: ''
    },
    zh: {
      url: '',
      text: '',
      src: ''
    }
  }
}

Process:
1. Detect proper language
2. Load CSS
3. Drop element in

*/

(function($) {
  // Mozilla uses .language, IE uses .userLanguage. Strip out specific localities,
  // high level language is fine
  $.lang = navigator.language.substr(0,2) || navigator.userLanguage.substr(0,2);

  $.localLanding = function(options) {
    if (options.languages[$.lang]) {
      var lang = options.languages[$.lang], a = [];

      // Load the CSS file if one is specified
      if (options.css) { $('head').append('<link rel="stylesheet" href="http://cms-staging.arcadia.edu/css/activeDataX.css" type="text/css" />'); }

      a.push('<a id="localLanding" href="'+lang.url+'" ');
      if (lang.src) {
	a.push('class="ir" style="background-image:url('+lang.src+')"');
      }
      a.push('>'+lang.text+'</a>');
      $(a.join('')).appendTo('body');
    }
  };

}(jQuery));
