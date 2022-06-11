/**
 * An app interface for playing the game Fae's Anatomy
 * 
 * Features:
 * 
 * Features to be added: character summaries (variable amounts)
 * saved database/code 
 * status bar
 * 
 * Creator: Caroline Knote 
 * template concept by Jasper LaFleur 
 * 
 */

const $charForm = $('#newCharForm');
const $charStorage = $('#charStorage');

$charForm.on("submit", function(e){
    e.preventDefault();

    //pull the character name
    let charName = $("#nameInput").val();
    // clear the input
    $("#nameInput").val("");

    displayChar(charName);
});

function displayChar(charName){
    let character = $("<p></p>").text(charName);
    $charStorage.append(character);
}