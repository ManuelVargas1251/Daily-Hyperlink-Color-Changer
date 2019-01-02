const colorchange = require('./colorchange')
const currentDay = new Date().getDay();
const dayColors = [
  '#cc334d',
  '#ad33cc',
  '#337fcc',
  '#33ccc3',
  '#33cc57',
  '#c7cc33',
  '#cc5733' //saturday
];

test('Checks if the current day gives the corresponding color', () => {
  expect(colorchange()).toBe(dayColors[currentDay]);
});