var rows = document.querySelector('table').querySelectorAll("[class^='chainrow aright']");


// console.log(rows);
var callssAbove1K = 0;
var putssAbove1K = 0;
var callsOpenintsAbove1K = 0;
var putsOpenintsAbove1K = 0;

var totalCallsAbove1KVolume = 0;
var totalPutsAbove1KVolume = 0;

//totals
var totalCallsVolume = 0;
var totalPutsVolume = 0;
var totalCallsOpenInt = 0;
var totalPutsOpenInt = 0;

for(var i = 0; i < rows.length; i++){
    // console.log(parseInt(rows[i].cells[3].innerHTML.replace(/,/g, '')));

    totalCallsVolume += parseInt(rows[i].cells[3].innerHTML.replace(/,/g, ''));
    totalPutsVolume += parseInt(rows[i].cells[11].innerHTML.replace(/,/g, ''));
    
    // totalCallsOpenInt += rows[i].cells[6].innerHTML;
    totalCallsOpenInt += parseInt(rows[i].cells[6].innerHTML.replace(/,/g, ''));
    totalPutsOpenInt += parseInt(rows[i].cells[14].innerHTML.replace(/,/g, ''));

    //calls
    if(parseInt(rows[i].cells[3].innerHTML.replace(/,/g, '')) > 1000){
        rows[i].cells[3].style.backgroundColor = "green"
        totalCallsAbove1KVolume += parseInt(rows[i].cells[3].innerHTML.replace(/,/g, ''));
        callssAbove1K++;
    }

    //puts
    if(parseInt(rows[i].cells[11].innerHTML.replace(/,/g, '')) > 1000){
        rows[i].cells[11].style.backgroundColor = "green"
        totalPutsAbove1KVolume += parseInt(rows[i].cells[11].innerHTML.replace(/,/g, ''));
        putssAbove1K++
    }

    //calls OI
    if(parseInt(rows[i].cells[6].innerHTML.replace(/,/g, '')) > 1000){
        rows[i].cells[6].style.backgroundColor = "green"
        callsOpenintsAbove1K++;
    }

    //puts OI
    if(parseInt(rows[i].cells[14].innerHTML.replace(/,/g, '')) > 1000){
        rows[i].cells[14].style.backgroundColor = "green"
        putsOpenintsAbove1K++;
    }
}

console.log("Calls above 1K:" + callssAbove1K);
console.log("Puts above 1K:" + putssAbove1K);
console.log("Calls above 1K OI:" + callsOpenintsAbove1K);
console.log("Puts above 1K OI:" + putsOpenintsAbove1K);
console.log("C/P No. above 1K " + callssAbove1K/putssAbove1K);
console.log("\n");

console.log("Calls above 1K Total:" + totalCallsAbove1KVolume);
console.log("Puts above 1K Total:" + totalPutsAbove1KVolume);
console.log("C/P above 1K " + totalCallsAbove1KVolume/totalPutsAbove1KVolume);
console.log("\n");

console.log("TOTAL");
console.log("Total Calls Volume:" + totalCallsVolume);
console.log("Total Puts Volume:" + totalPutsVolume);
console.log("Total Calls Open Interest:" + totalCallsOpenInt);
console.log("Total Puts Open Interest:" + totalPutsOpenInt);

console.log("C/P " + totalCallsVolume/totalPutsVolume);