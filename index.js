console.log("Hello brother");

const batteryLevel = document.querySelector("#level");

navigator.getBattery().then(function(battery){
    const level = battery.level;
    const status = level * 100 + "%";
    console.log(status);
})