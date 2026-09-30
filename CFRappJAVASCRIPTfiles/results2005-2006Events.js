var diviziaA0506Results = document.getElementById("diviziaAresults0506");
var cupaRomaniei0506Results = document.getElementById("cupaRomaniei0506results");

function showAndHideDiviziaA0506(){
    if(diviziaA0506Results.style.display === "none"){
        diviziaA0506Results.style.display = "block";
    }
    else{
        diviziaA0506Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei0506(){
    if(cupaRomaniei0506Results.style.display === "none"){
        cupaRomaniei0506Results.style.display = "block";
    }
    else{
        cupaRomaniei0506Results.style.display = "none";
    }
}

var DiviziaA0506MainRoundTable = document.getElementById("DiviziaA0506MainRoundResultsTable")
var CupaRomaniei0506Table = document.getElementById("CupaRomaniei0506ResultsTable")
var competitionsPresentationTable0506 = document.getElementById("competitionsTable0506")

function showAndHideDiviziaA0506MainRoundResults(){
    if(DiviziaA0506MainRoundTable.style.display === "none"){
        DiviziaA0506MainRoundTable.style.display = "block"; DiviziaA0506MainRoundTable.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        DiviziaA0506MainRoundTable.style.display = "none";
    }
}
function showAndHideCupaRomaniei0506Results(){
    if(CupaRomaniei0506Table.style.display === "none"){
        CupaRomaniei0506Table.style.display = "block"; CupaRomaniei0506Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        CupaRomaniei0506Table.style.display = "none"
    }
}
function closeDiviziaA0506MainResults(){
    if(diviziaA0506Results.style.display === "none"){
        diviziaA0506Results.style.display = "block"; competitionsPresentationTable0506.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(diviziaA0506Results.style.display === "block" && DiviziaA0506MainRoundTable.style.display === "block"){
        DiviziaA0506MainRoundTable.style.display = "none"; diviziaA0506Results.style.display = "none"
    }
    else if(diviziaA0506Results.style.display === "block" && DiviziaA0506MainRoundTable.style.display === "none"){
        diviziaA0506Results.style.display = "none"
    }
}
function closeCupaRomaniei0506Results(){
    if(cupaRomaniei0506Results.style.display === "none"){
        cupaRomaniei0506Results.style.display = "block"; competitionsPresentationTable0506.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(cupaRomaniei0506Results.style.display === "block" && CupaRomaniei0506Table.style.display === "block"){
        CupaRomaniei0506Table.style.display = "none"; cupaRomaniei0506Results.style.display = "none"
    }
    else if(cupaRomaniei0506Results.style.display === "block" && CupaRomaniei0506Table.style.display === "none"){
        cupaRomaniei0506Results.style.display = "none"
    }
}

var relegatedTeams0506DiviziaA = document.getElementById("RelegatedTeamsDropdown0506Elements")

function showAndHideRelegated0506DiviziaA(){
    if(relegatedTeams0506DiviziaA.style.display === "none"){
        relegatedTeams0506DiviziaA.style.display = "block"
    }
    else if(relegatedTeams0506DiviziaA.style.display === "block"){
        relegatedTeams0506DiviziaA.style.display = "none"
    }
}

var promotedTeams0607LigaI = document.getElementById("PromotedTeamsDropdown0607Elements")

function showAndHidePromoted0607LigaI(){
    if(promotedTeams0607LigaI.style.display === "none"){
        promotedTeams0607LigaI.style.display = "block"
    }
    else if(promotedTeams0607LigaI.style.display === "block"){
        promotedTeams0607LigaI.style.display = "none"
    }
}

