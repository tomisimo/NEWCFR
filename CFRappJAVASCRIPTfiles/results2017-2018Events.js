var ligaI1718Results = document.getElementById("ligaIresults1718");
var cupaRomaniei1718Results = document.getElementById("cupaRomaniei1718results");
var supercupaRomaniei18Results = document.getElementById("supercupaRomaniei18results");

function showAndHideLigaI1718(){
    if(ligaI1718Results.style.display === "none"){
        ligaI1718Results.style.display = "block";
    }
    else{
        ligaI1718Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei1718(){
    if(cupaRomaniei1718Results.style.display === "none"){
        cupaRomaniei1718Results.style.display = "block";
    }
    else{
        cupaRomaniei1718Results.style.display = "none";
    }
}
function showAndHideSupercupaRomaniei18(){
    if(supercupaRomaniei18Results.style.display === "none"){
        supercupaRomaniei18Results.style.display = "block";
    }
    else{
        supercupaRomaniei18Results.style.display = "none";
    }
}

var LigaI1718MainRoundTable = document.getElementById("LigaI1718MainRoundTable");
var LigaI1718PlayOffTable = document.getElementById("LigaI1718PlayOffTable");
var CupaRomaniei1718Table = document.getElementById("cupaRomaniei1718Table");
var SupercupaRomanei18Table = document.getElementById("supercupaRomaniei18Table");
var competitionsPresentationTable1718 = document.getElementById("competitionsTable1718")

function showAndHideLigaI1718MainRound(){
    if(LigaI1718MainRoundTable.style.display === "none"){
        LigaI1718MainRoundTable.style.display = "block"; LigaI1718MainRoundTable.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        LigaI1718MainRoundTable.style.display = "none";
    }
}

function showAndHideLigaI1718PlayOffRound(){
    if(LigaI1718PlayOffTable.style.display === "none"){
        LigaI1718PlayOffTable.style.display = "block"; LigaI1718PlayOffTable.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        LigaI1718PlayOffTable.style.display = "none";
    }
}
function showAndHideCupaRomaniei1718table(){
    if(CupaRomaniei1718Table.style.display === "none"){
        CupaRomaniei1718Table.style.display = "block"; CupaRomaniei1718Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        CupaRomaniei1718Table.style.display = "none";
    }
}
function showAndhideSupercupaRomaniei18table(){
    if(SupercupaRomanei18Table.style.display === "none"){
        SupercupaRomanei18Table.style.display = "block"; SupercupaRomanei18Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        SupercupaRomanei18Table.style.display = "none";
    }
}

function closeLigaI1718MainAndPlayOffResults(){
    if(ligaI1718Results.style.display === "none"){
        ligaI1718Results.style.display = "block"; competitionsPresentationTable1718.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(ligaI1718Results.style.display === "block" && LigaI1718MainRoundTable.style.display === "block" && LigaI1718PlayOffTable.style.display === "block"){
        LigaI1718PlayOffTable.style.display = "none"; LigaI1718MainRoundTable.style.display = "none"; ligaI1718Results.style.display = "none";
    }
    else if(ligaI1718Results.style.display === "block" && LigaI1718MainRoundTable.style.display === "none" && LigaI1718PlayOffTable.style.display === "none"){
        ligaI1718Results.style.display = "none";
    }
    else if(ligaI1718Results.style.display === "block" && LigaI1718MainRoundTable.style.display === "block"){
        LigaI1718MainRoundTable.style.display = "none"; ligaI1718Results.style.display = "none"
    }
    else if(ligaI1718Results.style.display === "block" && LigaI1718PlayOffTable.style.display === "block"){
        LigaI1718PlayOffTable.style.display = "none"; ligaI1718Results.style.display = "none"
    }
}
function closeCupaRomaniei1718Results(){
    if(cupaRomaniei1718Results.style.display === "none"){
        cupaRomaniei1718Results.style.display = "block"; competitionsPresentationTable1718.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(cupaRomaniei1718Results.style.display === "block" && CupaRomaniei1718Table.style.display === "block"){
        CupaRomaniei1718Table.style.display = "none"; cupaRomaniei1718Results.style.display = "none"
    }
    else if(cupaRomaniei1718Results.style.display === "block" && CupaRomaniei1718Table.style.display === "none"){
        cupaRomaniei1718Results.style.display = "none"
    }
}
function closeSupercupaRomaniei18Results(){
    if(supercupaRomaniei18Results.style.display === "none"){
        supercupaRomaniei18Results.style.display = "block"; competitionsPresentationTable1718.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(supercupaRomaniei18Results.style.display === "block" && SupercupaRomanei18Table.style.display === "block"){
        SupercupaRomanei18Table.style.display = "none"; supercupaRomaniei18Results.style.display = "none"
    }
    else if(supercupaRomaniei18Results.style.display === "block" && SupercupaRomanei18Table.style.display === "none"){
        supercupaRomaniei18Results.style.display = "none"
    }
}

var relegatedTeams1718LigaI = document.getElementById("RelegatedTeamsDropdown1718Elements")

function showAndHideRelegated1718LigaI(){
    if(relegatedTeams1718LigaI.style.display === "none"){
        relegatedTeams1718LigaI.style.display = "block"
    }
    else if(
        relegatedTeams1718LigaI.style.display === "block"){
            relegatedTeams1718LigaI.style.display = "none"
        }
}
var promotedTeams1819LigaI =document.getElementById("PromotedTeamsDropdown1819Elements")

function showAndHidePromoted1819LigaI(){
    if(promotedTeams1819LigaI.style.display === "none"){
        promotedTeams1819LigaI.style.display = "block"
    }
    else if(
        promotedTeams1819LigaI.style.display === "block"
    )
    promotedTeams1819LigaI.style.display = "none"
}

