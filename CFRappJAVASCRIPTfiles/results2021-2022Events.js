var ligaI2122Results = document.getElementById("ligaIresults2122");
var cupaRomaniei2122Results = document.getElementById("cupaRomaniei2122results");
var supercupaRomaniei22Results = document.getElementById("supercupaRomaniei22results");
var uefaChampionsLeague2122Results = document.getElementById("uefaChampionsLeague2122results");
var uefaEuropaLeague2122Results = document.getElementById("uefaEuropaLeague2122results");
var uefaEuropaConferenceLeague2122Results = document.getElementById("uefaEuropaConferenceLeague2122results");

function showAndHideLigaI2122(){
    if(ligaI2122Results.style.display === "none"){
        ligaI2122Results.style.display = "block";
    }
    else{
        ligaI2122Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei2122(){
    if(cupaRomaniei2122Results.style.display === "none"){
        cupaRomaniei2122Results.style.display = "block";
    }
    else{
        cupaRomaniei2122Results.style.display = "none";
    }
}
function showAndHideSupercupaRomaniei22(){
    if(supercupaRomaniei22Results.style.display === "none"){
        supercupaRomaniei22Results.style.display = "block";
    }
    else{
        supercupaRomaniei22Results.style.display = "none";
    }
}
function showAndHideUefaChampionsLeague2122(){
    if(uefaChampionsLeague2122Results.style.display === "none"){
        uefaChampionsLeague2122Results.style.display = "block";
    }
    else{
        uefaChampionsLeague2122Results.style.display = "none";
    }
}
function showAndHideUefaEuropaLeague2122(){
    if(uefaEuropaLeague2122Results.style.display === "none"){
        uefaEuropaLeague2122Results.style.display = "block";
    }
    else{
        uefaEuropaLeague2122Results.style.display = "none";
    }
}
function showAndHideUefaEuropaConferenceLeague2122(){
    if(uefaEuropaConferenceLeague2122Results.style.display === "none"){
        uefaEuropaConferenceLeague2122Results.style.display = "block";
    }
    else{
        uefaEuropaConferenceLeague2122Results.style.display = "none";
    }
}

var LigaI2122MainRound = document.getElementById("LigaI2122MainRoundTable");
var LigaI2122PlayOffRound = document.getElementById("LigaI2122PlayOffTable");
var CUPAR2122 = document.getElementById("CupaRomaniei2122Table");
var SUPERCR22 = document.getElementById("SupercupaRomaniei22Table");
var UEFACHL2122 = document.getElementById("UCHL2122Table");
var UEFAEUROPAL2122 = document.getElementById("UefaEuropaLeagueTable2122");
var UEFAEUROPACL2122 = document.getElementById("UefaEuropaConferenceLeagueTable2122");
var competitionsPresentationTable2122 = document.getElementById("competitionsTable2122")

function showAndHideLigaI2122MainRoundTable(){
    if(LigaI2122MainRound.style.display === "none"){
        LigaI2122MainRound.style.display = "block"; LigaI2122MainRound.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        LigaI2122MainRound.style.display = "none";
    }
}

function showAndHideLigaI2122PlayOffRoundTable(){
    if(LigaI2122PlayOffRound.style.display === "none"){
        LigaI2122PlayOffRound.style.display = "block"; LigaI2122PlayOffRound.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        LigaI2122PlayOffRound.style.display = "none";
    }
}

function showAndHideCupaRomaniei2122Table(){
    if(CUPAR2122.style.display === "none"){
        CUPAR2122.style.display = "block"; CUPAR2122.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        CUPAR2122.style.display = "none";
    }
}

function showAndHideSupercupaRomaniei22Table(){
    if(SUPERCR22.style.display === "none"){
        SUPERCR22.style.display = "block"; SUPERCR22.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        SUPERCR22.style.display = "none";
    }
}

function showAndHideUefaChL2122Table(){
    if(UEFACHL2122.style.display === "none"){
        UEFACHL2122.style.display = "block"; UEFACHL2122.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        UEFACHL2122.style.display = "none";
    }
}

function showAndHideUefaEuropaLeague2122Table(){
    if(UEFAEUROPAL2122.style.display === "none"){
        UEFAEUROPAL2122.style.display = "block"; UEFAEUROPAL2122.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        UEFAEUROPAL2122.style.display = "none";
    }
}

function showAndHideUefaEuropaConferenceLeague2122Table(){
    if(UEFAEUROPACL2122.style.display === "none"){
        UEFAEUROPACL2122.style.display = "block"; UEFAEUROPACL2122.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        UEFAEUROPACL2122.style.display = "none";
    }
}

function closeLigaI2122MainAndPlayOffResults(){
    if(ligaI2122Results.style.display === "none"){
        ligaI2122Results.style.display = "block"; competitionsPresentationTable2122.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(ligaI2122Results.style.display === "block" && LigaI2122MainRound.style.display === "block" && LigaI2122PlayOffRound.style.display === "block"){
        LigaI2122PlayOffRound.style.display = "none"; LigaI2122MainRound.style.display = "none"; ligaI2122Results.style.display = "none";
    }
    else if(ligaI2122Results.style.display === "block" && LigaI2122MainRound.style.display === "none" && LigaI2122PlayOffRound.style.display === "none"){
        ligaI2122Results.style.display = "none"
    }
    else if(ligaI2122Results.style.display === "block" && LigaI2122MainRound.style.display === "block"){
        LigaI2122MainRound.style.display = "none"; ligaI2122Results.style.display = "none";
    }
    else if(ligaI2122Results.style.display === "block" && LigaI2122PlayOffRound.style.display === "block"){
        LigaI2122PlayOffRound.style.display = "none"; ligaI2122Results.style.display = "none"
    }
}
function closeCupaRomaniei2122Results(){
    if(cupaRomaniei2122Results.style.display === "none"){
        cupaRomaniei2122Results.style.display = "block"; competitionsPresentationTable2122.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(cupaRomaniei2122Results.style.display === "block" && CUPAR2122.style.display === "block"){
        CUPAR2122.style.display = "none"; cupaRomaniei2122Results.style.display = "none"
    }
    else if(cupaRomaniei2122Results.style.display === "block" && CUPAR2122.style.display === "none"){
        cupaRomaniei2122Results.style.display = "none"
    }
}
function closeSupercupaRomaniei22Results(){
    if(supercupaRomaniei22Results.style.display === "none"){
        supercupaRomaniei22Results.style.display = "block"; competitionsPresentationTable2122.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(supercupaRomaniei22Results.style.display === "block" && SUPERCR22.style.display === "block"){
        SUPERCR22.style.display = "none"; supercupaRomaniei22Results.style.display = "none";
    }
    else if(supercupaRomaniei22Results.style.display === "block" && SUPERCR22.style.display === "none"){
        supercupaRomaniei22Results.style.display = "none"
    }
}
function closeUefaChampionsLeague2122Results(){
    if(uefaChampionsLeague2122Results.style.display === "none"){
        uefaChampionsLeague2122Results.style.display = "block"; competitionsPresentationTable2122.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(uefaChampionsLeague2122Results.style.display === "block" && UEFACHL2122.style.display === "block"){
        UEFACHL2122.style.display = "none"; uefaChampionsLeague2122Results.style.display = "none";
    }
    else if(uefaChampionsLeague2122Results.style.display === "block" && UEFACHL2122.style.display === "none"){
        uefaChampionsLeague2122Results.style.display = "none";
    }
}
function closeUefaEuropaLeague2122Results(){
    if(uefaEuropaLeague2122Results.style.display === "none"){
        uefaEuropaLeague2122Results.style.display = "block"; competitionsPresentationTable2122.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(uefaEuropaLeague2122Results.style.display === "block" && UEFAEUROPAL2122.style.display === "block"){
        UEFAEUROPAL2122.style.display = "none"; uefaEuropaLeague2122Results.style.display = "none";
    }
    else if(uefaEuropaLeague2122Results.style.display === "block" && UEFAEUROPAL2122.style.display === "none"){
        uefaEuropaLeague2122Results.style.display = "none";
    }
}
function closeUefaEuropaConferenceLeague2122Results(){
    if(uefaEuropaConferenceLeague2122Results.style.display === "none"){
        uefaEuropaConferenceLeague2122Results.style.display = "block"; competitionsPresentationTable2122.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(uefaEuropaConferenceLeague2122Results.style.display === "block" && UEFAEUROPACL2122.style.display === "block"){
        UEFAEUROPACL2122.style.display = "none"; uefaEuropaConferenceLeague2122Results.style.display = "none";
    }
    else if(uefaEuropaConferenceLeague2122Results.style.display === "block" && UEFAEUROPACL2122.style.display === "none"){
        uefaEuropaConferenceLeague2122Results.style.display = "none";
    }
}

var relegatedTeams2122LigaI = document.getElementById("RelegatedTeamsDropdown2122Elements")

function showAndHideRelegated2122LigaI(){
    if(relegatedTeams2122LigaI.style.display === "none"){
        relegatedTeams2122LigaI.style.display = "block"
    }
    else if(relegatedTeams2122LigaI.style.display === "block"){
        relegatedTeams2122LigaI.style.display = "none"
    }

}

var promotedTeams2223LigaI = document.getElementById("PromotedTeamsDropdown2223Elements")

function showAndHidePromoted2223LigaI(){
    if(promotedTeams2223LigaI.style.display === "none"){
        promotedTeams2223LigaI.style.display = "block"
    }
    else if(promotedTeams2223LigaI.style.display === "block"){
        promotedTeams2223LigaI.style.display = "none"
    }

}