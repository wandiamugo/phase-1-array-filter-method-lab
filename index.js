// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

const findMatching = (drivers,drive) => drivers.filter(function(driver){return driver.toUpperCase() === drive.toUpperCase()})

const fuzzyMatch = (drivers,drive) => drivers.filter(function(driver){return driver[0] ===drive[0]})

const matchName= (drivers, user) => drivers.filter(function(driver){return driver.name === user})