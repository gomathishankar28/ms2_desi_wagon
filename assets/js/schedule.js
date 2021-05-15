/*jshint esversion: 6 */
// document.addEventListener("DOMContentLoaded", highlightToday);
// Code to hightlight the row in the Schedule table to indicate where the wagon is on current date.

    function highlightToday(event) {
        let date = new Date();
// creating an array to assign each weekday  to an index number in the array

        const weekday = new Array(7); 
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

// getDay function returns only the number from (0 to 6) referrring to (sun thru sat) respectively for the current day

        let day = date.getDay(); 

// today variable returns the current day.

        let today = (weekday[day]);
        console.log(today);
        let rows = document.getElementsByClassName("tablerow");

// To get the row of the current day from the table for larger and medium screen 

    for (let i=0; i<rows.length; i++) {
      if (rows[i].cells[1].innerHTML === today) {
         console.log(rows[i].cells[1].innerHTML);

// add today class to it to highlight the row.
        rows[i].classList.add("today");  
        rows[i].cells[3].childNodes[1].classList.remove("hide"); //remove hide class from the span element having truck icon to display truck.
        }
       else {
           console.log("we are closed on weekends"); // No updates made on weekends.
       } 
    }

//To get the row of the current day from accordion for smaller screens

    let accordionbuttons = document.getElementById("schedule-rtable").getElementsByTagName("button");
    for (let i=0; i<accordionbuttons.length; i++) {
        if (accordionbuttons[i].name === today) {
        accordionbuttons[i].childNodes[1].classList.remove("hide"); // remove hide class from the span element having truck icon to display truck*/
        accordionbuttons[i].parentElement.nextElementSibling.classList.add("show");    //Add show class to collapse the accordion of the current day.
        accordionbuttons[i].classList.add("today");
        }
        else {
           console.log("we are closed on weekends"); // No updates made on weekends.
       } 
       
    }
}