/*
 * jquery.localLanding
 * https://github.com/matt/jquery.localLanding
 *
 * Copyright (c) 2012 Matt McManus
 * Licensed under the MIT, GPL licenses.
 */

(function($) {
  // Mozilla uses .language, IE uses .userLanguage
  $.language = navigator.language.substr(0,2) || navigator.userLanguage.substr(0,2)

  // Static method.
  $.localLanding = function(options) {
    return 'awesome';
  };

}(jQuery));
