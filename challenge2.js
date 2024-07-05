function checkSpeed(speed) {
    if (typeof speed !== 'number' || isNaN || speed <= 0) {
        console.log('Invalid speed');
        return ;
        }

    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

    if (speed <= speedLimit) {
        console.log("Ok");
    } else if(demeritPoints > 12){
        console.log(`License suspended`);
    }
    else{
        console.log(`Your points are ... ${demeritPoints}`) ;
    }
}

console.log(checkSpeed('joy'));