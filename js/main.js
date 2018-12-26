var rows = document.querySelector('table').querySelectorAll("[class^='chainrow aright']");


console.log(rows);
for(var i = 0; i < rows.length; i++){
    console.log(parseInt(rows[i].cells[3].innerHTML.replace(/,/g, '')));
    if(parseInt(rows[i].cells[3].innerHTML.replace(/,/g, '')) > 1000){
        rows[i].cells[3].style.backgroundColor = "green"
    }
    if(parseInt(rows[i].cells[11].innerHTML.replace(/,/g, '')) > 1000){
        rows[i].cells[11].style.backgroundColor = "green"
    }

    //open int
    if(parseInt(rows[i].cells[4].innerHTML.replace(/,/g, '')) > 1000){
        rows[i].cells[4].style.backgroundColor = "green"
    }

    if(parseInt(rows[i].cells[14].innerHTML.replace(/,/g, '')) > 1000){
        rows[i].cells[14].style.backgroundColor = "green"
    }
}