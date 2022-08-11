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
};

$(".saveBtn").addEventListener("click", saveTextContent);

