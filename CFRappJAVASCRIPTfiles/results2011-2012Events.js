var ligaI1112Results = document.getElementById("ligaIresults1112");
var cupaRomaniei1112Results = document.getElementById("cupaRomaniei1112results");
var supercupaRomaniei12Results = document.getElementById("supercupaRomaniei12results");

function showAndHideLigaI1112(){
    if(ligaI1112Results.style.display === "none"){
        ligaI1112Results.style.display = "block";
    }
    else{
        ligaI1112Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei1112(){
    if(cupaRomaniei1112Results.style.display === "none"){
        cupaRomaniei1112Results.style.display = "block";
    }
    else{
        cupaRomaniei1112Results.style.display = "none";
    }
}
function showAndHideSupercupaRomaniei12(){
    if(supercupaRomaniei12Results.style.display === "none"){
        supercupaRomaniei12Results.style.display = "block";
    }
    else{
        supercupaRomaniei12Results.style.display = "none";
    }
}

var LigaI1112MainRoundTable = document.getElementById("LigaI1112MainRoundResultsTable");
var CupaRomaniei1112Table = document.getElementById("CupaRomaniei1112ResultsTable");
var SupercupaRomaniei12Table = document.getElementById("SupercupaRomaniei12ResultsTable");
var competitionsPresentationTable1112 = document.getElementById("competitionsTable1112")

function showAndHideLigaI1112MainRoundResults(){
    if(LigaI1112MainRoundTable.style.display === "none"){
        LigaI1112MainRoundTable.style.display = "block"; LigaI1112MainRoundTable.style.borderColor = "rgb(15, 245, 7)"

    }
    else{
        LigaI1112MainRoundTable.style.display = "none";
    }

}
function showAndHideCupaRomaniei1112Results(){
    if(CupaRomaniei1112Table.style.display === "none"){
        CupaRomaniei1112Table.style.display = "block"; CupaRomaniei1112Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        CupaRomaniei1112Table.style.display = "none";
    }
}
function showAndHideSupercupaRomaniei12Results(){
    if(SupercupaRomaniei12Table.style.display === "none"){
        SupercupaRomaniei12Table.style.display = "block"; SupercupaRomaniei12Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        SupercupaRomaniei12Table.style.display = "none";
    }
}

function closeLigaI1112MainResults(){
    if(ligaI1112Results.style.display === "none"){
        ligaI1112Results.style.display = "block"; competitionsPresentationTable1112.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(ligaI1112Results.style.display === "block" && LigaI1112MainRoundTable.style.display === "block"){
        LigaI1112MainRoundTable.style.display = "none"; ligaI1112Results.style.display = "none";
    }
    else if(ligaI1112Results.style.display === "block" && LigaI1112MainRoundTable.style.display === "none"){
        ligaI1112Results.style.display = "none";
    }
}
function closeCupaRomaniei1112Results(){
    if(cupaRomaniei1112Results.style.display === "none"){
        cupaRomaniei1112Results.style.display = "block"; competitionsPresentationTable1112.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(cupaRomaniei1112Results.style.display === "block" && CupaRomaniei1112Table.style.display === "block"){
        CupaRomaniei1112Table.style.display = "none"; cupaRomaniei1112Results.style.display = "none";
    }
    else if(cupaRomaniei1112Results.style.display === "block" && CupaRomaniei1112Table.style.display === "none"){
        cupaRomaniei1112Results.style.display = "none"
    }
}
function closeSupercupaRomaniei12Results(){
    if(supercupaRomaniei12Results.style.display === "none"){
        supercupaRomaniei12Results.style.display = "block"; competitionsPresentationTable1112.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(supercupaRomaniei12Results.style.display === "block" && SupercupaRomaniei12Table.style.display === "block"){
        SupercupaRomaniei12Table.style.display = "none"; supercupaRomaniei12Results.style.display = "none";
    }
    else if(supercupaRomaniei12Results.style.display === "block" && SupercupaRomaniei12Table.style.display === "none"){
        supercupaRomaniei12Results.style.display = "none"
    }
}

var relegatedTeams1112LigaI = document.getElementById("RelegatedTeamsDropdown1112Elements");

function showAndHideRelegated1112(){
    if(relegatedTeams1112LigaI.style.display === "none"){
        relegatedTeams1112LigaI.style.display = "block"
    }
    else if(relegatedTeams1112LigaI.style.display === "block"){
        relegatedTeams1112LigaI.style.display = "none"
    }
}

var promotedTeams1213LigaI = document.getElementById("PromotedTeamsDropdown1213Elements");

function showAndHidePromoted1213(){
    if(promotedTeams1213LigaI.style.display === "none"){
        promotedTeams1213LigaI.style.display = "block"
    }
    else if(promotedTeams1213LigaI.style.display === "block"){
        promotedTeams1213LigaI.style.display = "none"
    }
}