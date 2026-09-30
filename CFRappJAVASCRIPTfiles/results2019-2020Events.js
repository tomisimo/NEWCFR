var ligaI1920Results = document.getElementById("ligaIresults1920");
var cupaRomaniei1920Results = document.getElementById("cupaRomaniei1920results");
var supercupaRomaniei20Results = document.getElementById("supercupaRomaniei20results");
var uefaChampionsLeague1920Results = document.getElementById("uefaChampionsLeague1920results");
var uefaEuropaLeague1920Results = document.getElementById("uefaEuropaLeague1920results");

function showAndHideLigaI1920(){
    if(ligaI1920Results.style.display === "none"){
        ligaI1920Results.style.display = "block";
    }
    else{
        ligaI1920Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei1920(){
    if(cupaRomaniei1920Results.style.display === "none"){
        cupaRomaniei1920Results.style.display = "block";
    }
    else{
        cupaRomaniei1920Results.style.display = "none";
    }
}
function showAndHideSupercupaRomaniei20(){
    if(supercupaRomaniei20Results.style.display === "none"){
        supercupaRomaniei20Results.style.display = "block";
    }
    else{
        supercupaRomaniei20Results.style.display = "none";
    }
}
function showAndHideUefaChampionsLeague1920(){
    if(uefaChampionsLeague1920Results.style.display === "none"){
        uefaChampionsLeague1920Results.style.display = "block";
    }
    else{
        uefaChampionsLeague1920Results.style.display = "none";
    }
}
function showAndHideUefaEuropaLeague1920(){
    if(uefaEuropaLeague1920Results.style.display === "none"){
        uefaEuropaLeague1920Results.style.display = "block";
    }
    else{
        uefaEuropaLeague1920Results.style.display = "none";
    }
}

var LigaI1920MainRound = document.getElementById("LigaI1920MainRoundTable");
var LigaI1920PlayOffRound = document.getElementById("LigaI1920PlayOffTable");
var CUPAR1920 = document.getElementById("CupaRomaniei1920Table");
var SUPERCR20 = document.getElementById("SupercupaRomaniei20Table");
var UEFACHL1920 = document.getElementById("UCHL1920Table");
var UEFAEUROPAL1920 = document.getElementById("UefaEuropaLeagueTable1920");
var competitionsPresentationTable1920 = document.getElementById("competitionsTable1920")

function showAndHideLigaI1920MainRoundTable(){
    if(LigaI1920MainRound.style.display === "none"){
        LigaI1920MainRound.style.display = "block"; LigaI1920MainRound.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        LigaI1920MainRound.style.display = "none";
    }
}

function showAndHideLigaI1920PlayOffRoundTable(){
    if(LigaI1920PlayOffRound.style.display === "none"){
        LigaI1920PlayOffRound.style.display = "block"; LigaI1920PlayOffRound.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        LigaI1920PlayOffRound.style.display = "none";
    }
}

function showAndHideCupaRomaniei1920Table(){
    if(CUPAR1920.style.display === "none"){
        CUPAR1920.style.display = "block"; CUPAR1920.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        CUPAR1920.style.display = "none";
    }
}

function showAndHideSupercupaRomaniei20Table(){
    if(SUPERCR20.style.display === "none"){
        SUPERCR20.style.display = "block"; SUPERCR20.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        SUPERCR20.style.display = "none";
    }
}

function showAndHideUefaChL1920Table(){
    if(UEFACHL1920.style.display === "none"){
        UEFACHL1920.style.display = "block"; UEFACHL1920.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        UEFACHL1920.style.display = "none";
    }
}

function showAndHideUefaEuropaLeague1920Table(){
    if(UEFAEUROPAL1920.style.display === "none"){
        UEFAEUROPAL1920.style.display = "block"; UEFAEUROPAL1920.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        UEFAEUROPAL1920.style.display = "none";
    }
}

function closeLigaI1920MainAndPlayOffResults(){
    if(ligaI1920Results.style.display === "none"){
        ligaI1920Results.style.display = "block"; competitionsPresentationTable1920.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(ligaI1920Results.style.display === "block" && LigaI1920MainRound.style.display === "block" && LigaI1920PlayOffRound.style.display === "block"){
        LigaI1920PlayOffRound.style.display = "none"; LigaI1920MainRound.style.display = "none"; ligaI1920Results.style.display = "none";
    }
    else if(ligaI1920Results.style.display === "block" && LigaI1920MainRound.style.display === "none" && LigaI1920PlayOffRound.style.display === "none"){
        ligaI1920Results.style.display = "none";
    }
    else if(ligaI1920Results.style.display === "block" && LigaI1920MainRound.style.display === "block"){
        LigaI1920MainRound.style.display = "none"; ligaI1920Results.style.display = "none";
    }
    else if(ligaI1920Results.style.display === "block" && LigaI1920PlayOffRound.style.display === "block"){
        LigaI1920PlayOffRound.style.display = "none"; ligaI1920Results.style.display = "none";
    }
}
function closeCupaRomaniei1920Results(){
    if(cupaRomaniei1920Results.style.display === "none"){
        cupaRomaniei1920Results.style.display = "block"; competitionsPresentationTable1920.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(cupaRomaniei1920Results.style.display === "block" && CUPAR1920.style.display === "block"){
        CUPAR1920.style.display = "none"; cupaRomaniei1920Results.style.display = "none"
    }
    else if(cupaRomaniei1920Results.style.display === "block" && CUPAR1920.style.display === "none"){
        cupaRomaniei1920Results.style.display = "none"
    }
}
function closeSupercupaRomaniei20Results(){
    if(supercupaRomaniei20Results.style.display === "none"){
        supercupaRomaniei20Results.style.display = "block"; competitionsPresentationTable1920.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(supercupaRomaniei20Results.style.display === "block" && SUPERCR20.style.display === "block"){
        SUPERCR20.style.display = "none"; supercupaRomaniei20Results.style.display = "none";
    }
    else if(supercupaRomaniei20Results.style.display === "block" && SUPERCR20.style.display === "none"){
        supercupaRomaniei20Results.style.display = "none"
    }
}
function closeUefaChampionsLeague1920Results(){
    if(uefaChampionsLeague1920Results.style.display === "none"){
    uefaChampionsLeague1920Results.style.display = "block"; competitionsPresentationTable1920.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(uefaChampionsLeague1920Results.style.display === "block" && UEFACHL1920.style.display === "block"){
        UEFACHL1920.style.display = "none"; uefaChampionsLeague1920Results.style.display = "none";
    }
    else if(uefaChampionsLeague1920Results.style.display === "block" && UEFACHL1920.style.display === "none"){
        uefaChampionsLeague1920Results.style.display = "none"
    }
}
function closeUefaEuropaLeague1920Results(){
    if(uefaEuropaLeague1920Results.style.display === "none"){
        uefaEuropaLeague1920Results.style.display = "block"; competitionsPresentationTable1920.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(uefaEuropaLeague1920Results.style.display === "block" && UEFAEUROPAL1920.style.display === "block"){
        UEFAEUROPAL1920.style.display = "none"; uefaEuropaLeague1920Results.style.display = "none";
    }
    else if(uefaEuropaLeague1920Results.style.display === "block" && UEFAEUROPAL1920.style.display === "none"){
        UEFAEUROPAL1920.style.display = "none"; uefaEuropaLeague1920Results.style.display = "none";
    }
}

var relegatedTeams1920LigaI = document.getElementById("RelegatedTeamsDropdown1920Elements")

function showAndHideRelegated1920LigaI(){
    if(relegatedTeams1920LigaI.style.display === "none"){
        relegatedTeams1920LigaI.style.display = "block"
    }
    else if(relegatedTeams1920LigaI.style.display === "block"){
        relegatedTeams1920LigaI.style.display = "none"
    }

}

var promotedTeams2021LigaI = document.getElementById("PromotedTeamsDropdown2021Elements")

function showAndHidePromoted2021LigaI(){
    if(promotedTeams2021LigaI.style.display === "none"){
        promotedTeams2021LigaI.style.display = "block"
    }
    else if(promotedTeams2021LigaI.style.display === "block"){
        promotedTeams2021LigaI.style.display = "none"
    }
}