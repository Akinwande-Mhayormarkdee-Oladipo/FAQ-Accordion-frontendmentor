var acc = document.getElementsByClassName("question");
var i;
var len= acc.length;    

for (i=0; i<len; i++) {

    acc[i].addEventListener("click", var acc = document.getElementsByClassName("question");
var i;
var len = acc.length;

for (i = 0; i < len; i++) {
  
    var currentAnswer = document.querySelector(".question.active");
      if (currentAnswer) {
        currentAnswer.classList.remove("active");
      }
      this.classList.toggle("active");
    acc[i].addEventListener("click", function () {
    var answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
})
}