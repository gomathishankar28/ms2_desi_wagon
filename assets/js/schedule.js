// Code to hightlight the row in the Schedule table to indicate where the wagon is on current date.

function highlighttoday(event) {
    let date = new Date();
    const weekday = new Array(7); /*creating an array to assign a weekday  to the number as getDay returns only number and not the day*/
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    let day = date.getDay(); /*getDay returns only the index of the current day*/
    let today = (weekday[day]);
    console.log(today);
    let rows = document.getElementsByClassName("tablerow");

    //get the row of the current day from the table for larger and medium screen 

    for (let i=0; i<rows.length; i++) {
      if (rows[i].cells[1].innerHTML === today) {
         console.log(rows[i].cells[1].innerHTML);
        rows[i].classList.add("today"); /* add today class to it to highlight the row */
        rows[i].cells[3].childNodes[1].classList.remove("hide"); /* remove hide class from the span element having truck icon to display truck*/
   }
}
//get the row of the current day from accordion for smaller screen 
let accordionbuttons = document.getElementById("schedule-rtable").getElementsByTagName("button");

for (let i=0; i<accordionbuttons.length; i++) {
    
    if (accordionbuttons[i].name === today) {
        
    accordionbuttons[i].childNodes[1].classList.remove("hide"); /* remove hide class from the span element having truck icon to display truck*/
       
   }
     
}
}