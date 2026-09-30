var ligaI1415Results = document.getElementById("ligaIresults1415");
var cupaRomaniei1415Results = document.getElementById("cupaRomaniei1415results");
var cupaLigiiRomaniei1415Results = document.getElementById("cupaLigiiRomaniei1415results");
var uefaEuropaLeague1415Results = document.getElementById("uefaEuropaLeague1415results");

function showAndHideLigaI1415(){
    if(ligaI1415Results.style.display === "none"){
        ligaI1415Results.style.display = "block";
    }
    else{
        ligaI1415Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei1415(){
    if(cupaRomaniei1415Results.style.display === "none"){
        cupaRomaniei1415Results.style.display = "block";
    }
    else{
        cupaRomaniei1415Results.style.display = "none";
    }
}
function showAndHideCupaLigiiRomaniei1415(){
    if(cupaLigiiRomaniei1415Results.style.display === "none"){
        cupaLigiiRomaniei1415Results.style.display = "block";
    }
    else{
        cupaLigiiRomaniei1415Results.style.display = "none";
    }
}
function showAndHideUefaEuropaLeague1415(){
    if(uefaEuropaLeague1415Results.style.display === "none"){
        uefaEuropaLeague1415Results.style.display = "block";
    }
    else{
        uefaEuropaLeague1415Results.style.display = "none";
    }
}

var LigaI1415MainRoundTable = document.getElementById("LigaI1415MainRoundResultsTable");
var CupaRomaniei1415Table = document.getElementById("CupaRomaniei1415ResultsTable");
var CupaLigiiRomaniei1415Table = document.getElementById("CupaLigiiRomaniei1415ResultsTable");
var UefaEuropaLeague1415Table = document.getElementById("UefaEuropaLeague1415ResultsTable")
var competitionsPresentationTable1415 = document.getElementById("competitionsTable1415")

function showAndHideLigaI1415MainRoundResults(){
    if(LigaI1415MainRoundTable.style.display === "none"){
        LigaI1415MainRoundTable.style.display = "block"; LigaI1415MainRoundTable.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        LigaI1415MainRoundTable.style.display = "none";
    }
}

function showAndHideCupaRomaniei1415Results(){
    if(CupaRomaniei1415Table.style.display === "none"){
        CupaRomaniei1415Table.style.display = "block"; CupaRomaniei1415Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        CupaRomaniei1415Table.style.display = "none";
    }
}

function showAndHideCupaLigiiRomaniei1415Results(){
    if(CupaLigiiRomaniei1415Table.style.display === "none"){
        CupaLigiiRomaniei1415Table.style.display = "block"; CupaLigiiRomaniei1415Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        CupaLigiiRomaniei1415Table.style.display = "none";
    }
}

function showAndHideUefaEuropaLeague1415Results(){
    if(UefaEuropaLeague1415Table.style.display === "none"){
        UefaEuropaLeague1415Table.style.display = "block"; UefaEuropaLeague1415Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        UefaEuropaLeague1415Table.style.display = "none";
    }
}
function closeLigaI1415MainResults(){
    if(ligaI1415Results.style.display === "none"){
        ligaI1415Results.style.display = "block"; competitionsPresentationTable1415.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(ligaI1415Results.style.display === "block" && LigaI1415MainRoundTable.style.display === "block"){
        LigaI1415MainRoundTable.style.display = "none"; ligaI1415Results.style.display = "none";
    }
    else if(ligaI1415Results.style.display === "block" && LigaI1415MainRoundTable.style.display ==="none"){
        ligaI1415Results.style.display = "none"
    }
}
function closeCupaRomaniei1415Results(){
    if(cupaRomaniei1415Results.style.display === "none"){
        cupaRomaniei1415Results.style.display = "block"; competitionsPresentationTable1415.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(cupaRomaniei1415Results.style.display === "block" && CupaRomaniei1415Table.style.display === "block"){
        CupaRomaniei1415Table.style.display = "none"; cupaRomaniei1415Results.style.display = "none"
    }
    else if(cupaRomaniei1415Results.style.display === "block" && CupaRomaniei1415Table.style.display === "none"){
        cupaRomaniei1415Results.style.display = "none"
    }
}
function closeCupaLigiiRomaniei1415Results(){
    if(cupaLigiiRomaniei1415Results.style.display === "none"){
        cupaLigiiRomaniei1415Results.style.display = "block"; competitionsPresentationTable1415.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(cupaLigiiRomaniei1415Results.style.display === "block" && CupaLigiiRomaniei1415Table.style.display === "block"){
        CupaLigiiRomaniei1415Table.style.display = "none"; cupaLigiiRomaniei1415Results.style.display = "none"
    }
    else if(cupaLigiiRomaniei1415Results.style.display === "block" && CupaLigiiRomaniei1415Table.style.display === "none"){
        cupaLigiiRomaniei1415Results.style.display = "none"
    }
}
function closeUefaEuropaLeague1415Results(){
    if(uefaEuropaLeague1415Results.style.display === "none"){
        uefaEuropaLeague1415Results.style.display = "block"; competitionsPresentationTable1415.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(uefaEuropaLeague1415Results.style.display === "block" && UefaEuropaLeague1415Table.style.display === "block"){
        UefaEuropaLeague1415Table.style.display = "none"; uefaEuropaLeague1415Results.style.display = "none"
    }
    else if(uefaEuropaLeague1415Results.style.display === "block" && UefaEuropaLeague1415Table.style.display === "none"){
        uefaEuropaLeague1415Results.style.display = "none"
    }
}

var relegatedTeams1415LigaI = document.getElementById("RelegatedTeamsDropdown1415Elements")

function showAndHideRelegated1415LigaI(){
    if(relegatedTeams1415LigaI.style.display === "none"){
        relegatedTeams1415LigaI.style.display = "block"
    }
    else if(relegatedTeams1415LigaI.style.display === "block"){
        relegatedTeams1415LigaI.style.display = "none"
    }

}

var promotedTeams1516LigaI = document.getElementById("PromotedTeamsDropdown1516Elements")

function showAndHidePromoted1516LigaI(){
    if(promotedTeams1516LigaI.style.display === "none"){
        promotedTeams1516LigaI.style.display = "block"
    }
    else if(promotedTeams1516LigaI.style.display === "block"){
        promotedTeams1516LigaI.style.display = "none"
    }

}
