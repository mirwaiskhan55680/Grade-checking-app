function checkGrade() {
    var percentage = document.getElementById("percentage").value;
    var grade = "";
    if (percentage >= 80) {
        grade = "A+";
    } else if (percentage >= 70) {
        grade = "A";
    } else if (percentage >= 60) {
        grade = "B";
    } else if (percentage >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }
    var resultDiv = document.getElementById("result");
    resultDiv.textContent = "Grade: " + grade;
    resultDiv.className = grade === "F" ? "error-message" : "";
}
