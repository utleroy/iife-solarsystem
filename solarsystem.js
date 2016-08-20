var SolarSystem = (function() {
  var planets = ["Earth", "Jupiter"];
  var activeSpacecraft = ["Hot air baloon", "Paper airplane"];
  var planetsLandedOn = 0;

  return {
    modified_Date: new Date(),
    getPlanet: function() {
      return planets;
    },
    setPlanet: function(newPlanet) {
     planets.push(newPlanet);
    },
    getActiveSpacecraft: function() {
    return activeSpacecraft;
    },
    setActiveSpacecraft: function(newSpacecraft) {
    activeSpacecraft.push(newSpacecraft);
    },
    getPlanetsLandedOn: function() {
    return planetsLandedOn;
    },
    setPlanetsLandedOn: function(newPlanetsLandedOn) {
    return planetsLandedOn =  newPlanetsLandedOn;
  }

}

})()