<!-- using shields.io for status buttons -->
![Programming language](https://img.shields.io/badge/Language-JavaScript-black.svg)
![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)
![Version](https://img.shields.io/badge/Version-v1-blue.svg)


# Daily Hyperlink Color Changer
Changes the color of your hyperlinks depending on what day of the week it is.

## getDay()
Using getDay() I was able to test what day it was and apply a different color for each day


| Getday() |  0 | 1 | 2 | 3 | 4 | 5 | 6 | 
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Day | Sunday | Monday | Tuesday | Wednesday | Thursday | Friday | Saturday |
| Color | #cc334d | #ad33cc | #337fcc | #33ccc3 | #33cc57 | #f32 | #cc5733 | 


| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |


After it's found the current date, it will then find all elements with the 'a' hyperlink code and replace the default color with the one specified in the if statement.

## How To Use
save .js to project and paste what's below to the html file:

    <script src="dailyhyperlinkcolorchanger.js"></script>
Make sure you paste this code lower in the html page like the footer so that all the links will have already loaded.

You can view a demo on my main site: [manuelvargas.me](http://manuelvargas.me/Daily-Hyperlink-Color-Changer/)

Or you can view my pen on [codepen.io](http://codepen.io/manuelvargas1251/pen/JGmZOL)
