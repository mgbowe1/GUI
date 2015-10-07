/* 
 * File: as5.js
 * Name: Michael Bowe
 * Email: michael_bowe@student.uml.edu or michael.g.bowe@gmail.com
 * 
 * Date: 10/6/2015
 */


//general code structure from professor Heines examples
//https://teaching.cs.uml.edu/~heines/91.461/91.461-2015-16f/461-assn/FormattingText-v05.jsp
$(document).ready(function(){
    //function to put content onto the page
    function placeContent(passageWithInfo){
        var strContent = "";
        
        //create dynamic content based on my json file
        $("#PageTitle").text(passageWithInfo.title);
        $("#ByLine").text("by " + passageWithInfo.author);
        
        strContent += "<h3>" + passageWithInfo.kata.name + "</h3>";
        strContent += "<ol>";
        
        for(var i = 0; i < passageWithInfo.kata.steps.length; ++i){
            strContent += "<li>" + passageWithInfo.kata.steps[i] + "</li>";
        }
        strContent += "</ol>";
        
        $("#PageContentAS5").html(strContent);
    }
    
    //gets data in the json format and places it on the page
    $.get("ueichi-book-info.json",function(data){
        placeContent(data) // This is the function that actually parses throught the json file to generate content.
    }, "json"); // third parameter for use on weblab.cs.uml.edu (if I decide to put it there)
});
