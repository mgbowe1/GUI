/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//resets the values of the form to their defaults
var resetValues = function(){
    $("#rowLow").val( 1);
    $("#colLow").val( 1);
    $("#rowHigh").val( 10);
    $("#colHigh").val( 10);
};

var validate = function(){
    
    //check we have integers not floats
    if(!parseInt($("#rowLow").val()) ||
            !parseInt($("#colLow").val()) ||
            !parseInt($("#rowHigh").val()) ||
            !parseInt($("#colHigh").val())) {
        alert("All input values must be integers!");
        return false;
    }
    
    //swap values if in the wrong order
    var intRowLower = parseInt($("#rowLow").val());
    var intColLower = parseInt($("#colLow").val());
    var intRowUpper = parseInt($("#rowHigh").val());
    var intColUpper = parseInt($("#colHigh").val());
    
    if(intRowLower > intRowUpper){
        //xor swap to avoid making another variable
        intRowLower = intRowLower ^ intRowUpper;
        intRowUpper = intRowLower ^ intRowUpper;
        intRowLower = intRowLower ^ intRowUpper;
    }
    
    if(intColLower > intColUpper){
        //xor swap to avoid making another variable
        intColLower = intColLower ^ intColUpper;
        intColUpper = intColLower ^ intColUpper;
        intColLower = intColLower ^ intColUpper;
    }
    
    $("#rowLow").val( intRowLower);
    $("#rowHigh").val( intRowUpper);
    $("#colLow").val( intColLower);
    $("#colHigh").val( intColUpper);
    
    return true;
}

$(document).ready(function(){
    
    //Algorithim to get an object from the url from Professor Heines Lecture 13 notes
    //https://teaching.cs.uml.edu/~heines/91.461/91.461-2015-16f/461-lecs/lecture13.jsp?one=1&two=2&thre
    // define an empty object
    var obj = {} ;
    // populate that object with the paramaters passed to this page
    for ( var k = 0 ; k < location.search.substr(1).split("&").length ; k++ ) {
        obj[location.search.substr(1).split("&")[k].split("=")[0]] = 
            location.search.substr(1).split("&")[k].split("=")[1] ;
    }
    
    //if we got no parameters set default values
    if(!obj.hasOwnProperty("rowLow")){
        $("#rowLow").attr("value", 1);
        obj["rowLow"] = 1;
        $("#colLow").attr("value", 1);
        obj["colLow"] = 1;
        $("#rowHigh").attr("value", 10);
        obj["rowHigh"] = 10;
        $("#colHigh").attr("value", 10);
        obj["colHigh"] = 10;
    }
    else { //set to parameter values
        $("#rowLow").val(obj["rowLow"]);
        $("#colLow").val(obj["colLow"]);
        $("#rowHigh").val(obj["rowHigh"]);
        $("#colHigh").val(obj["colHigh"]);
    }
    
    var table = "<table>";
    //create the table
    for(var i = parseInt(obj["rowLow"]) -1; i <= parseInt(obj["rowHigh"]) ; ++i){
        table += "<tr>";
        for(var j = parseInt(obj["colLow"]) - 1; j <= parseInt(obj["colHigh"]) ; ++j){
            table += "<td>";
            //header row
            if(i < parseInt(obj["rowLow"])){
                if(j >= parseInt(obj["colLow"])){
                    table += j.toString();
                }
            }
            //label column
            else if(j < parseInt(obj["colLow"])){
                if(i >= parseInt(obj["rowLow"])){
                    table += i.toString();
                }
            }
            else {
                table += (i*j).toString();
            }
            table += "</td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    
    $("#as6TableContainer").html(table);
});