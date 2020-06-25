$(document).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

    $(".fa-edit").on("click", save);

    function save() {
        alert($(this).attr('value'));
    }
});