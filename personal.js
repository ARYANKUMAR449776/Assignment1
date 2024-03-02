// <!-- * @name: Assignement1
// * @Course Code: SODV1201
// * @class: Software Development Diploma program.
// * @author: ARYAN KUMAR. 
// & @studentid: 449776-->

//to display current date
const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('currentDate').textContent = currentDate.toLocaleDateString('en-US', options);

//image after 10 seconds
function imageAfterTime(){
    document.getElementById('image_title').textContent = "Abstract image"; 
}
setTimeout( imageAfterTime, 10000);