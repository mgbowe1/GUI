/* 
 * File: as7.js
 * Name: Michael Bowe
 * Email: michael_bowe@student.uml.edu or michael.g.bowe@gmail.com
 * 
 * Date: 11/5/2015
 */


//resets the values of the form to their defaults
var resetValues = function(){
    $("#rowLow").val( 1);
    $("#colLow").val( 1);
    $("#rowHigh").val( 10);
    $("#colHigh").val( 10);
};

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
    
    $("#tableInputs").validate({
        
    });
    
});