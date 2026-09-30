var ligaI1011Results = document.getElementById("ligaIresults1011");
var cupaRomaniei1011Results = document.getElementById("cupaRomaniei1011results");
var uefaChampionsLeague1011Results = document.getElementById("uefaChampionsLeague1011results");

function showAndHideLigaI1011(){
    if(ligaI1011Results.style.display === "none"){
        ligaI1011Results.style.display = "block";
    }
    else{
        ligaI1011Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei1011(){
    if(cupaRomaniei1011Results.style.display === "none"){
        cupaRomaniei1011Results.style.display = "block";
    }
    else{
        cupaRomaniei1011Results.style.display = "none";
    }
}
function showAndHideUefaChampionsLeague1011(){
    if(uefaChampionsLeague1011Results.style.display === "none"){
        uefaChampionsLeague1011Results.style.display = "block";
    }
    else{
        uefaChampionsLeague1011Results.style.display = "none";
    }
}

var LigaI1011MainRoundTable = document.getElementById("LigaI1011MainRoundResultsTable");
var CupaRomaniei1011Table = document.getElementById("CupaRomaniei1011ResultsTable");
var UefaChampionsLeague1011Table = document.getElementById("UefaChampionsLeague1011ResultsTable");
var competitionsPresentationTable1011 = document.getElementById("competitionsTable1011")

function showAndHideLigaI1011MainRoundResults(){
    if(LigaI1011MainRoundTable.style.display === "none"){
        LigaI1011MainRoundTable.style.display = "block"; LigaI1011MainRoundTable.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        LigaI1011MainRoundTable.style.display = "none";
    }
}
function showAndHideCupaRomaniei1011Results(){
    if(CupaRomaniei1011Table.style.display === "none"){
        CupaRomaniei1011Table.style.display = "block"; CupaRomaniei1011Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        CupaRomaniei1011Table.style.display = "none";
    }
}
function showAndHideUefaChampionsLeague1011Results(){
    if(UefaChampionsLeague1011Table.style.display === "none"){
        UefaChampionsLeague1011Table.style.display = "block"; UefaChampionsLeague1011Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        UefaChampionsLeague1011Table.style.display = "none";
    }
}

function closeLigaI1011MainResults(){
    if(ligaI1011Results.style.display === "none"){
        ligaI1011Results.style.display = "block"; competitionsPresentationTable1011.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(ligaI1011Results.style.display === "block" && LigaI1011MainRoundTable.style.display === "block"){
        LigaI1011MainRoundTable.style.display = "none"; ligaI1011Results.style.display = "none";
    }
    else if(ligaI1011Results.style.display === "block" && LigaI1011MainRoundTable.style.display === "none"){
        ligaI1011Results.style.display = "none"
    }
}
function closeCupaRomaniei1011Results(){
    if(cupaRomaniei1011Results.style.display === "none"){
        cupaRomaniei1011Results.style.display = "block"; competitionsPresentationTable1011.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(cupaRomaniei1011Results.style.display === "block" && CupaRomaniei1011Table.style.display === "block"){
        CupaRomaniei1011Table.style.display = "none"; cupaRomaniei1011Results.style.display = "none";
    }
    else if(cupaRomaniei1011Results.style.display === "block" && CupaRomaniei1011Table.style.display === "none"){
        cupaRomaniei1011Results.style.display = "none"
    }
}
function closeUefaChampionsLeague1011Results(){
    if(uefaChampionsLeague1011Results.style.display === "none"){
        uefaChampionsLeague1011Results.style.display = "block" ; competitionsPresentationTable1011.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(uefaChampionsLeague1011Results.style.display === "block" && UefaChampionsLeague1011Table.style.display === "block"){
        UefaChampionsLeague1011Table.style.display = "none"; uefaChampionsLeague1011Results.style.display = "none";
    }
    else if(uefaChampionsLeague1011Results.style.display === "block" && UefaChampionsLeague1011Table.style.display === "none"){
        uefaChampionsLeague1011Results.style.display = "none"
    }
}

var relegatedTeams1011LigaI = document.getElementById("RelegatedTeamsDropdown1011Elements");

function showAndHideRelegated1011LigaI(){
    if(relegatedTeams1011LigaI.style.display === "none"){
        relegatedTeams1011LigaI.style.display = "block"
    }
    else if(relegatedTeams1011LigaI.style.display === "block"){
        relegatedTeams1011LigaI.style.display = "none"
    }

}

var promotedTeams1112LigaI = document.getElementById("PromotedTeamsDropdown1112Elements");

function showAndHidePromoted1112LigaI(){
    if(promotedTeams1112LigaI.style.display === "none"){
        promotedTeams1112LigaI.style.display = "block"
    }
    else if(promotedTeams1112LigaI.style.display === "block"){
        promotedTeams1112LigaI.style.display = "none"
    }

}