$(document).ready(function () {

    function save() {
        //here we are getting the value of the save button when we click ($(this).attr('value'))
        //using above information we are getting id of the related div ("edit-"number which denotes the specific time"") 
        var id = "edit-" + $(this).attr('value');

        //here we are getting the text stored in that div and stored in  the variable called divContent
        var divContent = $("#" + id).text();

        //here we are storing the text written in the  div in localStorage
        localStorage.setItem(id, divContent);
    }
    //creating the click event and initiating the function
    $(".fa-edit").on("click", save);

    //creating the function pageLoad
    function pageLoad() {

        //here we are getting the current Day with time
        $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

        //here we are getting the hour in HH format in integerform  and storing it in the currentHour variable
        var currentHour = parseInt(moment().format("HH"), 10);

        //declaring variable maxPastHour to be 9 as it is my starting workin hour
        var maxPastHour = 9;

        //declaring variable maxFutureHour to 18 as it is my available working hour 
        var maxFutureHour = 18;

        // loop for Past
        for (var i = maxPastHour; i < currentHour; i++) {

            //here i am getting the div id i.e.("edit-"somenumber")where i represent that number (edit-9 or 10 or so on)
            var id = "edit-" + i;

            //here we are adding class (.past) to the past hour div
            $("#" + id).addClass("past");

            //here we are making the div uneditable by setting the attribute
            $("#" + id).attr('contenteditable', 'false');

            //here we are accessing the localStorage with the key i.e. id in this case and storing in the variable divContent
            var divContent = localStorage.getItem(id);

            //here we are displaying the value  that is stored with the key in local storage
            $("#" + id).text(divContent);
        }
        //here loop for the Present, same thing happens here as in the loop for the past
        var id = "edit-" + currentHour;
        $("#" + id).addClass("present");
        $("#" + id).attr('contenteditable', 'false');
        var divContent = localStorage.getItem(id);
        $("#" + id).text(divContent);

        //here loop for the future
        for (var i = currentHour + 1; i <= maxFutureHour; i++) {
            var id = "edit-" + i;
            $("#" + id).addClass("future");
            $("#" + id).attr('contenteditable', 'true');
            var divContent = localStorage.getItem(id);
            $("#" + id).text(divContent);
        }
    }
    //calling the function pageLoad
    pageLoad();

});