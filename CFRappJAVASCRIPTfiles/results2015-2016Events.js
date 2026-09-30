var ligaI1516Results = document.getElementById("ligaIresults1516");
var cupaRomaniei1516Results = document.getElementById("cupaRomaniei1516results");
var cupaLigiiRomaniei1516Results = document.getElementById("cupaLigiiRomaniei1516results");
var superCupaRomaniei16Results = document.getElementById("supercupaRomaniei16results");

function showAndHideLigaI1516(){
    if(ligaI1516Results.style.display === "none"){
        ligaI1516Results.style.display = "block";
    }
    else{
        ligaI1516Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei1516(){
    if(cupaRomaniei1516Results.style.display === "none"){
        cupaRomaniei1516Results.style.display = "block";
    }
    else{
        cupaRomaniei1516Results.style.display = "none";
    }
}
function showAndHideCupaLigiiRomaniei1516(){
    if(cupaLigiiRomaniei1516Results.style.display === "none"){
        cupaLigiiRomaniei1516Results.style.display = "block";
    }
    else{
        cupaLigiiRomaniei1516Results.style.display = "none";
    }
}
function showAndHideSupercupaRomaniei16(){
    if(superCupaRomaniei16Results.style.display === "none"){
        superCupaRomaniei16Results.style.display = "block";
    }
    else{
        superCupaRomaniei16Results.style.display = "none";
    }
}

var LigaI1516MainRoundTable = document.getElementById("LigaI1516MainRoundResultsTable");
var LigaI1516PlayOutRoundTable = document.getElementById("LigaI1516PlayOutRoundResultsTable");
var CupaRomaniei1516Table = document.getElementById("CupaRomaniei1516ResultsTable");
var CupaLigiiRomaniei1516Table = document.getElementById("CupaLigiiRomaniei1516ResultsTable");
var SupercupaRomaniei16Table = document.getElementById("SupercupaRomaniei16ResultsTable");
var competitionsPresentationTable1516 = document.getElementById("competitionsTable1516")

function showAndHideLigaI1516MainRoundResultsTable(){
    if(LigaI1516MainRoundTable.style.display === "none"){
        LigaI1516MainRoundTable.style.display = "block"; LigaI1516MainRoundTable.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        LigaI1516MainRoundTable.style.display = "none";
    }
}

function showAndHideLigaI1516PlayOutRoundResultsTable(){
    if(LigaI1516PlayOutRoundTable.style.display === "none"){
        LigaI1516PlayOutRoundTable.style.display = "block"; LigaI1516PlayOutRoundTable.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        LigaI1516PlayOutRoundTable.style.display = "none";
    }
}

function showAndHideCupaRomaniei1516Resultstable(){
    if(CupaRomaniei1516Table.style.display === "none"){
        CupaRomaniei1516Table.style.display = "block"; CupaRomaniei1516Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        CupaRomaniei1516Table.style.display = "none";
    }
}

function showAndHideCupaLigiiRomaniei1516ResultsTable(){
    if(CupaLigiiRomaniei1516Table.style.display === "none"){
        CupaLigiiRomaniei1516Table.style.display = "block"; CupaLigiiRomaniei1516Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        CupaLigiiRomaniei1516Table.style.display = "none";
    }
}

function showAndHideSupercupaRomaniei16Resultstable(){
    if(SupercupaRomaniei16Table.style.display === "none"){
        SupercupaRomaniei16Table.style.display = "block"; SupercupaRomaniei16Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        SupercupaRomaniei16Table.style.display = "none";
    }
}
function closeLigaI1516MainAndPlayOutResults(){
    if(ligaI1516Results.style.display === "none"){
        ligaI1516Results.style.display = "block"; competitionsPresentationTable1516.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(ligaI1516Results.style.display === "block" && LigaI1516MainRoundTable.style.display === "block" && LigaI1516PlayOutRoundTable.style.display === "block"){
        LigaI1516PlayOutRoundTable.style.display = "none"; LigaI1516MainRoundTable.style.display = "none"; ligaI1516Results.style.display = "none";
    }
    else if(ligaI1516Results.style.display === "block" && LigaI1516MainRoundTable.style.display === "none" && LigaI1516PlayOutRoundTable.style.display === "none"){
        ligaI1516Results.style.display = "none";
    }
    else if(ligaI1516Results.style.display === "block" && LigaI1516MainRoundTable.style.display === "block"){
        LigaI1516MainRoundTable.style.display = "none"; ligaI1516Results.style.display = "none"
    }
    else if(ligaI1516Results.style.display === "block" && LigaI1516PlayOutRoundTable.style.display === "block"){
        LigaI1516PlayOutRoundTable.style.display = "none"; ligaI1516Results.style.display = "none"
    }
}
function closeCupaRomaniei1516Results(){
    if(cupaRomaniei1516Results.style.display === "none"){
        cupaRomaniei1516Results.style.display = "block"; competitionsPresentationTable1516.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(cupaRomaniei1516Results.style.display === "block" && CupaRomaniei1516Table.style.display === "block"){
        CupaRomaniei1516Table.style.display = "none"; cupaRomaniei1516Results.style.display = "none"
    }
    else if(cupaRomaniei1516Results.style.display === "block" && CupaRomaniei1516Table.style.display === "none"){
        cupaRomaniei1516Results.style.display = "none"
    }
}
function closeCupaLigiiRomaniei1516Results(){
    if(cupaLigiiRomaniei1516Results.style.display === "none"){
        cupaLigiiRomaniei1516Results.style.display = "block"; competitionsPresentationTable1516.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(cupaLigiiRomaniei1516Results.style.display === "block" && CupaLigiiRomaniei1516Table.style.display === "block"){
        CupaLigiiRomaniei1516Table.style.display = "none"; cupaLigiiRomaniei1516Results.style.display = "none"
    }
    else if(cupaLigiiRomaniei1516Results.style.display === "block" && CupaLigiiRomaniei1516Table.style.display === "none"){
        cupaLigiiRomaniei1516Results.style.display = "none"
    }
}
function closeSupercupaRomaniei16Results(){
    if(superCupaRomaniei16Results.style.display === "none"){
        superCupaRomaniei16Results.style.display = "block"; competitionsPresentationTable1516.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(superCupaRomaniei16Results.style.display === "block" && SupercupaRomaniei16Table.style.display === "block"){
        SupercupaRomaniei16Table.style.display = "none"; superCupaRomaniei16Results.style.display = "none"
    }
    else if(superCupaRomaniei16Results.style.display === "block" && SupercupaRomaniei16Table.style.display === "none"){
        superCupaRomaniei16Results.style.display = "none"
    }
}

var relegatedTeams1516LigaI = document.getElementById("RelegatedTeamsDropdown1516Elements")

function showAndHideRelegated1516LigaI(){
    if(relegatedTeams1516LigaI.style.display === "none"){
        relegatedTeams1516LigaI.style.display = "block"
    }
    else if(relegatedTeams1516LigaI.style.display === "block"){
        relegatedTeams1516LigaI.style.display = "none"
    }

}

var promotedTeams1617LigaI = document.getElementById("PromotedTeamsDropdown1617Elements")

function showAndHidePromoted1617LigaI(){
    if(promotedTeams1617LigaI.style.display === "none"){
        promotedTeams1617LigaI.style.display = "block"
    }
    else if(promotedTeams1617LigaI.style.display === "block"){
        promotedTeams1617LigaI.style.display = "none"
    }

}
