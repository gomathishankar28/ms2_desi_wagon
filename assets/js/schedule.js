function highlighttoday(event) {
    
    let date = new Date();
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let day = date.getDay();
   let today = (weekday[day]);
   console.log(today);
   let rows = document.getElementsByClassName("tablerow");
   
   
   for (let i=0; i<rows.length; i++) {
      if (rows[i].cells[1].innerHTML === today) {
         console.log(rows[i].cells[1].innerHTML);
        rows[i].classList.add("today");
        rows[i].cells[3].childNodes[1].classList.remove("hide"); 
   }
}
let accordionbuttons = document.getElementById("schedule-rtable").getElementsByTagName("button");

for (let i=0; i<accordionbuttons.length; i++) {
    
    if (accordionbuttons[i].name === today) {
        
    accordionbuttons[i].childNodes[1].classList.remove("hide");
       
   }
     
}
}