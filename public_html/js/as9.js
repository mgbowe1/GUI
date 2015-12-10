/* 
 * File: as9.js
 * Name: Michael Bowe
 * Email: michael_bowe@student.uml.edu or michael.g.bowe@gmail.com
 * 
 * Date: 12/9/2015
 */

$(document).ready(function(){
    //constants to disamiguate magic numbers
    var HAND_SIZE = 7;
    var TURN_DELAY = 10000;
    
    //Initializes Scrabble Tiles
    var Tiles = [{"points":1, "value":"A"},
    {"points":1, "value":"A"},
    {"points":1, "value":"A"},
    {"points":1, "value":"A"},
    {"points":1, "value":"A"},
    {"points":1, "value":"A"},
    {"points":1, "value":"A"},
    {"points":1, "value":"A"},
    {"points":1, "value":"A"},
    {"points":3, "value":"B"},
    {"points":3, "value":"B"},
    {"points":4, "value":"C"},
    {"points":4, "value":"C"},
    {"points":2, "value":"D"},
    {"points":2, "value":"D"},
    {"points":2, "value":"D"},
    {"points":2, "value":"D"},
    {"points":1, "value":"E"},
    {"points":1, "value":"E"},
    {"points":1, "value":"E"},
    {"points":1, "value":"E"},
    {"points":1, "value":"E"},
    {"points":1, "value":"E"},
    {"points":1, "value":"E"},
    {"points":1, "value":"E"},
    {"points":1, "value":"E"},
    {"points":1, "value":"E"},
    {"points":1, "value":"E"},
    {"points":1, "value":"E"},
    {"points":4, "value":"F"},
    {"points":4, "value":"F"},
    {"points":2, "value":"G"},
    {"points":2, "value":"G"},
    {"points":2, "value":"G"},
    {"points":4, "value":"H"},
    {"points":4, "value":"H"},
    {"points":1, "value":"I"},
    {"points":1, "value":"I"},
    {"points":1, "value":"I"},
    {"points":1, "value":"I"},
    {"points":1, "value":"I"},
    {"points":1, "value":"I"},
    {"points":1, "value":"I"},
    {"points":1, "value":"I"},
    {"points":1, "value":"I"},
    {"points":8, "value":"J"},
    {"points":5, "value":"K"},
    {"points":1, "value":"L"},
    {"points":1, "value":"L"},
    {"points":1, "value":"L"},
    {"points":1, "value":"L"},
    {"points":3, "value":"M"},
    {"points":3, "value":"M"},
    {"points":1, "value":"N"},
    {"points":1, "value":"N"},
    {"points":1, "value":"N"},
    {"points":1, "value":"N"},
    {"points":1, "value":"N"},
    {"points":1, "value":"N"},
    {"points":1, "value":"O"},
    {"points":1, "value":"O"},
    {"points":1, "value":"O"},
    {"points":1, "value":"O"},
    {"points":1, "value":"O"},
    {"points":1, "value":"O"},
    {"points":1, "value":"O"},
    {"points":1, "value":"O"},
    {"points":3, "value":"P"},
    {"points":3, "value":"P"},
    {"points":10, "value":"Q"},
    {"points":1, "value":"R"},
    {"points":1, "value":"R"},
    {"points":1, "value":"R"},
    {"points":1, "value":"R"},
    {"points":1, "value":"R"},
    {"points":1, "value":"R"},
    {"points":1, "value":"S"},
    {"points":1, "value":"S"},
    {"points":1, "value":"S"},
    {"points":1, "value":"S"},
    {"points":1, "value":"T"},
    {"points":1, "value":"T"},
    {"points":1, "value":"T"},
    {"points":1, "value":"T"},
    {"points":1, "value":"T"},
    {"points":1, "value":"T"},
    {"points":1, "value":"U"},
    {"points":1, "value":"U"},
    {"points":1, "value":"U"},
    {"points":1, "value":"U"},
    {"points":8, "value":"X"},
    {"points":4, "value":"V"},
    {"points":4, "value":"V"},
    {"points":4, "value":"W"},
    {"points":4, "value":"W"},
    {"points":4, "value":"Y"},
    {"points":4, "value":"Y"},
    {"points":10, "value":"Z"},
    {"points":0, "value":"_"},
    {"points":0, "value":"_"}];

    //returns numTiles Tiles (removing them from the Tiles Array)
    var getTilesFromBag = function(numTiles){
        var resultTiles = [];
        for(var i = 0; i < numTiles; ++i){
            var TileToRemove = Math.floor(Math.random() * Tiles.length);
            resultTiles[i] = Tiles[TileToRemove];
            Tiles.splice(TileToRemove, 1);
        }
        return resultTiles;
    };
    
    var p1Hand = [];
    var p2Hand = [];
    
    //populate initial hands
    p1Hand = getTilesFromBag(HAND_SIZE);
    p2Hand = getTilesFromBag(HAND_SIZE);
    
    //make hand display on page
    for(var i = 0; i < HAND_SIZE; ++i){
        var p1RackTile = '<div class="scrabbleTile"><span class="LetterVal">';
        if(p1Hand[i].points === 0){
            p1RackTile += '</span>';
            p1RackTile += '<span class="pointVal"></span></div>';
        }
        else{
            p1RackTile += p1Hand[i].value + '</span>';
            p1RackTile += '<span class="pointVal">' + p1Hand[i].points + '</span></div>';
        }
        $(".p1rack").append(p1RackTile);
        
        var p2RackTile = '<div class="scrabbleTile"><span class="LetterVal">';
        if(p2Hand[i].points === 0){
            p2RackTile += '</span>';
            p2RackTile += '<span class="pointVal"></span></div>';
        }
        else {
            p2RackTile += p2Hand[i].value + '</span>';
            p2RackTile += '<span class="pointVal">' + p2Hand[i].points + '</span></div>';
        }
        $(".p2rack").append(p2RackTile);
    }
    $(".scrabbleTile").draggable({
        snap:".sbSquare",
        snapMode:"inner",
        snapTolerance:10
    });
    $(".sbSquare").droppable({
        tolerance:"pointer"
    });
    
    var p1Turn = true;
    
    //manages Turns
    var PlayTurn = function(p1Turn) {
        if(p1Turn){
            $(".p2rack").hide();
            $(".p1rack").show(TURN_DELAY);
        }
        else {
            $(".p1rack").hide();
            $(".p2rack").show(TURN_DELAY);
        }
    };
});