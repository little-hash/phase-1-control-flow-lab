function scuberGreetingForFeet(Feet) {
  // Write your code here!
  let MaxFeet = 2500
  if(Feet <= 400){
    return 'This one is on me!';
  }
  else if(Feet>=400 && Feet<=2000){
    return 'That will be twenty bucks.'
  }
  else if(Feet>2500){
  return 'No can do.'
  }
  else if(Feet>2000){
    return 'I will gladly take your thirty bucks.'
  }    
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'; 
  }

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye.";
  }

}
 


   

