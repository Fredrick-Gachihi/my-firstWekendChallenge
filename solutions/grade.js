
//in thIS it doesn't allow numbers greater than one hundred.
function studentGrading(marks) {
    if (marks >= 0 && marks <= 100) {
        if (marks >=79) {
            return "A";
        } else if (marks >= 60) {
            return "B";
        } else if (marks >= 50) {
            return "C";
        } else if (marks >= 40) {
            return "D";
        } else if(marks <40 && marks >=0){
            return "E";
        }else{
            alert ("grades should be greater than 0")
        }//to allow positive numbers only
    }
    }
console.log (studentGrading(50));
