function calculateGrade(){
    let grade;
    if (marks > 79){
        grade = 'A';
    }else if (marks >= 60){
        grade = 'B';
    }else if (marks >= 50){
        grade = 'C';
    }else if (marks >= 40){
        grade = 'D';
    }else {
        grade = 'E';
    }

}

//Return the grade if it has been assigned
if (grade){
    return grade;
}

//If the marks are not within the valid range,return an error message
return "Invalid input.Please enter a number between 0 and 100.";

console.log(calculateGrade(23));