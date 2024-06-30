function speedDetector(speedDetector) {
   //The speed is lesss than 70 km/s
   if (speed < 70){
    //If the speed is less than 70,it should print "Ok"
    console.log("Ok");
   } else {
    const demeritPoints = ((speed -70) / 5);
    console.log('Points: ${demeritPoints}');
    //If the driver has more than 12 points,the license is suspended
    if (demeritPoints > 12) {
        console.log("License suspended");
    }
   }
}

console.log(speedDetector(50));
