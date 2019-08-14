$(document).ready(()=>{
  "use strict"
    localStorage.clear();
    localStorage.setItem("view" , 0);
    localStorage.setItem("qn", 0);
    localStorage.setItem("times" , 0);

   var interoAudio= setTimeout(function(){
    "use strict"
      const intero = new Audio("audio/intero1.mp3");
      intero.play();
  },500);
  setTimeout(function(){
    "use strict"
  clearTimeout(interoAudio);
   const trainingInfo = new Audio("audio/trainingInfo.mp3");
   trainingInfo.play();
},10000);

$("#btn").on('click' , ()=>{
  "use strict"
window.location.href = "questions.html";
});

});
