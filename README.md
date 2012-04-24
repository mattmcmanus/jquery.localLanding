# Localized Landing Pages

A simple and non-obtrusive way to alert your international visitors of pages on your site written in their language. The plugin simply detects the browsers language setting and provides a link to landing page of your choice.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/mattmcmanus/jquery.localLanding/master/dist/jquery.localLanding.min.js
[max]: https://raw.github.com/mattmcmanus/jquery.localLanding/master/dist/jquery.localLanding.js

In your web page:


```html
<script src="jquery.js"></script>
<script src="dist/jquery.localLanding.min.js"></script>
<script>
jQuery(function($) {
  $.localLanding({
    css : 'dist/jquery.localLanding.css',
    languages: {
      es: {
        url: 'http://www.arcadia.edu/spanish',
        text: 'Spanish Landing page',
        src: 'http://unbounce.com/photos/spanish-flag1.gif'
      }
    }
  });
});
</script>
```
## Documentation

When you call the localLanding method, you must supply a settings object. The object has two parts, an optional CSS file and the languages you want to detect:

```javascript
{
  css : url to css file,
  languages: { 
    language code: ex 'es': {
      url: url of page you want to give users the option to go to,
      text: The text for the link,
      src: *Optional* url to an image to use instead of plain text
    }
  }
}
```

## Examples

For example, you are the website for a university in the US. You have a significant number of visitors that have their language set to Spanish or Chinese. You want to unobtrusively give them the option to visit a landing page written in their language by doing the following:

```javascript
$.localLanding({
  css : 'http://cdn.school.edu/js/libs/jquery.localLanding.css',
  languages: {
    es: {
      url: 'http://school.edu/spanish-landing-page',
      text: 'Spanish Landing page',
      src: 'http://cdn.school.edu/img/spanish-greeting.png'
    },
    zh: {
      url: 'http://school.edu/chinese-landing-page',
      text: 'Chinese Landing page',
      src: 'http://cdn.school.edu/img/chinese-greeting.png'
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_

## Release History

* 2012/04/24 - v0.1.0 - Initial Release 

## License
Copyright (c) 2012 Matt McManus  
Licensed under the MIT, GPL licenses.
