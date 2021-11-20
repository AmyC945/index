
  var Fname = prompt("Please enter your name", "");

const pi = 3.1415926;
  var myFavNum = prompt("Please enter your favorite number.", "");
  var myArea = pi * (myFavNum * myFavNum);

  console.log(Fname);
  console.log(myFavNum);
    document.getElementById("demo").innerHTML =
    "Hello " + Fname + "! Your number is " + myFavNum + ". If it were the radius of a circle, the area would be " + myArea + ".";
