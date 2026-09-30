var diviziaA0405Results = document.getElementById("diviziaAresults0405");
var cupaRomaniei0405Results = document.getElementById("cupaRomanieiResults0405");
var intertotoCup2005Results = document.getElementById("intertotoResults05")

function showAndHideDiviziaA0405(){
    if(diviziaA0405Results.style.display === "none"){
        diviziaA0405Results.style.display = "block";
    }
    else{
        diviziaA0405Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei0405(){
    if(cupaRomaniei0405Results.style.display === "none"){
        cupaRomaniei0405Results.style.display = "block";
    }
    else{
        cupaRomaniei0405Results.style.display = "none";
    }
}
function showAndHideIntertoto2005(){
    if(intertotoCup2005Results.style.display === "none"){
        intertotoCup2005Results.style.display = "block"
    }
    else{
        intertotoCup2005Results.style.display = "none"
    }
}

var DiviziaA0405MainRoundTable = document.getElementById("DiviziaA0405MainRoundResultsTable")
var CupaRomaniei0405Table = document.getElementById("CupaRomaniei0405ResultsTable")
var UefaIntertotoCup05Table = document.getElementById("IntertotoCup05ResultsTable")
var competitionsPresentationTable0405 = document.getElementById("competitionsTable0405");

function showAndHideDiviziaA0405MainRoundResults(){
    if(DiviziaA0405MainRoundTable.style.display === "none"){
        DiviziaA0405MainRoundTable.style.display = "block"; DiviziaA0405MainRoundTable.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        DiviziaA0405MainRoundTable.style.display = "none"
        }
    }
function showAndHideCupaRomaniei0405Results(){
    if(CupaRomaniei0405Table.style.display === "none"){
        CupaRomaniei0405Table.style.display = "block"; CupaRomaniei0405Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        CupaRomaniei0405Table.style.display = "none"
    }
}
function showAndHideUefaIntertotoCup05Results(){
    if(UefaIntertotoCup05Table.style.display === "none"){
        UefaIntertotoCup05Table.style.display = "block"; UefaIntertotoCup05Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        UefaIntertotoCup05Table.style.display = " none"
    }
}
function closeDiviziaA0405MainResults(){
    if(diviziaA0405Results.style.display === "none"){
        diviziaA0405Results.style.display = "block"; competitionsPresentationTable0405.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(diviziaA0405Results.style.display === "block" && DiviziaA0405MainRoundTable.style.display === "block"){
        DiviziaA0405MainRoundTable.style.display = "none"; diviziaA0405Results.style.display = "none" ; 
    }
    else if(diviziaA0405Results.style.display === "block" && DiviziaA0405MainRoundTable.style.display === "none"){
        diviziaA0405Results.style.display = "none"; 
    }
}

function closeCupaRomaniei0405Results(){
    if(cupaRomaniei0405Results.style.display === "none"){
        cupaRomaniei0405Results.style.display = "block"; competitionsPresentationTable0405.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(cupaRomaniei0405Results.style.display === "block" && CupaRomaniei0405Table.style.display === "block"){
        CupaRomaniei0405Table.style.display = "none"; cupaRomaniei0405Results.style.display = "none"
    }
    else if(cupaRomaniei0405Results.style.display === "block" && CupaRomaniei0405Table.style.display === "none"){
        cupaRomaniei0405Results.style.display = "none"; 
    }
}
function closeUefaIntertotoCup05Results(){
    if(intertotoCup2005Results.style.display === "none"){
        intertotoCup2005Results.style.display = "block"; competitionsPresentationTable0405.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(intertotoCup2005Results.style.display === "block" && UefaIntertotoCup05Table.style.display === "block"){
        UefaIntertotoCup05Table.style.display = "none"; intertotoCup2005Results.style.display = "none"
    }
    else if(intertotoCup2005Results.style.display === "block" && UefaIntertotoCup05Table.style.display === "none"){
        intertotoCup2005Results.style.display = "none"; 
    }
    else if(intertotoCup2005Results.style.display === "none"){
        
        
    }
}

var relegatedTeams0405Button = document.getElementById("RelegatedDropdown0405Button")
var relegatedTeams0405Elements = document.getElementById("#RelegatedTeamsDropdown0405Elements")

function showAndHide0405RelegatedTeams(){
    if(relegatedTeams0405Elements.style.display === "none"){
        relegatedTeams0405Elements.style.display = "block"
    }
    else if(relegatedTeams0405Elements.style.display === "block"){
        relegatedTeams0405Elements.style.display = "none"
    }
}


var relegatedTeams0405DiviziaA = document.getElementById("RelegatedTeamsDropdown0405Elements")

function showAndHideRelegated0405DiviziaA(){
    if(relegatedTeams0405DiviziaA.style.display === "none"){
        relegatedTeams0405DiviziaA.style.display = "block"
    }
    else if(relegatedTeams0405DiviziaA.style.display === "block"){
        relegatedTeams0405DiviziaA.style.display = "none"
    }
}

var promotedTeams0506DiviziaA = document.getElementById("PromotedTeamsDropdown0506Elements")

function showAndHidePromoted0506DiviziaA(){
    if(promotedTeams0506DiviziaA.style.display === "none"){
        promotedTeams0506DiviziaA.style.display = "block"
    }
    else if(promotedTeams0506DiviziaA.style.display === "block"){
        promotedTeams0506DiviziaA.style.display = "none"
    }
}




