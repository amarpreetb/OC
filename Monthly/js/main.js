var rows = document.querySelector('table').querySelectorAll("[class^='chainrow aright']");

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

var tempmax = 0

for(var i = 0; i < rows.length; i++){
    // console.log(parseInt(rows[i].cells[3].innerHTML.replace(/,/g, '')));

    totalCallsVolume += parseInt(rows[i].cells[3].innerHTML.replace(/,/g, ''));
    totalPutsVolume += parseInt(rows[i].cells[11].innerHTML.replace(/,/g, ''));
    
    // totalCallsOpenInt += rows[i].cells[6].innerHTML;
    totalCallsOpenInt += parseInt(rows[i].cells[6].innerHTML.replace(/,/g, ''));
    totalPutsOpenInt += parseInt(rows[i].cells[14].innerHTML.replace(/,/g, ''));
}

document.getElementById("calls1k").innerHTML = "Calls above 1K: " + callssAbove1K;
document.getElementById("puts1k").innerHTML = "Puts above 1K: " + putssAbove1K;
document.getElementById("callsoi1k").innerHTML = "Calls above 1K OI: " + callsOpenintsAbove1K;
document.getElementById("putsoi1k").innerHTML = "Puts above 1K OI: " + putsOpenintsAbove1K;
document.getElementById("cpratio").innerHTML = "C/P No. above 1K " + callssAbove1K/putssAbove1K;
document.getElementById("calls1ktotal").innerHTML = "Calls above 1K Total: " + totalCallsAbove1KVolume;
document.getElementById("puts1ktotal").innerHTML = "Puts above 1K Total: " + totalPutsAbove1KVolume;
document.getElementById("cp1kvolumeratio").innerHTML = "C/P above 1K " + totalCallsAbove1KVolume/totalPutsAbove1KVolume;
document.getElementById("callstotal").innerHTML = "Total Calls Volume: " + totalCallsVolume;
document.getElementById("putstotal").innerHTML = "Total Puts Volume: " + totalPutsVolume;
document.getElementById("cptotalvolumeratio").innerHTML = "C/P " + totalCallsVolume/totalPutsVolume;

if((callssAbove1K/putssAbove1K) < 1)
{
    document.getElementById("cpratio").style.color = "rgb(214, 49, 49)";
}
else
{
    document.getElementById("cpratio").style.color = "lightgreen";
}

if((totalCallsAbove1KVolume/totalPutsAbove1KVolume) < 1)
{
    document.getElementById("cp1kvolumeratio").style.color = "rgb(214, 49, 49)";
}
else
{
    document.getElementById("cp1kvolumeratio").style.color = "lightgreen";
}

if((totalCallsVolume/totalPutsVolume) < 1)
{
    document.getElementById("cptotalvolumeratio").style.color = "rgb(214, 49, 49)";
}
else
{
    document.getElementById("cptotalvolumeratio").style.color = "lightgreen";
}