findGradeLevel("John", "75");
findGradeLevel("Leya", "90");
findGradeLevel("Danny", "40");
findGradeLevel("Anna", "101");

function findGradeLevel(name, marks) {
    marks = Number(marks);

    if (marks < 0 || marks > 100) {
        console.log(name + " has Invalid Marks");
    } else if (marks >= 90) {
        console.log(name + " you have received S grade");
    } else if (marks >= 80) {
        console.log(name + " you have received A grade");
    } else if (marks >= 70) {
        console.log(name + " you have received B grade");
    } else if (marks >= 60) {
        console.log(name + " you have received D grade");
    } else { console.log(name + " you have failed") }
}