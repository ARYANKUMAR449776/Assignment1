// <!-- * @name: Assignement1
// * @Course Code: SODV1201
// * @class: Software Development Diploma program.
// * @author: ARYAN KUMAR. 
// & @studentid: 449776-->


function conversion(){

  // gets elemnts from the grade convertor html file
    let marksInput = document.getElementById('marks').value;
    let parsedInput = parseInt(marksInput);
    let errorMessage = document.getElementById('validation');
    let grade = document.getElementById('convertedGrade');

    // resets the initial input
    errorMessage.textContent = "";
    grade.textContent = "";

    // tries various conditions and gives respective outputs according to that and if theres an error it throws an error statement
    try {
      if (isNaN(parsedInput)) {
        throw "Invalid input: Please enter a number.";
      } else if (parsedInput < 0 || parsedInput > 100) {
        throw "Invalid input: Mark must be between 0 and 100.";
      } else {
        if (parsedInput > 90) {
          grade.textContent = "Grade A";
        } else if (parsedInput > 80) {
          grade.textContent = "Grade B";
        } else if (parsedInput > 70) {
          grade.textContent = "Grade C";
        } else if (parsedInput > 50) {
          grade.textContent = "Grade D";
        } else {
          grade.textContent = "Grade F";
        }
      }
    } catch (error) {
      errorMessage.textContent = error;
    }
}

//to display current date
const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('currentDate').textContent = currentDate.toLocaleDateString('en-US', options);