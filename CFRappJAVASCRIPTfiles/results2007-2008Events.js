var ligaI0708Results = document.getElementById("ligaIresults0708");
var cupaRomaniei0708Results = document.getElementById("cupaRomanieiResults0708");
var uefaCup0708Results = document.getElementById("uefaCupResults0708");

function showAndHideLigaI0708(){
    if(ligaI0708Results.style.display === "none"){
        ligaI0708Results.style.display = "block";
    }
    else{
        ligaI0708Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei0708(){
    if(cupaRomaniei0708Results.style.display === "none"){
        cupaRomaniei0708Results.style.display = "block";
    }
    else{
        cupaRomaniei0708Results.style.display = "none";
    }
}
function showAndHideUefaCup0708(){
    if(uefaCup0708Results.style.display === "none"){
        uefaCup0708Results.style.display = "block";
    }
    else{
        uefaCup0708Results.style.display = "none"
    }
}

var LigaI0708MainRoundTable = document.getElementById("LigaI0708MainRoundResultsTable")
var CupaRomaniei0708Table = document.getElementById("CupaRomaniei0708ResultsTable")
var UefaCup0708Table = document.getElementById("UefaCup0708ResultsTable")
var competitionsPresentationTable0708 = document.getElementById("competitionsTable0708")

function showAndHideLigaI0708MainRoundResults(){
    if(LigaI0708MainRoundTable.style.display === "none"){
        LigaI0708MainRoundTable.style.display = "block"; LigaI0708MainRoundTable.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        LigaI0708MainRoundTable.style.display = "none";
    }
}
function showAndHideCupaRomaniei0708Results(){
    if(CupaRomaniei0708Table.style.display === "none"){
        CupaRomaniei0708Table.style.display = "block"; CupaRomaniei0708Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        CupaRomaniei0708Table.style.display = "none";
    }
}
function showAndHideUefaCup0708Results(){
    if(UefaCup0708Table.style.display === "none"){
        UefaCup0708Table.style.display = "block"; UefaCup0708Table.style.borderColor = "rgb(15, 245, 7)"
    }
    else{
        UefaCup0708Table.style.display = "none";
    }
}
function closeLigaI0708Results(){
    if(ligaI0708Results.style.display === "none"){
        ligaI0708Results.style.display = "block"; competitionsPresentationTable0708.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(ligaI0708Results.style.display === "block" && LigaI0708MainRoundTable.style.display === "block"){
        LigaI0708MainRoundTable.style.display = "none"; ligaI0708Results.style.display = "none";
    }
    else if(ligaI0708Results.style.display === "block" && LigaI0708MainRoundTable.style.display === "none"){
        ligaI0708Results.style.display = "none"
    }
}
function closeCupaRomaniei0708Results(){
    if(cupaRomaniei0708Results.style.display === "none"){
        cupaRomaniei0708Results.style.display = "block"; competitionsPresentationTable0708.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(cupaRomaniei0708Results.style.display === "block" && CupaRomaniei0708Table.style.display === "block"){
        CupaRomaniei0708Table.style.display = "none"; cupaRomaniei0708Results.style.display = "none";
    }
    else if(cupaRomaniei0708Results.style.display === "block" && CupaRomaniei0708Table.style.display === "none"){
        cupaRomaniei0708Results.style.display = "none"
    }
}
function closeUefaCup0708Results(){
    if(uefaCup0708Results.style.display === "none"){
        uefaCup0708Results.style.display = "block"; competitionsPresentationTable0708.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(uefaCup0708Results.style.display === "block" && UefaCup0708Table.style.display === "block"){
        UefaCup0708Table.style.display = "none"; uefaCup0708Results.style.display = "none";
    }
    else if(uefaCup0708Results.style.display === "block" && UefaCup0708Table.style.display === "none"){
        uefaCup0708Results.style.display = "none"
    }
}

var relegatedTeams0708LigaI = document.getElementById("RelegatedTeamsDropdown0708Elements")

function showAndHideRelegated0708LigaI(){
    if(relegatedTeams0708LigaI.style.display === "none"){
        relegatedTeams0708LigaI.style.display = "block"
    }
    else if(relegatedTeams0708LigaI.style.display === "block"){
        relegatedTeams0708LigaI.style.display = "none"
    }

}

var promotedTeams0809LigaI = document.getElementById("PromotedTeamsDropdown0809Elements")

function showAndhidePromoted0809LigaI(){
    if(promotedTeams0809LigaI.style.display === "none"){
        promotedTeams0809LigaI.style.display = "block"
    }
    else if(promotedTeams0809LigaI.style.display === "block"){
        promotedTeams0809LigaI.style.display = "none"
    }

}
