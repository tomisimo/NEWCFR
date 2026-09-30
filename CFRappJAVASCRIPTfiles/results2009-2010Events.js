var ligaI0910Results = document.getElementById("ligaIresults0910");
var cupaRomaniei0910Results = document.getElementById("cupaRomaniei0910results");
var supercup2010Results = document.getElementById("supercup2010results");
var uefaEuropaLeague0910Results = document.getElementById("uefaEuropaLeague0910results");

function showAndHideLigaI0910(){
    if(ligaI0910Results.style.display === "none"){
        ligaI0910Results.style.display = "block";
    }
    else{
        ligaI0910Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei0910(){
    if(cupaRomaniei0910Results.style.display === "none"){
        cupaRomaniei0910Results.style.display = "block";
    }
    else{
        cupaRomaniei0910Results.style.display = "none";
    }
}
function showAndHideSupercup2010(){
    if(supercup2010Results.style.display === "none"){
        supercup2010Results.style.display = "block";
    }
    else{
        supercup2010Results.style.display = "none";
    }
}
function showAndHideUefaEuropaLeague0910(){
    if(uefaEuropaLeague0910Results.style.display === "none"){
        uefaEuropaLeague0910Results.style.display = "block";
    }
    else{
        uefaEuropaLeague0910Results.style.display = "none";
    }
}

var LigaI0910MainRoundTable = document.getElementById("LigaI0910MainRoundResultsTable")
var CupaRomaniei0910Table = document.getElementById("CupaRomaniei0910ResultsTable")
var SupercupaRomaniei10Table = document.getElementById("SupercupaRomaniei10ResultsTable")
var UefaEuropaLeague0910Table = document.getElementById("UefaEuropaLeague0910ResultsTable")
var competitionsPresentationTable0910 = document.getElementById("competitionsTable0910")

function showAndHideLigaI0910MainRoundResults(){
    if(LigaI0910MainRoundTable.style.display === "none"){
        LigaI0910MainRoundTable.style.display = "block"; LigaI0910MainRoundTable.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        LigaI0910MainRoundTable.style.display = "none";
    }
}
function showAndHideCupaRomaniei0910Results(){
    if(CupaRomaniei0910Table.style.display === "none"){
        CupaRomaniei0910Table.style.display = "block"; CupaRomaniei0910Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        CupaRomaniei0910Table.style.display = "none";
    }
}
function showAndHideSupercupaRomaniei10Results(){
    if(SupercupaRomaniei10Table.style.display === "none"){
        SupercupaRomaniei10Table.style.display = "block"; SupercupaRomaniei10Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        SupercupaRomaniei10Table.style.display = "none";
    }
}
function showAndHideUefaEuropaLeague0910Results(){
    if(UefaEuropaLeague0910Table.style.display === "none"){
        UefaEuropaLeague0910Table.style.display = "block"; UefaEuropaLeague0910Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        UefaEuropaLeague0910Table.style.display = "none"
    }
}

function closeLigaI0910MainResults(){
    if(ligaI0910Results.style.display === "none"){
        ligaI0910Results.style.display = "block"; competitionsPresentationTable0910.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(ligaI0910Results.style.display === "block" && LigaI0910MainRoundTable.style.display === "block"){
        LigaI0910MainRoundTable.style.display = "none"; ligaI0910Results.style.display = "none";
    }
    else if(ligaI0910Results.style.display === "block" && LigaI0910MainRoundTable.style.display === "none"){
        ligaI0910Results.style.display = "none"
    }
}
function closeCupaRomaniei0910Results(){
    if(cupaRomaniei0910Results.style.display === "none"){
        cupaRomaniei0910Results.style.display = "block"; competitionsPresentationTable0910.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(cupaRomaniei0910Results.style.display === "block" && CupaRomaniei0910Table.style.display === "block"){
        CupaRomaniei0910Table.style.display = "none"; cupaRomaniei0910Results.style.display = "none";
    }
    else if(cupaRomaniei0910Results.style.display === "block" && CupaRomaniei0910Table.style.display === "none"){
        cupaRomaniei0910Results.style.display = "none"
    }
}
function closeSupercupaRomaniei10Results(){
    if(supercup2010Results.style.display === "none"){
        supercup2010Results.style.display = "block"; competitionsPresentationTable0910.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(supercup2010Results.style.display === "block" && SupercupaRomaniei10Table.style.display === "block"){
        SupercupaRomaniei10Table.style.display = "none"; supercup2010Results.style.display = "none";
    }
    else if(supercup2010Results.style.display === "block" && SupercupaRomaniei10Table.style.display === "none"){
        supercup2010Results.style.display = "none"
    }
}
function closeUefaEuropaLeague0910Results(){
    if(uefaEuropaLeague0910Results.style.display === "none"){
        uefaEuropaLeague0910Results.style.display = "block"; competitionsPresentationTable0910.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(uefaEuropaLeague0910Results.style.display === "block" && UefaEuropaLeague0910Table.style.display === "block"){
        UefaEuropaLeague0910Table.style.display = "none"; uefaEuropaLeague0910Results.style.display = "none";
    }
    else if(uefaEuropaLeague0910Results.style.display === "block" && UefaEuropaLeague0910Table.style.display === "none"){
        uefaEuropaLeague0910Results.style.display = "none"
    }
}

var relegatedTeams0910LigaI = document.getElementById("RelegatedTeamsDropdown0910Elements")

function showAndHideRelegated0910LigaI(){
    if(relegatedTeams0910LigaI.style.display === "none"){
        relegatedTeams0910LigaI.style.display = "block"
    }
    else if(relegatedTeams0910LigaI.style.display === "block"){
        relegatedTeams0910LigaI.style.display = "none"
    }

}

var promotedTeams1011LigaI = document.getElementById("PromotedTeamsDropdown1011Elements")

function showAndHidePromoted1011LigaI(){
    if(promotedTeams1011LigaI.style.display === "none"){
        promotedTeams1011LigaI.style.display = "block"
    }
    else if(promotedTeams1011LigaI.style.display = "block"){
        promotedTeams1011LigaI.style.display = "none"
    }

}

