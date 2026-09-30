var ligaI2526Results = document.getElementById("ligaIresults2526");
var cupaRomaniei2526Results = document.getElementById("cupaRomaniei2526results");
var uefaEuropaLeague2526Results = document.getElementById("uefaEuropaLeague2526results");
var uefaConferenceLeague2526Results = document.getElementById("uefaConferenceLeague2526results");

function showAndHideLigaI2526(){
    if(ligaI2526Results.style.display === "none"){
        ligaI2526Results.style.display = "block";
    }
    else{
        ligaI2526Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei2526(){
    if(cupaRomaniei2526Results.style.display === "none"){
        cupaRomaniei2526Results.style.display = "block";
    }
    else{
        cupaRomaniei2526Results.style.display = "none";
    }
}
function showAndHideUefaEuropaLeague2526(){
    if(uefaEuropaLeague2526Results.style.display === "none"){
        uefaEuropaLeague2526Results.style.display = "block";
    }
    else{
        uefaEuropaLeague2526Results.style.display = "none";
    }
}
function showAndHideUefaEuropaConferenceLeague2526(){
    if(uefaConferenceLeague2526Results.style.display === "none"){
        uefaConferenceLeague2526Results.style.display = "block";
    }
    else{
        uefaConferenceLeague2526Results.style.display = "none";
    }
}

var LIGAI2526MainRoundTable = document.getElementById("LigaI2526MainRoundResultsTable");
var LIGAI2526PlayOffRoundTable = document.getElementById("LigaI2526PlayOffRoundResultsTable");
var CUPAR2526Table = document.getElementById("CupaRomaniei2526ResultsTable");
var UEL2526Table = document.getElementById("UefaEuropaLeague2526ResultsTable");
var UECL2526Table = document.getElementById("UefaConferenceLeague2526ResultsTable");
var competitionsPresentationTable2526 = document.getElementById("competitionsTable2526")

function showAndHideLigaI2526MainRoundResultsTable(){
    if(LIGAI2526MainRoundTable.style.display === "none"){
        LIGAI2526MainRoundTable.style.display = "block"; LIGAI2526MainRoundTable.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        LIGAI2526MainRoundTable.style.display = "none";
    }
}

function showAndHideLigaI2526PlayOffRoundResultsTable(){
    if(LIGAI2526PlayOffRoundTable.style.display === "none"){
        LIGAI2526PlayOffRoundTable.style.display = "block"; LIGAI2526PlayOffRoundTable.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        LIGAI2526PlayOffRoundTable.style.display = "none"
    }
}

function showAndHideCupaRomaniei2526ResultsTable(){
    if(CUPAR2526Table.style.display === "none"){
        CUPAR2526Table.style.display = "block"; CUPAR2526Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        CUPAR2526Table.style.display = "none";
    }
}
function showAndHideUEL2526ResultsTable(){
    if(UEL2526Table.style.display === "none"){
        UEL2526Table.style.display = "block"; UEL2526Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        UEL2526Table.style.display = "none";
    }
}
function showAndHideUECL2526ResultsTable(){
    if(UECL2526Table.style.display === "none"){
        UECL2526Table.style.display = "block"; UECL2526Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        UECL2526Table.style.display = "none";
    }
}

function closeLigaI2526MainAndPlayOffResults(){
    if(ligaI2526Results.style.display === "none"){
        ligaI2526Results.style.display = "block"; competitionsPresentationTable2526.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(ligaI2526Results.style.display === "block" && LIGAI2526MainRoundTable.style.display === "block" && LIGAI2526PlayOffRoundTable.style.display === "block"){
        LIGAI2526PlayOffRoundTable.style.display = "none"; LIGAI2526MainRoundTable.style.display = "none"; ligaI2526Results.style.display = "none"; 
    }
    else if(ligaI2526Results.style.display === "block" && LIGAI2526MainRoundTable.style.display === "none" && LIGAI2526PlayOffRoundTable.style.display === "none"){
        ligaI2526Results.style.display = "none"; 
    }
    else if(ligaI2526Results.style.display === "block" && LIGAI2526MainRoundTable.style.display === "block"){
        LIGAI2526MainRoundTable.style.display = "none"; ligaI2526Results.style.display = "none"; 
    }
    else if(ligaI2526Results.style.display === "block" && LIGAI2526PlayOffRoundTable.style.display === "block"){
        LIGAI2526PlayOffRoundTable.style.display = "none"; ligaI2526Results.style.display = "none"; 
    }
}

function closeCupaRomaniei2526Results(){
    if(cupaRomaniei2526Results.style.display === "none"){
        cupaRomaniei2526Results.style.display = "block"; competitionsPresentationTable2526.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(cupaRomaniei2526Results.style.display === "block" && CUPAR2526Table.style.display === "block"){
        CUPAR2526Table.style.display = "none"; cupaRomaniei2526Results.style.display = "none";
    }
    else if(cupaRomaniei2526Results.style.display === "block" && CUPAR2526Table.style.display === "none"){
        cupaRomaniei2526Results.style.display = "none"; 
    }
}

function closeUefaEuropaLeague2526Results(){
    if(uefaEuropaLeague2526Results.style.display === "none"){
        uefaEuropaLeague2526Results.style.display = "block"; competitionsPresentationTable2526.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(uefaEuropaLeague2526Results.style.display === "block" && UEL2526Table.style.display === "block"){
        UEL2526Table.style.display = "none"; uefaEuropaLeague2526Results.style.display = "none";
    }
    else if(uefaEuropaLeague2526Results.style.display === "block" && UEL2526Table.style.display === "none"){
        uefaEuropaLeague2526Results.style.display = "none";
    }
}

function closeUefaEuropaConferenceLeague2526Results(){
    if(uefaConferenceLeague2526Results.style.display === "none"){
        uefaConferenceLeague2526Results.style.display = "block"; competitionsPresentationTable2526.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(uefaConferenceLeague2526Results.style.display === "block" && UECL2526Table.style.display === "block"){
        UECL2526Table.style.display = "none"; uefaConferenceLeague2526Results.style.display = "none";
    }
    else if(uefaConferenceLeague2526Results.style.display === "block" && UECL2526Table.style.display === "none"){
        uefaConferenceLeague2526Results.style.display = "none";
    }
}

var relegatedTeams2526LigaI = document.getElementById("RelegatedTeamsDropdown2526Elements")

function showAndHideRelegated2526LigaI(){
    if(relegatedTeams2526LigaI.style.display === "none"){
        relegatedTeams2526LigaI.style.display = "block"
    }
    else if(relegatedTeams2526LigaI.style.display === "block"){
        relegatedTeams2526LigaI.style.display = "none"
    }
}

var promotedTeams2627LigaI = document.getElementById("PromotedTeamsDropdown2627Elements")

function showAndHidePromoted2627LigaI(){
    if(promotedTeams2627LigaI.style.display === "none"){
        promotedTeams2627LigaI.style.display = "block"
    }
    else if(promotedTeams2627LigaI.style.display === "block"){
        promotedTeams2627LigaI.style.display = "none"
    }
}