function myFunction1() {
    var x = document.getElementById("one").value;
    document.getElementById("a").innerHTML = x;
  }
  function myFunction2() {
    var x = document.getElementById("two").value;
    document.getElementById("b").innerHTML = x;
  }
  function myFunction3() {
    var x = document.getElementById("three").value;
    document.getElementById("c").innerHTML = x;
  }
  function myFunction4() {
    var x = document.getElementById("four").value;
    document.getElementById("d").innerHTML = x;
  }
  
  document.getElementById("demo").addEventListener("click", change_text); // event listener
  
  function change_text(){
      document.getElementById("demo").innerHTML = "DONE" // function
  }
  
  function remove()
  {
  var element = document.getElementById("card");
  element.remove();
  }