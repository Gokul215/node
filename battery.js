var batteryLevel = require('battery-level');

function battery(){
    batteryLevel().then(level =>{
        level1=level*100;
        console.log("%d%",level1);
        battery1(level1);
    })}
    function battery1(){
    if(level1>90){
        console.log("plug out");
    }
    else if(level1<40){
        console.log("plug in");
    }
    else{
        console.log("moderate charge");
    }
};
battery();