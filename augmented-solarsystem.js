var SolarSystem = (function(NewSolarSystem) {

var closestStars = ["Alpha Centauri"];
var ageOfSolarSystem = 0;
var dwarfPlanets = ["Little Guy"];


  NewSolarSystem.getClosestStars = function(){
    return closestStars;
  },
  NewSolarSystem.setClosestStars = function(addedClosestStars){
    return closestStars.push(addedClosestStars)
  },
  NewSolarSystem.getAgeOfSolarSystem = function(){
    return ageOfSolarSystem;
  },
  NewSolarSystem.setAgeOfSolarSystem = function(addedAge){
    return ageOfSolarSystem = addedAge;
  },
  NewSolarSystem.getDwarfPlanets = function(){
    return dwarfPlanets;
  },
  NewSolarSystem.setDwarfPlanets = function(addedDwarf){
    return dwarfPlanets.push(addedDwarf);
  }


  return NewSolarSystem;

})(SolarSystem || {});