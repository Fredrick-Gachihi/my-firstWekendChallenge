//my project to speed detectors.
function speedDetector(speed){
    
    const speedLimit = 70;//
    let points =Math.floor( (speed - speedLimit)/ 5)//To change decimals to whole numbers
    
if (speed <= speedLimit){
     return"Ok"}
    else if(points >=12){
        return "lisence suspended"
    }else if(points >0){
     return `${points} points`}

    }
 
console.log(speedDetector(80));

