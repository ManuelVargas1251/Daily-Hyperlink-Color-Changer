<!-- using shields.io for status buttons -->
![Programming language](https://img.shields.io/badge/Language-JavaScript-black.svg)
![Build Status](https://img.shields.io/badge/Build-Passing-green.svg)
![UELVVA](https://img.shields.io/badge/Version-v1-blue.svg)


# Daily Hyperlink Color Changer
Changes the color of your hyperlinks depending on what day of the week it is.

##getDay()
Using getDay() I was able to test what day it was and apply a different color for each day

|  0 | 1 | 2 | 3 | 4 | 5 | 6 | 
| --- | --- | --- | --- | --- | --- | --- | --- |
| Sunday | Monday | Tuesday | Wednesday | Thursday | Friday | Saturday |
| #cc334d | #ad33cc | #337fcc | #33ccc3 | #33cc57 | #c7cc33 | #cc5733| 

After it's found the current date, it will then find all elements with the 'a' hyperlink code and replace the default color with the one specified in the if statement.

You can view a demo on my main site: [manuelvargas.me](manuelvargas.me)

Or you can view my pen on [codepen.io](http://codepen.io/manuelvargas1251/pen/JGmZOL)
