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
   var rows = document.getElementsByClassName("tablerow");
   console.log(rows);
   
   for (let i=0; i<rows.length; i++) {
      if (rows[i].cells[1].innerHTML === today) {
         console.log(rows[i].cells[1].innerHTML);
        rows[i].classList.add("today");
        rows[i].cells[3].childNodes[1].classList.remove("hide");
        
       
   }
}
}