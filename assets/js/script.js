$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
});

var saveTextContent = function(){
    textContentNine = $("#textContentNine").val();
    textContentTen = $("#textContentTen").val();
    textContentEleven = $("#textContentEleven").val();
    textContentTwelve = $("#textContentTwelve").val();
    textContentOne = $("#textContentOne").val();
    textContentTwo = $("#textContentTwo").val();
    textContentThree = $("#textContentThree").val();
    textContentFour = $("#textContentFour").val();
    textContentFive = $("#textContentFive").val();

    storeTextContent();
};

$(".saveBtn").addEventListener("click", saveTextContent);

var storeTextContent = function() {
    localStorage.setItem("#textContentNine",textContentNine);
    localStorage.setItem("#textContentTen",textContentTen);
    localStorage.setItem("#textContentEleven", textContentEleven);
    localStorage.setItem("#textContentTwelve",textContentTwelve);
    localStorage.setItem("#textContentOne",textContentOne);
    localStorage.setItem("#textContentThree",textContentThree);
    localStorage.setItem("#textContentFour",textContentFour);
    localStorage.setItem("#textContentFive",textContentFive);
};





