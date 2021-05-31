// Code your solution in this file!


function distanceTravelledInBlocks(start, end) {
    return Math.abs(start - end);
  }
  
  function distanceTravelledInFeet(start, end) {
    return (distanceTravelledInBlocks(start, end) * 264);
  }
  
  function distanceFromHqInBlocks(street) {
    return distanceTravelledInBlocks(street, 42);
  }
  
  function distanceFromHqInFeet(street) {
    return distanceTravelledInFeet(street, 42);
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2100) {
      return (distance - 400) * .02
    } else if ( distance > 1584 && distance < 2500) {
      return 25
    } else {
      return 'cannot travel that far'
    }
  }