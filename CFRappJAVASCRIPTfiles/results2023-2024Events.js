var ligaI2324Results = document.getElementById("ligaIresults2324");
var cupaRomaniei2324Results = document.getElementById("cupaRomaniei2324results");
var uefaEuropaConferenceLeague2324Results = document.getElementById("uefaEuropaConferenceLeague2324results");

function showAndHideLigaI2324(){
    if(ligaI2324Results.style.display === "none"){
        ligaI2324Results.style.display = "block";
    }
    else{
        ligaI2324Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei2324(){
    if(cupaRomaniei2324Results.style.display === "none"){
        cupaRomaniei2324Results.style.display = "block";
    }
    else{
        cupaRomaniei2324Results.style.display = "none";
    }
}
function showAndHideUefaEuropaConferenceLeague2324(){
    if(uefaEuropaConferenceLeague2324Results.style.display === "none"){
        uefaEuropaConferenceLeague2324Results.style.display = "block";
    }
    else{
        uefaEuropaConferenceLeague2324Results.style.display = "none";
    }
}

var LIGAI2324MainRoundTable = document.getElementById("LigaI2324MainRoundResultsTable");
var LIGAI2324PlayOffRoundTable = document.getElementById("LigaI2324PlayOffRoundResultsTable");
var CUPAR2324Table = document.getElementById("CupaRomaniei2324ResultsTable");
var UECL2324Table = document.getElementById("UefaEuropaConferenceLeague2324ResultsTable");
var competitionsPresentationTable2324 = document.getElementById("competitionsTable2324")

function showAndHideLigaI2324MainRoundResultsTable(){
    if(LIGAI2324MainRoundTable.style.display === "none"){
        LIGAI2324MainRoundTable.style.display = "block"; LIGAI2324MainRoundTable.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        LIGAI2324MainRoundTable.style.display = "none";
    }
}

function showAndHideLigaI2324PlayOffRoundResultsTable(){
    if(LIGAI2324PlayOffRoundTable.style.display === "none"){
        LIGAI2324PlayOffRoundTable.style.display = "block"; LIGAI2324PlayOffRoundTable.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        LIGAI2324PlayOffRoundTable.style.display = "none"
    }
}

function showAndHideCupaRomaniei2324ResultsTable(){
    if(CUPAR2324Table.style.display === "none"){
        CUPAR2324Table.style.display = "block"; CUPAR2324Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        CUPAR2324Table.style.display = "none";
    }
}
function showAndHideUECL2324ResultsTable(){
    if(UECL2324Table.style.display === "none"){
        UECL2324Table.style.display = "block"; UECL2324Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        UECL2324Table.style.display = "none";
    }
}

function closeLigaI2324MainAndPlayOffResults(){
    if(ligaI2324Results.style.display === "none"){
        ligaI2324Results.style.display = "block"; competitionsPresentationTable2324.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(ligaI2324Results.style.display === "block" && LIGAI2324MainRoundTable.style.display === "block" && LIGAI2324PlayOffRoundTable.style.display === "block"){
        LIGAI2324PlayOffRoundTable.style.display = "none"; LIGAI2324MainRoundTable.style.display = "none"; ligaI2324Results.style.display = "none"; 
    }
    else if(ligaI2324Results.style.display === "block" && LIGAI2324MainRoundTable.style.display === "none" && LIGAI2324PlayOffRoundTable.style.display === "none"){
        ligaI2324Results.style.display = "none"; 
    }
    else if(ligaI2324Results.style.display === "block" && LIGAI2324MainRoundTable.style.display === "block"){
        LIGAI2324MainRoundTable.style.display = "none"; ligaI2324Results.style.display = "none"; 
    }
    else if(ligaI2324Results.style.display === "block" && LIGAI2324PlayOffRoundTable.style.display === "block"){
        LIGAI2324PlayOffRoundTable.style.display = "none"; ligaI2324Results.style.display = "none"; 
    }


    
}

function closeCupaRomaniei2324Results(){
    if(cupaRomaniei2324Results.style.display === "none"){
        cupaRomaniei2324Results.style.display = "block"; competitionsPresentationTable2324.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(cupaRomaniei2324Results.style.display === "block" && CUPAR2324Table.style.display === "block"){
        CUPAR2324Table.style.display = "none"; cupaRomaniei2324Results.style.display = "none";
    }
    else if(cupaRomaniei2324Results.style.display === "block" && CUPAR2324Table.style.display === "none"){
        cupaRomaniei2324Results.style.display = "none"; 
    }
}

function closeUefaEuropaConferenceLeague2324Results(){
    if(uefaEuropaConferenceLeague2324Results.style.display === "none"){
        uefaEuropaConferenceLeague2324Results.style.display = "block"; competitionsPresentationTable2324.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(uefaEuropaConferenceLeague2324Results.style.display === "block" && UECL2324Table.style.display === "block"){
        UECL2324Table.style.display = "none"; uefaEuropaConferenceLeague2324Results.style.display = "none";
    }
    else if(uefaEuropaConferenceLeague2324Results.style.display === "block" && UECL2324Table.style.display === "none"){
        uefaEuropaConferenceLeague2324Results.style.display = "none";
    }
}

var relegatedTeams2324LigaI = document.getElementById("RelegatedTeamsDropdown2324Elements")

function showAndHideRelegated2324LigaI(){
    if(relegatedTeams2324LigaI.style.display === "none"){
        relegatedTeams2324LigaI.style.display = "block"
    }
    else if(relegatedTeams2324LigaI.style.display === "block"){
        relegatedTeams2324LigaI.style.display = "none"
    }
}

var promotedTeams2425LigaI = document.getElementById("PromotedTeamsDropdown2425Elements")

function showAndHidePromoted2425LigaI(){
    if(promotedTeams2425LigaI.style.display === "none"){
        promotedTeams2425LigaI.style.display = "block"
    }
    else if(promotedTeams2425LigaI.style.display === "block"){
        promotedTeams2425LigaI.style.display = "none"
    }
}



    

