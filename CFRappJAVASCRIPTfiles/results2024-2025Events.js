var ligaI2425Results = document.getElementById("ligaIresults2425");
var cupaRomaniei2425Results = document.getElementById("cupaRomaniei2425results");
var supercupaRomaniei25Results = document.getElementById("supercupaRomaniei25results");
var uefaConferenceLeague2425Results = document.getElementById("uefaConferenceLeague2425results");

function showAndHideLigaI2425(){
    if(ligaI2425Results.style.display === "none"){
        ligaI2425Results.style.display = "block";
    }
    else{
        ligaI2425Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei2425(){
    if(cupaRomaniei2425Results.style.display === "none"){
        cupaRomaniei2425Results.style.display = "block";
    }
    else{
        cupaRomaniei2425Results.style.display = "none";
    }
}
function showAndHideSupercupaRomaniei25(){
    if(supercupaRomaniei25Results.style.display === "none"){
        supercupaRomaniei25Results.style.display = "block";
    }
    else{
        supercupaRomaniei25Results.style.display = "none";
    }
}
function showAndHideUefaEuropaConferenceLeague2425(){
    if(uefaConferenceLeague2425Results.style.display === "none"){
        uefaConferenceLeague2425Results.style.display = "block";
    }
    else{
        uefaConferenceLeague2425Results.style.display = "none";
    }
}

var LIGAI2425MainRoundTable = document.getElementById("LigaI2425MainRoundResultsTable");
var LIGAI2425PlayOffRoundTable = document.getElementById("LigaI2425PlayOffRoundResultsTable");
var CUPAR2425Table = document.getElementById("CupaRomaniei2425ResultsTable");
var SUPERCR25 = document.getElementById("SupercupaRomaniei25Table");
var UECL2425Table = document.getElementById("UefaConferenceLeague2425ResultsTable");
var competitionsPresentationTable2425 = document.getElementById("competitionsTable2425")

function showAndHideLigaI2425MainRoundResultsTable(){
    if(LIGAI2425MainRoundTable.style.display === "none"){
        LIGAI2425MainRoundTable.style.display = "block"; LIGAI2425MainRoundTable.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        LIGAI2425MainRoundTable.style.display = "none";
    }
}

function showAndHideLigaI2425PlayOffRoundResultsTable(){
    if(LIGAI2425PlayOffRoundTable.style.display === "none"){
        LIGAI2425PlayOffRoundTable.style.display = "block"; LIGAI2425PlayOffRoundTable.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        LIGAI2425PlayOffRoundTable.style.display = "none"
    }
}

function showAndHideCupaRomaniei2425ResultsTable(){
    if(CUPAR2425Table.style.display === "none"){
        CUPAR2425Table.style.display = "block"; CUPAR2425Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        CUPAR2425Table.style.display = "none";
    }
}
function showAndHideSupercupaRomaniei25Table(){
    if(SUPERCR25.style.display === "none"){
        SUPERCR25.style.display = "block"; SUPERCR25.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        SUPERCR25.style.display = "none";
    }
}
function showAndHideUECL2425ResultsTable(){
    if(UECL2425Table.style.display === "none"){
        UECL2425Table.style.display = "block"; UECL2425Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        UECL2425Table.style.display = "none";
    }
}

function closeLigaI2425MainAndPlayOffResults(){
    if(ligaI2425Results.style.display === "none"){
        ligaI2425Results.style.display = "block"; competitionsPresentationTable2425.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(ligaI2425Results.style.display === "block" && LIGAI2425MainRoundTable.style.display === "block" && LIGAI2425PlayOffRoundTable.style.display === "block"){
        LIGAI2425PlayOffRoundTable.style.display = "none"; LIGAI2425MainRoundTable.style.display = "none"; ligaI2425Results.style.display = "none"; 
    }
    else if(ligaI2425Results.style.display === "block" && LIGAI2425MainRoundTable.style.display === "none" && LIGAI2425PlayOffRoundTable.style.display === "none"){
        ligaI2425Results.style.display = "none"; 
    }
    else if(ligaI2425Results.style.display === "block" && LIGAI2425MainRoundTable.style.display === "block"){
        LIGAI2425MainRoundTable.style.display = "none"; ligaI2425Results.style.display = "none"; 
    }
    else if(ligaI2425Results.style.display === "block" && LIGAI2425PlayOffRoundTable.style.display === "block"){
        LIGAI2425PlayOffRoundTable.style.display = "none"; ligaI2425Results.style.display = "none"; 
    }


    
}

function closeCupaRomaniei2425Results(){
    if(cupaRomaniei2425Results.style.display === "none"){
        cupaRomaniei2425Results.style.display = "block"; competitionsPresentationTable2425.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(cupaRomaniei2425Results.style.display === "block" && CUPAR2425Table.style.display === "block"){
        CUPAR2425Table.style.display = "none"; cupaRomaniei2425Results.style.display = "none";
    }
    else if(cupaRomaniei2425Results.style.display === "block" && CUPAR2425Table.style.display === "none"){
        cupaRomaniei2425Results.style.display = "none"; 
    }
}

function closeSupercupaRomaniei25Results(){
    if(supercupaRomaniei25Results.style.display === "none"){
        supercupaRomaniei25Results.style.display = "block"; competitionsPresentationTable2425.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(supercupaRomaniei25Results.style.display === "block" && SUPERCR25.style.display === "block"){
        SUPERCR25.style.display = "none"; supercupaRomaniei25Results.style.display = "none";
    }
    else if(supercupaRomaniei25Results.style.display === "block" && SUPERCR25.style.display === "none"){
        supercupaRomaniei25Results.style.display = "none"
    }
}

function closeUefaEuropaConferenceLeague2425Results(){
    if(uefaConferenceLeague2425Results.style.display === "none"){
        uefaConferenceLeague2425Results.style.display = "block"; competitionsPresentationTable2425.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(uefaConferenceLeague2425Results.style.display === "block" && UECL2425Table.style.display === "block"){
        UECL2425Table.style.display = "none"; uefaConferenceLeague2425Results.style.display = "none";
    }
    else if(uefaConferenceLeague2425Results.style.display === "block" && UECL2425Table.style.display === "none"){
        uefaConferenceLeague2425Results.style.display = "none";
    }
}

var relegatedTeams2425LigaI = document.getElementById("RelegatedTeamsDropdown2425Elements")

function showAndHideRelegated2425LigaI(){
    if(relegatedTeams2425LigaI.style.display === "none"){
        relegatedTeams2425LigaI.style.display = "block"
    }
    else if(relegatedTeams2425LigaI.style.display === "block"){
        relegatedTeams2425LigaI.style.display = "none"
    }
}

var promotedTeams2526LigaI = document.getElementById("PromotedTeamsDropdown2526Elements")

function showAndHidePromoted2526LigaI(){
    if(promotedTeams2526LigaI.style.display === "none"){
        promotedTeams2526LigaI.style.display = "block"
    }
    else if(promotedTeams2526LigaI.style.display === "block"){
        promotedTeams2526LigaI.style.display = "none"
    }
}