module.exports = (function () {
    //gets the number value of the day of the week; 0 through 6
    var currentDay = new Date().getDay();
    //find all elements with header 1 tag
    var elements = document.querySelectorAll('h1');
    var dayColors = [
        '#cc334d',
        '#ad33cc',
        '#337fcc',
        '#33ccc3',
        '#33cc57',
        '#c7cc33',
        '#cc5733' //saturday
    ];
    //changes color for each h1 tag on the page
    [0].slice.call(elements).forEach(function (element) {
        element.style.color = dayColors[currentDay];
    });
})();
