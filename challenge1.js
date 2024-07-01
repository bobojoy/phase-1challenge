function calculateGrade(){
    let marks = prompt("Enter your marks here: ")
    let grade;
    if ( isNaN(marks) || marks > 100 || marks < 0) {
        //If the marks are not within the valid range,return an error message
        return "Invalid input.Please enter a number between 0 and 100.";
    }
    else if (marks > 79){
       return  grade = 'A';
    }else if (marks >= 60){
        return grade = 'B';
    }else if (marks >= 50){
        return grade = 'C';
    }else if (marks >= 40){
        return grade = 'D';
    }else {
        return grade = 'E';
    }

}

//Return the grade if it has been assigned
//if (grade){
    //return grade;}



console.log(calculateGrade(23));    