function scuberGreetingForFeet(ride) {
  let display; // Declaration of display
  if(ride <=400){ // condition
  display = "This one is on me!"; // print
  }
  else if( ride >400 && ride <=2000){
    display = "That will be twenty bucks.";
  }
  else if(ride > 2000 && ride <2500){ //  Ride that is in betwen 2000 and 2499
    display = "I will gladly take your thirty bucks.";
  }
  else if(ride > 2500){
    display = "No can do."
  }
  return display; // return
  
}

function ternaryCheckCity(city="NYC"){
  // Write your code here!
  let output = city === "NYC" ? "Ok, sounds good." : "No go.";
  return output; // Functions return a value
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let output;
  switch(tip){
    case "generous":
    output = "Thank you so much.";
      break;
    case "not as generous":
      output = "Thank you.";
      break;
      case "thanks for everything":
      output = "Bye.";
  }
  return output;
}