$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
});

var saveTextContent = function () {
    textContentNine = $("#textContentNine").val();
    textContentTen = $("#textContentTen").val();
    textContentEleven = $("#textContentEleven").val();
    textContentTwelve = $("#textContentTwelve").val();
    textContentOne = $("#textContentOne").val();
    textContentTwo = $("#textContentTwo").val();
    textContentThree = $("#textContentThree").val();
    textContentFour = $("#textContentFour").val();
    textContentFive = $("#textContentFive").val();

    var storeTextContent = function () {
        localStorage.setItem("Nine-9", textContentNine);
        localStorage.setItem("Ten-10", textContentTen);
        localStorage.setItem("Eleven-11", textContentEleven);
        localStorage.setItem("Twelve-12", textContentTwelve);
        localStorage.setItem("One-1", textContentOne);
        localStorage.setItem("Two-2", textContentTwo);
        localStorage.setItem("Three-3", textContentThree);
        localStorage.setItem("Four-4", textContentFour);
        localStorage.setItem("Five-5", textContentFive);
    };
    storeTextContent();
};

$(".saveBtn").on("click", saveTextContent);

var retrieveTextContent = function () {

    $("#textContentNine").val(localStorage.getItem("Nine-9"));
    $("#textContentTen").val(localStorage.getItem("Ten-10"));
    $("#textContentEleven").val(localStorage.getItem("Eleven-11"));
    $("#textContentTwelve").val(localStorage.getItem("Twelve-12"));
    $("#textContentOne").val(localStorage.getItem("One-1"));
    $("#textContentTwo").val(localStorage.getItem("Two-2"));
    $("#textContentThree").val(localStorage.getItem("Three-3"));
    $("#textContentFour").val(localStorage.getItem("Four-4"));
    $("#textContentFive").val(localStorage.getItem("Five-5"));
};

retrieveTextContent();

var textContentHours = function () {
    $(".description").removeClass("past present future");

    if (moment().isAfter(moment().hour(17))) {
        $("#textContentNine").addClass("past");
        $("#textContentTen").addClass("past");
        $("#textContentEleven").addClass("past");
        $("#textContentTwelve").addClass("past");
        $("#textContentOne").addClass("past");
        $("#textContentTwo").addClass("past");
        $("#textContentThree").addClass("past");
        $("#textContentFour").addClass("past");
        $("#textContentFive").addClass("present");
    } else if (moment().isAfter(moment().hour(16))) {
        $("#textContentNine").addClass("past");
        $("#textContentTen").addClass("past");
        $("#textContentEleven").addClass("past");
        $("#textContentTwelve").addClass("past");
        $("#textContentOne").addClass("past");
        $("#textContentTwo").addClass("past");
        $("#textContentThree").addClass("past");
        $("#textContentFour").addClass("present");
        $("#textContentFive").addClass("future");
    } else if (moment().isAfter(moment().hour(15))) {
        $("#textContentNine").addClass("past");
        $("#textContentTen").addClass("past");
        $("#textContentEleven").addClass("past");
        $("#textContentTwelve").addClass("past");
        $("#textContentOne").addClass("past");
        $("#textContentTwo").addClass("past");
        $("#textContentThree").addClass("present");
        $("#textContentFour").addClass("future");
        $("#textContentFive").addClass("future");        
    } else if (moment().isAfter(moment().hour(14))) {
        $("#textContentNine").addClass("past");
        $("#textContentTen").addClass("past");
        $("#textContentEleven").addClass("past");
        $("#textContentTwelve").addClass("past");
        $("#textContentOne").addClass("past");
        $("#textContentTwo").addClass("present");
        $("#textContentThree").addClass("future");
        $("#textContentFour").addClass("future");
        $("#textContentFive").addClass("future");
    } else if (moment().isAfter(moment().hour(13))) {
        $("#textContentNine").addClass("past");
        $("#textContentTen").addClass("past");
        $("#textContentEleven").addClass("past");
        $("#textContentTwelve").addClass("past");
        $("#textContentOne").addClass("present");
        $("#textContentTwo").addClass("future");
        $("#textContentThree").addClass("future");
        $("#textContentFour").addClass("future");
        $("#textContentFive").addClass("future");
    } else if (moment().isAfter(moment().hour(12))) {
        $("#textContentNine").addClass("past");
        $("#textContentTen").addClass("past");
        $("#textContentEleven").addClass("past");
        $("#textContentTwelve").addClass("present");
        $("#textContentOne").addClass("future");
        $("#textContentTwo").addClass("future");
        $("#textContentThree").addClass("future");
        $("#textContentFour").addClass("future");
        $("#textContentFive").addClass("future");
    }
}
