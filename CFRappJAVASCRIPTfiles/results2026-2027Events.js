var ligaI2627Results = document.getElementById("ligaIresults2627");
var cupaRomaniei2627Results = document.getElementById("cupaRomaniei2627results");
var uefaEuropaLeague2627Results = document.getElementById("uefaEuropaLeague2627results");
var uefaConferenceLeague2627Results = document.getElementById("uefaConferenceLeague2627results");

function showAndHideLigaI2627(){
    if(ligaI2627Results.style.display === "none"){
        ligaI2627Results.style.display = "block";
    }
    else{
        ligaI2627Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei2627(){
    if(cupaRomaniei2627Results.style.display === "none"){
        cupaRomaniei2627Results.style.display = "block";
    }
    else{
        cupaRomaniei2627Results.style.display = "none";
    }
}
function showAndHideUefaEuropaLeague2627(){
    if(uefaEuropaLeague2627Results.style.display === "none"){
        uefaEuropaLeague2627Results.style.display = "block";
    }
    else{
        uefaEuropaLeague2627Results.style.display = "none";
    }
}
function showAndHideUefaEuropaConferenceLeague2627(){
    if(uefaConferenceLeague2627Results.style.display === "none"){
        uefaConferenceLeague2627Results.style.display = "block";
    }
    else{
        uefaConferenceLeague2627Results.style.display = "none";
    }
}

var LIGAI2627MainRoundTable = document.getElementById("LigaI2627MainRoundResultsTable");
var LIGAI2627PlayOffRoundTable = document.getElementById("LigaI2627PlayOffRoundResultsTable");
var CUPAR2627Table = document.getElementById("CupaRomaniei2627ResultsTable");
var UEL2627Table = document.getElementById("UefaEuropaLeague2627ResultsTable");
var UECL2627Table = document.getElementById("UefaConferenceLeague2627ResultsTable");
var competitionsPresentationTable2627 = document.getElementById("competitionsTable2627")

function showAndHideLigaI2627MainRoundResultsTable(){
    if(LIGAI2627MainRoundTable.style.display === "none"){
        LIGAI2627MainRoundTable.style.display = "block"; LIGAI2627MainRoundTable.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        LIGAI2627MainRoundTable.style.display = "none";
    }
}

function showAndHideLigaI2627PlayOffRoundResultsTable(){
    if(LIGAI2627PlayOffRoundTable.style.display === "none"){
        LIGAI2627PlayOffRoundTable.style.display = "block"; LIGAI2627PlayOffRoundTable.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        LIGAI2627PlayOffRoundTable.style.display = "none"
    }
}

function showAndHideCupaRomaniei2627ResultsTable(){
    if(CUPAR2627Table.style.display === "none"){
        CUPAR2627Table.style.display = "block"; CUPAR2627Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        CUPAR2627Table.style.display = "none";
    }
}
function showAndHideUEL2627ResultsTable(){
    if(UEL2627Table.style.display === "none"){
        UEL2627Table.style.display = "block"; UEL2627Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        UEL2627Table.style.display = "none";
    }
}
function showAndHideUECL2627ResultsTable(){
    if(UECL2627Table.style.display === "none"){
        UECL2627Table.style.display = "block"; UECL2627Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        UECL2627Table.style.display = "none";
    }
}

function closeLigaI2627MainAndPlayOffResults(){
    if(ligaI2627Results.style.display === "none"){
        ligaI2627Results.style.display = "block"; competitionsPresentationTable2627.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(ligaI2627Results.style.display === "block" && LIGAI2627MainRoundTable.style.display === "block" && LIGAI2627PlayOffRoundTable.style.display === "block"){
        LIGAI2627PlayOffRoundTable.style.display = "none"; LIGAI2627MainRoundTable.style.display = "none"; ligaI2627Results.style.display = "none"; 
    }
    else if(ligaI2627Results.style.display === "block" && LIGAI2627MainRoundTable.style.display === "none" && LIGAI2627PlayOffRoundTable.style.display === "none"){
        ligaI2627Results.style.display = "none"; 
    }
    else if(ligaI2627Results.style.display === "block" && LIGAI2627MainRoundTable.style.display === "block"){
        LIGAI2627MainRoundTable.style.display = "none"; ligaI2627Results.style.display = "none"; 
    }
    else if(ligaI2627Results.style.display === "block" && LIGAI2627PlayOffRoundTable.style.display === "block"){
        LIGAI2627PlayOffRoundTable.style.display = "none"; ligaI2627Results.style.display = "none"; 
    }
}

function closeCupaRomaniei2627Results(){
    if(cupaRomaniei2627Results.style.display === "none"){
        cupaRomaniei2627Results.style.display = "block"; competitionsPresentationTable2627.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(cupaRomaniei2627Results.style.display === "block" && CUPAR2627Table.style.display === "block"){
        CUPAR2627Table.style.display = "none"; cupaRomaniei2627Results.style.display = "none";
    }
    else if(cupaRomaniei2627Results.style.display === "block" && CUPAR2627Table.style.display === "none"){
        cupaRomaniei2627Results.style.display = "none"; 
    }
}

function closeUefaEuropaConferenceLeague2627Results(){
    if(uefaConferenceLeague2627Results.style.display === "none"){
        uefaConferenceLeague2627Results.style.display = "block"; competitionsPresentationTable2627.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(uefaConferenceLeague2627Results.style.display === "block" && UECL2627Table.style.display === "block"){
        UECL2627Table.style.display = "none"; uefaConferenceLeague2627Results.style.display = "none";
    }
    else if(uefaConferenceLeague2627Results.style.display === "block" && UECL2627Table.style.display === "none"){
        uefaConferenceLeague2627Results.style.display = "none";
    }
}

var relegatedTeams2627LigaI = document.getElementById("RelegatedTeamsDropdown2627Elements")

function showAndHideRelegated2627LigaI(){
    if(relegatedTeams2627LigaI.style.display === "none"){
        relegatedTeams2627LigaI.style.display = "block"
    }
    else if(relegatedTeams2627LigaI.style.display === "block"){
        relegatedTeams2627LigaI.style.display = "none"
    }
}

var promotedTeams2728LigaI = document.getElementById("PromotedTeamsDropdown2728Elements")

function showAndHidePromoted2728LigaI(){
    if(promotedTeams2728LigaI.style.display === "none"){
        promotedTeams2728LigaI.style.display = "block"
    }
    else if(promotedTeams2728LigaI.style.display === "block"){
        promotedTeams2728LigaI.style.display = "none"
    }
}