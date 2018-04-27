// Modified from the textbook example by Gregory M. Kapfhammer
//
// Please refer to the following GitHub repository for country flags:
// https://github.com/hjnilsson/country-flags
//
// From this directory you can download images that match the size of those provided:
// https://github.com/hjnilsson/country-flags/tree/master/png100px
//
// define constructor function for Country objects
function Country(name, iso, capital, population) {
  "use strict";
  this.name = name;
  this.iso = iso;
  this.capital = capital;
  this.population = population;
}
(function() {
  "use strict";
  // create an array of sample country objects
  var countries = [
    new Country("Bahamas", "bs", "Nassau", 301790), // flag added
    new Country("Canada", "ca", "Ottawa", 33679000), // flag added
    new Country("Germany", "de", "Berlin", 81802257) // no flag added
  ];
  // you can also push each new country object onto the end of the array
  countries.push(new Country("Spain", "ES", "Madrid", 46505963)); // no flag added
  countries.push(new Country("United Kingdom", "GB", "London", 62348447)); // no flag added

  // TODO: Make sure that you add at least five more flags and details to
  // this JavaScript. You can modify the array directly or continue to call
  // the countries.push method and the Country constructor. Please see the
  // course instructor if you are not sure how to modify this JavaScript.

  // now loop through all this array of country objects
  // note that many web developers do not consider it a best practice
  // to modify the DOM through the document.write method. Please talk
  // with the course instructor to learn more about this idea.
  for (var i = 0; i < countries.length; i++) {
    var c = countries[i];
    document.write("<div class='box'>");
    document.write("<img src='img/flags/" + c.iso + ".png' class='boxImg'>");
    document.write("<p>");
    // now loop through all of the details about the country
    for (var propertyName in c) {
      document.write("<strong>");
      document.write(propertyName + ": ");
      document.write("</strong>");
      document.write(c[propertyName]);
      document.write("<br>");
    }
    document.write("</div>");
  }
})();
