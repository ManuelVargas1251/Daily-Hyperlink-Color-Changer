<!-- using shields.io for status buttons -->
![Programming language](https://img.shields.io/badge/Language-JavaScript-black.svg)
![Version](https://img.shields.io/badge/Version-1.1.3-blue.svg)


# Daily Hyperlink Color Changer
Changes the color of a page's linked text depending on what day of the week it is.


## How To
Download `colorchange.js` and include in HTML page

```html
<script src="colorchange.js"></script>
```
Place this code last inside the body so that all the links will have already loaded before the script runs.

This repo includes a demo `index.html` using the script. You can view a demo on my main site: [mnl.space](http://mnl.space/Daily-Hyperlink-Color-Changer/). Or you can view my pen on [codepen.io](http://codepen.io/manuelvargas1251/pen/JGmZOL)



## The Code

```javascript
//gets the number value of the day of the week; 0 through 6
let currentDay = new Date().getDay()

//find all elements with header 1 tag
let elements = document.querySelectorAll('h1')

let dayColors = [
  '#cc334d',  //sunday
  '#ad33cc',  //monday
  '#337fcc',  //tuesday
  '#33ccc3',  //wednesday
  '#33cc57',  //thursday
  '#c7cc33',  //friday
  '#cc5733'   //saturday
];  //necessary semi-colon 😕

//changes color for each link tag on page
[].slice.call(elements).forEach(function (element) {
  element.style.color = dayColors[currentDay]
})
```