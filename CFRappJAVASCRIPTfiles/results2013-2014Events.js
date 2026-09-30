var ligaI1314Results = document.getElementById("ligaIresults1314");
var cupaRomaniei1314Results = document.getElementById("cupaRomaniei1314results");

function showAndHideLigaI1314(){
    if(ligaI1314Results.style.display === "none"){
        ligaI1314Results.style.display = "block";
    }
    else{
        ligaI1314Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei1314(){
    if(cupaRomaniei1314Results.style.display === "none"){
        cupaRomaniei1314Results.style.display = "block";
    }
    else{
        cupaRomaniei1314Results.style.display = "none";
    }
}

var LigaI1314MainRoundTable = document.getElementById("LigaI1314MainRoundResultsTable");
var CupaRomaniei1314Table = document.getElementById("CupaRomaniei1314ResultsTable");
var competitionsPresentationTable1314 = document.getElementById("competitionsTable1314")

function showAndHideLigaI1314MainRoundResults(){
    if(LigaI1314MainRoundTable.style.display === "none"){
        LigaI1314MainRoundTable.style.display = "block"; LigaI1314MainRoundTable.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        LigaI1314MainRoundTable.style.display = "none";
    }
}

function showAndHideCupaRomaniei1314Results(){
    if(CupaRomaniei1314Table.style.display === "none"){
        CupaRomaniei1314Table.style.display = "block"; CupaRomaniei1314Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        CupaRomaniei1314Table.style.display = "none";
    }
}
function closeLigaI1314MainResults(){
    if(ligaI1314Results.style.display === "none"){
        ligaI1314Results.style.display = "block"; competitionsPresentationTable1314.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(ligaI1314Results.style.display === "block" && LigaI1314MainRoundTable.style.display === "block"){
        LigaI1314MainRoundTable.style.display = "none"; ligaI1314Results.style.display = "none";
    }
    else if(ligaI1314Results.style.display === "block" && LigaI1314MainRoundTable.style.display === "none"){
        ligaI1314Results.style.display = "none"
    }
}
function closeCupaRomaniei1314Results(){
    if(cupaRomaniei1314Results.style.display === "none"){
        cupaRomaniei1314Results.style.display = "block"; competitionsPresentationTable1314.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(cupaRomaniei1314Results.style.display === "block" && CupaRomaniei1314Table.style.display === "block"){
        CupaRomaniei1314Table.style.display = "none"; cupaRomaniei1314Results.style.display = "none";
    }
    else if(cupaRomaniei1314Results.style.display === "block" && CupaRomaniei1314Table.style.display === "none"){
        cupaRomaniei1314Results.style.display = "none"
    }
}

var relegatedTeams1314LigaI = document.getElementById("RelegatedTeamsDropdown1314Elements")

function showAndHideRelegated1314LigaI(){
    if(relegatedTeams1314LigaI.style.display === "none"){
        relegatedTeams1314LigaI.style.display = "block"
    }
    else if(relegatedTeams1314LigaI.style.display === "block"){
        relegatedTeams1314LigaI.style.display = "none"
    }

}

var promotedTeams1415LigaI = document.getElementById("PromotedTeamsDropdown1415Elements")

function showAndHidePromoted1415LigaI(){
    if(promotedTeams1415LigaI.style.display === "none"){
        promotedTeams1415LigaI.style.display = "block"
    }
    else if(promotedTeams1415LigaI.style.display === "block"){
        promotedTeams1415LigaI.style.display = "none"
    }

}
