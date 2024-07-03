function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxPoints = 12;

    if (typeof speed !== 'number' || isNaN(speed) || speed < 0) {
		console.log('Invalid speed');
		return;
	}

//The speed is less than 70,it should print "Ok" 
   if (speed < speedLimit){
    console.log("Ok");
    return;
   }

//Calculate number of demerit points
   let points =Math.floor((speed - speedLimit) / kmPerPoints) ;
//Round down to the nearest whole number
    points = points - (points % 1);   
    if (points > maxPoints) {
        console.log("License suspended");
    } else {
        console.log("Points: ${points}");

   }
}


