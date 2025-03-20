let raceNumber = Math.floor(Math.random() * 1000);
let isRegisteredLate= false;

let runnersAge = 18;

if(runnersAge > 18 &&  !isRegisteredLate){
  raceNumber += 1000;
}

if(runnersAge > 18 && isRegisteredLate){
  console.log('You will race at 9:30 AM'+ raceNumber);
}

else if(runnersAge > 18 && !isRegisteredLate){
    console.log('You will race at 11:00 AM'+ ' ' + raceNumber);
}

if(runnersAge < 18){
      console.log('You will race at 12:30 AM'+ ' '+raceNumber);
}
else if(runnersAge === 18){
  console.log('Please see the registration Desk');
}