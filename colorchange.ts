(function () {
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
  ];  //necessary semi ☹

  //changes color for each h1 tag on the page
  [].slice.call(elements).forEach(function (element) {
    element.style.color = dayColors[currentDay]
  })
})();