var ligaI0809Results = document.getElementById("ligaIresults0809");
var cupaRomaniei0809Results = document.getElementById("cupaRomanieiResults0809");
var supercup2009Results = document.getElementById("supercup2009results");
var uefaChampionsLeague0809Results = document.getElementById("uefaChampionsLeague0809results");

function showAndHideLigaI0809(){
    if(ligaI0809Results.style.display === "none"){
        ligaI0809Results.style.display = "block";
    }
    else{
        ligaI0809Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei0809(){
    if(cupaRomaniei0809Results.style.display === "none"){
        cupaRomaniei0809Results.style.display = "block";
    }
    else{
        cupaRomaniei0809Results.style.display = "none";
    }
}
function showAndHideSupercup2009(){
    if(supercup2009Results.style.display === "none"){
        supercup2009Results.style.display = "block";
    }
    else{
        supercup2009Results.style.display = "none";
    }
}
function showAndHideUefaChampionsLeague0809(){
    if(uefaChampionsLeague0809Results.style.display === "none"){
        uefaChampionsLeague0809Results.style.display = "block";
    }
    else{
        uefaChampionsLeague0809Results.style.display = "none";
    }
}

var LigaI0809MainRoundTable = document.getElementById("LigaI0809MainRoundResultsTable")
var CupaRomaniei0809Table = document.getElementById("CupaRomaniei0809ResultsTable")
var SupercupaRomaniei09Table = document.getElementById("SupercupaRomaniei09ResultsTable")
var UefaChampionsLeague0809Table = document.getElementById("UefaChampionsLeague0809ResultsTable")
var competitionsPresentationTable0809 = document.getElementById("competitionsTable0809")

function showAndHideLigaI0809MainRoundResults(){
    if(LigaI0809MainRoundTable.style.display === "none"){
        LigaI0809MainRoundTable.style.display = "block"; LigaI0809MainRoundTable.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        LigaI0809MainRoundTable.style.display = "none";
    }
}
function showAndHideCupaRomaniei0809Results(){
    if(CupaRomaniei0809Table.style.display === "none"){
        CupaRomaniei0809Table.style.display = "block"; CupaRomaniei0809Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        CupaRomaniei0809Table.style.display = "none"
    }
}
function showAndHideSupercupaRomaniei09Results(){
    if(SupercupaRomaniei09Table.style.display === "none"){
        SupercupaRomaniei09Table.style.display = "block"; SupercupaRomaniei09Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        SupercupaRomaniei09Table.style.display = "none";
    }
}
function showAndHideUefaChampionsLeague0809Results(){
    if(UefaChampionsLeague0809Table.style.display === "none"){
        UefaChampionsLeague0809Table.style.display = "block"; UefaChampionsLeague0809Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        UefaChampionsLeague0809Table.style.display = "none";
    }
}

function closeLigaI0809MainResults(){
    if(ligaI0809Results.style.display === "none"){
        ligaI0809Results.style.display = "block"; competitionsPresentationTable0809.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(ligaI0809Results.style.display === "block" && LigaI0809MainRoundTable.style.display === "block"){
        LigaI0809MainRoundTable.style.display = "none"; ligaI0809Results.style.display = "none";
    }
    else if(ligaI0809Results.style.display === "block" && LigaI0809MainRoundTable.style.display === "none"){
        ligaI0809Results.style.display = "none"
    }
}
function closeCupaRomaniei0809Results(){
    if(cupaRomaniei0809Results.style.display === "none"){
        cupaRomaniei0809Results.style.display = "block"; competitionsPresentationTable0809.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(cupaRomaniei0809Results.style.display === "block" && CupaRomaniei0809Table.style.display === "block"){
        CupaRomaniei0809Table.style.display = "none"; cupaRomaniei0809Results.style.display = "none"
    }
    else if(cupaRomaniei0809Results.style.display === "block" && CupaRomaniei0809Table.style.display === "none"){
        cupaRomaniei0809Results.style.display = "none"
    }
}
function closeSupercupaRomaniei09Results(){
    if(supercup2009Results.style.display === "none"){
        supercup2009Results.style.display = "block"; competitionsPresentationTable0809.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(supercup2009Results.style.display === "block" && SupercupaRomaniei09Table.style.display === "block"){
        SupercupaRomaniei09Table.style.display = "none"; supercup2009Results.style.display = "none"
    }
    else if(supercup2009Results.style.display === "block" && SupercupaRomaniei09Table.style.display === "none"){
        supercup2009Results.style.display = "none"
    }
}
function closeUefaChampionsLeague0809Results(){
    if(uefaChampionsLeague0809Results.style.display === "none"){
        uefaChampionsLeague0809Results.style.display = "block"; competitionsPresentationTable0809.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(uefaChampionsLeague0809Results.style.display === "block" && UefaChampionsLeague0809Table.style.display === "block"){
        UefaChampionsLeague0809Table.style.display = "none"; uefaChampionsLeague0809Results.style.display = "none";
    }
    else if(uefaChampionsLeague0809Results.style.display === "block" && UefaChampionsLeague0809Table.style.display === "none"){
        uefaChampionsLeague0809Results.style.display = "none"
    }
}

var relegatedTeams0809LigaI = document.getElementById("RelegatedTeamsDropdown0809Elements");

function showAndHideRelegated0809LigaI(){
    if(relegatedTeams0809LigaI.style.display === "none"){
        relegatedTeams0809LigaI.style.display = "block"
    }
    else if(relegatedTeams0809LigaI.style.display === "block"){
        relegatedTeams0809LigaI.style.display = "none"
    }

}

var promotedTeams0910LigaI = document.getElementById("PromotedTeamsDropdown0910Elements");

function showAndhidePromoted0910LigaI(){
    if(promotedTeams0910LigaI.style.display === "none"){
        promotedTeams0910LigaI.style.display = "block"
    }
    else if(promotedTeams0910LigaI.style.display === "block"){
        promotedTeams0910LigaI.style.display = "none"
    }

}
